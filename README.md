# Yayin AI Lab Website

This is the official website and portfolio for [Yayin AI Lab](https://yayinailab.com). It is built using [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4, and MDX for content management.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The site auto-updates as you edit the files.

## Developer Wiki & Documentation 📚

We maintain detailed developer guidelines and architectural decisions in our project wiki. **Please read these before contributing to the codebase:**

- 🏠 **[Wiki Home](https://github.com/TeamYayin/symmetrical-succotash/wiki)**
- 🎨 **[Design Direction](https://github.com/TeamYayin/symmetrical-succotash/wiki/design-direction)**: Learn about our brutalist aesthetic, color variables, and typography choices.
- 🏗️ **[Architecture Overview](https://github.com/TeamYayin/symmetrical-succotash/wiki/architecture-overview)**: Understand the folder structure, server components vs client components, and data fetching.
- 📝 **[Developer Content Guide](https://github.com/TeamYayin/symmetrical-succotash/wiki/developer-content-guide)**: Learn how to manage MDX files, add new projects, and use the `featured: true` flag for the Shipped Code showcase.

## Project Structure

- `src/app/`: Next.js App Router pages and global layouts.
- `src/components/`: Reusable UI components (buttons, cards) and layout sections (Hero, Footer).
- `src/content/`: Markdown/MDX files for portfolio projects and legal pages.
- `src/lib/`: Helper functions and utilities (e.g., MDX parsing logic).

## Deployment

The site is configured for pure Static Site Generation (SSG) output (`output: 'export'`). You can build and test the static export locally by running:

```bash
npm run build
```
