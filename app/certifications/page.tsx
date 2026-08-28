import type { Metadata } from "next";
import SealStamp from "@/components/SealStamp";

export const metadata: Metadata = {
  title: "인증/자격 | Safiora",
  description: "Safiora가 보유한 ISO 예비심사원 자격 및 관련 인증 현황.",
};

const CERTS = [
  { code: "ISO/IEC 42001:2023", title: "AI 경영시스템", status: "Provisional Auditor" },
  { code: "ISO/IEC 27001:2022", title: "정보보안 경영시스템", status: "Provisional Auditor" },
  { code: "ISO/IEC 27701:2025", title: "개인정보보호 경영시스템", status: "Provisional Auditor" },
];

export default function CertificationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-blue-bright">Certifications</p>
      <h1 className="mt-4 max-w-xl text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[42px]">
        심사 기준을 아는 사람이
        <br />
        컨설팅합니다.
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate">
        아래 자격은 각 국제표준의 심사 관점에서 조직의 체계를 점검할 수 있음을 의미합니다. 컨설팅과
        문서 작성이 실제 심사 통과를 목표로 설계됩니다.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <SealStamp key={c.code} code={c.code} title={c.title} status={c.status} />
        ))}
      </div>
    </section>
  );
}
