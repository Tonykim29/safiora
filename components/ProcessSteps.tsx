"use client";

import { useEffect, useRef, useState } from "react";

const PROCESS = [
  {
    num: "01",
    title: "현황 진단",
    desc: "조직의 현재 운영 방식과 문서 체계를 검토해 인증 기준과의 격차를 파악합니다.",
  },
  {
    num: "02",
    title: "갭 분석",
    desc: "국제표준 요구사항 대비 부족한 부분을 항목별로 정리하고 우선순위를 정합니다.",
  },
  {
    num: "03",
    title: "문서화·정책 수립",
    desc: "정책·절차·양식을 심사 기준에 맞게 작성하고 조직 상황에 맞게 다듬습니다.",
  },
  {
    num: "04",
    title: "심사 대응",
    desc: "심사 일정 조율부터 문서 준비, 현장 대응까지 함께 준비합니다.",
  },
  {
    num: "05",
    title: "인증 후 유지관리",
    desc: "인증 이후에도 내부심사와 문서 갱신을 통해 체계를 유지합니다.",
  },
];

export default function ProcessSteps() {
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
      {/* md 이상: 가로 스텝 — 연결선이 배지를 관통, blue-bright 선이 왼쪽부터 채워짐 */}
      <div className="relative mt-14 hidden md:block">
        <div className="absolute left-0 right-0 top-[22px] z-0 h-px bg-line" />
        <div
          className={`absolute left-0 right-0 top-[22px] z-[1] h-px origin-left bg-blue-bright transition-transform duration-[1400ms] ease-out motion-reduce:transition-none ${
            revealed ? "scale-x-100" : "scale-x-0"
          }`}
        />
        <div className="relative z-10 grid grid-cols-5 gap-6">
          {PROCESS.map((step) => (
            <div key={step.num} className="bg-paper pr-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-white">
                <span className="clause-num text-[15px] font-bold text-blue-bright">{step.num}</span>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* md 미만: 세로 타임라인 — 각 구간이 위에서 아래로 순차적으로 채워짐 */}
      <div className="mt-12 space-y-8 md:hidden">
        {PROCESS.map((step, i) => (
          <div key={step.num} className="relative flex gap-4">
            {i !== PROCESS.length - 1 && (
              <>
                <span className="absolute left-[21px] top-11 h-[calc(100%+12px)] w-px bg-line" />
                <span
                  style={{ transitionDelay: `${i * 150}ms` }}
                  className={`absolute left-[21px] top-11 h-[calc(100%+12px)] w-px origin-top bg-blue-bright transition-transform duration-700 ease-out motion-reduce:transition-none ${
                    revealed ? "scale-y-100" : "scale-y-0"
                  }`}
                />
              </>
            )}
            <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line bg-white">
              <span className="clause-num text-[15px] font-bold text-blue-bright">{step.num}</span>
            </div>
            <div className="pt-1.5">
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
