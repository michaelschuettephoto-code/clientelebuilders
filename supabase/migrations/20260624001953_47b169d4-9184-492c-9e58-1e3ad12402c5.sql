
CREATE TABLE public.home_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content jsonb NOT NULL,
  is_published boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

GRANT SELECT ON public.home_content TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.home_content TO authenticated;
GRANT ALL ON public.home_content TO service_role;

ALTER TABLE public.home_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published homepage"
ON public.home_content FOR SELECT
TO anon, authenticated
USING (is_published = true OR public.has_any_role(auth.uid(), ARRAY['admin','editor']::app_role[]));

CREATE POLICY "Admins and editors can insert homepage"
ON public.home_content FOR INSERT
TO authenticated
WITH CHECK (public.has_any_role(auth.uid(), ARRAY['admin','editor']::app_role[]));

CREATE POLICY "Admins and editors can update homepage"
ON public.home_content FOR UPDATE
TO authenticated
USING (public.has_any_role(auth.uid(), ARRAY['admin','editor']::app_role[]))
WITH CHECK (public.has_any_role(auth.uid(), ARRAY['admin','editor']::app_role[]));

CREATE POLICY "Admins and editors can delete homepage"
ON public.home_content FOR DELETE
TO authenticated
USING (public.has_any_role(auth.uid(), ARRAY['admin','editor']::app_role[]));

CREATE TRIGGER trg_home_content_updated_at
BEFORE UPDATE ON public.home_content
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.home_content (content, is_published) VALUES (
'{
  "nav": {
    "wordmark": "Clientele Builders",
    "cta_label": "Take the Assessment",
    "cta_href": "/scorecard"
  },
  "hero": {
    "eyebrow": "Distribution Intelligence",
    "headline": "Revenue leaks hide inside",
    "headline_accent": "distribution systems.",
    "body": "Most life insurance organizations don''t have a lead problem. They have recruiting, onboarding, activation, trust, sales, retention, or data leaks costing them revenue every month.",
    "italic_line": "We show you where to look before it costs you.",
    "cta_label": "Take the Distribution Leak Assessment",
    "cta_href": "/scorecard",
    "meta": "Takes about 3 minutes"
  },
  "diagnose": {
    "eyebrow": "What we diagnose",
    "heading": "Eight systems. One distribution engine.",
    "lead": "The assessment scores each one, then shows you where the biggest leak is.",
    "cards": [
      { "icon": "UserPlus", "title": "Recruiting", "body": "Attracting and moving the right people forward." },
      { "icon": "ClipboardCheck", "title": "Onboarding", "body": "New agents know exactly what to do after joining." },
      { "icon": "Megaphone", "title": "Marketing", "body": "Building trust before the conversation begins." },
      { "icon": "Handshake", "title": "Sales Process", "body": "Turning attention into revenue, reliably." },
      { "icon": "ShieldCheck", "title": "Persistency", "body": "Protecting long-term profit." },
      { "icon": "Scale", "title": "Compensation", "body": "Incentives aligned with the outcomes you want." },
      { "icon": "GraduationCap", "title": "Leadership", "body": "Intentionally developing the next generation." },
      { "icon": "Activity", "title": "Technology & Data", "body": "Seeing what is working and what is not." }
    ]
  },
  "why": {
    "eyebrow": "Why it matters",
    "heading": "Small fixes to a leaking system compound fast",
    "questions": [
      "If your activation rate improves by 10%…",
      "If persistency improves by 5%…",
      "If recruiting conversion improves by 15%…"
    ],
    "closer": "What happens?",
    "badge": "Revenue Leak Calculator — coming soon"
  },
  "data": {
    "eyebrow": "The data",
    "heading": "Half the market runs through people like you",
    "lead": "This isn''t a guess. It''s what the data says about who actually sells life insurance in this country.",
    "fig_kicker": "Where the money moves",
    "fig_title": "One channel sells more than all the others combined",
    "big_stat": "52%",
    "big_stat_label": "Of life insurance distribution runs through an independent agent",
    "supporting": "Your distribution isn''t a side function — for most of the market, it''s the entire sale.",
    "rows": [
      { "label": "Independent agents", "value": 52, "accent": true },
      { "label": "Captive / affiliated agents", "value": 37, "accent": false },
      { "label": "Direct response", "value": 6, "accent": false },
      { "label": "Other channels", "value": 5, "accent": false }
    ],
    "footnote": "Approximate share of U.S. life insurance distribution, 2023.",
    "source": "Statista; LIMRA; Insurance Information Institute, 2019–2023"
  },
  "final_cta": {
    "heading": "See where your system is leaking.",
    "body": "Takes about 3 minutes for a prioritized diagnosis.",
    "cta_label": "Take the Assessment",
    "cta_href": "/scorecard"
  },
  "footer": {
    "brand": "Clientele Builders",
    "tagline": "The intelligence layer for life insurance distribution. We help you see where momentum is breaking — before you invest in the wrong solution.",
    "copyright": "© 2026 Clientele Builders",
    "sub_note": "Not a marketing agency. We start with diagnosis."
  }
}'::jsonb, true);
