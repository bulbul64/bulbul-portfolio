'use client';

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

// ============================================
// ICON: Web Development
// ============================================

export const IconWebDev = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 6h.01 M15 6h.01" stroke="#2563eb" strokeWidth={2} />
    <path d="M9 18h.01 M15 18h.01" stroke="#7c3aed" strokeWidth={2} />

    <path
      d="M14.6 6a5.97 5.97 0 0 1 3.2 1.6l-3.4 3.2M8 6v12"
      stroke="#2563eb"
    />

    <path
      d="M16 17a5.97 5.97 0 0 1-3.2 1.6l3.4 3.2"
      stroke="#7c3aed"
    />

    <path d="M4 18h9 M5 17H3" stroke="#2563eb" />
  </svg>
);

// ============================================
// ICON: UI Design
// ============================================

export const IconUIDesign = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6Z" stroke="#2563eb" />
    <path d="M7 8h4 M13 8h4" stroke="#7c3aed" />

    <circle cx="10" cy="12" r="1" fill="#fbbf24" />
    <circle cx="15" cy="16" r="1" fill="#ec4899" />
    <circle cx="18" cy="9" r="1" fill="#2563eb" />

    <path d="M7 12h10 M12 7v10" stroke="#1e293b" />
  </svg>
);

// ============================================
// ICON: Ecommerce
// ============================================

export const IconEcommerce = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2h8a4 4 0 0 1 4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke="#2563eb" />
    <circle cx="18" cy="6" r="3" fill="#2563eb" />
    <path d="M19 7v13a2 2 0 0 1-2 2H8l5-5V7h6" stroke="#7c3aed" />

    <path d="M4 9l3-3 3 3 M19 12l-3-3-3 3" stroke="#ec4899" />
  </svg>
);

// ============================================
// ICON: API
// ============================================

export const IconAPI = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="#2563eb" />

    <path d="M8 14h.01 M16 14h.01" stroke="#7c3aed" strokeWidth={2} />
    <path d="M9 11h.01 M9 17h.01" stroke="#7c3aed" strokeWidth={2} />

    <path d="M14 15h.01 M14 18h.01" stroke="#ec4899" />

    <path d="M2 16c1.5-3 5-5 7-5s5.5 2 7 5v5H2Z" stroke="#2563eb" />
  </svg>
);

// ============================================
// ICON: Mobile
// ============================================

export const IconMobile = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="#2563eb" />

    <circle cx="12" cy="7" r="1.5" fill="#2563eb" />
    <circle cx="10" cy="14" r="1" fill="#ec4899" />

    <rect x="14" y="13.5" width="2" height="2" stroke="#7c3aed" />

    <path d="M9 20v-2" stroke="#64748b" />
    <path d="M15 20v-2" stroke="#64748b" />
  </svg>
);

// ============================================
// ICON: CMS
// ============================================

export const IconCMS = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2563eb" />

    <path d="M9 14h.01 M12 14h.01 M15 14h.01 M9 17h.01 M12 17h.01 M15 17h.01" stroke="#7c3aed" />

    <path d="M16 8l-3-3v4H6L9 8l-2 5h7l3-3Z" stroke="#ec4899" fill="none" />

    <path d="M4 11h.01 M20 11h.01" stroke="#64748b" />
  </svg>
);