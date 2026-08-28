import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 | Safiora",
  description: "Safiora의 AI 솔루션, 정보보안, 개인정보보호, 전자문서 관리, ISO 인증 컨설팅 서비스.",
};

const SERVICES = [
  {
    clause: "4.1",
    title: "AI 솔루션 컨설팅",
    points: [
      "AI 도입 전 리스크·거버넌스 진단",
      "ISO/IEC 42001 기준에 맞춘 AI 경영시스템 설계",
      "내부 활용 가이드라인·승인 프로세스 수립",
    ],
  },
  {
    clause: "4.2",
    title: "정보보안 관리체계 구축",
    points: ["ISO/IEC 27001 갭 분석 및 위험평가", "보안 정책·절차 문서 작성", "인증심사 대응 및 사후관리"],
  },
  {
    clause: "5.1",
    title: "개인정보보호 컨설팅",
    points: [
      "ISO/IEC 27701 기준 개인정보 처리방침 점검",
      "개인정보 흐름도 작성 및 처리 근거 문서화",
      "국내 개인정보보호법 준수 여부 확인",
    ],
  },
  {
    clause: "5.2",
    title: "전자문서 관리체계",
    points: ["종이 문서의 전자화 전환 계획 수립", "문서 보관·검증·이력관리 체계 설계", "부서별 워크플로우 정의"],
  },
  {
    clause: "6.1",
    title: "ISO 인증 컨설팅·거버넌스",
    points: [
      "42001·27001·27701 통합 인증 로드맵 수립",
      "심사 일정 조율 및 문서 준비",
      "인증 이후 유지관리 체계 설계",
    ],
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Services</p>
      <h1 className="mt-4 max-w-xl text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[42px]">
        진단부터 인증까지,
        <br />
        하나의 체계로 진행합니다.
      </h1>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.clause}
            className={`rounded-sm border border-line p-8 transition-colors hover:border-blue-bright md:p-10 ${
              s.featured ? "md:col-span-2 bg-ink text-white" : "bg-white"
            }`}
          >
            <span className={`clause-num text-[15px] ${s.featured ? "text-glow" : "text-blue-bright"}`}>
              {s.clause}
            </span>
            <h2 className="mt-3 text-[20px] font-bold tracking-[-0.01em] md:text-[22px]">{s.title}</h2>
            <ul className="mt-5 grid gap-2 md:grid-cols-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className={`flex gap-3 text-[14px] ${s.featured ? "text-white/70" : "text-slate"}`}
                >
                  <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${s.featured ? "bg-glow" : "bg-leaf"}`} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
