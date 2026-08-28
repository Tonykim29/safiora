type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  mono?: boolean; // true면 워드마크를 흰색으로 (어두운 배경용)
};

export default function Logo({ size = 32, withWordmark = true, mono = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      {/* 실제 브랜드 로고 파일 (public/brand/logo.png) */}
      <img
        src="/brand/logo.png"
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
