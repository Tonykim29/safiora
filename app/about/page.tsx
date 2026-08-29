import type { Metadata } from "next";
import { Banknote, Landmark, Rocket } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "회사소개 | Safiora",
  description: "Safiora의 브랜드 철학과 4대 핵심가치.",
};

const VALUES = [
  { title: "안전한 기술", desc: "신뢰할 수 있는 기술로 안전한 사회를 만듭니다." },
  { title: "지속 가능한 성장", desc: "지속 가능한 성장을 통해 미래 가치를 창출합니다." },
  { title: "인류 중심 가치", desc: "사람을 생각하는 기술로 인류의 번영에 기여합니다." },
  { title: "글로벌 파트너십", desc: "전문성과 신뢰를 바탕으로 함께 성장하는 파트너가 됩니다." },
];

const AUDIENCES = [
  {
    icon: Landmark,
    title: "공공기관",
    desc: "입찰·제안 단계부터 요구되는 정보보호 수준을 사전에 충족합니다.",
  },
  {
    icon: Banknote,
    title: "금융기관",
    desc: "엄격한 규제 환경에 맞춰 정보보안·개인정보보호 체계를 설계합니다.",
  },
  {
    icon: Rocket,
    title: "스타트업·중소기업",
    desc: "제한된 리소스 안에서도 핵심 요구사항부터 단계적으로 인증을 준비합니다.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">About</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Logo size={40} />
      </div>
      <h1 className="mt-6 max-w-xl text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[42px]">
        기술이 사람을 해치지 않도록,
        <br />
        그 경계를 설계합니다.
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate">
        Safiora는 AI, 정보보안, 개인정보보호, 전자문서, ISO 인증을 하나의 체계로 다루는 컨설팅 브랜드입니다.
        <br />
        각 영역을 따로 맡기면 생기는 틈을 없애고, 처음부터 끝까지 같은 기준으로 관리합니다.
      </p>

      <div className="mt-16 rounded-sm bg-shield-gradient px-8 py-12 text-white md:px-14">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/70">Slogan</p>
        <p className="mt-3 font-mono text-[22px] tracking-[0.06em] md:text-[28px]">
          FOR HUMAN SAFETY &amp; PROSPERITY
        </p>
      </div>

      <div className="mt-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Core Values</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white p-8 transition-colors hover:bg-paper">
              <p className="text-[20px] font-semibold tracking-[-0.01em]">{v.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Who We Work With</p>
        <div className="mt-8 divide-y divide-line border-t border-line">
          {AUDIENCES.map((a, i) => {
            const isAccent = i % 2 === 1;
            return (
              <div
                key={a.title}
                className={`flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:gap-10 ${
                  isAccent ? "sm:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 ${
                    isAccent ? "border-leaf" : "border-blue-bright"
                  }`}
                >
                  <a.icon
                    className={`h-7 w-7 ${isAccent ? "text-leaf" : "text-blue-bright"}`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <div className={isAccent ? "sm:text-right" : ""}>
                  <p className="text-[20px] font-semibold tracking-[-0.01em]">{a.title}</p>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-slate">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
