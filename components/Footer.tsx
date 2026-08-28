import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo size={28} mono />
            <p className="mt-4 max-w-xs font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">
              For Human Safety &amp; Prosperity
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-[13px] text-white/70 sm:grid-cols-3">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Business</p>
              <p>사업자등록번호 [등록 후 표기]</p>
              <p>대표 [성명 입력 예정]</p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Contact</p>
              <p>[이메일 입력 예정]</p>
              <p>[연락처 입력 예정]</p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Address</p>
              <p>[주소 입력 예정]</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Safiora. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white/70">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
