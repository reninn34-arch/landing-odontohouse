# Odonto House — Landing Page

Landing page for Odonto House, a dental tourism clinic in Guayaquil, Ecuador targeting US and Canadian patients.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript** (strict mode)
- **lucide-react** for icons

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
├── layout.tsx          # Root layout (fonts, metadata, providers)
├── page.tsx            # Home page
├── globals.css         # Tailwind + custom theme
├── privacy/page.tsx    # Privacy policy
├── robots.ts           # robots.txt generator
├── sitemap.ts          # sitemap.xml generator
└── icon.svg            # Favicon

components/
├── sections/           # Landing page sections
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── SmileDesign.tsx
│   ├── Pricing.tsx
│   ├── Services.tsx
│   ├── WhyEcuador.tsx
│   ├── MeetDoctor.tsx
│   ├── Testimonials.tsx
│   └── FAQ.tsx
├── layout/             # Layout & navigation
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── CookieConsent.tsx
├── ui/                 # Reusable UI utilities
│   └── Reveal.tsx
└── seo/                # SEO components
    └── SchemaOrg.tsx

context/
└── LanguageContext.tsx  # i18n provider (EN/ES)

hooks/
└── useInView.ts        # IntersectionObserver hook

lib/
├── constants.ts        # Centralized business constants
└── dictionary.ts       # Server-side dictionary loader

locales/
├── en.ts               # English translations
└── es.ts               # Spanish translations

public/
├── hero.jpg            # Hero background
├── doctora.jpg         # Doctor portrait
├── logo-dark.png       # Logo
├── before2.jpg         # Smile design before
└── after2.jpg          # Smile design after
```

## i18n

The site is bilingual (English/Spanish). The locale is determined by:

1. `NEXT_LOCALE` cookie (set by language switcher)
2. `Accept-Language` header (via middleware)
3. Default: `en`

Switching language uses `router.refresh()` — no full page reload.

## Business Constants

Shared values (WhatsApp number, social URLs, base URL, map embed) are centralized in `lib/constants.ts`.

## Key Features

- **SEO**: JSON-LD structured data (Organization, Doctor, FAQ, Breadcrumb), sitemap, robots.txt, OpenGraph, Twitter cards
- **Performance**: Optimized images (AVIF/WebP), lazy-loaded Google Maps, IntersectionObserver animations, `next/font` for Montserrat
- **GDPR**: Cookie consent with granular preferences (Necessary, Analytics, Marketing)
- **WhatsApp integration**: Contact form, floating button, CTA links
- **Responsive**: Mobile-first with hamburger drawer navigation

## Deployment

Deployed on Vercel. Push to `main` to deploy.
