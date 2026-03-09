# Archived Scripts

Scripts here are deactivated but preserved for potential future use.

## trim-partner-logos.mjs

Trims whitespace/transparent edges from partner logos in `public/partners/`.

**To re-enable:** Move back to `scripts/` and add to `package.json`:
```json
"trim-logos": "node scripts/trim-partner-logos.mjs"
```

Then run: `npm run trim-logos`
