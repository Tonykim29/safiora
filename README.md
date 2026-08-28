# Safiora 홈페이지

Next.js(App Router) + Tailwind CSS. 정적 export 방식이라 별도 서버 없이 배포함.

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000 접속

## 빌드

```bash
npm run build
```

`out/` 폴더에 정적 파일이 생성됨. (next.config.mjs의 `output: "export"` 설정)

## 배포 (Vercel — 추천)

1. GitHub에 이 저장소 push
2. https://vercel.com 가입 → GitHub 저장소 import
3. Framework Preset: Next.js (자동 감지) — 별도 설정 불필요
4. Deploy 클릭 → 완료

이후 GitHub에 push할 때마다 자동 재배포됨.

## 배포 (Cloudflare Pages — 대안)

1. GitHub push
2. Cloudflare Pages → Connect to Git
3. Build command: `npm run build`
4. Output directory: `out`

## 도메인 연결

가비아/후이즈 등에서 구매한 도메인의 DNS를 Vercel/Cloudflare 안내에 따라
A 레코드 또는 CNAME으로 연결. (각 플랫폼 대시보드에 안내됨)

## 수정이 필요한 항목 (배포 전 확인)

- `app/contact/ContactForm.tsx` — `CONTACT_EMAIL` 실제 이메일로 교체
- `components/Footer.tsx` — 사업자등록번호, 대표자명, 연락처, 주소 입력
- `public/favicon.svg` — 확정 로고 파일로 교체 가능
- 개인정보처리방침 페이지 — 추후 작성 필요 (Footer에 링크 자리만 있음)

## 문의 폼 방식

현재는 백엔드 없이 `mailto:` 링크로 동작함 (버튼 클릭 시 메일 앱 열림).
자동 접수/DB 저장이 필요해지면 Formspree, Google Forms 연동 등을 추후 검토.

## 콘텐츠 수정 위치

- 홈: `app/page.tsx`
- 서비스: `app/services/page.tsx`
- 인증/자격: `app/certifications/page.tsx`
- 회사소개: `app/about/page.tsx`
- 색상/폰트 토큰: `tailwind.config.ts`, `app/globals.css`
