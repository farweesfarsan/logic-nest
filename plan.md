# Implementation plan — Electric Blue Developer Portfolio

## Scope and delivery

Create a complete, responsive, single-page Next.js App Router portfolio based on the supplied design brief. This is a new starter project (the user explicitly approved it after confirming no existing source was available), not an image-only mockup. Use sample project previews and a clearly identified fictional demo portrait as replaceable assets; keep identity, claims, links and repeated content in central data files. Do not imply that sample clients, statistics, experience or testimonials are real. Deliver all source and local assets in a downloadable ZIP, with setup and personalization instructions. Do not publish the website unless separately requested.

## Implementation approach

- Use Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React and Framer Motion for restrained UI transitions. Keep application code in small, reusable components; prefer server components except the mobile menu, accordion and motion wrappers.
- Implement a semantic single-page hierarchy: sticky navigation; two-column hero; sample brand strip; six-project grid; three services; four statistics; three-step process; two-column profile/about; compact testimonials; FAQ accordion; contact banner; large centered footer logo.
- Use meaningful section IDs and real anchor links. Keep empty personal/social/project/resume destinations configurable and avoid fake links. Use mailto only through the centralized sample profile setting.
- Centralize the profile and all repeating navigation, project, service, statistic, process, testimonial and FAQ content in typed `src/data/` modules. Mark demo content in visible labels and source comments.
- Keep generated media local under `public/images/`: one fictional demo portrait and six different dark website-interface previews. Optimize the image bytes for web delivery and use `next/image` with explicit dimensions/aspect ratios, useful alt text and below-fold lazy loading.
- Add metadata/Open Graph details, a project README, accessible focus styles and reduced-motion behavior. Use no backend, database or external credentials.
- After plan approval, create the project ToDo from the full acceptance clauses, configure TypeScript diagnostics, add the Next.js toolchain/dependencies, implement the components/styles/data, and start the development server. Inspect desktop, tablet and mobile (including 320px), verify menu/anchors/accordion/images/overflow, run `npm run build`, correct defects and package the complete source ZIP.

## Project structure

```text
src/
  app/                 App Router layout, page, metadata, and global styles
  components/
    layout/             Header, mobile navigation, footer, container, social links
    sections/           Hero, brands, projects, services, stats, process, about,
                        testimonials, FAQ, and contact sections
    ui/                 Buttons, section headings, cards, accordion and reveal wrapper
  data/                 Profile, navigation, projects, services, statistics, process,
                        testimonials, and FAQ copy
  lib/                  Small shared utilities/types
public/
  images/               Replaceable portrait and six purpose-made preview images
README.md                Setup and personalization guide
```

The app is a stateless front end with no backend/database; local development and production build are provided by Next.js. The ZIP will omit generated build output, dependency folders and other machine-specific caches, but include the package manifest/lockfile and all source assets needed to install and run it.

## Design direction

- **Design movement:** Premium dark developer portfolio / restrained neo-digital editorial.
- **Core principles:** Consistent alignment; compact, readable hierarchy; disciplined use of electric blue; honest, editable demo content.
- **Color philosophy:** A near-black foundation and layered deep-navy panels make the portfolio feel technical and calm. One electric blue (`#1677FF`) supplies focus for actions, numbers and highlights; cool grays preserve readable secondary information. No unrelated colors are introduced.
- **Layout paradigm:** A wide, centered 1180px frame with asymmetric split hero, content-dense card groups and a deliberately oversized centered footer wordmark. Major sections breathe vertically while card rows remain compact. Responsive layouts reorganize rather than simply shrink.
- **Signature elements:** Blue radial atmosphere behind the portrait; floating dark statistic cards; oversized blue process numerals and a restrained gradient contact banner.
- **Interaction philosophy:** Quiet, purposeful feedback—short hover shifts, visible focus, accessible mobile navigation and a single-open FAQ; no decorative control is presented as functional unless it has a destination.
- **Animation:** 200–350ms opacity/transform transitions, subtle entry motion, no layout shifts, no excessive continuous movement, and honor `prefers-reduced-motion`.
- **Typography system:** Modern sans-serif (Inter/Manrope when available with a system fallback); compact 11–13px navigation, tight hero/section headings sized responsively with `clamp()`, and readable small supporting copy.
- **Brand essence:** An adaptable portfolio starter for a developer presenting polished web experiences; **precise, assured, approachable**.
- **Brand voice:** Clear, collaborative, understated. Example lines: “Digital experiences, built with intent.” and “Let’s build something exceptional together.”
- **Wordmark & logo:** Compact typographic `LC.DEV` in the header; large, centered editable uppercase profile name in the footer. The final identity remains easy to replace from profile data.
- **Signature brand color:** Electric blue `#1677FF`, reserved for active actions, key metrics and selected highlights.

## Supplied design system

- Page background `#050609`; alternate section `#080B12`.
- Card surfaces `#0B1220` and `#0D1729`; deep navy `#07152B`.
- Blue accents `#1677FF`, `#0866E8`, `#238BFF`; soft/strong glow `rgba(22,119,255,.18/.32)`.
- Primary/secondary/muted text `#F5F7FB`, `#A5ADBC`, `#717B8D`; border `rgba(132,157,194,.16)` and hover border `rgba(35,139,255,.65)`.
- Shared 12–16px card corners, thin borders, subtle gradients, restrained glass and soft shadows.

## Content and interaction constraints

The mobile navigation opens and closes, closes after section navigation and retains contact access. The FAQ supports keyboard input and `aria-expanded`. Buttons target real page sections or configured destinations. Project cards are not fake links. Socials and resume items remain configurable without placeholder links. Sample client logos, statistics, experience and testimonials are identified as demo-only. No contact form is added without a working submission backend. The viewport adapts at 320–479, 480–767, 768–1023, 1024–1439 and 1440+ pixels with no unintended horizontal scrolling at 320px.
