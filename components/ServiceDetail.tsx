import Link from "next/link";
import { FileText, type LucideIcon } from "lucide-react";

type ServiceDetailProps = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: { title: string; desc: string }[];
  audiences: string[];
  deliverables?: { category: string; items: string[] }[];
  processNote: string;
};

export default function ServiceDetail({
  icon: Icon,
  title,
  tagline,
  points,
  audiences,
  deliverables,
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

      {deliverables && (
        <div className="mt-14 border-t border-line pt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Deliverables</p>
          <h2 className="mt-4 text-[17px] font-bold tracking-[-0.01em]">제공 산출물</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {deliverables.map((d) => (
              <div
                key={d.category}
                className="rounded-sm border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="text-[15px] font-bold tracking-[-0.01em]">{d.category}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[13px] text-slate">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-slate">
            문서는 체계적인 코드 관리 체계로 식별·관리됩니다. 실제 제공 문서는 조직 규모와 준비 상태에 따라
            달라질 수 있습니다.
          </p>
        </div>
      )}

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
