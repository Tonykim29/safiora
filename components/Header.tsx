"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/services", label: "서비스" },
  { href: "/certifications", label: "인증/자격" },
  { href: "/about", label: "회사소개" },
  { href: "/contact", label: "문의" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 페이지 이동 시 모바일 메뉴 자동 닫힘
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 메뉴 열려있을 때 배경 스크롤 잠금 + Esc로 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Safiora 홈으로 이동">
          <Logo size={30} />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors hover:text-blue-bright ${
                  active ? "text-ink" : "text-slate"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="tap-target hidden rounded-sm bg-ink px-4 text-[14px] font-medium text-white transition-colors hover:bg-blue-deep md:inline-flex"
          >
            상담 문의
          </Link>

          {/* 모바일 메뉴 토글 — 44px 이상 터치 영역 확보 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="tap-target flex h-11 w-11 items-center justify-center rounded-sm text-ink md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 전체화면 메뉴 */}
      {open && (
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="border-t border-line bg-paper md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`tap-target block py-4 text-[16px] font-medium ${
                      active ? "text-blue-bright" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                href="/contact"
                className="tap-target block w-full justify-center rounded-sm bg-ink px-4 text-center text-[15px] font-medium text-white"
              >
                상담 문의
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
