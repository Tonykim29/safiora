type SealStampProps = {
  code: string; // 예: "ISO/IEC 42001:2023"
  title: string; // 예: "AI 경영시스템"
  status: string; // 예: "Provisional Auditor"
  accent?: "blue" | "leaf"; // 표준별 미세한 색 구분 — blue가 기본(주력), leaf는 보조 포인트
};

export default function SealStamp({ code, title, status, accent = "blue" }: SealStampProps) {
  const ringClass = accent === "leaf" ? "border-leaf" : "border-blue-bright";
  return (
    <div className="flex flex-col gap-6 rounded-sm border border-ink bg-white p-6">
      <p className="text-center text-[20px] font-bold tracking-[-0.01em] text-ink">{code}</p>

      <span
        className={`mx-auto flex h-[106px] w-[106px] items-center justify-center rounded-full border-2 ${ringClass} p-2`}
      >
        <img src="/brand/logo.svg" alt="" width={90} height={98} />
      </span>

      <div className="text-center">
        <p className="text-[16px] text-ink">{title}</p>
        <p className="mt-1 text-[15px] text-slate">{status}</p>
      </div>
    </div>
  );
}