"use client";

import { useEffect, useRef, useState } from "react";

type SealStampProps = {
  code: string; // 예: "ISO/IEC 42001:2023"
  title: string; // 예: "AI 경영시스템"
  status: string; // 예: "Provisional Auditor"
};

export default function SealStamp({ code, title, status }: SealStampProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 rounded-sm border border-line bg-white p-8 text-center shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all hover:border-blue-bright hover:shadow-[0_20px_50px_-25px_rgba(59,125,221,0.45)] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative flex h-32 w-32 items-center justify-center rounded-full border-[3px] border-blue-deep ${
          visible ? "animate-stamp" : ""
        }`}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <path id={`circle-${code}`} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text fill="#12306B" fontSize="7.2" fontFamily="var(--font-space-grotesk)" letterSpacing="1.5">
            <textPath href={`#circle-${code}`} startOffset="50%" textAnchor="middle">
              {code}
            </textPath>
          </text>
        </svg>
        <svg width={34} height={34} viewBox="0 0 48 48" fill="none">
          <path
            d="M24 4L6 10.5V22C6 33.5 13.6 42.2 24 45C34.4 42.2 42 33.5 42 22V10.5L24 4Z"
            fill="#12306B"
          />
          <g transform="rotate(16 24 24)" opacity={0.95}>
            <path
              d="M24 13.5C29.5 17 29.8 30 24 34.5C18.2 30 18.5 17 24 13.5Z"
              fill="none"
              stroke="#F5F7FA"
              strokeWidth="1.5"
            />
            <path d="M24 16V32" stroke="#F5F7FA" strokeWidth="1.1" strokeLinecap="round" />
            <path
              d="M24 20.5L20.8 23.5M24 26.5L27.2 29.2"
              stroke="#F5F7FA"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <div>
        <p className="font-semibold text-ink">{title}</p>
        <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-leaf">{status}</p>
      </div>
    </div>
  );
}
