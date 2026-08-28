type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  mono?: boolean; // true면 단색(어두운 배경용 흰색 등)
};

export default function Logo({ size = 32, withWordmark = true, mono = false }: LogoProps) {
  const gradId = "safiora-shield-grad";
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#12306B" />
            <stop offset="100%" stopColor="#2F6FCB" />
          </linearGradient>
        </defs>
        {/* 방패 */}
        <path
          d="M24 4L6 10.5V22C6 33.5 13.6 42.2 24 45C34.4 42.2 42 33.5 42 22V10.5L24 4Z"
          fill={mono ? "currentColor" : `url(#${gradId})`}
        />
        {/* 잎 - 방패 안쪽 안전/지속가능성 상징. 살짝 기울여 역동감, 잎맥 분기로 디테일 */}
        <g transform="rotate(16 24 24)" opacity={mono ? 0.4 : 0.95}>
          <path
            d="M24 13.5C29.5 17 29.8 30 24 34.5C18.2 30 18.5 17 24 13.5Z"
            fill="none"
            stroke={mono ? "#0B1220" : "#F5F7FA"}
            strokeWidth="1.5"
          />
          <path
            d="M24 16V32"
            stroke={mono ? "#0B1220" : "#F5F7FA"}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M24 20.5L20.8 23.5M24 26.5L27.2 29.2"
            stroke={mono ? "#0B1220" : "#F5F7FA"}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      </svg>
      {withWordmark && (
        <span
          className="font-mono tracking-[0.08em] font-medium"
          style={{ fontSize: size * 0.5, color: mono ? "currentColor" : "#0B1220" }}
        >
          SAFIORA
        </span>
      )}
    </div>
  );
}
