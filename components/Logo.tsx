type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  mono?: boolean; // true면 어두운 배경용 화이트 버전 + 화이트 워드마크
};

export default function Logo({ size = 32, withWordmark = true, mono = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* 실제 브랜드 로고 — potrace로 벡터화한 SVG (public/brand) */}
      <img
        src={mono ? "/brand/logo-mono-white.svg" : "/brand/logo.svg"}
        alt="Safiora"
        width={size}
        height={size * (190 / 175)}
        style={{ width: size, height: "auto" }}
        className="shrink-0"
      />
      {withWordmark && (
        <span
          className="font-mono tracking-[0.08em] font-medium"
          style={{ fontSize: size * 0.5, color: mono ? "#FFFFFF" : "#0B1220" }}
        >
          SAFIORA
        </span>
      )}
    </div>
  );
}
