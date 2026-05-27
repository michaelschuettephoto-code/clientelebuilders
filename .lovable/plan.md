Strip the primary navigation (Intelligence, System Layers, Reports, Frameworks, Scorecard, About) from the site header, leaving only the "Clientele Builders" wordmark linking to home.

## Changes

**`src/components/layout/Header.tsx`**
- Remove the `NAV_LINKS` array, desktop `<nav>`, mobile toggle button, and mobile nav panel.
- Drop now-unused imports: `useState`, `Menu`, `X` from lucide-react.
- Keep the sticky header shell and the wordmark linking to `/`.

No route or page deletions — the underlying pages (`/intelligence`, `/consulting`, `/reports`, `/frameworks`, `/scorecard`, `/about`) stay reachable directly and via footer/internal links.
