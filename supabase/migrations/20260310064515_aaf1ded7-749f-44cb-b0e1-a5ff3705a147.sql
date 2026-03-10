
-- Fix 1: Restrict tags write access to admins/editors only
DROP POLICY IF EXISTS "Authenticated users can manage tags" ON public.tags;
CREATE POLICY "Admins and editors manage tags"
  ON public.tags FOR ALL
  USING (has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role]))
  WITH CHECK (has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role]));

-- Fix 2: Restrict post_tags write access to admins/editors only
DROP POLICY IF EXISTS "Authenticated users can manage post tags" ON public.post_tags;
CREATE POLICY "Admins and editors manage post_tags"
  ON public.post_tags FOR ALL
  USING (has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role]))
  WITH CHECK (has_any_role(auth.uid(), ARRAY['admin'::app_role, 'editor'::app_role]));
