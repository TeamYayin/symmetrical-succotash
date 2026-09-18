# Yayin AI Lab - Redesign Strategy

## Executive Summary
This document outlines the strategic direction for the complete redesign and consolidation of the Yayin AI Lab web presence. Based on the audits of both the main website (currently **Hugo**, not Gatsby) and the portfolio (currently **Next.js**), this strategy aims to unify the ecosystem under a single, highly performant, and cost-effective static architecture suitable for free hosting tiers (Vercel, GitHub Pages) while maximizing developer experience and future scalability.

---

## Strategic Technology Evaluation

### 15. Proposed Technology Stack
**Recommendation: Next.js (Static Export) + Tailwind CSS + Contentlayer (or MDX)**

* **Why not keep Hugo?** While fast, maintaining a fragmented ecosystem (Go/Hugo for main site, React/Next.js for portfolio) doubles maintenance overhead. Moving away from Bookshop allows us to adopt a wider ecosystem of modern React UI libraries.
* **Why Next.js over Astro?** While Astro is exceptional for static sites, the existing `new-yayin-web-portfolio` is already built with Next.js (App Router) and features high-quality, reusable components (Tailwind, Framer Motion, MDX). Standardizing on Next.js provides the path of least resistance to unify the two sites.
* **Hosting**: Next.js can be configured for Static Site Generation (SSG) via `output: 'export'`, generating pure HTML/CSS/JS. This is perfectly suited for free hosting on GitHub Pages, Vercel, or Netlify, meeting the strict budget requirements.
* **Content Management**: Stick with Markdown/MDX (via Contentlayer) to avoid headless CMS costs while retaining a developer-friendly authoring experience.

---

## Business & User Strategy

### 1. Website Goals
* **Unification**: Consolidate the main company site and portfolio into a single, cohesive domain.
* **Authority**: Establish Yayin AI Lab as a premier IT consulting, software development, and product design firm.
* **Lead Generation**: Simplify the path to contact and inquiry for prospective clients.
* **Cost Efficiency**: Ensure zero-cost hosting and minimal maintenance overhead.

### 2. Primary Audiences
* **Prospective Clients**: Businesses seeking IT consulting, web/app development, or product design.
* **Talent & Collaborators**: Developers and designers looking to join or partner with Yayin.
* **Open Source Community**: Developers exploring TeamYayin's open-source contributions.

### 3. User Journeys
* **The Client Journey**: Lands on Home -> Reads Services -> Views relevant Portfolio Case Study -> Uses Contact Form.
* **The Talent Journey**: Lands on Home -> Explores About/Team -> Reviews Open Source projects -> Reaches out via email/LinkedIn.

---

## Architecture & Content

### 4. Information Architecture (IA)
A flat, intuitive hierarchy that brings the portfolio front-and-center rather than isolating it on a subdomain.

### 5. Proposed Navigation
* **Global Header**: Home | Services | Portfolio | About | Contact
* **Global Footer**: Company Links, Socials (LinkedIn, GitHub), Legal, Contact Email.

### 6. Page Inventory
* `/` (Home - High-impact hero, service overview, featured projects)
* `/services` (Detailed breakdown of IT, Web, App, and Consulting services)
* `/portfolio` (Grid of all projects, ported from the Next.js portfolio)
* `/portfolio/[slug]` (Individual project deep-dives)
* `/about` (Company mission, culture, and team)
* `/contact` (Contact form and direct links)
* `/blog` or `/posts` (Optional: migrated from current Hugo posts)

### 7. Content Hierarchy
1. **Value Proposition** (Hero section)
2. **Social Proof** (Featured Portfolio Projects / Counters)
3. **Capabilities** (Services)
4. **Call to Action** (Contact)

### 8. Portfolio Integration Strategy
* The entire `new-yayin-web-portfolio` repository will be absorbed into the main repository.
* The `content/projects/*.mdx` files will be moved into a central `content/` directory.
* Portfolio UI components (Cards, MDX renderers, Particles) will be ported into the new shared component library.

---

## Experience & Optimization

### 9. Design Direction
* **Visual Language**: Adopt the dark-mode-first, modern aesthetic from the portfolio (`bg-black-saffron`, Inter/CalSans typography) across the entire site. It feels more premium and aligns with an "AI Lab" brand.
* **UI Patterns**: Use glassmorphism, subtle gradients, and Framer Motion micro-animations to create a dynamic, premium feel without heavy performance costs.

### 10. SEO Strategy
* **Static Generation**: SSG ensures all content is pre-rendered as HTML for perfect crawlability.
* **Metadata**: Implement dynamic OpenGraph and Twitter cards (already present in the portfolio) globally.
* **Semantic HTML**: Ensure proper `<header>`, `<main>`, `<article>`, and `<h1>`-`<h6>` hierarchy on all pages.

### 11. Performance Strategy
* **Zero Server Overhead**: Rely strictly on static assets.
* **Image Optimization**: Use Next.js `next/image` (if hosted on Vercel) or standard optimized WebP images (if on GitHub Pages) to minimize payload.
* **Font Loading**: Utilize `@next/font` to eliminate layout shift and network waterfalls.

### 12. Accessibility Strategy
* **Contrast**: Ensure the dark theme meets WCAG AA contrast ratios.
* **Keyboard Nav**: All interactive elements (forms, project cards, nav) must be fully keyboard navigable.
* **Aria Labels**: Enforce strict aria-labels on icons (Lucide React) and buttons.

### 13. Analytics Strategy
* **Privacy-First Tracking**: Given the tight budget and modern web trends, recommend a lightweight, cookie-less analytics solution (like Vercel Analytics or Plausible) or adapt the existing `analytics.tsx` from the portfolio.

---

## Execution & Migration

### 14. Migration Strategy
1. **Scaffold**: Initialize a new Next.js project in the main repository (or repurpose the portfolio repo as the base).
2. **Port UI**: Move the Tailwind configuration and UI components from the portfolio.
3. **Migrate Content**: Convert Hugo Markdown files (`content/_index.md`, `services.md`, etc.) into MDX or structured JSON data.
4. **Build Pages**: Recreate the Hugo layout functionality using Next.js App Router layouts and pages.
5. **Testing**: Validate SEO, mobile responsiveness, and static export (`next build`).
6. **Deployment**: Deploy the static `out/` folder to GitHub Pages or link the repo to Vercel.

### 16. What Should Be Preserved
* The Markdown/MDX content model (keeps data portable).
* The modern design language, animations, and Tailwind setup from the Next.js portfolio.
* The core written copy and company messaging from the current Hugo site.

### 17. What Should Be Redesigned
* The main company pages (Home, About, Services) need to be redesigned to match the darker, more premium aesthetic of the portfolio.
* The contact workflow (needs a statically compatible form handler like Formspree or Netlify Forms).

### 18. What Should Be Removed
* The Hugo framework, Bookshop, and Go dependencies.
* Heavy, outdated third-party jQuery/JS plugins currently sitting in the `static/plugins/` folder of the main site.
* The separate portfolio sub-domain (consolidate traffic to the main domain).

### 19. What Requires Human Approval
* **Final Framework Decision**: Approval to definitively drop Hugo in favor of Next.js SSG.
* **Design Aesthetic**: Approval to adopt the portfolio's dark theme universally across the company site.
* **Hosting Platform**: Decision between GitHub Pages (completely free, requires static export) vs Vercel (free tier available, better Next.js image optimization support).
* **Form Handling**: Selection of a free tier form processor (e.g., Formspree, Web3Forms) for the Contact page.
