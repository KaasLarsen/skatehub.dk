export function SkateHubLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" className="fill-orange-500" />
      <path
        d="M8 20.5c2.5-1 5-2 8-2s5.5 1 8 2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="11" cy="21" r="2.5" fill="white" />
      <circle cx="21" cy="21" r="2.5" fill="white" />
      <path d="M10 14l12-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
