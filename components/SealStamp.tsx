type SealStampProps = {
  code: string; // 예: "ISO/IEC 42001:2023"
  title: string; // 예: "AI 경영시스템"
  status: string; // 예: "Provisional Auditor"
};

export default function SealStamp({ code, title, status }: SealStampProps) {
  return (
    <div className="flex flex-col gap-6 rounded-sm border border-ink bg-white p-6">
      <p className="text-center text-[20px] font-bold tracking-[-0.01em] text-ink">{code}</p>

      <img src="/brand/logo.svg" alt="" width={90} height={98} className="mx-auto" />

      <div className="text-center">
        <p className="text-[16px] text-ink">{title}</p>
        <p className="mt-1 text-[15px] text-slate">{status}</p>
      </div>
    </div>
  );
}