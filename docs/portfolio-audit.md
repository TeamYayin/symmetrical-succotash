# Yayin AI Lab - Portfolio Website Audit

## Executive Summary
This document provides a technical audit of the `new-yayin-web-portfolio` repository, serving as a companion project to the main Yayin AI Lab website. The portfolio is built on a modern JavaScript stack (**Next.js, React, Tailwind CSS**), which contrasts completely with the main website's Go-based stack (**Hugo, Bookshop**). Consolidating the two repositories into a single ecosystem will require adopting one underlying technology and porting the assets and content of the other.

## 1. Portfolio Architecture
* **Framework**: Next.js 13.4 utilizing the modern App Router (`app/` directory).
* **Language**: TypeScript (`.tsx` and `.ts`).
* **Styling**: Tailwind CSS with PostCSS.
* **Content Management**: Contentlayer (parses and validates `.mdx` files into type-safe JSON data).
* **Animations**: Framer Motion and custom particle effects.
* **Database/Tracking**: Upstash Redis (likely used for page view tracking or dynamic edge data).

## 2. Content Model
The portfolio relies on **Contentlayer** to structure its data. The configuration (`contentlayer.config.js`) defines two document types:
* **Project**: Located in `content/projects/**/*.mdx`.
    * `title` (string, required)
    * `description` (string, required)
    * `published` (boolean)
    * `date` (date)
    * `url` (string, optional - external link)
    * `repository` (string, optional - GitHub repo link)
* **Page**: General MDX pages.

## 3. Project Taxonomy
Projects are housed in `content/projects/` as individual MDX files (e.g., `opensource.mdx`, `cbit.mdx`, `wall-bee-infra.mdx`). Since they use MDX, the body of these files can contain Markdown as well as embedded React components, allowing for rich, interactive case studies.

## 4. Design Patterns
* **Visual Language**: A dark-mode first design (using custom Tailwind classes like `bg-black-saffron`). It utilizes `Inter` and `CalSans` for typography.
* **Code Formatting**: Code blocks inside MDX are syntax-highlighted using `rehype-pretty-code` with a `github-dark` theme.
* **Interactivity**: The presence of `particles.tsx` and Framer Motion indicates a highly interactive, animated user experience (e.g., background particle effects, smooth page transitions).

## 5. Reusable UI Patterns
The `app/components/` directory contains reusable pieces:
* `card.tsx`: Used for displaying projects in a grid.
* `nav.tsx`: Global navigation.
* `particles.tsx`: Background animation component.
* `mdx.tsx`: Component responsible for rendering MDX content safely in the App Router.
* `analytics.tsx`: Custom analytics wrapper.

## 6. Technical Patterns Worth Preserving
* **Contentlayer + MDX**: The type-safe, developer-friendly way Contentlayer handles markdown is excellent and far superior to traditional string parsing.
* **Tailwind CSS**: Provides a highly scalable utility-first design system.
* **App Router Structure**: Clean separation of routes (`app/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`, `app/contact/page.tsx`).

## 7. Problems / Technical Debt
* **Stack Fragmentation**: The biggest issue is that the portfolio uses Next.js/React while the main site uses Hugo/Go. Sharing UI components across both is currently impossible.
* **Maintenance overhead**: Maintaining two separate pipelines, linters (Rome vs standard Hugo), and package ecosystems.

## 8. Relationship Between Portfolio and Company Website
* **Links**: The portfolio currently links back to the main site via metadata and OpenGraph images (e.g., `https://yayinailab.cc/images/website-icon.png`). The contact page directs to `mailto:ask@yayinailab.cc` and references the company LinkedIn and GitHub (`teamyayin`).
* **Branding**: The portfolio acts as a sub-domain (`portfolio.yayinailab.cc` is implied by the package name and OG url) showcasing the company's capabilities, but lives in isolation.

## 9. Recommendations for the Redesigned Yayinailab Ecosystem
To achieve the goal of having a single, unified website, a definitive architectural decision must be made:

### Option A: Migrate Everything to Next.js (Recommended based on Portfolio quality)
1. **Why**: The portfolio's modern React/Tailwind/Contentlayer stack is robust and highly interactive. 
2. **How**: 
    * Migrate the main website's Bookshop components to React/Tailwind components.
    * Move the main website's Hugo Markdown content into Contentlayer.
    * Incorporate the Portfolio's `app/projects/` routes directly into the new Next.js site.

### Option B: Migrate the Portfolio to Hugo
1. **Why**: If the team prefers the simplicity and build-speed of Go/Hugo and wants to retain the Bookshop setup.
2. **How**:
    * Move the MDX files from `content/projects/` into the Hugo `content/portfolio/` directory (converting MDX specific React components to Hugo shortcodes).
    * Recreate the Portfolio's specific designs (Cards, Particles) as Bookshop components using SCSS/JS.

**Conclusion**: Unifying these sites requires choosing a primary technology stack. The portfolio's codebase is modern and well-structured, making a strong case for moving the entire Yayinailab web presence to Next.js.
