

## Remove CRM Content & Fix Remaining Inconsistencies

### Problem
1. The CRM article is a published post in the database flagged as `is_featured`, so it shows as the "Featured Insight" on the Intelligence page
2. The Agent Production Report Section 09 CTA still says "all 8 IDOS™ systems" and lists 8 stages
3. The sidebar still references "711" life insurance companies (unverified stat removed elsewhere)

### Changes

**1. Database: Unpublish / unflag the CRM post**
- Run a migration to set `is_featured = false` and `is_published = false` on the CRM article so it no longer appears anywhere on the site

**2. `src/pages/reports/AgentProduction.tsx` — Fix Section 09 CTA**
- Change "all 8 IDOS™ systems" → "all six IDOS™ stages"
- Update the list from 8 items to the correct 6: Recruiting, Onboarding, Activation, Retention, Leadership, Infrastructure
- Update "Takes 7 minutes" → "Takes 3 minutes" (consistent with other CTAs)

**3. `src/pages/reports/AgentProduction.tsx` — Fix sidebar stats**
- Replace "U.S. life insurance companies → 711" with a verified stat (e.g., "Industry Revenue → $1.1T" sourced from IBISWorld 2026)

### Files Modified
- Database migration (unpublish CRM post)
- `src/pages/reports/AgentProduction.tsx` (Section 09 CTA + sidebar)

