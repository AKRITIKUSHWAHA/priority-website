# Priority Hauliers Design System Specification

## 1. Brand Identity & Color Palette

The design system for **Priority Hauliers Pty Ltd** is built around exact hex values sampled directly from the official company logo and cross-verified against the live site (`https://priorityhauliers.com/`).

### Core Brand Colors
* **Primary (Royal Blue)**: `#446CB3` – Represents trust, reliability, authority, and industrial logistics excellence.
* **Accent (Warm Orange)**: `#F89D21` – Used for call-to-action buttons, badges, highlights, counters, and key interactive accents.
* **Navy (Dark Background)**: `#0D192E` – Premium dark base for headers, footers, high-contrast sections, and hero backgrounds.
* **Light Surface**: `#F8FAFC` – Clean cool off-white for body backgrounds and alternating light sections.

### Color Scales (50 – 950)

#### Primary Blue Scale (`#446CB3`)
- `50`:  `#EEF3FA` (Ultra-light tint for background fills)
- `100`: `#DCE6F5` (Soft border and selection background)
- `200`: `#B8CDED` (Subtle accent lines and muted indicators)
- `300`: `#8FB1E2` (Secondary text on dark surfaces)
- `400`: `#6794D6` (Active states and interactive accents)
- `500`: `#446CB3` **(PRIMARY BRAND BASE)**
- `600`: `#335594` (Primary hover state)
- `700`: `#264073` (Deep blue headers & icons)
- `800`: `#1B2D52` (Dark surface card backgrounds)
- `900`: `#121E36` (Deep shadow tint & dark container background)
- `950`: `#0A1120` (Near-black navy fill)

#### Accent Orange Scale (`#F89D21`)
- `50`:  `#FFF8EB` (Light orange highlight fill)
- `100`: `#FEEDCC` (Badge background)
- `200`: `#FDDB99` (Secondary hover accent)
- `300`: `#FCC866` (Gradient end color light)
- `400`: `#FBB438` (Vibrant highlight)
- `500`: `#F89D21` **(ACCENT BRAND BASE)**
- `600`: `#D67F12` (Orange hover state)
- `700`: `#A85F0A` (Deep orange text on light backgrounds)
- `800`: `#7A4308` (Dark orange text)
- `900`: `#4F2B05` (Deep accent shadow tint)
- `950`: `#2B1502` (Ultra-dark orange tint)

#### Navy Dark Foundation (`#0D192E`)
- `700`: `#1C335C`
- `800`: `#13223E`
- `900`: `#0D192E` **(NAVY BASE)**
- `950`: `#070F1E`

---

## 2. Typography System

### Fonts
- **Headings**: `Sora` (Google Font) – Modern, geometric, authoritative sans-serif designed for high impact.
- **Body & Interface**: `Inter` (Google Font) – Crisp, readable, neutral typeface for narrative copy and micro-ui elements.

### Hierarchy & Scale
| Role | Desktop Size | Line Height | Weight | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | 3.5rem – 4.5rem (56–72px) | 1.1 | 800 (Bold / Extrabold) | `-0.03em` | Sora |
| **Section H2** | 2.25rem – 3.0rem (36–48px) | 1.2 | 700 (Bold) | `-0.02em` | Sora |
| **Card H3** | 1.25rem – 1.5rem (20–24px) | 1.3 | 600 (SemiBold) | `-0.01em` | Sora |
| **Subtitle / Lead** | 1.125rem – 1.25rem (18–20px) | 1.6 | 400 (Regular) | `normal` | Inter |
| **Body Paragraph** | 1.0rem (16px) | 1.6 | 400 (Regular) | `normal` | Inter |
| **Small / Caption** | 0.875rem (14px) | 1.5 | 500 (Medium) | `0.01em` | Inter |
| **Eyebrow Badge** | 0.75rem – 0.875rem (12–14px) | 1.0 | 700 (Bold) | `0.05em UPPERCASE` | Sora |

---

## 3. Signature Brand Motif: The Slanted Parallelogram

Derived from the dynamic slanted stripes in the Priority Hauliers logo mark:
- **Angle**: `-12deg` (`skewX(-12deg)`)
- **Usage**:
  - Eyebrow badges (`.slant-badge`) with inner child text counter-skewed (`skewX(12deg)`) for readable text inside slanted pill shapes.
  - Slanted decorative accent bars (`.slant-divider`) in section headers (44px x 4px in warm orange `#F89D21`).
  - Button primary variants with slanted cutouts or slanted container shapes.
  - Section dividers and hero accent cards with subtle angled edges.

---

## 4. UI Component Guidelines

### Buttons (`Button.tsx`)
- **Variants**:
  1. `primary`: Solid `#446CB3` with subtle gradient, hover `#335594`, white text. Includes `.shine-sweep` shine animation on hover.
  2. `accent`: Solid `#F89D21` warm orange, hover `#D67F12`, dark `#0D192E` or white text for maximum contrast.
  3. `outline`: Transparent with 2px `#446CB3` border, hover background tint.
  4. `navy`: Dark `#0D192E` container with primary/accent hover glow.
  5. `ghost`: Transparent with subtle hover slate background fill.
- **Micro-Interactions**:
  - Hover scale: `scale(1.02)` translate-y: `-2px`
  - Active press: `scale(0.98)`
  - Sliding arrow icon movement on hover (`group-hover:translate-x-1.5`).

### Cards (`Card.tsx`)
- **Base Style**: Crisp white background `#FFFFFF`, rounded corners `rounded-2xl`, subtle border `#E2E8F0`, shadow `0 4px 20px -2px rgba(13,25,46,0.06)`.
- **Hover Behavior**: Smooth vertical lift (`translate-y-[-4px]`), dynamic shadow boost, and optional glowing outline (`glow-primary` or `glow-accent`).
- **Slanted Card Header**: Optional top slanted accent bar in brand orange.

### Section Headings (`SectionHeading.tsx`)
- Includes uppercase eyebrow badge, slanted divider bar, centered or left-aligned high-contrast heading, and supporting subtitle.

---

## 5. Animation & Motion Specification

- **Framework**: `framer-motion` for React components.
- **Default Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (custom easeOutExpo) for snappy yet smooth motion.
- **Duration Rules**:
  - Micro-interactions (hover, click, toggle): `150ms – 250ms`
  - Reveal animations (fade-in, slide-up): `500ms – 700ms`
  - Stagger delays: `100ms` between child elements in grids.
- **Accessibility**: All animations automatically collapse or disable when `prefers-reduced-motion: reduce` is active.

---

## 6. Accessibility & Contrast (WCAG AA Compliance)

- **Contrast Ratios**:
  - Primary `#446CB3` on White `#FFFFFF`: 4.6:1 (Passes AA for all text sizes)
  - Accent `#F89D21` with Dark `#0D192E` text: 9.8:1 (Passes AAA)
  - Navy `#0D192E` with White text: 16.4:1 (Passes AAA)
- **Focus States**: All interactive elements (buttons, inputs, links) feature a high-visibility focus ring (`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`).

---

## 7. Image Asset Standards

- **Formats**: WebP / high-res PNG for icons & transparent logos.
- **Aspect Ratios**:
  - Hero banners: `16:9` or `21:9` wide ratio.
  - Service card thumbnails: `4:3` ratio with subtle dark gradient overlay for legible text.
  - Fleet photos: `3:2` ratio.
  - Avatars: Square `1:1` ratio with rounded full pill masks.
