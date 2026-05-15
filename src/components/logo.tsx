import Link from "next/link";

export const Logo = () => (
     <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer"
          title="BULBUL Web Dev"
        >
          {/* BULBUL SVG Logo */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* Background Circle */}
            <circle cx="100" cy="100" r="95" fill="#f8faff" className="dark:fill-zinc-900/20" />

            {/* Main Icon - Stylized B with Code Brackets */}
            <g transform="translate(100, 100)">
              {/* Outer Circle Ring */}
              <circle
                cx="0"
                cy="0"
                r="60"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Letter B (Main Icon) */}
              <path
                d="M-40 -30 L-40 30 M-25 -30 L-25 30 M-15 -30 L15 30 L15 -60 Z"
                fill="#2563eb"
              />

              {/* Code Brackets [ ] */}
              <path
                d="M-40 -50 L-35 -48 M-38 -50 L-35 -45 M-40 10 L-35 12 M-38 10 L-35 15"
                fill="none"
                stroke="#1e293b"
                strokeWidth="3"
              />
              <path
                d="M40 -50 L45 -48 M42 -50 L45 -45 M40 10 L45 12 M42 10 L45 15"
                fill="none"
                stroke="#1e293b"
                strokeWidth="3"
              />

              {/* Decorative Code Lines */}
              <path
                d="M-60 -25 H-50 V-30 H-58"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M60 -25 H50 V-30 H58"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Text Label */}
            <text
              x="100"
              y="160"
              font-family="'Segoe UI', 'Inter', sans-serif"
              fontSize="14"
              fontWeight="600"
              fill="#1e293b"
              textAnchor="middle"
              className="dark:fill-white dark:text-zinc-900/50"
            >
              BULBUL
            </text>

            <text
              x="100"
              y="175"
              font-family="'Segoe UI', 'Inter', sans-serif"
              fontSize="9"
              fill="#64748b"
              textAnchor="middle"
              className="dark:fill-zinc-400 dark:text-zinc-300/70"
            >
              Web Dev
            </text>
          </svg>

          {/* Logo Text */}
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            BULBUL
          </span>
        </Link>
);
