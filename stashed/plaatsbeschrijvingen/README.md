This folder contains the archived `plaatsbeschrijvingen` source removed from the live app.

Preserved structure:
- `client/src/data/plaatsbeschrijvingen.ts`
- `client/src/pages/Plaatsbeschrijvingen.tsx`
- `client/src/pages/clusters/Plaats*.tsx`
- `client/src/pages/plaatsbeschrijvingen/*`

Notes:
- Files were moved with `git mv` so history stays intact.
- Active routes and navigation references were removed from `client/src/App.tsx` and shared UI files.
- The live site now focuses on domotica and IT services only.
- To restore the section later, move the files back to their original paths and re-add the `plaatsbeschrijvingen` routes and links in `client/src/App.tsx`, `client/src/components/Navbar.tsx`, `client/src/components/Footer.tsx`, and any homepage/service links that should expose it again.
