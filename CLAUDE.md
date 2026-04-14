@AGENTS.md

# CLAUDE.md — The Linden, Design System Rules

This project is **The Linden** — a boutique 64-residence luxury apartment
complex in West Hollywood. The visual reference is boutique hotels and
editorial real-estate (Lana in Culver City, The Proper, Palihouse,
Soho House) — **not** apartments.com. A visitor should feel like the
apartments cost $5,000+/month the moment they land: sun-drenched, warm,
confident, unhurried.

The design language is **warm modernist**: creamy off-white plaster,
terracotta clay, sage foliage, weathered oak, shadows from an olive tree
in the courtyard. Every page should feel like a good morning in
California.

All code, colors, spacing, typography, and animation must follow the
rules below exactly. Read this file in full before writing or editing
any component.

---

## 1. Color System

All colors live in `site.config.ts` under `config.colors`. The root
layout emits them as a static `:root { --color-*: ... }` block through a
`<style>` tag in `<head>` (not via a `style` prop on `<body>` — React 19
serializes custom-property style objects inconsistently between server
and client, which causes a hydration mismatch and can cancel className
application). **Never** hardcode a hex value in a component — always
use `var(--color-*)`.

| Token                       | Hex       | Purpose                                                  |
| --------------------------- | --------- | -------------------------------------------------------- |
| `--color-bg`                | `#f7f3ee` | Creamy warm off-white — default page background          |
| `--color-fg`                | `#2c2926` | Warm dark brown — body text on light                     |
| `--color-dark`              | `#2c2926` | Warm dark brown — dark sections (hero, testimonials, footer) |
| `--color-charcoal`          | `#3d3a38` | Warm charcoal — secondary dark surfaces                  |
| `--color-terracotta`        | `#c67d5b` | Clay accent — CTAs, labels, decorative rules             |
| `--color-terracotta-deep`   | `#a8613f` | Terracotta hover/press                                   |
| `--color-sage`              | `#8a9a7b` | Secondary accent — glows, map, sparingly                 |
| `--color-muted`             | `#7a716a` | Warm secondary text                                      |
| `--color-line`              | `#e8e0d4` | Warm hairline dividers and tinted section backgrounds    |

**Terracotta is the primary accent; sage is secondary and used sparingly**
for atmospheric effects (glows, the map field). No blues, reds, or
primary greens anywhere. Gradients are limited to warm earthy placeholder
panels that stand in for real photography.

---

## 2. Typography

Two fonts, self-hosted via `@fontsource` in `app/layout.tsx` and exposed
as CSS variables `--font-serif` and `--font-sans`:

- **DM Serif Display** (`--font-serif`, class `font-display`) — all
  headings, logo text, decorative display, pull quotes. Regular + italic.
- **DM Sans Variable** (`--font-sans`, class `font-body`) — all body
  copy, labels, nav links, buttons, form inputs. Weights 300–600.

### Heading scale

| Use            | Class                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Hero H1        | `font-display text-6xl md:text-8xl font-normal leading-[1.02] tracking-tight` |
| Page H1        | `font-display text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight` |
| Section H2     | `font-display text-5xl md:text-6xl font-normal leading-[1.05]`        |
| Card / sub H3  | `font-display text-2xl md:text-3xl font-normal leading-tight`         |
| Body           | `font-body text-lg leading-loose text-[var(--color-fg)]/70`           |
| Small / muted  | `font-body text-sm text-[var(--color-muted)]`                         |

Headings are **never bold** (DM Serif Display is already a display face).
Headings are **never uppercase**. Pull-quotes may be italic.

### The terracotta label pattern

Every section and every page hero starts with an uppercase terracotta
"eyebrow" label. It is the only place uppercase text appears:

```tsx
<span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
  The Residence
</span>
```

Followed by a terracotta decorative rule:

```tsx
<div className="mt-8 h-px w-16 bg-[var(--color-terracotta)]" />
```

---

## 3. Spacing & Layout

- **Section vertical padding:** `py-20 md:py-28`. Whitespace is the
  defining feature of luxury — never tighten it to cram in content.
- **Container:** `mx-auto max-w-7xl px-6 md:px-10`. Use everywhere.
- **Grid gaps:** `gap-6`, `gap-8`, `gap-10`, or `gap-16`. Never `gap-4`
  inside section grids.
- **Section background alternation:** `--color-bg` → `--color-line`/40
  tinted panels → `--color-bg` → `--color-dark`. Never two identical
  backgrounds in a row.
- **Rounded corners everywhere.** Every card, image panel, form, map,
  quote block uses `rounded-2xl`. Buttons use `rounded-full`. Only
  hairline rules and dividers are sharp.

---

## 4. Components & Patterns

### Buttons

Two variants:

```tsx
// Primary (terracotta on cream or dark)
className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-10 py-4 font-body text-sm text-white shadow-lg shadow-[var(--color-terracotta)]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-terracotta-deep)]"

// Secondary (outlined, on dark backgrounds)
className="inline-flex items-center justify-center rounded-full border border-white/40 px-10 py-4 font-body text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-[var(--color-fg)]"
```

Buttons are **sentence-cased, not uppercase** ("Schedule a Tour", not
"SCHEDULE A TOUR"). No icons inside buttons.

### Cards

Residence, amenity, gallery, and info cards use:

- `rounded-2xl` always
- White (`bg-[var(--color-bg)]`) or tinted (`bg-[var(--color-line)]/40`) surfaces
- `shadow-lg` or `shadow-xl`, never flat
- Hover lift: `transition-transform duration-500 hover:scale-[1.02]`
- Interior padding: `p-8 md:p-10` for small cards, `p-10 md:p-16` for
  feature spreads

### The terracotta rule

A thin horizontal terracotta line used under the eyebrow label and under
page-hero H1s:

```tsx
<div className="h-px w-16 bg-[var(--color-terracotta)]" />
```

### Image placeholders

Real photography isn't wired in yet. Every image slot is a warm
gradient panel with a small uppercase caption:

```tsx
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]">
  <div className="grain" aria-hidden />
  <div className="relative flex h-full w-full items-center justify-center">
    <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-dark)]/40">
      Photo
    </span>
  </div>
</div>
```

Placeholder tones: **warm** (terracotta/oak), **sage** (garden/map),
**clay** (deeper terracotta), **shadow** (dark olive/charcoal for
moody editorial tiles).

---

## 5. Animation

- **Every section and every card fades in on scroll** using an
  Intersection Observer. Use the `<FadeIn>` client wrapper in
  `components/ui/FadeIn.tsx`. Supports `delay` in ms and an optional
  `as` tag.
- Fade-in = 900ms ease-out, `translateY(28px) → 0`, opacity 0 → 1.
  One-shot; never re-animates.
- All other transitions: `duration-300` to `duration-500` ease.
  Nothing bouncy. Nothing that spins or pulses.
- Navbar transitions background/shadow on scroll with
  `transition-all duration-500`.
- Respect `prefers-reduced-motion` — disable fade-in and smooth scroll.
- A subtle **grain overlay** (via the `.grain` class) sits on dark
  sections and tinted gradient placeholders — 3.5% opacity fractal
  noise, applied as a `::before` pseudo-element.

---

## 6. Voice & Copy Rules

- Editorial, restrained, confident. Never use exclamation marks.
- Never write "our amazing apartments" or breathless marketing
  language. Instead: "a collection of residences," "a building you
  come home to," "drawn around the California sun."
- Avoid the words *amazing*, *awesome*, *perfect*, *best*, *great*,
  *luxurious*, *state-of-the-art*.
- Copy for The Linden talks about: **light, courtyards, olive trees,
  morning coffee, slow afternoons, warmth, materials (plaster,
  travertine, oak, brass), proximity, discretion.**
- No emoji. No icons in buttons. No marketing bullets with checkmarks.

---

## 7. Accessibility & Semantics

- Every `<section>` has a semantic heading inside.
- Form inputs always have associated `<label>` elements. The contact
  form includes a hidden honeypot field (`company`) to deter bots.
- Button text is always descriptive ("Schedule a Tour", not "Click
  here").
- Color contrast must meet WCAG AA — terracotta is used for small
  uppercase labels, decorative rules, and as a button background with
  white text, never as body copy on cream.
- The mobile nav is a drawer triggered by a hamburger that appears
  **below `lg` (1024px)**. The desktop nav shows inline links and the
  "Schedule a Tour" CTA at `lg` and above.

---

## 8. File Organization

```
app/
  layout.tsx
  page.tsx
  globals.css
  contact/page.tsx
  floor-plans/page.tsx
  amenities/page.tsx
  gallery/page.tsx
  api/contact/route.ts
components/
  layout/Navbar.tsx
  layout/Footer.tsx
  layout/FloatingCTA.tsx
  sections/Hero.tsx
  sections/About.tsx
  sections/FloorPlans.tsx
  sections/Amenities.tsx
  sections/Gallery.tsx
  sections/Testimonials.tsx
  sections/Neighborhood.tsx
  sections/CTA.tsx
  sections/ContactForm.tsx
  ui/FadeIn.tsx
lib/
  seo.ts
site.config.ts
```

The homepage reads `config.homeSections` and dynamically renders section
components in that order. Never hardcode section order in `app/page.tsx`.

---

## 9. Content Source of Truth

**All text content lives in `site.config.ts`.** Components never
hardcode copy strings. This includes:

- Business name, tagline, phone, email, address, leasing hours
- Floor plans (slug, name, starting price, square footage, beds, baths,
  description)
- Amenities (title, description, tone)
- Testimonials (quote, name, detail)
- Neighborhood groups (label, items)
- SEO defaults

A client should be able to change every word on the site by editing
one file.

---

## 10. Metadata, SEO, Mobile

- Every page exports `generateMetadata` that calls
  `buildMetadata(title, description)` from `lib/seo.ts`.
- `app/layout.tsx` sets `metadata.title.template = config.seo.titleTemplate`
  and `metadata.title.default = config.seo.defaultTitle`.
- The root layout injects an `ApartmentComplex` JSON-LD blob via
  `apartmentComplexJsonLd()` from `lib/seo.ts`. The blob reads
  amenities and offers from `site.config.ts` — nothing hardcoded.
- A sticky **"Schedule a Tour" floating CTA** appears on mobile below
  `lg`, fades in after the user scrolls past the hero, and is hidden
  on the `/contact` route (where it would be redundant). It uses
  `usePathname()` from `next/navigation` so it reacts to client-side
  navigation.
- The layout is fully responsive. The homepage hero stacks on mobile,
  floor-plan spreads stack on mobile, and the masonry gallery reflows
  to a two-column grid.
