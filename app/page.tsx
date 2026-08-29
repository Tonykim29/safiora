import Link from "next/link";
import { Award, FileText, Layers, UserCheck } from "lucide-react";
import Logo from "@/components/Logo";

const VALUES = [
  { title: "안전한 기술", desc: "신뢰할 수 있는 기술로 안전한 사회를 만듭니다." },
  { title: "지속 가능한 성장", desc: "지속 가능한 성장을 통해 미래 가치를 창출합니다." },
  { title: "인류 중심 가치", desc: "사람을 생각하는 기술로 인류의 번영에 기여합니다." },
  { title: "글로벌 파트너십", desc: "전문성과 신뢰를 바탕으로 함께 성장하는 파트너가 됩니다." },
];

const WHY_SAFIORA = [
  {
    icon: UserCheck,
    title: "직접 수행 — 외주 하청 없음",
    desc: "컨설팅부터 문서 작성, 심사 대응까지 같은 사람이 끝까지 책임집니다.",
  },
  {
    icon: Award,
    title: "ISO 심사원 관점의 컨설팅",
    desc: "심사원 자격을 보유한 대표가 심사 기준에 맞춰 설계합니다.",
  },
  {
    icon: FileText,
    title: "공공·금융 제안서 작성 경험",
    desc: "공공·금융기관이 요구하는 문서 수준에 맞춰 대응합니다.",
  },
  {
    icon: Layers,
    title: "42001·27001·27701 통합 대응",
    desc: "AI·정보보안·개인정보보호 인증을 하나의 로드맵으로 통합합니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — 다크 그라운드 위에 스포트라이트 받은 인증서 카드 */}
      <section className="grain relative overflow-hidden bg-ink py-20 md:py-28">
        <div className="glow-blob animate-drift left-[-10%] top-[-20%] h-[520px] w-[520px] bg-blue-bright/30" />
        <div className="glow-blob animate-drift-slow right-[-15%] top-[10%] h-[420px] w-[420px] bg-leaf/20" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="reg-frame animate-fade-up border border-line bg-paper px-6 py-14 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] md:px-16 md:py-20">
            <span className="reg-tr" />
            <span className="reg-br" />
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-blue-bright">
              Safiora — AI Safety &amp; Governance
            </p>
            <h1 className="mt-6 max-w-2xl text-[38px] font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[64px]">
              안전을 증명하고,
              <br />
              신뢰를 설계합니다.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate md:text-[16px]">
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
        </div>
      </section>

      {/* 신뢰 근거 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Why Safiora</p>
        <h2 className="mt-4 max-w-xl text-[26px] font-bold leading-snug tracking-[-0.01em] md:text-[30px]">
          심사 기준을 아는 사람이
          <br />
          직접 설계합니다.
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {WHY_SAFIORA.map((item) => (
            <div key={item.title} className="bg-white p-7 transition-colors hover:bg-paper">
              <item.icon className="h-6 w-6 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.01em]">{item.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 — 비대칭 벤토 그리드, 6.1이 통합 서비스라 가장 크게 */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Services</p>
            <Link
              href="/services"
              className="font-mono text-[12px] uppercase tracking-[0.1em] text-slate hover:text-blue-bright"
            >
              전체 보기 →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="group rounded-sm border border-line p-8 transition-colors hover:border-blue-bright md:col-span-2 md:row-span-1">
{/*           <span className="clause-num text-[13px] text-blue-bright">6.1</span> */}
              <h3 className="mt-3 text-[20px] font-bold tracking-[-0.01em]">ISO 인증 컨설팅·거버넌스</h3>
              <p className="mt-2 max-w-md text-[14px] text-slate">
                42001·27001·27701 통합 인증 로드맵부터 심사 대응까지 하나의 흐름으로 진행합니다.
              </p>
            </div>
            <div className="rounded-sm border border-line p-8 transition-colors hover:border-blue-bright">
{/*           <span className="clause-num text-[13px] text-blue-bright">4.1</span> */}
              <h3 className="mt-3 text-[20px] font-semibold">AI 솔루션 컨설팅</h3>
              <p className="mt-2 text-[13px] text-slate">AI 도입 전 리스크와 거버넌스를 점검합니다.</p>
            </div>
            <div className="rounded-sm border border-line p-8 transition-colors hover:border-blue-bright">
{/*           <span className="clause-num text-[13px] text-blue-bright">4.2</span> */}
              <h3 className="mt-3 text-[20px] font-semibold">정보보안 관리체계</h3>
              <p className="mt-2 text-[13px] text-slate">ISO 27001 기반 보안 정책 수립부터 인증까지.</p>
            </div>
            <div className="rounded-sm border border-line p-8 transition-colors hover:border-blue-bright">
{/*           <span className="clause-num text-[13px] text-blue-bright">5.1</span> */}
              <h3 className="mt-3 text-[20px] font-semibold">개인정보보호 컨설팅</h3>
              <p className="mt-2 text-[13px] text-slate">ISO 27701 기준 처리 흐름을 문서화합니다.</p>
            </div>
            <div className="rounded-sm border border-line p-8 transition-colors hover:border-blue-bright">
{/*           <span className="clause-num text-[13px] text-blue-bright">5.2</span> */}
              <h3 className="mt-3 text-[20px] font-semibold">전자문서 관리체계</h3>
              <p className="mt-2 text-[13px] text-slate">전자 워크플로우와 보관·검증 체계를 구축합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4대 가치 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Core Values</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white p-7 transition-colors hover:bg-paper">
              <p className="text-[15px] font-semibold tracking-[-0.01em]">{v.title}</p>
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
