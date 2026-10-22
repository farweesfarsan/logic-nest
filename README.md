# Electric Blue Developer Portfolio

A responsive Next.js App Router portfolio starter in a near-black and electric-blue visual system. All identity, project, client, statistic, testimonial, experience, availability, and social details are sample placeholders and should be replaced with verified information before publishing.

## Requirements

- Node.js 20.9 or newer (Node.js 22 recommended)
- npm 10.9 or compatible

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Production validation commands:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Personalize the portfolio

1. Edit `src/data/profile.ts` to replace `[YOUR NAME]`, `[YOUR LOCATION]`, the email, introduction, availability, title, and social URLs. The email CTA stays visibly disabled until you add a real address; set `showAvailability` to `true` only when that statement is accurate.
2. Replace `public/images/demo-portrait.webp` with your portrait and update the corresponding paths or filenames in the profile configuration. The current image is a fictional generated demo portrait and does not represent the portfolio owner.
3. Replace the six previews in `public/images/projects/` and update `src/data/projects.ts` if titles, categories, summaries, tags, or real project URLs differ.
4. Update the client wordmark placeholders, statistics, sample experience, testimonials, footer links, process, service and FAQ copy in their respective modules under `src/data/`.
5. Optional: set `NEXT_PUBLIC_SITE_URL` to the final public origin to enable absolute Open Graph and social-card image URLs.
6. Remove or replace all sample content before publication. Sample names, logos, statistics, project descriptions, career history, testimonials and availability are not verified facts.

## Project structure

- `src/app/` contains the root layout, homepage, metadata, and global design system.
- `src/components/layout/` contains the responsive header, social links and footer.
- `src/components/sections/` contains the page sections.
- `src/components/ui/` contains reusable buttons, headings, cards, and motion wrappers.
- `src/data/` centralizes personal configuration and repeated content.
- `src/lib/` contains shared types and utilities.
- `public/images/` contains local, replaceable images.

The project does not include a backend, database, or contact form. Contact links use the configurable email address in `src/data/profile.ts`.
