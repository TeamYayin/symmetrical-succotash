# Yayin AI Lab - Design System

## Core Principles
* **Engineered Elegance**: High contrast, strict alignment, and academic precision.
* **Functional Scarcity**: No unnecessary elements. If a border doesn't separate distinct content, remove it. 
* **Zero Generic Fluff**: No soft drop shadows, no glassmorphism, no rounded bubbles.

---

## 1. Typography System

**Fonts:**
* **Display/Headings**: `CalSans` (Authoritative, geometric)
* **Body/UI**: `Inter` (Maximal legibility)
* **Data/Code**: `JetBrains Mono` or `Fira Code` (Technical precision)

**Scale (Tailwind standard):**
* `--text-xs`: 0.75rem (12px) - Metadata, tags
* `--text-sm`: 0.875rem (14px) - Small UI, footer
* `--text-base`: 1rem (16px) - Body text
* `--text-lg`: 1.125rem (18px) - Lead paragraphs
* `--text-xl`: 1.25rem (20px) - Section sub-headers
* `--text-2xl`: 1.5rem (24px) - Section headers (Mobile)
* `--text-3xl`: 1.875rem (30px) - Section headers (Desktop)
* `--text-4xl`: 2.25rem (36px) - Hero headers (Mobile)
* `--text-5xl`: 3rem (48px) - Hero headers (Desktop)

**Font Weights:**
* `--font-normal`: 400 (Body)
* `--font-medium`: 500 (UI Elements, Buttons)
* `--font-semibold`: 600 (Headings)

---

## 2. Spacing & Layout System

**Spacing Scale (8px baseline):**
* `--space-1`: 0.25rem (4px)
* `--space-2`: 0.5rem (8px)
* `--space-4`: 1rem (16px)
* `--space-8`: 2rem (32px) - Standard component padding
* `--space-12`: 3rem (48px)
* `--space-16`: 4rem (64px) - Section spacing (Mobile)
* `--space-24`: 6rem (96px) - Section spacing (Desktop)

**Container & Grid:**
* **Container Max-Width**: `1200px` (Maintains tight readability, doesn't stretch infinitely).
* **Grid**: 12-column (Desktop), 8-column (Tablet), 4-column (Mobile).
* **Grid Gap**: `--space-4` (16px) or `--space-8` (32px).

**Breakpoints:**
* `sm`: 640px (Tablet Portrait)
* `md`: 768px (Tablet Landscape)
* `lg`: 1024px (Laptop)
* `xl`: 1280px (Desktop)

---

## 3. Color Tokens

*Based on Color Combo Option 11.*

**Base Colors (Light Theme Default):**
* `--bg-primary`: `#FFFFFF` (Pure white for academic clarity)
* `--bg-secondary`: `#F4F4F5` (Subtle gray for separation)
* `--text-primary`: `#1D1E18` (Eerie Black / Deep Olive - Sophisticated alternative to pure black)
* `--text-secondary`: `#5E625A` (Muted olive-gray for metadata and secondary text)

**Brand & Semantic Colors:**
* `--color-accent`: `#ED6A5A` (Terra Cotta / Coral - A warm, vibrant nod to cultural roots; used for primary actions and highlights)
* `--color-secondary`: `#98C1BC` (Muted Teal - Used for structural elements, secondary buttons, and data visualization)
* `--color-success`: `#10B981`
* `--color-error`: `#EF4444`

---

## 4. UI Primitives

**Border Tokens:**
* `--border-width-thin`: `1px` (Primary delineator for all UI elements)
* `--border-width-thick`: `2px` (Active states, highlighted components)
* `--border-color`: `#E4E4E7` / `#27272A` (Light / Dark)

**Radius Tokens:**
* `--radius-none`: `0px` (Default. Sharp, engineered look)
* `--radius-sm`: `2px` (Used only for small UI elements like checkboxes or inner tags)

**Shadow / Elevation Tokens:**
* **Philosophy**: Avoid soft blurs. Use hard borders or flat, offset shadows.
* `--shadow-none`: No shadow, rely on borders.
* `--shadow-hard`: `4px 4px 0px var(--text-primary)` (Used for high-impact buttons or featured cards to create a "brutalist/academic" pop).

**Motion Tokens:**
* `--transition-fast`: `150ms ease-out` (Used for color/border changes on hover)
* `--transition-layout`: `300ms ease-in-out` (Used for structural shifts, e.g., mobile menu opening)

---

## 5. Interaction States & Accessibility

* **Hover**: Border color deepens or transitions to `--color-accent`. Backgrounds shift to `--bg-secondary`.
* **Focus**: Strict, high-contrast focus rings are mandatory for accessibility. `outline: 2px solid var(--color-accent); outline-offset: 2px;`.
* **Disabled**: Opacity reduced to `50%`, cursor set to `not-allowed`.
* **Accessibility Rules**: All text must pass WCAG AA contrast (4.5:1). Do not rely on color alone to indicate state (use underlines or border thickness).

---

## 6. Component Guidelines

**Buttons:**
* **Primary**: Background `--text-primary`, Text `--bg-primary`. Sharp corners (`--radius-none`). Hover: Invert colors or shift to `--color-accent`.
* **Secondary**: Background transparent, Border `1px solid var(--border-color)`, Text `--text-primary`. Hover: Border `1px solid var(--text-primary)`.

**Links:**
* Inline links must have a visible underline (`text-decoration: underline`).
* Navigation links should have a crisp 2px bottom border that animates in on hover.

**Navigation:**
* Stark, horizontal top bar. Bottom border `1px solid var(--border-color)`.
* Mobile: Full-screen overlay menu (no complex, cramped dropdowns).

**Cards (Services / General):**
* No drop shadows. `1px solid var(--border-color)` with `--space-8` padding.
* On hover: Border turns to `--text-primary` or `--color-accent` instantly (`--transition-fast`).

**Project Previews (Portfolio):**
* Edge-to-edge images within a sharp border container.
* Metadata (Tech stack, year) displayed in `--font-mono` underneath the title.

**Section Headers:**
* `--text-3xl`, `--font-semibold`, `CalSans`.
* Often accompanied by a `--text-sm` mono-spaced "Kicker" or eyebrow text above it (e.g., `// OUR CAPABILITIES`).

**Forms:**
* Inputs have `1px` borders, transparent backgrounds.
* Label is `--text-sm`, strictly aligned above the input.
* Active/Focus state uses `--border-width-thick` and `--color-accent`.

**Footer:**
* Simple, multi-column grid. Top border `1px solid var(--border-color)`.
* Emphasizes the `mailto:` link and GitHub/LinkedIn socials over dense page links.

## 7. Responsive Behavior
* **Stacking**: Grids cleanly collapse from 3 or 4 columns (Desktop) to 2 (Tablet) to 1 (Mobile).
* **Typography**: Headers scale down significantly on mobile to prevent unbroken words from causing horizontal scroll.
* **Padding**: Section padding reduces from `--space-24` on desktop to `--space-16` on mobile to keep content dense and scannable.
