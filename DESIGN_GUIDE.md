# IGAWorks 웹사이트 디자인 가이드

## 1. 타이포그래피

| 토큰 | PC | Mobile (≤768px) | Weight | Line-height | Letter-spacing |
|------|-----|-----------------|--------|-------------|----------------|
| `.text-heading1` | 56px | 32px | 700 | 1.2 | -0.02em |
| `.text-heading2` | 36px | 24px | 700 | 1.3 | — |
| `.text-body1` | 18px | 15px | 500 | 1.6 | — |
| `.text-body2` | 15px | 15px | 400 | 1.6 | — |
| `.text-caption` | 13px | 13px | 400 | — | 0.02em |

### 폰트: Pretendard (확정)
```
'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
```
- CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`

---

## 2. 컬러 시스템

### 시맨틱 토큰 (HSL)

| 토큰 | HSL 값 | 용도 |
|------|--------|------|
| `--background` | `0 0% 100%` | 페이지 배경 (흰색) |
| `--foreground` | `220 16% 12%` | 기본 텍스트 |
| `--primary` | `220 16% 12%` | 다크 네이비 — CTA, 카드 배경 |
| `--primary-foreground` | `0 0% 100%` | Primary 위 텍스트 (흰색) |
| `--secondary` | `216 14% 93%` | 보조 배경 |
| `--muted` | `216 14% 93%` | 비활성/보조 배경 |
| `--muted-foreground` | `215 14% 34%` | 보조 텍스트 |
| `--accent` | `216 14% 96%` | 연한 회색 배경 (섹션 구분) |
| `--border` | `220 13% 91%` | 테두리 |
| `--destructive` | `0 84% 60%` | 에러/경고 |

### 텍스트 전용 토큰

| 토큰 | HSL 값 | 용도 |
|------|--------|------|
| `--color-heading` | `220 16% 12%` | 제목 텍스트 |
| `--color-body1` | `214 14% 25%` | 본문 1단계 |
| `--color-body2` | `213 12% 35%` | 본문 2단계, 캡션 |

### 포인트 컬러 (인라인 사용)

| 컬러 | HSL | 사용처 |
|-------|-----|--------|
| Point Blue | `hsl(225, 90%, 58%)` | 핵심 수치 강조, 링크 |
| Point Green | `hsl(145, 80%, 45%)` | 성장 지표 배지 |

---

## 3. 그림자 (Elevation)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--shadow-card` | `0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)` | 카드 기본 |
| `--shadow-card-hover` | `0 0 0 1px rgba(0,0,0,.03), 0 4px 8px rgba(0,0,0,.08), 0 20px 40px rgba(0,0,0,.1)` | 카드 호버 |
| `--shadow-nav` | `0 1px 0 0 rgba(0,0,0,0.05)` | 네비게이션 바 |

---

## 4. Border Radius

| 용도 | 값 |
|------|-----|
| PC 카드 | `rounded-2xl` (16px) |
| 모바일 카드, 버튼, 탭, 인풋 | `rounded-xl` (12px) |
| 배지 (인라인) | `rounded-lg` (8px) |
| 기본 | `--radius: 0.5rem` (8px) |

> **원칙**: 너무 둥글지 않은 UI를 유지합니다. `rounded-full`이나 `rounded-3xl`은 사용하지 않습니다.

---

## 5. 레이아웃 & 스페이싱

### 컨테이너
- 최대 너비: `max-w-screen-xl` (1280px)
- 좌우 패딩: `px-6` (모바일), `px-8` (PC)
- 중앙 정렬: `mx-auto`

### 섹션 수직 패딩
| 디바이스 | 패딩 |
|----------|-------|
| PC | `py-24` (96px) |
| Mobile | `py-16` (64px) |

### 그리드
- 솔루션 카드: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3`
- 통계: `grid-cols-2` → `md:grid-cols-4`
- 갭: `gap-4` ~ `gap-6`

---

## 6. 반응형 브레이크포인트

| 브레이크포인트 | 크기 | 주요 변화 |
|---------------|------|-----------|
| `sm` | 640px | 그리드 2열 전환 |
| `md` | 768px | GNB 전환, 타이포 스케일 변경 |
| `lg` | 1024px | 사이드바 레이아웃, 3열 그리드 |

---

## 7. 모션 & 애니메이션

### Framer Motion 기본 패턴

```tsx
// 뷰포트 진입 애니메이션
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: "easeOut" }}

// stagger children
transition={{ delay: index * 0.1 }}

// 호버 스케일
whileHover={{ scale: 1.02 }}
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

### 이징
- CSS: `--easing-standard: cubic-bezier(0.25, 0.1, 0.25, 1)`
- Framer Motion: `"easeOut"`

### 마키 애니메이션
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
```

---

## 8. 컴포넌트 패턴

### 카드
- 배경: `bg-card` 또는 `bg-primary` (다크 카드)
- 그림자: `shadow-card` → 호버 시 `shadow-card-hover`
- 라운딩: `rounded-xl md:rounded-2xl`
- 패딩: `p-6` ~ `p-10`

### 버튼
- Primary: `bg-primary text-primary-foreground rounded-xl px-8 py-4`
- 호버: `opacity-90` 또는 `scale(1.02)`

### 네비게이션
- 높이: `h-16`
- 배경: `bg-background/80 backdrop-blur-lg`
- 하단 그림자: `shadow-nav`
- 모바일: 햄버거 메뉴 → 슬라이드 다운

### 인풋
- `rounded-xl bg-muted border-0 px-6 py-4`
- 포커스: `ring-2 ring-primary`

---

## 9. 아이콘

- 라이브러리: `lucide-react`
- 기본 크기: `w-5 h-5` (인라인), `w-6 h-6` (버튼 내)
- 색상: 부모 요소의 `currentColor` 상속

---

## 10. 접근성

- 모든 인터랙티브 요소에 `aria-label` 또는 시맨틱 태그 사용
- 이미지에 `alt` 텍스트 필수
- 포커스 링: `ring-ring` 토큰 사용
- 충분한 색상 대비 유지 (WCAG AA 기준)
