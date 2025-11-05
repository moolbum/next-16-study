# 👨‍💻 Next 16 Study

> 이 프로젝트는 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 부트스트랩된 [Next.js](https://nextjs.org) 프로젝트입니다. <br/>
> 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.<br/>
> 이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 새로운 폰트 패밀리인 [Geist](https://vercel.com/font)를 자동으로 최적화하고 로드합니다.

## 🚀 프로젝트 개요

| 항목                         | 내용                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 프레임워크                   | [NextJS 16](https://nextjs.org/) (App router), turbopack                                                                                                                                                                                         |
| 타입 시스템                  | [TypeScript](https://www.typescriptlang.org/)                                                                                                                                                                                                    |
| 스타일                       | [TailwindCSS](https://tailwindcss.com/), [Shadcn](https://ui.shadcn.com/),                                                                                                                                                                       |
| UI(아이콘, toast, calender)  | [lucide-react](https://lucide.dev/icons/), sonner, react-day-picker                                                                                                                                                                              |
| API 상태관리                 | [tanstack query](https://tanstack.com/query/latest/docs/framework/react/overview)                                                                                                                                                                |
| 상태관리                     | [zustand](https://github.com/pmndrs/zustand), [react-hook-form](https://react-hook-form.com/get-started)                                                                                                                                         |
| 유틸 라이브러리              | [es-toolkit](https://es-toolkit.dev/ko/), [overlay-kit](https://overlay-kit.slash.page/ko/docs/guides/introduction), [react-error-boundary](https://github.com/bvaughn/react-error-boundary), [class-variance-authority](https://cva.style/docs) |
| 유닛, 통합 테스트 (추가예정) | [Vitest](https://vitest.dev/), [React TestingLibrary](https://testing-library.com/docs/react-testing-library/intro/)                                                                                                                             |
| E2E 테스트 (추가예정)        | [Playwright](https://playwright.dev/)                                                                                                                                                                                                            |

## ⚙️ 시스템 요구사항

- Node.js >= 20.10.0
- yarn

## ⚙️ 설치 및 실행

```bash
# 의존성 설치
yarn install

# 로컬 실행
yarn dev

# 빌드
yarn build

# 생성된 빌드 파일 기반 실행
yarn start
```

### 스크립트 명령어 모음

- `yarn dev`: 개발 환경 서버 실행
- `yarn build`: 빌드 생성
- `yarn start`: 생성된 빌드 파일 기반 실행

## 🗂️ 프로젝트 구조

```


├── app/                     # App
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 전역 레이아웃
│   ├── page.tsx             # 메인 페이지 ('/')
│   └── [feature]/           # Routing 주소 정의 (폴더생성)
│       └── example.tsx      # Routing 별 페이지 화면
│
├── components               # 재사용 가능한 컴포넌트
│   ├── atoms/               # Atoms: 가장 작은 단위의 컴포넌트
│   ├── molecule/            # Molecule: atom으로 이루어진 컴포넌트,
│   ├── organisms/           # Organisms: molecule 또는 atom이 다수로 이루어진 컴포넌트
│   └── ui/                  # Ui: Shadcn ui CLI 입력으로 설치시 자동생성 파일
│       └── [Feature]
│             ├── Feature          # 컴포넌트 정의
│             └── Feature.type.ts  # 컴포넌트 타입 정의
│
├── constants/                # 상수 관련
├── lib/                      # 유틸 함수
├── public/                   # 정적 파일 저장소
├── stores/                   # 전역 데이터 저장소
├── .gitignore
├── .nvmrc
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── yarn.lock
```

### 파일 이름 규칙

| 파일 타입         | 규칙                  | 예시                         |
| ----------------- | --------------------- | ---------------------------- |
| 컴포넌트          | `PascalCase.tsx`      | `iButton.tsx`, `Card.tsx`    |
| 페이지            | `PascalCase.tsx`      | `Login.tsx`, `Dashboard.tsx` |
| 훅                | `use + PascalCase.ts` | `useFilterQuery.ts`          |
| 유틸              | `camelCase.ts`        | `index.ts`, `fileUpload.ts`  |
| 타입(Component)   | `PascalCase.type.tsx` | `Card.type.ts`               |
| 타입(API)         | `camelCase.type.ts`   | `api.type.ts`                |
| 테스트(Component) | `PascalCase.test.ts`  | `Login.test.ts`              |
| 테스트(Function)  | `camelCase.test.ts`   | `util.test.ts`               |
| 상수              | `UPPER_SNAKE_CASE`    | `STORE_FILTER_OPTION`        |

# Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 제작자들이 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.
