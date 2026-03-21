This folder contains the archived `plaatsbeschrijvingen` source removed from the live app.

Preserved structure:
- `client/src/data/plaatsbeschrijvingen.ts`
- `client/src/pages/Plaatsbeschrijvingen.tsx`
- `client/src/pages/clusters/Plaats*.tsx`
- `client/src/pages/plaatsbeschrijvingen/*`

Notes:
- Files were moved with `git mv` so history stays intact.
- Active routes and navigation references were removed from `client/src/App.tsx` and shared UI files.
- To restore the section later, move the files back to their original paths and re-add the `plaatsbeschrijvingen` routes and links.
