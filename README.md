# 노마드코더 우버 클론 코딩 강의 실습 - 프론트엔드

Client for the (N)Uber Clone Course on Nomad Academy. ReactJS, Apollo, Typescript

---

## CRA Typescript 프로젝트 생성

> npm을 이용한 방법 1

```
 $ npx create-react-app uber_clone_client --scripts-version=react-scripts-ts
```

> npm을 이용한 방법 2

```
 $ npx create-react-app my-app --typescript
```

---

### tsconfig.json 셋팅 추가 / 제거

```
"compilerOptions": {

    ...

    "module": "commonjs",

    ...

    "lib": ["es6", "dom", "esnext.asynciterable"],

    ...

    "esModuleInterop": true,
    "skipLibCheck": true
}
```

---

## 프로젝트 기본 셋팅

### 불필요 파일 / 소스 제거

-   파일 제거

```
src/App.css
src/App.test.tsx
src/index.css
src/logo.svg
src/registerServiceWorker.ts
```

-   삭제 된 파일과 관련 된 import 정보 제거

```
src
├── App.tsx
└── index.tsx
```

---

## Apollo Boost 셋팅

> 아폴로는 GraphQL 과 통신을 하기 위한 클라이언트

```
ex) graphQL-yoga => backend
    apollo => frontend
```

> Install

```
yarn add apollo-boost graphql react-apollo -S
```

---

## 추가 라이브러리

> prop-types

```
yarn add prop-types
```

> styled-components

```
yarn add styled-components
yarn add @types/styled-components
yarn add styled-reset
```
