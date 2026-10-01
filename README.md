# Priority Hauliers (Pvt) Ltd — Official Website Portal

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178c6?logo=typescript)](https://typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Vercel-Production-000000?logo=vercel)](https://vercel.com/)

A modern, high-performance, cinematic web application engineered for **Priority Hauliers (Private) Limited**, a leading Zimbabwean road haulage and freight logistics operator servicing Zimbabwe and the broader SADC trade corridor (Zambia, Mozambique, Botswana, South Africa, Malawi, DRC).

---

## 🚀 Key Features & Highlights

- **Cinematic & Responsive Design**: Custom brand design tokens, glassmorphism overlays, custom slanted parallelogram motif (`-skew-x-12`), dark navy and bright orange palette.
- **Dynamic Live Track & Trace**: Consignment tracking portal (`/track`) with animated shipment status timeline, border clearance status, and driver telematics.
- **60fps Framer Motion Animations**: Scroll-triggered section reveals, staggered word typography, floating experience chips, smooth modal viewports.
- **Comprehensive SADC Coverage & Fleet Showcase**: Interactive corridor map, flatbed, tautliner, fuel tanker, and lowbed fleet breakdowns.
- **Dynamic Blog & Official Recruitment Advisory**: 6 full-length operational articles with category filtering, search, dynamic social sharing, and official driver recruitment policy notice (`hello@priorityhauliers.com`).
- **Interactive Contact & Dispatch Form**: Real-time Zod schema validation, honeypot spam prevention, rate limiting, and success toast callbacks.
- **SEO & Social Optimization**: Dynamic `JSON-LD` (`Organization` & `LocalBusiness` schemas), automated `sitemap.xml`, `robots.txt`, dynamic OpenGraph images (`next/og`), and per-page meta tags.
- **Accessibility & Performance**: Keyboard accessible, visible focus rings, ARIA landmarks, `prefers-reduced-motion` compliance, and Next.js optimized image loading.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 App Router
- **Language**: TypeScript 5.0 (Strict mode)
- **Styling**: Tailwind CSS v3 with custom design system (`tailwind.config.ts`), Sora font for headings & Inter for body text
- **Animation**: Framer Motion & Embla Carousel
- **Forms & Validation**: React Hook Form, Zod schema validation
- **Icons**: Lucide React + custom brand SVG components

---

## 📁 Repository Folder Structure

```
├── public/
│   ├── images/              # Optimized static image assets (hero, fleet, services, about)
│   ├── logo-full.png        # Full horizontal logo with tagline
│   └── logo-icon.png        # Standalone slanted "P" brand icon / favicon
├── src/
│   ├── app/                 # Next.js App Router routes & pages
│   │   ├── about/           # About Us page (/about)
│   │   ├── api/             # API routes (/api/contact)
│   │   ├── blog/            # Blog portal (/blog) & dynamic article pages (/blog/[slug])
│   │   ├── contact/         # Contact & dispatch page (/contact)
│   │   ├── services/        # Services directory (/services) & dynamic detail pages (/services/[slug])
│   │   ├── styleguide/      # Internal brand design styleguide (/styleguide)
│   │   ├── track/           # Live consignment tracking portal (/track)
│   │   ├── error.tsx        # Branded client error boundary fallback
│   │   ├── loading.tsx      # Global fallback page loader
│   │   ├── not-found.tsx    # Custom branded 404 page
│   │   ├── opengraph-image.tsx # Next.js dynamic OpenGraph image generator
│   │   ├── robots.ts        # Dynamic robots.txt generator
│   │   └── sitemap.ts       # Dynamic sitemap.xml generator
│   ├── components/          # Reusable UI & section components
│   │   ├── layout/          # Global TopBar, Navbar, Footer, ScrollProgressBar, PageLoader
│   │   ├── ui/              # Atom components (Button, Card, Badge, Container, Reveal, Logo)
│   │   └── ...              # Page sections (HeroSection, AboutSection, ServicesSection, etc.)
│   ├── data/                # Data structures for easily updating portal content
│   │   ├── blogs.ts         # Blog articles & recruitment policy data
│   │   ├── company.ts       # Legal info, registration, address & phone metadata
│   │   ├── images.ts        # Image paths, fallback fallbacks & captions
│   │   ├── services.ts      # Service details, features & process steps
│   │   ├── siteConfig.ts    # Meta details, social links & office hours
│   │   ├── team.ts          # Team members & leadership roles
│   │   └── testimonials.ts  # Client reviews & testimonials
│   └── lib/                 # Utility functions & tracking service mocks
│       ├── tracking.ts      # Telematics tracking service function & mock DB
│       └── utils.ts         # Tailwind class merger (cn)
├── tailwind.config.ts       # Core brand color tokens, fonts & animations
└── next.config.ts           # Next.js image domain configuration
```

---

## ⚡ Quick Start & Local Development

### 1. Prerequisites
Ensure you have Node.js 18+ installed on your machine.

### 2. Installation
Clone the repository and install project dependencies:

```bash
npm install
```

### 3. Run Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the operational portal.

### 4. Code Quality & Build Verification
Run the linter and production build checks:

```bash
# Run ESLint (0 errors, 0 warnings enforced)
npm run lint

# Build production bundle
npm run build

# Start production server
npm start
```

---

## 📝 How to Edit Portal Content

All site copy, company details, services, team members, and blog posts are decoupled into clean TypeScript files inside `/src/data/`:

1. **Company Details & Contact Info** (`/src/data/siteConfig.ts` & `/src/data/company.ts`):
   - Update official phone numbers (`+263 77 568 2351`, WhatsApp `+264 81 851 8120`), email addresses (`hello@priorityhauliers.com`), physical address (`17 Mansfield Road, Marlborough, Harare`), and social media handles.
2. **Services & Fleet Specs** (`/src/data/services.ts`):
   - Add, edit, or remove road freight services. Dynamic pages `/services/[slug]` automatically generate for each service entry.
3. **Blog Posts & Recruitment Bulletins** (`/src/data/blogs.ts`):
   - Add new operational updates or driver recruitment notices. Dynamic routes `/blog/[slug]` automatically render article pages with social share triggers.
4. **Testimonials** (`/src/data/testimonials.ts`):
   - Update client feedback, ratings, and client company names.
5. **Team Profiles** (`/src/data/team.ts`):
   - Update executive profiles, job titles, and LinkedIn links.

---

## 🖼️ How to Replace Images

1. Place high-resolution photography into `/public/images/`.
2. Update the corresponding key references in `/src/data/images.ts`:

```typescript
export const images = {
  hero: {
    src: "/images/hero-truck.jpg",
    alt: "Priority Hauliers Freight Rig on Road",
  },
  // Update other images here...
};
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables for full backend integration:

```env
# Contact Form Dispatch Configuration
RESEND_API_KEY=re_your_api_key_here
CONTACT_FORM_RECIPIENT=hello@priorityhauliers.com

# Tracking API Integration (Optional)
LIVE_TELEMATICS_API_URL=https://api.telematics-provider.com/v1
TELEMATICS_API_KEY=your_telematics_key
```

---

## 🌐 Vercel Deployment Instructions

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `Priority Hauliers` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Set environment variables in Vercel settings if using Resend or custom Telematics APIs.
6. Click **Deploy**. Vercel will build and serve your site globally on Edge CDN with automatic HTTPS.

---

## 📋 Checklist for Production Launch (Manual Replacement)

Before pointing your official domain `priorityhauliers.com` to production:

- [ ] **Real Fleet Photography**: Replace placeholder Unsplash imagery with high-resolution photos of official Priority Hauliers superlinks, tautliners, fuel tankers, and Marlborough Harare depot.
- [ ] **Real Team Photos**: Replace placeholder avatar photos in `/src/data/team.ts` with headshots of key leadership and operations managers.
- [ ] **Real Client Testimonials**: Replace mock reviews in `/src/data/testimonials.ts` with authentic quotes from real Zimbabwean & SADC mining, commercial, and agricultural partners.
- [ ] **Email Dispatch Integration**: Supply a valid `RESEND_API_KEY` or Nodemailer SMTP credential in `.env.local` to receive live contact form submissions directly to `hello@priorityhauliers.com`.
- [ ] **Live Telematics API Hook**: Connect `/src/lib/tracking.ts` `fetchShipmentStatus()` to your real GPS telematics provider API (e.g. MiX Telematics, Cartrack, or Geotab) for live truck coordinates.
