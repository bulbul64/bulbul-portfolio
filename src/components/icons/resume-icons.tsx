'use client';

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const THEME = {
  primary: '#2563eb',
  secondary: '#7c3aed',
  accent: '#fbbf24',
  pink: '#ec4899',
  dark: '#1e293b',
  lightGray: '#64748b',
};

// Icons (only showing sample structure, your full icons stay same)
export const IconHTML = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M9 6h.01" stroke={THEME.primary} />
  </svg>
);

export const IconCSS = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 19v-8" stroke={THEME.primary} />
  </svg>
);

// ✔️ clean registry (NO default export object)
export const toolIconMap = {
  html: IconHTML,
  css: IconCSS,
  javascript: IconHTML,
  react: IconHTML,
  tailwind: IconHTML,
  nodejs: IconHTML,
  express: IconHTML,
  mongodb: IconHTML,
  git: IconHTML,
  api: IconHTML,

  default: IconHTML,
} as const;