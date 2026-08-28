import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/services", label: "서비스" },
  { href: "/certifications", label: "인증/자격" },
  { href: "/about", label: "회사소개" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Safiora 홈으로 이동">
          <Logo size={30} />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] uppercase tracking-[0.08em] text-slate transition-colors hover:text-blue-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-sm bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-blue-deep"
        >
          상담 문의
        </Link>
      </div>
    </header>
  );
}
