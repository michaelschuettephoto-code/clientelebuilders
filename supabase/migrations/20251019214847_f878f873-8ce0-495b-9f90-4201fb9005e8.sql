-- ============================================
-- STEP 1: Create app_role enum and user_roles table (handle existing)
-- ============================================

-- Create role enum type only if it doesn't exist
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'author');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table with audit trail (if not exists)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  granted_by UUID REFERENCES auth.users(id),
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

-- RLS policy: Users can view their own roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- RLS policy: Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur
      WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
    )
  );

-- ============================================
-- STEP 2: Create security definer functions to check roles
-- ============================================

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Helper function to check if user has any of multiple roles
CREATE OR REPLACE FUNCTION public.has_any_role(_user_id UUID, _roles app_role[])
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = ANY(_roles)
  )
$$;

-- ============================================
-- STEP 3: Migrate existing roles from profiles table
-- ============================================

-- Insert existing roles from profiles into user_roles (only if profiles.role still exists)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'role'
  ) THEN
    INSERT INTO public.user_roles (user_id, role, granted_at)
    SELECT 
      id,
      CASE 
        WHEN role = 'admin' THEN 'admin'::app_role
        WHEN role = 'editor' THEN 'editor'::app_role
        ELSE 'author'::app_role
      END,
      created_at
    FROM public.profiles
    WHERE id IS NOT NULL
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END $$;

-- ============================================
-- STEP 4: Update profiles table - remove role column
-- ============================================

-- Drop existing policies that reference profiles.role
DROP POLICY IF EXISTS "Admins can delete posts" ON public.posts;
DROP POLICY IF EXISTS "Authors can update own posts, editors and admins can update all" ON public.posts;
DROP POLICY IF EXISTS "Published posts are viewable by everyone" ON public.posts;

-- Remove role column from profiles (no longer needed)
ALTER TABLE public.profiles DROP COLUMN IF EXISTS role;

-- ============================================
-- STEP 5: Fix profiles email exposure - RESTRICT ACCESS
-- ============================================

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Profiles are viewable by authenticated users" ON public.profiles;

-- Create restrictive policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Users can only view own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Admins can view all profiles (using security definer function)
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- ============================================
-- STEP 6: Fix posts draft exposure - RESTRICT ACCESS
-- ============================================

-- Drop existing policy
DROP POLICY IF EXISTS "Posts visibility by publication and role" ON public.posts;

-- Create new restrictive SELECT policy for posts
CREATE POLICY "Posts visibility by publication and role"
  ON public.posts FOR SELECT
  USING (
    -- Published posts are viewable by everyone
    is_published = true 
    OR
    -- Authors can see their own drafts
    auth.uid() = author_id
    OR
    -- Editors and admins can see all posts
    public.has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role])
  );

-- Recreate delete policy using security definer function
CREATE POLICY "Admins can delete posts"
  ON public.posts FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Recreate update policy using security definer function
CREATE POLICY "Authors can update own posts, editors and admins can update all"
  ON public.posts FOR UPDATE
  USING (
    auth.uid() = author_id
    OR
    public.has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role])
  );

-- ============================================
-- STEP 7: Update the timestamp trigger function with security definer
-- ============================================

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;