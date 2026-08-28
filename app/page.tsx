import Link from "next/link";
import Logo from "@/components/Logo";

const SERVICES = [
  { clause: "4.1", title: "AI 솔루션 컨설팅", desc: "AI 도입 전 단계에서 리스크를 점검하고 실행 가능한 구조로 설계합니다." },
  { clause: "4.2", title: "정보보안 관리체계", desc: "ISO 27001 기반으로 보안 정책 수립부터 인증 획득까지 지원합니다." },
  { clause: "5.1", title: "개인정보보호 컨설팅", desc: "ISO 27701 기준으로 개인정보 처리 흐름을 점검하고 문서화합니다." },
  { clause: "5.2", title: "전자문서 관리체계", desc: "종이 문서를 전자 워크플로우로 전환하고 보관·검증 체계를 구축합니다." },
  { clause: "6.1", title: "ISO 인증 컨설팅·거버넌스", desc: "42001·27001·27701 인증 준비와 심사 대응을 처음부터 끝까지 진행합니다." },
];

const VALUES = [
  { title: "안전한 기술", desc: "신뢰할 수 있는 기술로 안전한 사회를 만듭니다." },
  { title: "지속 가능한 성장", desc: "지속 가능한 성장을 통해 미래 가치를 창출합니다." },
  { title: "인류 중심 가치", desc: "사람을 생각하는 기술로 인류의 번영에 기여합니다." },
  { title: "글로벌 파트너십", desc: "전문성과 신뢰를 바탕으로 함께 성장하는 파트너가 됩니다." },
];

export default function Home() {
  return (
    <>
      {/* HERO — 인증서 프레임 구조 */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="reg-frame border border-line bg-white px-6 py-14 md:px-16 md:py-20">
          <span className="reg-tr" />
          <span className="reg-br" />
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-blue-bright">
            Safiora — AI Safety &amp; Governance
          </p>
          <h1 className="mt-6 max-w-2xl text-[32px] font-bold leading-[1.3] md:text-[44px]">
            안전을 증명하고,
            <br />
            신뢰를 설계합니다.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate">
            AI 솔루션, 정보보안, 개인정보보호, 전자문서 관리, ISO 인증 컨설팅까지 — 하나의 체계 안에서
            운영합니다. 공공·금융기관이 요구하는 수준의 문서와 근거로 답합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-sm bg-ink px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-blue-deep"
            >
              상담 문의하기
            </Link>
            <Link
              href="/services"
              className="rounded-sm border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-blue-bright hover:text-blue-bright"
            >
              서비스 보기
            </Link>
          </div>
          <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-slate/70">
            For Human Safety &amp; Prosperity
          </p>
        </div>
      </section>

      {/* 신뢰 근거 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Why Safiora</p>
            <h2 className="mt-4 text-[24px] font-bold leading-snug">
              심사 기준을 아는 사람이
              <br />
              직접 설계합니다.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-slate">
            Safiora는 ISO/IEC 42001, 27001, 27701 예비심사원 자격을 보유한 대표가 직접 컨설팅부터 문서
            작성, 심사 대응까지 맡습니다. 외주 하청 구조 없이 처음부터 끝까지 같은 사람이 책임집니다.
            공공·금융 사업 제안서 작성과 발표 경험을 바탕으로, 평가자가 실제로 확인하는 지점을 압니다.
          </p>
        </div>
      </section>

      {/* 서비스 — ISO 조항 스타일 넘버링 */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Services</p>
            <Link href="/services" className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate hover:text-blue-bright">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {SERVICES.map((s) => (
              <div key={s.clause} className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8">
                <span className="clause-num w-14 shrink-0 text-[15px] text-blue-bright">{s.clause}</span>
                <div>
                  <p className="text-[16px] font-semibold">{s.title}</p>
                  <p className="mt-1 text-[14px] text-slate">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4대 가치 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Core Values</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white p-7">
              <p className="text-[15px] font-semibold">{v.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo size={30} mono />
            <p className="max-w-sm text-[15px] text-white/80">
              ISO 인증 준비, 정보보안 체계 구축, AI 도입 리스크 검토 — 지금 상태를 진단부터 시작합니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-sm bg-white px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
          >
            상담 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
