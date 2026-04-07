# Assets Spec — IGAWorks Website

## Requirement

프로젝트에서 사용하는 이미지 및 정적 에셋 목록과 용도를 정의합니다.

## Asset Inventory

### Images (`src/assets/`)

| File | Usage | Format |
|------|-------|--------|
| `hero-bg.jpg` | HeroSection background image | JPEG |
| `logo-igaworks.png` | Navbar logo (h-5 mobile, h-6 desktop) | PNG |
| `reference.png` | Design reference screenshot | PNG |
| `card-admon.jpg` | Solution card thumbnail | JPEG |
| `card-adpopcorn-reward.jpg` | AdPopcorn Reward card | JPEG |
| `card-adpopcorn-ssp.jpg` | AdPopcorn SSP card | JPEG |
| `card-dfinery.jpg` | Dfinery card | JPEG |
| `card-faltalo.jpg` | Faltalo card | JPEG |
| `card-fixtype.jpg` | FixType card | JPEG |
| `card-mobi-index.jpg` | Mobile Index card | JPEG |
| `card-tradeworks.jpg` | TradingWorks card | JPEG |
| `card-tvindex.jpg` | TV Index card | JPEG |

### External Fonts (CDN)

| Font | Source | Weights |
|------|--------|---------|
| Pretendard Variable | `cdn.jsdelivr.net/gh/orioncactus/pretendard` | Variable |
| Freesentation | `fastly.jsdelivr.net/gh/projectnoonnu/2404` | 400, 500, 700, 900 |

### Static Files (`public/`)

| File | Purpose |
|------|---------|
| `favicon.ico` | Browser tab icon |
| `placeholder.svg` | Generic placeholder |
| `robots.txt` | Search engine crawl rules |

## Tasks

- [x] Organize all image assets in `src/assets/`
- [x] Configure font-face declarations in `src/index.css`
- [x] Set up public static files
