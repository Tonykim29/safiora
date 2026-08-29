import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ServiceDetailProps = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: { title: string; desc: string }[];
  audiences: string[];
  processNote: string;
};

export default function ServiceDetail({
  icon: Icon,
  title,
  tagline,
  points,
  audiences,
  processNote,
}: ServiceDetailProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href="/services"
        className="tap-target inline-flex text-[13px] font-medium text-slate transition-colors hover:text-blue-bright"
      >
        ← 서비스 전체보기
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <Icon className="h-8 w-8 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
        <h1 className="text-[28px] font-extrabold tracking-[-0.02em] md:text-[36px]">{title}</h1>
      </div>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">{tagline}</p>

      <div className="mt-14 space-y-8 border-t border-line pt-10">
        {points.map((p) => (
          <div key={p.title}>
            <h2 className="text-[17px] font-bold tracking-[-0.01em]">{p.title}</h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">
          이런 조직에 필요합니다
        </p>
        <ul className="mt-5 space-y-3">
          {audiences.map((a) => (
            <li key={a} className="flex gap-3 text-[14px] text-slate">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-leaf" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">진행 방식</p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate">{processNote}</p>
        <Link
          href="/services#process"
          className="tap-target mt-4 inline-flex text-[13px] font-medium text-blue-bright hover:underline"
        >
          전체 진행 절차 보기 →
        </Link>
      </div>

      <div className="mt-16 rounded-sm bg-ink px-8 py-10 text-white md:px-12">
        <p className="max-w-sm text-[15px] text-white/80">지금 상태를 진단부터 시작할 수 있습니다.</p>
        <Link
          href="/contact"
          className="tap-target mt-6 inline-flex rounded-sm bg-white px-6 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
        >
          상담 문의하기
        </Link>
      </div>
    </section>
  );
}
