@AGENTS.md

# CLAUDE.md — Design System Rules

This project is a **premium luxury apartment complex website**. The visual
reference is editorial real-estate developer sites (The Residences at Mandarin
Oriental, 432 Park, One High Line) — **not** apartments.com. A visitor should
feel like the apartments cost $5,000+/month the moment they land.

All code, colors, spacing, typography, and animation must follow the rules
below exactly. Read this file in full before writing or editing any component.

---

## 1. Color System

All colors live in `site.config.ts` under `config.colors` and are injected as
CSS variables on the `<body>` element in `app/layout.tsx`. **Never** hardcode a
hex value in a component — always use `var(--color-*)` or the Tailwind token
that references it.

| Token               | Hex       | Purpose                                    |
| ------------------- | --------- | ------------------------------------------ |
| `--color-bg`        | `#ffffff` | Light section background (white)           |
| `--color-fg`        | `#0a0a0a` | Primary text on light backgrounds          |
| `--color-dark`      | `#1a1a2e` | Dark section background (hero, testimonials, footer) |
| `--color-muted`     | `#737373` | Secondary / supporting text                |
| `--color-line`      | `#e5e5e5` | Hairline dividers on light backgrounds     |
| `--color-gold`      | `#c9a961` | The one and only accent color              |
| `--color-gold-deep` | `#a88944` | Gold hover/press state                     |

**Gold is the only accent.** No blues, reds, greens, or gradients anywhere.
Gold is used sparingly — labels, decorative lines, CTAs, prices, quotation
marks — and nothing else. If you feel the urge to add a second accent, stop.

---

## 2. Typography

Two fonts, loaded from `next/font/google` in `app/layout.tsx` and exposed as
CSS variables `--font-serif` and `--font-sans`:

- **Playfair Display** (`--font-serif`) — all headings, logo text,
  decorative display, quotation marks. Weight 400–700.
- **Inter** (`--font-sans`) — all body copy, labels, nav links, buttons,
  form inputs. Weight 300–600.

### Heading scale

| Use            | Class                                                             |
| -------------- | ----------------------------------------------------------------- |
| Hero H1        | `font-serif text-6xl md:text-7xl font-normal tracking-tight`      |
| Page H1        | `font-serif text-5xl md:text-6xl font-normal tracking-tight`      |
| Section H2     | `font-serif text-4xl md:text-5xl font-normal tracking-tight`      |
| Card / sub H3  | `font-serif text-2xl font-normal`                                 |
| Body           | `font-sans text-base text-neutral-600 leading-relaxed`            |
| Small / muted  | `font-sans text-sm text-neutral-500`                              |

Headings are **never bold** (Playfair at `font-normal` is already plenty of
weight). Headings are **never uppercase**. Body copy is **never uppercase**.

### The gold label pattern

Every section on the site starts with a "gold label" above the heading. It is
the only place uppercase text appears:

```tsx
<span className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)]">
  THE RESIDENCE
</span>
```

---

## 3. Spacing & Layout

- **Section vertical padding: `py-24 md:py-32`.** Not less. Whitespace is
  the defining feature of luxury — never tighten it to fit more content.
- **Container:** `mx-auto max-w-7xl px-6 md:px-10`. Use this everywhere.
- **Grid gaps:** `gap-10` or `gap-16`. Never `gap-4`.
- **Section backgrounds alternate** — white → neutral-50 → white → dark.
  Never two identical backgrounds in a row.
- **Sharp corners only.** No `rounded-lg` on cards or sections. The only
  place `rounded-full` appears is on primary/secondary buttons.

---

## 4. Components & Patterns

### Buttons

Two variants only:

```tsx
// Primary (gold)
className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-3.5 font-sans text-sm tracking-wide text-[var(--color-fg)] transition-colors duration-300 hover:bg-[var(--color-gold-deep)]"

// Secondary (outlined, white on dark)
className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3.5 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[var(--color-fg)]"
```

### Cards

Floor-plan and similar cards use:
- Sharp corners (no `rounded-*`)
- `border-t-2 border-[var(--color-gold)]` top accent
- `p-10` interior padding
- White background
- Hover lift: `transition-transform duration-300 hover:-translate-y-1`

### The gold decorative line

A thin horizontal gold rule used above taglines and between labels and
headings:

```tsx
<div className="h-px w-16 bg-[var(--color-gold)]" />
```

---

## 5. Animation

- **Every section fades in on scroll** using an Intersection Observer.
  Provide a `<FadeIn>` wrapper client component in
  `components/ui/FadeIn.tsx`. Use it in every section.
- Fade-in = 700ms ease-out, translateY(24px) → 0, opacity 0 → 1.
- All other transitions: `duration-300` ease. Nothing bouncy. Nothing
  that spins, pulses, or draws attention to itself.
- The navbar scroll state uses `transition-all duration-300`.

---

## 6. Imagery (Placeholders)

Real photography isn't wired in yet. Every image slot is a placeholder:

```tsx
<div className="aspect-[3/4] w-full bg-neutral-200 flex items-center justify-center">
  <span className="font-sans text-xs tracking-[0.2em] uppercase text-neutral-400">
    Image
  </span>
</div>
```

Gallery uses `aspect-square`, editorial imagery areas use `aspect-[3/4]` or
`aspect-[4/5]`, map placeholders use `aspect-[4/3]`. Placeholder text color is
always `text-neutral-400`.

---

## 7. Voice & Copy Rules

- Editorial, restrained, confident. Never use exclamation marks.
- Never write "our amazing apartments" or similar breathless marketing
  language. Instead: "thoughtfully designed residences," "a refined
  address," "an architectural statement."
- Avoid the words *amazing*, *awesome*, *perfect*, *best*, *great*.
- Copy for a luxury building talks about: **proportion, light, finishes,
  address, service, proximity, privacy, discretion.**
- No emoji. No icons in buttons. No marketing bullets with checkmarks.

---

## 8. Accessibility & Semantics

- Every `<section>` has a semantic heading inside.
- Form inputs always have associated `<label>` elements.
- Button text is always descriptive ("Schedule a Tour", not "Click here").
- Color contrast must meet WCAG AA — gold text is used only on dark or
  on `text-xs` labels, never as body copy on white.

---

## 9. File Organization

```
app/
  layout.tsx
  page.tsx
  contact/page.tsx
  floor-plans/page.tsx
  amenities/page.tsx
  gallery/page.tsx
  api/contact/route.ts
components/
  layout/Navbar.tsx
  layout/Footer.tsx
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

## 10. Metadata & SEO

- Every page exports `generateMetadata` and uses `config.seo.titleTemplate`.
- `app/layout.tsx` sets `metadata.title.template = config.seo.titleTemplate`
  and `metadata.title.default = config.businessName`.
- The root layout injects the `ApartmentComplex` JSON-LD schema via the
  helper in `lib/seo.ts`.
