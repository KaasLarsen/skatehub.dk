export function SkateHubLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="48" height="48" fill="#1a1a1a" stroke="#c8f542" strokeWidth="2" />
      {/* Mini deck top-down */}
      <rect x="14" y="8" width="20" height="32" rx="10" fill="#2a2a2a" stroke="#525252" strokeWidth="1.5" />
      <line x1="24" y1="14" x2="24" y2="34" stroke="#c8f542" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />
      {/* Wheels */}
      <circle cx="12" cy="16" r="4" fill="#ff2d8b" />
      <circle cx="36" cy="16" r="4" fill="#00e5ff" />
      <circle cx="12" cy="32" r="4" fill="#c8f542" />
      <circle cx="36" cy="32" r="4" fill="#ff2d8b" />
      {/* Spray drip */}
      <path d="M8 44 Q10 40 12 44 Q14 48 8 44" fill="#c8f542" opacity="0.8" />
    </svg>
  );
}
