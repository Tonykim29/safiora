"use client";

import { useEffect, useState } from "react";

// 마우스 위치에 따른 최대 이동폭(px) — 아주 미세하게
const MAX_OFFSET = 8;

export default function HeroGlow() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return; // 마우스가 있는 데스크톱 환경에서만

    const onMouseMove = (e: MouseEvent) => {
      const relX = e.clientX / window.innerWidth - 0.5;
      const relY = e.clientY / window.innerHeight - 0.5;
      setOffset({ x: relX * MAX_OFFSET, y: relY * MAX_OFFSET });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* 래퍼가 마우스 패럴랙스를, 안쪽 블롭이 기존 drift 키프레임을 각자 맡아 두 transform이 충돌하지 않게 함 */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <div className="glow-blob animate-drift left-[-10%] top-[-20%] h-[520px] w-[520px] bg-blue-bright/30" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translate(${-offset.x * 0.6}px, ${-offset.y * 0.6}px)` }}
      >
        <div className="glow-blob animate-drift-slow right-[-15%] top-[10%] h-[420px] w-[420px] bg-leaf/20" />
      </div>
    </>
  );
}
