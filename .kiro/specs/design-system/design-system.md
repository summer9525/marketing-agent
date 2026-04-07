# Design System Spec — IGAWorks Website

## Requirement

IGAWorks 기업 웹사이트의 디자인 시스템을 정의합니다. 타이포그래피, 컬러, 스페이싱, 모션, 컴포넌트 패턴을 포함합니다.

## Design Decisions

### Typography

- **Font Stack**: `'Freesentation', 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
- **Font Weights**: 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)

| Token | PC Size | Mobile (≤768px) | Weight | Line-height | Letter-spacing |
|-------|---------|-----------------|--------|-------------|----------------|
| `.text-heading1` | 56px | 32px | 700 | 1.2 | -0.02em |
| `.text-heading2` | 36px | 24px | 700 | 1.3 | — |
| `.text-body1` | 18px | 15px | 500 | 1.6 | — |
| `.text-body2` | 15px | 15px | 400 | 1.6 | — |
| `.text-caption` | 13px | 13px | 400 | — | 0.02em |

### Color Palette (HSL)

**Semantic Tokens (CSS Custom Properties)**

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `0 0% 100%` | Page background (white) |
| `--foreground` | `220 16% 12%` | Default text |
| `--primary` | `220 16% 12%` | Dark navy — CTA, dark cards |
| `--primary-foreground` | `0 0% 100%` | Text on primary (white) |
| `--secondary` | `216 14% 93%` | Secondary background |
| `--accent` | `216 14% 96%` | Light gray section backgrounds |
| `--muted` | `216 14% 93%` | Muted background |
| `--muted-foreground` | `215 14% 34%` | Muted text |
| `--border` | `220 13% 91%` | Borders |
| `--destructive` | `0 84% 60%` | Error/warning |
| `--color-heading` | `220 16% 12%` | Heading text |
| `--color-body1` | `214 14% 25%` | Body text level 1 |
| `--color-body2` | `213 12% 35%` | Body text level 2 |

**Point Colors (inline usage)**

| Color | HSL | Usage |
|-------|-----|-------|
| Point Blue | `hsl(225, 90%, 58%)` | Key metric highlights, subscribe button |
| Point Green | `hsl(145, 80%, 45%)` | Growth indicator badges, check icons |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)` | Card default |
| `--shadow-card-hover` | `0 0 0 1px rgba(0,0,0,.03), 0 4px 8px rgba(0,0,0,.08), 0 20px 40px rgba(0,0,0,.1)` | Card hover |
| `--shadow-nav` | `0 1px 0 0 rgba(0,0,0,0.05)` | Navigation bar |

### Border Radius

> **Principle**: Maintain a "not-too-rounded" UI. Avoid `rounded-full` and `rounded-3xl`.

| Usage | Value |
|-------|-------|
| PC Cards | `rounded-2xl` (16px) |
| Mobile Cards, Buttons, Tabs, Inputs | `rounded-xl` (12px) |
| Inline Badges | `rounded-lg` (8px) |
| Default (`--radius`) | `0.5rem` (8px) |

### Layout

- **Container**: `max-w-screen-xl` (1280px), `mx-auto`
- **Horizontal Padding**: `px-6` (mobile), `px-6` or `px-8` (desktop)
- **Section Vertical Padding**: `py-16` (mobile), `py-24` (desktop)

### Responsive Breakpoints

| Breakpoint | Size | Changes |
|------------|------|---------|
| `sm` | 640px | Grid 2-column |
| `md` | 768px | GNB switch, typography scale change |
| `lg` | 1024px | Sidebar layout, 3-column grid |

### Motion (Framer Motion)

```tsx
// Viewport entry animation
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}

// Stagger children
transition={{ delay: index * 0.1 }}

// Hover scale
whileHover={{ scale: 1.02 }}
```

- **CSS easing**: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- **Marquee**: `animation: marquee 30s linear infinite`

## Tasks

- [x] Define CSS custom properties in `src/index.css`
- [x] Configure Tailwind tokens in `tailwind.config.ts`
- [x] Create typography utility classes in `@layer components`
- [x] Set up responsive breakpoint media queries
- [x] Implement shadow utility classes
