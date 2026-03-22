# Nexus Summit — Next.js template

A reusable **conference / summit website** built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Branding defaults to **Nexus Summit 2027** with placeholder dates, venue, and copy so you can fork and customize for any event.

## Features

- Hero with parallax image, gradient, and CTAs  
- About + countdown + venue  
- Speakers, “why attend,” sessions image strip, featured sessions  
- Tickets (pricing tiers), partners/sponsors marquees, FAQ, CTA, image marquee  
- Responsive nav with dropdowns and mobile menu  
- Placeholder pages: `/speakers`, `/agenda`, `/blog`, `/login`, `/signup`, `/privacy`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize for your event

1. **Branding** — Search/replace `Nexus`, `NEXUS`, and `nexusconf.example.com` in `src/` and metadata in `src/app/layout.tsx`.  
2. **Dates & venue** — `HeroNextConfo.tsx`, `AboutSection.tsx` (`COUNTDOWN_TARGET`), and FAQ.  
3. **Images** — Most imagery uses **Unsplash** URLs; swap for your assets in `/public` or keep remote URLs (see `next.config.ts` `remotePatterns`).  
4. **Partners** — `MeetOurPartners.tsx` uses **placehold.co** logos; replace with real logos in `/public/partners` or your CMS.  
5. **Content** — Edit copy in each component under `src/components/nexus/`.

## Deploy

Works on [Vercel](https://vercel.com) or any Node host. Configure `NEXT_PUBLIC_*` env vars if you add a backend later.

## License

Use freely for your conference projects. Attribution appreciated but not required.
