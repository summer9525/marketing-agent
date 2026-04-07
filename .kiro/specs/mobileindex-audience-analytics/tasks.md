# 구현 계획: 모바일인덱스 오디언스 분석

## 개요

모바일인덱스 API를 연동한 오디언스 비교/분석 기능을 기존 React + TypeScript + Vite 프로젝트에 구현합니다. 타입 정의 → API 클라이언트 → 커스텀 훅 → UI 컴포넌트 → 페이지 통합 순서로 점진적으로 구현하며, 각 단계에서 속성 기반 테스트와 단위 테스트로 정확성을 검증합니다.

## Tasks

- [ ] 1. 타입 정의 및 데이터 모델 구현
  - [ ] 1.1 API 응답 타입 정의 (src/types/mobileindex.ts)
    - `MobileIndexAppSearchResponse`, `MobileIndexAppItem`, `MobileIndexMetricsResponse`, `MobileIndexTimelineEntry`, `MobileIndexDeduplicationResponse`, `MobileIndexAudienceExtractResponse` 인터페이스 생성
    - _Requirements: 6.2_

  - [ ] 1.2 내부 데이터 모델 타입 정의 (src/types/audience.ts)
    - `AppInfo`, `AudienceGroup`, `DateRange`, `AudienceMetrics`, `TimelineEntry`, `DeduplicationData`, `ComparisonResult`, `AudienceExtractResult` 인터페이스 생성
    - _Requirements: 6.2, 6.3_

- [ ] 2. API 클라이언트 및 변환 함수 구현
  - [ ] 2.1 모바일인덱스 API 클라이언트 구현 (src/lib/mobileindex-api.ts)
    - `wix-blog.ts` 패턴을 참고하여 fetch 기반 API 클라이언트 구현
    - 환경 변수(`VITE_MOBILEINDEX_API_KEY`)에서 API 키 로드
    - `ApiError` 클래스 정의 (statusCode, requestUrl 포함)
    - 지수 백오프 재시도 로직 (`fetchWithRetry`, 최대 3회, 1s/2s/4s)
    - 401 인증 오류 시 재시도 없이 즉시 에러 반환
    - API 함수: `searchApps`, `fetchMetrics`, `fetchDeduplication`, `extractAudience`
    - 변환 함수: `toAppInfo`, `toApiAppItem`, `toAudienceMetrics`, `toTimelineEntry`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [ ]* 2.2 API 앱 응답 변환 라운드트립 속성 테스트 (src/test/mobileindex-api.property.test.ts)
    - **Property 6: API 응답 변환 라운드트립**
    - fast-check으로 임의의 `MobileIndexAppItem`을 생성하여 `toAppInfo` → `toApiAppItem` 라운드트립 검증
    - **Validates: Requirements 6.3, 6.4**

  - [ ]* 2.3 타임라인 엔트리 변환 라운드트립 속성 테스트 (src/test/mobileindex-api.property.test.ts)
    - **Property 7: 지표 데이터 변환 라운드트립**
    - fast-check으로 임의의 `MobileIndexTimelineEntry`를 생성하여 `toTimelineEntry` 라운드트립 검증
    - **Validates: Requirements 6.3, 6.4**

  - [ ]* 2.4 재시도 후 에러 정보 포함 속성 테스트 (src/test/mobileindex-api.property.test.ts)
    - **Property 8: 재시도 후 실패 시 에러 정보 포함**
    - 네트워크 오류 시뮬레이션 후 에러 객체에 statusCode, message, requestUrl 포함 검증
    - **Validates: Requirements 6.5, 6.6**

- [ ] 3. 체크포인트 - API 클라이언트 및 타입 검증
  - 모든 테스트가 통과하는지 확인하고, 질문이 있으면 사용자에게 문의합니다.

- [ ] 4. 오디언스 그룹 관리 로직 구현
  - [ ] 4.1 오디언스 그룹 관리 유틸리티 함수 구현 (src/lib/audience-group-utils.ts)
    - `addAppToGroup(group, app)`: 그룹에 앱 추가 (최대 5개 제한)
    - `removeAppFromGroup(group, appId)`: 그룹에서 앱 제거
    - `addGroup(groups)`: 그룹 추가 (최대 2개 제한)
    - `removeGroup(groups, groupId)`: 그룹 삭제
    - `calculateComparison(metricName, groupAValue, groupBValue)`: 비교 지표 계산 (차이값, 변화율)
    - _Requirements: 1.2, 1.3, 1.4, 2.1, 2.3, 2.4, 5.3_

  - [ ]* 4.2 앱 추가 시 그룹 크기 증가 속성 테스트 (src/test/audience-group.property.test.ts)
    - **Property 1: 앱 추가 시 그룹 크기 증가**
    - fast-check으로 앱 수 < 5인 그룹과 유효한 앱을 생성하여 추가 후 크기 +1 및 포함 여부 검증
    - **Validates: Requirements 1.2**

  - [ ]* 4.3 최대 앱 수 불변식 속성 테스트 (src/test/audience-group.property.test.ts)
    - **Property 2: 그룹 내 최대 앱 수 불변식**
    - 5개 앱이 있는 그룹에 추가 시도 시 그룹 변경 없음 검증
    - **Validates: Requirements 1.3**

  - [ ]* 4.4 앱 제거 시 그룹 크기 감소 속성 테스트 (src/test/audience-group.property.test.ts)
    - **Property 3: 앱 제거 시 그룹 크기 감소**
    - 그룹 내 존재하는 앱 제거 후 크기 -1 및 미포함 검증
    - **Validates: Requirements 1.4**

  - [ ]* 4.5 최대 그룹 수 불변식 속성 테스트 (src/test/audience-group.property.test.ts)
    - **Property 4: 최대 그룹 수 불변식**
    - 2개 그룹 존재 시 추가 시도 시 그룹 목록 변경 없음 검증
    - **Validates: Requirements 2.1, 2.2, 2.3**

  - [ ]* 4.6 그룹 삭제 시 완전 제거 속성 테스트 (src/test/audience-group.property.test.ts)
    - **Property 5: 그룹 삭제 시 완전 제거**
    - 그룹 삭제 후 크기 -1 및 삭제된 그룹 ID 미존재 검증
    - **Validates: Requirements 2.4**

  - [ ]* 4.7 비교 지표 계산 정확성 속성 테스트 (src/test/comparison.property.test.ts)
    - **Property 9: 비교 지표 차이값 및 변화율 계산 정확성**
    - fast-check으로 임의의 두 지표 값에 대해 차이값 = groupB - groupA, 변화율 = ((groupB - groupA) / groupA) × 100 검증
    - groupA === 0일 때 변화율 처리 검증
    - **Validates: Requirements 5.3**

- [ ] 5. TanStack Query 커스텀 훅 구현
  - [ ] 5.1 오디언스 분석 커스텀 훅 구현 (src/hooks/use-audience-analytics.ts)
    - `useAppSearch(query)`: 디바운스된 앱 검색 (300ms)
    - `useAudienceMetrics(groupApps, dateRange)`: 그룹 지표 데이터 조회 (staleTime: 5분)
    - `useDeduplicatedUsers(groupApps)`: 중복 제거 사용자 데이터 조회 (앱 2개 이상일 때만 활성화)
    - `useAudienceExtract(groupApps)`: 오디언스 추출 뮤테이션
    - 쿼리 키에 앱 ID 배열과 기간 포함
    - _Requirements: 1.1, 3.1, 4.4, 9.1, 9.2, 9.3_

  - [ ]* 5.2 쿼리 키 갱신 속성 테스트 (src/test/query-keys.property.test.ts)
    - **Property 10: 조회 기간 변경 시 쿼리 키 갱신**
    - fast-check으로 동일 앱 조합 + 서로 다른 기간에 대해 쿼리 키가 달라지는지 검증
    - **Validates: Requirements 4.4, 9.2**

- [ ] 6. 체크포인트 - 데이터 레이어 검증
  - 모든 테스트가 통과하는지 확인하고, 질문이 있으면 사용자에게 문의합니다.

- [ ] 7. UI 컴포넌트 구현 - 앱 검색 및 그룹 관리
  - [ ] 7.1 AppSearchCombobox 컴포넌트 구현 (src/components/audience/AppSearchCombobox.tsx)
    - shadcn/ui `Command` 컴포넌트 기반 검색 UI
    - `useAppSearch` 훅 연동
    - 앱 아이콘, 이름, 플랫폼(AOS/iOS) 표시
    - 선택된 앱 목록 표시 (최대 5개, 도달 시 비활성화)
    - 앱 제거 버튼
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [ ] 7.2 AudienceGroupManager 컴포넌트 구현 (src/components/audience/AudienceGroupManager.tsx)
    - 최대 2개 그룹 생성/삭제 관리
    - 그룹 이름 편집 기능
    - 그룹 추가 버튼 (2개 도달 시 비활성화)
    - 각 그룹에 `AppSearchCombobox` 포함
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ] 7.3 DateRangePicker 컴포넌트 구현 (src/components/audience/DateRangePicker.tsx)
    - shadcn/ui Calendar + Popover 기반 기간 선택 UI
    - 시작일/종료일 선택
    - _Requirements: 4.4_

- [ ] 8. UI 컴포넌트 구현 - 대시보드 및 비교 뷰
  - [ ] 8.1 MetricsDashboard 컴포넌트 구현 (src/components/audience/MetricsDashboard.tsx)
    - 6개 지표 카드: MAU, 신규 설치자 수, 충성 고객 지표, 고착도, 교차 사용률/수, 신규 설치자 재방문율
    - recharts 기반 라인/바 차트 시각화
    - 중복 제거 전/후 사용자 수 표시
    - 로딩 스피너 및 에러 상태 처리 (에러 메시지 + 재시도 버튼)
    - _Requirements: 3.2, 3.3, 4.1, 4.2, 4.3, 4.5, 8.4_

  - [ ] 8.2 ComparisonView 컴포넌트 구현 (src/components/audience/ComparisonView.tsx)
    - 2개 그룹 또는 그룹-앱 간 나란히 비교 뷰
    - 차이값 및 변화율(%) 표시 (`calculateComparison` 활용)
    - 오버레이 차트 (동일 차트에 두 데이터셋)
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ] 8.3 AudienceExtractPanel 컴포넌트 구현 (src/components/audience/AudienceExtractPanel.tsx)
    - 오디언스 추출 버튼 및 진행 상태
    - 예상 도달 규모 표시
    - 트레이딩웍스 360 연결 링크
    - 에러 처리 UI
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 9. 페이지 통합 및 라우팅
  - [ ] 9.1 AudienceAnalytics 페이지 컴포넌트 구현 (src/pages/AudienceAnalytics.tsx)
    - 페이지 상태 관리: `groups`, `dateRange`, `comparisonMode`
    - 기존 Navbar, Footer 레이아웃 사용
    - 하위 컴포넌트 조합: `AudienceGroupManager`, `MetricsDashboard`, `ComparisonView`, `AudienceExtractPanel`, `DateRangePicker`
    - 반응형 레이아웃 (데스크톱/모바일)
    - 로딩 스피너 표시
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 9.2 라우트 등록 (src/App.tsx)
    - `/audience-analytics` 경로에 `AudienceAnalytics` 페이지 연결
    - 기존 라우트 구조에 맞게 추가
    - _Requirements: 8.1_

  - [ ] 9.3 환경 변수 설정 (.env)
    - `VITE_MOBILEINDEX_API_KEY` 환경 변수 추가 (플레이스홀더 값)
    - _Requirements: 6.1_

- [ ] 10. 최종 체크포인트 - 전체 통합 검증
  - 모든 테스트가 통과하는지 확인하고, 질문이 있으면 사용자에게 문의합니다.

## Notes

- `*` 표시된 태스크는 선택 사항이며 빠른 MVP를 위해 건너뛸 수 있습니다
- 각 태스크는 특정 요구사항을 참조하여 추적 가능합니다
- 체크포인트에서 점진적 검증을 수행합니다
- 속성 테스트는 보편적 정확성 속성을 검증하고, 단위 테스트는 구체적 예시와 엣지 케이스를 검증합니다
