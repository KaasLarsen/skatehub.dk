import type { ReactNode } from "react";

type Point = { x: number; y: number };

export function TrickSvgFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-hidden
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="320" height="200" fill="#12121a" rx="4" />
      {children}
    </svg>
  );
}

export function Ground({ y = 168 }: { y?: number }) {
  return (
    <>
      <line x1="16" y1={y} x2="304" y2={y} stroke="#2a2a38" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1={y + 6} x2="304" y2={y + 6} stroke="#1a1a24" strokeWidth="1" strokeDasharray="6 10" />
    </>
  );
}

export function MotionArrow({ from, to, curved = false }: { from: Point; to: Point; curved?: boolean }) {
  const path = curved
    ? `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${from.y - 28} ${to.x} ${to.y}`
    : `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  return (
    <g stroke="#00e5ff" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d={path} strokeDasharray="5 4" />
      <polygon
        points={`${to.x},${to.y} ${to.x - 7},${to.y - 4} ${to.x - 7},${to.y + 4}`}
        fill="#00e5ff"
        stroke="none"
      />
    </g>
  );
}

export function PopBurst({ x, y }: Point) {
  return (
    <g fill="#ff2d8b">
      <circle cx={x} cy={y} r="4" opacity="0.9" />
      <line x1={x - 10} y1={y} x2={x + 10} y2={y} stroke="#ff2d8b" strokeWidth="2" />
      <line x1={x} y1={y - 10} x2={x} y2={y + 10} stroke="#ff2d8b" strokeWidth="2" />
      <line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} stroke="#ff2d8b" strokeWidth="1.5" />
      <line x1={x + 7} y1={y - 7} x2={x - 7} y2={y + 7} stroke="#ff2d8b" strokeWidth="1.5" />
    </g>
  );
}

export function SkateboardSide({
  cx = 160,
  cy = 140,
  angle = 0,
  lift = 0,
}: {
  cx?: number;
  cy?: number;
  angle?: number;
  lift?: number;
}) {
  return (
    <g transform={`translate(${cx}, ${cy - lift}) rotate(${angle})`}>
      <rect x="-72" y="-7" width="144" height="14" rx="4" fill="#35353f" stroke="#c8f542" strokeWidth="2" />
      {[...Array(5)].map((_, i) => (
        <line
          key={i}
          x1={-52 + i * 22}
          y1="-3"
          x2={-52 + i * 22}
          y2="3"
          stroke="#26262e"
          strokeWidth="1"
        />
      ))}
      <rect x="-76" y="5" width="10" height="5" rx="1" fill="#555" />
      <rect x="66" y="5" width="10" height="5" rx="1" fill="#555" />
      <circle cx="-58" cy="14" r="10" fill="#1e1e26" stroke="#00e5ff" strokeWidth="2" />
      <circle cx="58" cy="14" r="10" fill="#1e1e26" stroke="#00e5ff" strokeWidth="2" />
      <circle cx="-58" cy="14" r="3" fill="#444" />
      <circle cx="58" cy="14" r="3" fill="#444" />
    </g>
  );
}

export function FootSide({
  x,
  y,
  angle = 0,
  accent = "#c8f542",
}: {
  x: number;
  y: number;
  angle?: number;
  accent?: string;
}) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <rect x="-24" y="-9" width="48" height="18" rx="6" fill="#4a4558" stroke={accent} strokeWidth="1.5" />
      <path
        d="M 8 -9 Q 24 -6 24 2 L 24 6 Q 18 9 8 9"
        fill="#5a5568"
        stroke={accent}
        strokeWidth="1"
      />
      <line x1="-8" y1="-4" x2="6" y2="-4" stroke="#6a6578" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

export function FlipArc({ x, y }: Point) {
  return (
    <path
      d={`M ${x - 36} ${y} A 36 36 0 0 1 ${x + 36} ${y}`}
      fill="none"
      stroke="#ff2d8b"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
  );
}

/** Set fra oven — god til shove-it og rotation-tricks. */
export function SkateboardTopDown({
  cx = 160,
  cy = 130,
  spin = 0,
  lift = 0,
}: {
  cx?: number;
  cy?: number;
  spin?: number;
  lift?: number;
}) {
  return (
    <g transform={`translate(${cx}, ${cy - lift}) rotate(${spin})`}>
      <rect x="-68" y="-18" width="136" height="36" rx="6" fill="#35353f" stroke="#c8f542" strokeWidth="2" />
      <ellipse cx="52" cy="0" rx="10" ry="14" fill="#2a2a32" stroke="#c8f542" strokeWidth="1.5" />
      <ellipse cx="-52" cy="0" rx="10" ry="14" fill="#2a2a32" stroke="#c8f542" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="3" fill="#555" />
      <circle cx="-28" cy="0" r="3" fill="#555" />
      <circle cx="28" cy="0" r="3" fill="#555" />
    </g>
  );
}

export function FootTopDown({
  x,
  y,
  angle = 0,
  accent = "#c8f542",
}: {
  x: number;
  y: number;
  angle?: number;
  accent?: string;
}) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
      <rect x="-14" y="-24" width="28" height="48" rx="8" fill="#4a4558" stroke={accent} strokeWidth="1.5" />
      <ellipse cx="0" cy="-18" rx="10" ry="6" fill="#5a5568" stroke={accent} strokeWidth="1" />
    </g>
  );
}

export function SpinArc({ x, y, radius = 42 }: Point & { radius?: number }) {
  return (
    <path
      d={`M ${x + radius} ${y} A ${radius} ${radius} 0 1 0 ${x - radius} ${y}`}
      fill="none"
      stroke="#00e5ff"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
  );
}

export function BmxSide({
  cx = 160,
  cy = 148,
  frontLift = 0,
  rearLift = 0,
}: {
  cx?: number;
  cy?: number;
  frontLift?: number;
  rearLift?: number;
}) {
  const frontY = cy - frontLift;
  const rearY = cy - rearLift;
  const barY = cy - 58 - (frontLift + rearLift) * 0.35;

  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <circle cx={cx + 52} cy={frontY} r="11" fill="#1e1e26" stroke="#00e5ff" strokeWidth="2" />
      <circle cx={cx - 52} cy={rearY} r="11" fill="#1e1e26" stroke="#00e5ff" strokeWidth="2" />
      <line x1={cx + 52} y1={frontY} x2={cx - 8} y2={cy - 18} stroke="#c8f542" strokeWidth="3" />
      <line x1={cx - 52} y1={rearY} x2={cx - 8} y2={cy - 18} stroke="#c8f542" strokeWidth="3" />
      <line x1={cx - 8} y1={cy - 18} x2={cx + 18} y2={cy - 34} stroke="#c8f542" strokeWidth="3" />
      <line x1={cx + 18} y1={cy - 34} x2={cx + 18} y2={barY} stroke="#888" strokeWidth="2.5" />
      <line x1={cx + 4} y1={barY} x2={cx + 32} y2={barY} stroke="#ff2d8b" strokeWidth="3" />
      <rect x={cx - 14} y={cy - 24} width="28" height="8" rx="2" fill="#35353f" stroke="#888" strokeWidth="1.5" />
      <FootSide x={cx + 8} y={cy - 10} angle={-8} accent="#00e5ff" />
      <FootSide x={cx - 22} y={cy - 6} angle={12} accent="#00e5ff" />
    </g>
  );
}
