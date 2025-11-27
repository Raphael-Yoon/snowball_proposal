# Snowball 웹사이트 개발 스펙

## 📋 프로젝트 개요

**목적**: 1-Page Proposal(인쇄본) → QR코드 스캔 → 웹사이트(상세 정보) 연계

**기술 스택**:
- Framework: Astro (정적 사이트 생성)
- Styling: Tailwind CSS
- Hosting: Netlify (배포)
- Build: `npm run build` → `/dist` 폴더에 순수 HTML/CSS/JS 생성

**핵심**: 정적 페이지이므로 빠른 로딩, 높은 전문성 표현

---

## 🏗️ 페이지 구조

### 단일 페이지 구성 (index.astro)
```
1. Navigation Bar (고정)
2. Hero Section
3. Problem Section
4. Solutions Section (Track A / Track B - 탭/카드)
5. Benefits Section
6. System Features (선택)
7. CTA Section
8. Footer (Contact 정보)
```

---

## 📄 상세 섹션 정의

### 1️⃣ Navigation Bar
- Logo: "Snowball" (텍스트 또는 이미지)
- Links: Home, Track A, Track B, Benefits, Contact
- 배경: 흰색 또는 라이트 그레이, 고정(sticky)
- 높이: 60-70px

### 2️⃣ Hero Section
**배경**: 그라디언트 또는 밝은 블루톤
**텍스트**:
```
제목: "복잡한 내부통제, Snowball과 함께 해결하세요"

부제: "ITGC 전문 인력 부재? 수동 관리의 비효율성?
       Snowball은 두 가지 난관을 동시에 해결합니다."

CTA 버튼:
- "Track A 보기" (Track A로 스크롤)
- "Track B 보기" (Track B로 스크롤)
- "상담 신청" (Contact로 스크롤)
```

**배경 이미지**: 선택사항 (없어도 됨, 그라디언트만으로도 좋음)
**높이**: 500-600px (모바일은 400px)

### 3️⃣ Problem Section
**제목**: "현황 분석: 내부통제 실무의 두 가지 난관"

**구성**: 2개 카드 (각각 이미지 + 텍스트)
```
카드 1:
- 아이콘: 👤 (인력)
- 제목: "IT 전문 인력 부재"
- 내용: "내부통제팀 내 ITGC 전담 전문가를 채용하고 
         유지하는 데 큰 어려움"

카드 2:
- 아이콘: ⚙️ (효율성)
- 제목: "업무 비효율성"
- 내용: "엑셀 기반의 수동 관리 및 반복적 행정 업무로 
         핵심 관리 감독에 집중 불가"
```

**레이아웃**: 데스크톱 2열, 모바일 1열

### 4️⃣ Solutions Section (핵심)
**제목**: "Snowball의 두 가지 솔루션"

**탭 또는 카드 전환 UI** (사용자가 Track A / Track B 선택)

#### Track A: PA 서비스 (전문 인력 즉시 확보)
```
설명: "ITGC 전담 인력처럼 RCM 설계부터 평가, 감사 대응, 
      역량 내재화까지 ITGC 업무 전 과정을 상시적으로 수행합니다"

3개 모듈 (카드 또는 아코디언):

1. RCM 설계 및 표준화 (Design & Standardization)
   - ITGC RCM 최신화/표준화
   - 설계평가 (Design Assessment) 수행
   - 통제 매뉴얼 작성 지원

2. 운영평가 대행 및 증적 관리 (Operation & Evidence)
   - 평가 계획 및 샘플링 수행
   - 증적 취합 및 검증
   - 결함 발견 및 분석

3. 보고서 및 조서 최종 산출 (Reporting & Documentation)
   - 표준화된 평가 조서 작성
   - 결함 시정 조치 보고
   - 감사 대응 지원

주요 이점:
- ITGC 업무 부담 제로
- 규제 준수 및 안정성
- 내부 역량 강화
```

#### Track B: Snowball 시스템 (유연한 플랫폼)
```
설명: "직관적인 UI/UX로 설계된 내부통제 플랫폼. 
      고객사의 보안 정책, 예산, 인프라에 따라 최적 도입 방식 선택"

배포 옵션 (2개 카드):
1. Cloud (구독형, SaaS)
   - SaaS 방식(가입형)
   - 인프라 구축 없이 즉시 도입
   - 초기 비용 및 유지보수 비용 절감

2. On-Premise (구축형)
   - 고객사 내부 설치
   - 내부망 운영으로 보안 준수
   - 기존 레거시 시스템 연동

4가지 핵심 기능 (카드 그리드):
1. ICFR 전체 통제 문서 중앙 관리 (ELC, TLC, ITGC 포함)
   - RCM 통합 업로드 및 관리
   - 전 영역 관리 범위

2. 평가 자동화 및 워크플로우 관리
   - 설계평가 및 운영평가 연계
   - 평가 계획 및 자동 샘플링
   - 테스트 수행 및 증적 업로드
   - 엑셀 조서 다운로드

3. 운영 투명성 및 가시성
   - 실시간 대시보드
   - 통제 수행 현황 및 결함 추이 파악

4. 업무 연속성 보장
   - 자동화된 워크플로우
   - 중앙 관리 시스템
```

### 5️⃣ Benefits Section
**제목**: "Snowball 도입의 실질적 이점"

**4개 이점 카드** (각각 아이콘 + 제목 + 설명):
```
1. 인력 투입 최소화
   설명: 반복적인 행정 업무를 자동화하여 내부 담당자의 업무 부담 
        및 인력 투입을 획기적으로 절감합니다

2. 감사 수용성 극대화
   설명: 표준화된 평가 조서 및 상세한 통제 이력 관리를 통해 
        외부 감사인의 수용도를 높이고 감사 대응 시간을 단축합니다

3. 운영 투명성 및 가시성 확보
   설명: 실시간 대시보드 및 리포팅 기능을 통해 ICFR 전 영역의 
        통제 수행 현황과 결함 추이를 경영진이 명확하게 파악할 수 있습니다

4. 업무 연속성 보장
   설명: 자동화된 워크플로우와 중앙 관리 시스템으로 담당자 변경 시에도 
        업무의 연속성과 일관성을 유지합니다
```

**아이콘**: 
- 1번: 👥 (사람)
- 2번: ✅ (체크마크)
- 3번: 📊 (차트)
- 4번: 🔄 (순환)

### 6️⃣ System Features Section (선택사항)
**제목**: "Snowball 시스템 주요 기능"

**아코디언 또는 이미지 그리드**:
- 스크린샷 + 설명 (또는 간단한 다이어그램)
- 예: "RCM 관리", "평가 자동화", "통제 이력 추적" 등

*현재는 이미지가 없으므로, 텍스트 설명만으로도 가능*

### 7️⃣ CTA Section (강력한 행동 유도)
**배경**: 밝은 블루톤 또는 그라디언트
**텍스트**:
```
제목: "지금 바로 Snowball의 효과를 경험해보세요"

부제: "ITGC 전문가의 1:1 상담을 통해 
      당신의 상황에 맞는 최적의 솔루션을 찾아보세요"

CTA 버튼 (2개):
- "상담 신청" (Contact 섹션으로 이동 또는 모달 팝업)
- "제안서 다운로드" (PDF 제안서 다운로드 - 선택사항)
```

### 8️⃣ Footer / Contact
**구성**:
- 회사 로고
- 연락처 정보:
  - 📧 Email: snowball1566@gmail.com
  - 🌐 Website: https://www.snowball1566.com
  - 📱 Phone: (선택사항)
- 소셜 링크 (LinkedIn, 등)
- Copyright

---

## 🎨 디자인 가이드

### 색상 팔레트
```
Primary: #2563EB (밝은 블루 - 신뢰성)
Secondary: #10B981 (그린 - 성공/효율성)
Dark: #1F2937 (다크 그레이 - 텍스트)
Light: #F9FAFB (라이트 그레이 - 배경)
White: #FFFFFF
```

### 타이포그래피
```
Heading (h1): 3rem (bold)
Heading (h2): 2rem (bold)
Heading (h3): 1.5rem (semibold)
Body: 1rem (regular)
Small: 0.875rem (regular)
Line height: 1.6
```

### 컴포넌트
```
Button (Primary): 파란색 배경, 흰색 텍스트, 12-16px 패딩
Button (Secondary): 테두리, 파란색 텍스트
Card: 흰색 배경, 그림자, 16px 패딩, 8px 둥근 모서리
Section: 최대 너비 1200px, 좌우 20px 마진(모바일)
```

### 반응형 디자인
```
Desktop: 1200px 이상
Tablet: 768px ~ 1200px
Mobile: 375px ~ 768px
```

---

## 📁 Astro 폴더 구조

```
snowball-website/
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── HeroSection.astro
│   │   ├── ProblemSection.astro
│   │   ├── SolutionsSection.astro (Track A, B 포함)
│   │   ├── BenefitsSection.astro
│   │   ├── CtaSection.astro
│   │   ├── Footer.astro
│   │   └── Button.astro (재사용 버튼)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro (메인 페이지)
│   └── styles/
│       └── global.css (글로벌 스타일)
├── public/
│   └── (이미지, favicon 등)
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## 🚀 개발 체크리스트

- [ ] Astro 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] Navigation 컴포넌트 작성
- [ ] HeroSection 작성
- [ ] ProblemSection 작성
- [ ] SolutionsSection 작성 (Track A)
- [ ] SolutionsSection 작성 (Track B)
- [ ] BenefitsSection 작성
- [ ] CtaSection 작성
- [ ] Footer 작성
- [ ] 전체 레이아웃 통합
- [ ] 반응형 디자인 테스트 (모바일, 태블릿, 데스크톱)
- [ ] 링크 및 스크롤 동작 확인
- [ ] 로컬 빌드 테스트 (`npm run build`)
- [ ] Netlify 배포 설정
- [ ] QR코드 생성 및 인쇄 제안서에 삽입
- [ ] 최종 점검 (속도, 모바일 최적화)

---

## 💡 추가 고려사항

### SEO
```html
<!-- index.astro -->
<SEO title="Snowball - ITGC 내부통제 솔루션" description="..." />
```

### 성능 최적화
- 이미지 최소화 (또는 벡터 아이콘 사용)
- CSS 인라인 (Astro 기본)
- JavaScript 최소화

### 배포 후
1. Google Analytics 추가 (QR 스캔 → 웹사이트 방문 추적)
2. 도메인 설정 (snowball-icfr.com 또는 subdomain)
3. HTTPS 자동 적용 (Netlify)

### 향후 확장
- 상담 신청 폼 → 메일 자동 발송 (Formspree, Netlify Forms)
- 다국어 지원 (영어, 일본어 등)
- 블로그 추가 (내부통제 관련 인사이트)

---

## 🔗 문의 정보

**이메일**: snowball1566@gmail.com  
**웹사이트**: https://www.snowball1566.com

---

## 📝 참고 자료

**제안서 첫 페이지 (인쇄본)**:
- 이 문서의 내용을 기반으로 작성된 1-Page Proposal
- QR코드로 본 웹사이트로 연결

**빌드 & 배포 흐름**:
1. 로컬 개발: `npm run dev`
2. 빌드: `npm run build` → `/dist` 생성
3. 배포: GitHub 연결 → Netlify 자동 배포

**QR코드 URL**: 배포 후 생성 (예: https://snowball-icfr.netlify.app)

---

**문서 작성일**: 2025-01-01  
**상태**: 개발 준비 완료
