import { FileText } from "lucide-react";

type DocumentOutlineProps = {
  docType: string;
  docCode: string;
  sections: string[];
};

const TYPE_STYLES: Record<string, string> = {
  절차서: "bg-blue-bright/10 text-blue-bright",
  지침서: "bg-leaf/10 text-leaf",
};

export default function DocumentOutline({ docType, docCode, sections }: DocumentOutlineProps) {
  const typeStyle = TYPE_STYLES[docType] ?? "bg-slate/10 text-slate";

  return (
    <div className="rounded-sm border border-line bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-sm px-2 py-1 text-[11px] font-mono uppercase tracking-[0.08em] ${typeStyle}`}
        >
          {docType}
        </span>
        <span className="rounded-sm border border-slate/30 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.1em] text-slate/70">
          Sample
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FileText className="h-5 w-5 shrink-0 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
        <h3 className="text-[15px] font-bold tracking-[-0.01em]">{docCode}</h3>
      </div>

      <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
        {sections.map((s) => {
          const isSub = /^\d+\.\d+/.test(s);
          return (
            <li key={s} className={isSub ? "pl-4 text-[13px] text-slate" : "text-[13px] font-medium text-ink"}>
              {s}
            </li>
          );
        })}
      </ul>

      <p className="mt-5 border-t border-line pt-4 text-[12px] leading-relaxed text-slate/70">
        실제 문서 목차 구조 예시이며, 조직 규모와 요구사항에 따라 세부 항목은 달라질 수 있습니다.
      </p>
    </div>
  );
}
