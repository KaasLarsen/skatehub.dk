export function GraffitiBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Spray splashes */}
      <svg className="absolute -left-16 top-24 h-64 w-64 opacity-[0.07]" viewBox="0 0 200 200">
        <circle cx="80" cy="100" r="70" fill="#ff2d8b" />
        <circle cx="120" cy="80" r="40" fill="#c8f542" />
        <circle cx="60" cy="60" r="25" fill="#00e5ff" />
      </svg>
      <svg className="absolute -right-10 bottom-32 h-72 w-72 opacity-[0.06]" viewBox="0 0 200 200">
        <path d="M100 20 Q160 80 140 160 Q60 140 40 80 Q70 30 100 20" fill="#c8f542" />
      </svg>
      {/* Diagonal hatch — oldschool grip tape vibe */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
        }}
      />
    </div>
  );
}

export function OldschoolDeck({ className = "w-full max-w-sm" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Deck shape — classic popsicle */}
      <path
        d="M140 20 C175 20 210 35 230 80 L245 340 C250 400 250 480 245 560 L230 640 C210 685 175 700 140 700 C105 700 70 685 50 640 L35 560 C30 480 30 400 35 340 L50 80 C70 35 105 20 140 20 Z"
        fill="#2a2a2a"
        stroke="#525252"
        strokeWidth="3"
      />
      {/* Grip tape texture */}
      <path
        d="M140 20 C175 20 210 35 230 80 L245 340 C250 400 250 480 245 560 L230 640 C210 685 175 700 140 700 C105 700 70 685 50 640 L35 560 C30 480 30 400 35 340 L50 80 C70 35 105 20 140 20 Z"
        fill="url(#grip)"
        opacity="0.5"
      />
      {/* Bottom graphic — 80s stripes */}
      <path
        d="M55 400 L225 400 L215 580 L65 580 Z"
        fill="url(#stripe)"
        opacity="0.9"
      />
      {/* Logo area */}
      <text
        x="140"
        y="480"
        textAnchor="middle"
        fill="#c8f542"
        fontSize="28"
        fontFamily="Permanent Marker, cursive"
        transform="rotate(-8 140 480)"
      >
        SHRED
      </text>
      {/* Trucks & wheels */}
      <rect x="95" y="130" width="90" height="12" rx="2" fill="#888" />
      <circle cx="115" cy="200" r="28" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="115" cy="200" r="12" fill="#c8f542" />
      <circle cx="165" cy="200" r="28" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="165" cy="200" r="12" fill="#ff2d8b" />
      <rect x="95" y="580" width="90" height="12" rx="2" fill="#888" />
      <circle cx="115" cy="650" r="28" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="115" cy="650" r="12" fill="#00e5ff" />
      <circle cx="165" cy="650" r="28" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="165" cy="650" r="12" fill="#c8f542" />
      <defs>
        <pattern id="grip" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="2" cy="2" r="0.8" fill="#000" opacity="0.3" />
        </pattern>
        <linearGradient id="stripe" x1="55" y1="400" x2="225" y2="580">
          <stop offset="0%" stopColor="#ff2d8b" />
          <stop offset="50%" stopColor="#c8f542" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
