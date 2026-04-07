# Page Structure Spec — IGAWorks Homepage

## Requirement

IGAWorks 기업 홈페이지의 전체 페이지 구조와 각 섹션의 역할, 콘텐츠, 동작을 정의합니다.

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3.x + custom design tokens
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **UI Components**: shadcn/ui (Radix primitives)

## Page Layout

```
Index Page (src/pages/Index.tsx)
├── Navbar          — Fixed top navigation
├── HeroSection     — Full-width hero with background image
├── StatsSection    — Key metrics (4-column grid)
├── AIPipelineSection — AI data pipeline explanation (3 steps)
├── SolutionsSection  — Tabbed product showcase
├── SCISection      — Comparison cards (기존 vs AI)
├── BrandsSection   — Brand marquee ticker
├── CTASection      — Call-to-action (dark bg)
├── NewsletterSection — Email subscription
└── Footer          — Links + company info
```

## Section Specifications

### 1. Navbar (`src/components/Navbar.tsx`)
- **Behavior**: Fixed, transparent → blur on scroll (`backdrop-blur-md bg-background/80`)
- **Desktop**: Logo left, nav links center, CTA button right
- **Mobile**: Logo + CTA + hamburger → slide-down menu with `AnimatePresence`
- **Body scroll lock** when mobile menu is open
- **Nav links**: About, Synaptic, Blog, Contact

### 2. HeroSection (`src/components/HeroSection.tsx`)
- **Height**: `60vh` mobile, `70vh` desktop
- **Background**: Full-bleed image (`hero-bg.jpg`) with `bg-background/30` overlay
- **Content**: Staggered fade-in animation (heading → subtitle → buttons)
- **Headline**: "Built on Data. Driven by AI."
- **Subtitle**: Korean copy about AI digital persona
- **CTAs**: Primary "문의하기" + Secondary "미디어킷 보기"

### 3. StatsSection (`src/components/StatsSection.tsx`)
- **Layout**: Centered intro text + 2×2 (mobile) / 4-column (desktop) grid
- **Stats**: 43M+ Devices, 2.5B+ Daily Points, 1,500+ Personas, 4,000+ Brands
- **Animation**: Staggered viewport entry (`delay: i * 0.1`)

### 4. AIPipelineSection (`src/components/AIPipelineSection.tsx`)
- **Background**: `bg-accent/30`
- **Structure**: Two-line heading + 3 pipeline items with left border accent
- **Items**: 01 Data → 02 AI-Synthetic Audience → 03 AI Solutions
- **Visual**: `3px` left border bar per item, separated by subtle bottom shadow

### 5. SolutionsSection (`src/components/SolutionsSection.tsx`)
- **Layout**: Sidebar (desktop) / horizontal scroll tabs (mobile) + card grid
- **Categories**: Data Infrastructure, AI Action & Creative, Media & Network
- **Cards**: Dark (`bg-primary`) with title + description + optional badge chips
- **Animation**: `AnimatePresence mode="wait"` for tab transitions
- **Data model**:
  ```ts
  interface Platform {
    name: string;
    description: string;
    badges?: { label: string; items: string[] }[];
  }
  interface Category {
    title: string;
    platforms: Platform[];
  }
  ```

### 6. SCISection (`src/components/SCISection.tsx`)
- **Layout**: 2-column comparison cards
- **Left card**: Light (`bg-card shadow-card`) — "기존 데이터" limitations with red ✕ icons
- **Right card**: Dark (`bg-primary`) — "AI Synthetic Audience" advantages with green ✓ icons
- **Icons**: Lucide `X` (destructive) and `Check` (green)

### 7. BrandsSection (`src/components/BrandsSection.tsx`)
- **Heading**: "with 4000+ Global Brands"
- **Content**: Infinite marquee ticker of 16 brand names (duplicated for seamless loop)
- **CSS animation**: `marquee 30s linear infinite`, `translateX(0) → translateX(-50%)`
- **Footer text**: "아이지에이웍스는 시장을 선도하는 기업들과 함께 합니다."

### 8. CTASection (`src/components/CTASection.tsx`)
- **Background**: `bg-primary` (dark navy, full-width)
- **Content**: "Target your future consumer" + Korean subtitle + white CTA button
- **Button**: Inverted colors (`bg-primary-foreground text-primary`)

### 9. NewsletterSection (`src/components/NewsletterSection.tsx`)
- **Layout**: Heading left + email input right (desktop), stacked (mobile)
- **Input**: `rounded-full` with subtle outline, embedded subscribe button
- **Subscribe button**: Point Blue (`hsl(225, 90%, 58%)`)
- **Validation**: Email regex + toast notifications (sonner)

### 10. Footer (`src/components/Footer.tsx`)
- **Background**: `#F4F4F6` (inline style)
- **Link grid**: 5 columns (desktop) / 2 columns (mobile)
- **Categories**: 서비스, 솔루션, 소셜 미디어, 채용, 문의
- **Company info**: Registration number, CEO, address, copyright

## Tasks

- [x] Create page layout with all sections
- [x] Implement responsive navigation with mobile hamburger
- [x] Build hero section with background image and staggered animation
- [x] Create stats grid with viewport entry animation
- [x] Build AI pipeline section with left border accent
- [x] Implement tabbed solutions section with AnimatePresence
- [x] Create SCI comparison cards
- [x] Build brands marquee with infinite scroll
- [x] Implement CTA section with inverted color scheme
- [x] Build newsletter section with email validation
- [x] Create footer with link grid and company info
- [x] Apply mobile responsive styles to all sections
