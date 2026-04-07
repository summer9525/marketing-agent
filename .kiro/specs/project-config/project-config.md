# Project Configuration Spec — IGAWorks Website

## Requirement

프로젝트의 기술 스택, 빌드 설정, 의존성을 정의합니다.

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | ^18.3.1 |
| Language | TypeScript | ^5.8.3 |
| Build Tool | Vite | ^8.0.0 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animation | Framer Motion | ^12.38.0 |
| Icons | Lucide React | ^0.462.0 |
| Routing | React Router DOM | ^6.30.1 |
| UI Primitives | Radix UI | Various |
| Component Library | shadcn/ui | Custom |
| Toast | Sonner | ^1.7.4 |
| Testing | Vitest + Playwright | Latest |

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images (ES module imports)
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AIPipelineSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── SCISection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── NewsletterSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Homepage (single page)
│   │   └── NotFound.tsx     # 404 page
│   ├── index.css            # Global styles + design tokens
│   ├── App.tsx              # Router setup
│   └── main.tsx             # Entry point
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── DESIGN_GUIDE.md          # Design guide document
```

## Key Configuration

### Path Aliases
- `@/` → `src/`

### Tailwind Config Highlights
- Custom `fontFamily.freesentation`
- Semantic color tokens mapped to CSS custom properties
- Custom border radius (`2xl: 16px`, `3xl: 24px`)
- Marquee keyframe animation (`30s linear infinite`)
- `tailwindcss-animate` plugin

### CSS Architecture
- Design tokens defined in `:root` CSS custom properties
- Typography utilities in `@layer components`
- Responsive overrides via `@media (max-width: 768px)`
- Utility classes: `.shadow-card`, `.shadow-card-hover`, `.shadow-nav`, `.scrollbar-hide`

## Tasks

- [x] Configure Vite with React plugin
- [x] Set up Tailwind CSS with custom config
- [x] Configure path aliases
- [x] Install and configure all dependencies
- [x] Set up testing infrastructure (Vitest + Playwright)
