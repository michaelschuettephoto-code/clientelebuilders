

## Unpublish Remaining Placeholder Articles

### What's happening
There are two blog articles still published in the database that were AI-generated placeholder content:
1. **The Automation Playbook for Insurance Agencies** — the one in your screenshot
2. **The Million-Dollar Mindset: Mental Models for Agency Owners**

These show up on the Intelligence page and are accessible as article pages. They are not real content you wrote.

### Fix
Run a database migration to set `is_published = false` on both articles so they no longer appear anywhere on the site. No code file changes needed — the report page (`/reports/agent-production`) is already built with your HTML content.

### Files Modified
- Database migration only (unpublish both placeholder posts)

