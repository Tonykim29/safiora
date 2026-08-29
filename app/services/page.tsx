import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BrainCircuit, FolderCheck, ShieldCheck, UserCheck } from "lucide-react";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "서비스 | Safiora",
  description: "Safiora의 AI 솔루션, 정보보안, 개인정보보호, 전자문서 관리, ISO 인증 컨설팅 서비스.",
};

const SERVICES = [
  {
    title: "AI 솔루션 컨설팅",
    href: "/services/ai-consulting",
    icon: BrainCircuit,
    points: [
      "AI 도입 전 리스크·거버넌스 진단",
      "ISO/IEC 42001 기준에 맞춘 AI 경영시스템 설계",
      "내부 활용 가이드라인·승인 프로세스 수립",
    ],
  },
  {
    title: "정보보안 관리체계 구축",
    href: "/services/information-security",
    icon: ShieldCheck,
    points: ["ISO/IEC 27001 갭 분석 및 위험평가", "보안 정책·절차 문서 작성", "인증심사 대응 및 사후관리"],
  },
  {
    title: "개인정보보호 컨설팅",
    href: "/services/privacy",
    icon: UserCheck,
    points: [
      "ISO/IEC 27701 기준 개인정보 처리방침 점검",
      "개인정보 흐름도 작성 및 처리 근거 문서화",
      "국내 개인정보보호법 준수 여부 확인",
    ],
  },
  {
    title: "전자문서 관리체계",
    href: "/services/document-management",
    icon: FolderCheck,
    points: ["종이 문서의 전자화 전환 계획 수립", "문서 보관·검증·이력관리 체계 설계", "부서별 워크플로우 정의"],
  },
  {
    title: "ISO 인증 컨설팅·거버넌스",
    href: "/services/iso-governance",
    icon: BadgeCheck,
    points: [
      "42001·27001·27701 통합 인증 로드맵 수립",
      "심사 일정 조율 및 문서 준비",
      "인증 이후 유지관리 체계 설계",
    ],
    featured: true,
  },
];

const DELIVERABLES = [
  {
    title: "정보보안 정책서",
    icon: ShieldCheck,
    lines: ["w-3/4", "w-full", "w-5/6", "w-2/3", "w-full", "w-4/5", "w-1/2"],
  },
  {
    title: "개인정보 처리방침",
    icon: UserCheck,
    lines: ["w-full", "w-5/6", "w-3/4", "w-full", "w-2/3", "w-4/5", "w-1/2"],
  },
  {
    title: "ISO 인증 로드맵 문서",
    icon: BadgeCheck,
    lines: ["w-2/3", "w-full", "w-4/5", "w-full", "w-3/4", "w-5/6", "w-1/2"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Services</p>
        <h1 className="mt-4 max-w-xl text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[42px]">
          진단부터 인증까지,
          <br />
          하나의 체계로 진행합니다.
        </h1>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`block rounded-sm border border-line p-8 transition-colors hover:border-blue-bright md:p-10 ${
                s.featured ? "md:col-span-2 bg-ink text-white" : "bg-white"
              }`}
            >
              <s.icon
                className={`h-6 w-6 ${s.featured ? "text-white" : "text-blue-bright"}`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
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
              <p
                className={`tap-target mt-6 text-[13px] font-medium ${
                  s.featured ? "text-white/80" : "text-blue-bright"
                }`}
              >
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 산출물 미리보기 — 익명화된 목업, 실제 문서 아님 */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Deliverables</p>
          <h2 className="mt-4 max-w-xl text-[26px] font-bold leading-snug tracking-[-0.01em] md:text-[30px]">
            이런 문서를 만들어 드립니다.
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-slate">
            아래는 실제 산출물이 아닌, 형태를 보여주기 위한 익명화된 예시입니다.
          </p>

          {/* 모바일: 가로 스크롤 리스트, sm 이상: 3단 그리드 */}
          <div className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
            {DELIVERABLES.map((d, i) => (
              <div
                key={d.title}
                className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-sm border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:shrink"
              >
                <d.icon
                  className="pointer-events-none absolute right-5 top-5 h-9 w-9 text-slate/20"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="clause-num text-[11px] uppercase tracking-[0.12em] text-slate/60">
                  Sample · 0{i + 1}
                </p>
                <h3 className="mt-2 max-w-[80%] text-[16px] font-bold tracking-[-0.01em]">{d.title}</h3>

                <div className="mt-6 space-y-2.5" aria-hidden="true">
                  {d.lines.map((w, li) => (
                    <div key={li} className={`h-2 ${w} rounded-full bg-slate/40 ${li === 3 ? "mt-4" : ""}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-1.5 sm:hidden" aria-hidden="true">
            {DELIVERABLES.map((d) => (
              <span key={d.title} className="h-1.5 w-1.5 rounded-full bg-leaf/40" />
            ))}
          </div>
        </div>
      </section>

      {/* 진행 프로세스 */}
      <section id="process" className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Process</p>
          <h2 className="mt-4 max-w-xl text-[26px] font-bold leading-snug tracking-[-0.01em] md:text-[30px]">
            진단부터 사후관리까지,
            <br />
            다섯 단계로 진행합니다.
          </h2>

          <ProcessSteps />
        </div>
      </section>
    </>
  );
}
