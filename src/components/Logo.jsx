function Logo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="promptmess"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pm-logo-bg" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#pm-logo-bg)" />
      <path
        d="M14 16h36a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H28l-9 8 1.5-8H14a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"
        fill="#0B1622"
      />
      <g stroke="#34D399" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M18 23q2.5-3 5 0t5 0 5 0 5 0 5 0" />
        <path d="M18 30q2.5 3 5 0t5 0 5 0 5 0 5 0" />
        <path d="M18 37q2.5-3 5 0t5 0 5 0" />
      </g>
    </svg>
  )
}

export default Logo
