"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BadgeCheck, BrainCircuit, FolderCheck, ShieldCheck, UserCheck } from "lucide-react";
import Logo from "./Logo";

const NODES = [
  { title: "AI 솔루션 컨설팅", icon: BrainCircuit, x: 50, y: 12 },
  { title: "정보보안 관리체계", icon: ShieldCheck, x: 86.1, y: 38.3 },
  { title: "개인정보보호 컨설팅", icon: UserCheck, x: 72.3, y: 80.7 },
  { title: "전자문서 관리체계", icon: FolderCheck, x: 27.7, y: 80.7 },
  { title: "ISO 인증 컨설팅·거버넌스", icon: BadgeCheck, x: 13.9, y: 38.3 },
];

// 브랜드 line 토큰(tailwind.config.ts의 `line`)과 동일한 값 — SVG stroke는 Tailwind 유틸이 아닌 속성이라 직접 지정
const LINE_COLOR = "#DEE3EA";

export default function ServiceHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {/* 데스크톱: 원형 허브-스포크 다이어그램 */}
      <div className="reg-frame mx-auto hidden max-w-md border border-line bg-white p-10 md:block">
        <span className="reg-tr" />
        <span className="reg-br" />

        {/* aspect-square 고정 — SVG viewBox(0~100)와 노드의 % 좌표가 항상 정확히 일치 */}
        <div className="relative aspect-square w-full">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {NODES.map((node, i) => (
              <line
                key={node.title}
                x1={50}
                y1={50}
                x2={node.x}
                y2={node.y}
                stroke={LINE_COLOR}
                strokeWidth={0.6}
                pathLength={1}
                strokeDasharray={1}
                className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
                style={{
                  strokeDashoffset: revealed ? 0 : 1,
                  transitionDelay: `${300 + i * 150}ms`,
                }}
              />
            ))}
          </svg>

          {/* 중앙 허브 */}
          <div
            className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-bright bg-white transition-all duration-500 motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
              revealed ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <Logo size={28} withWordmark={false} />
          </div>

          {/* 스포크 노드 — 클릭하면 /services로 이동 */}
          {NODES.map((node, i) => (
            <Link
              key={node.title}
              href="/services"
              aria-label={node.title}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transitionDelay: `${450 + i * 150}ms`,
              }}
              className={`tap-target absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white transition-all duration-500 hover:border-blue-bright motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                revealed ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <node.icon className="h-5 w-5 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>

      {/* 모바일: 세로 리스트 */}
      <div className="md:hidden">
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-bright bg-white transition-opacity duration-500 motion-reduce:transition-none motion-reduce:opacity-100 ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <Logo size={24} withWordmark={false} />
        </div>
        <div className="mx-auto h-6 w-px bg-line" />

        <div className="space-y-8">
          {NODES.map((node, i) => (
            <Link
              key={node.title}
              href="/services"
              style={{ transitionDelay: `${150 + i * 100}ms` }}
              className={`relative flex items-center gap-4 transition-all duration-500 motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                revealed ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {i !== NODES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[21px] top-11 h-[calc(100%+12px)] w-px bg-line"
                />
              )}
              <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-colors hover:border-blue-bright">
                <node.icon className="h-5 w-5 text-blue-bright" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium tracking-[-0.01em]">{node.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
