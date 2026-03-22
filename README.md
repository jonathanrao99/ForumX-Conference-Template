# Nexus Summit

A polished **conference / summit** site built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. It’s designed as a template you can fork: swap the name, dates, venue, and imagery, and you’re ready to promote your event.

---

## What you get

- **Hero** with parallax image, gradient into brand blue, and clear CTAs  
- **About** with countdown, venue, and scroll-based image motion  
- **Speakers**, **Why attend**, **sessions strip**, **featured schedule**  
- **Tickets** (three tiers), **partners** marquees, **FAQ**, **CTA**, **image marquee**  
- **Nav** with dropdowns + mobile menu; **footer** with links and contact  

The demo below uses **Nexus Summit 2027** and placeholder copy—treat it as a starting point, not final branding.

---

## Preview

### Hero & navigation

![Hero — Nexus Summit 2027](docs/readme-assets/01-hero-nexus-summit.png)

### About — “Where innovation meets action”

![About section with innovation headline](docs/readme-assets/02-about-innovation.png)

### Parallax imagery & countdown

![Parallax images with date, countdown, and venue](docs/readme-assets/03-parallax-countdown.png)

### Speakers

![Meet our speakers](docs/readme-assets/04-meet-speakers.png)

### Why attend

![Why attend Nexus Summit 2027](docs/readme-assets/05-why-attend.png)

### Featured sessions

![Featured sessions schedule](docs/readme-assets/06-featured-sessions.png)

### Tickets

![Ticket pricing tiers](docs/readme-assets/07-tickets-pricing.png)

### Partners

![Meet our partners](docs/readme-assets/08-partners.png)

### FAQ

![Frequently asked questions](docs/readme-assets/09-faq.png)

### CTA & gallery strip

![Ready to join — image marquee](docs/readme-assets/10-cta-marquee.png)

### Conference moments

![Conference / sessions visual](docs/readme-assets/11-conference-strip.png)

### Footer

![Footer with links and contact](docs/readme-assets/12-footer.png)

---

## Screen walkthrough

A full-page screen recording lives at **`docs/readme-assets/nexus-summit-walkthrough.mov`**.  
GitHub blocks files **over 100MB** in normal repos, so that video is **gitignored** by default. Keep it on your machine, use **[Git LFS](https://git-lfs.github.com/)**, or upload to YouTube / Drive and link it here instead.

---

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production server
```

---

## Customize for your event

| What to change | Where to look |
|----------------|---------------|
| Site title & SEO | `src/app/layout.tsx` |
| Hero headline, dates, city | `src/components/nexus/HeroNextConfo.tsx` |
| About copy & countdown target | `src/components/nexus/AboutSection.tsx` |
| Speakers / sessions / tickets / FAQ | Matching files under `src/components/nexus/` |
| Partner logos | `public/partners/` + `MeetOurPartners.tsx` |
| Remote images | Allowed hosts in `next.config.ts` (`images.unsplash.com`, …) |

Search the repo for `Nexus`, `nexusconf.example.com`, and `2027` to catch straggler copy.

---

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)  
- [Tailwind CSS](https://tailwindcss.com/) v4  
- [Framer Motion](https://www.framer.com/motion/)  

Deploy anywhere Node runs; **[Vercel](https://vercel.com)** is the path of least resistance for Next.js.

---

## License

Use this template freely for your own conferences and meetups. A credit in the footer is appreciated but not required.

---

*Built as a template—make it yours.*
