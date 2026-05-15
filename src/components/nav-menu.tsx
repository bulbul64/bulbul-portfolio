'use client';

import Link from 'next/link';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

type NavMenuProps = {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
};

type IconProps = {
  className?: string;
};

export const NavMenu = ({
  className,
  orientation = 'horizontal',
}: NavMenuProps) => {
  return (
    <nav
      aria-label="Main Navigation"
      className={`
        flex gap-1.5
        ${
          orientation === 'vertical'
            ? 'flex-col items-start'
            : 'items-center'
        }
        ${className ?? ''}
      `}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          id={item.id}
          label={item.label}
        />
      ))}
    </nav>
  );
};

// ============================================
// Individual NavItem Component
// ============================================

const NavItem = ({
  id,
  label,
}: {
  id: string;
  label: string;
}) => {
  const Icon = icons[id as keyof typeof icons] ?? IconHome;

  return (
    <Link
      href={`#${id}`}
      className="
        group relative overflow-hidden

        flex items-center gap-2
        rounded-md px-3 py-2 text-sm

        text-zinc-600 dark:text-zinc-300

        transition-all duration-200
        transform-gpu

        hover:-translate-y-0.5
        hover:bg-zinc-100
        hover:text-zinc-900

        dark:hover:bg-zinc-800/60
        dark:hover:text-white
      "
    >
      <Icon className="h-4 w-4 transition-all group-hover:stroke-2" />

      <span className="relative z-10">{label}</span>

      {/* Hover glow effect */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-blue-500/10
          to-purple-500/10
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />
    </Link>
  );
};

// ============================================
// Icons Map
// ============================================


// ============================================
// Custom SVG Icons
// ============================================

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const IconHome = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const IconProjects = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <path d="M8 8h.01" />
    <path d="M16 8h.01" />
  </svg>
);

const IconAbout = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
    <path d="M9 14h.01" />
  </svg>
);

const IconServices = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M8 7h.01" />
  </svg>
);

const IconResume = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M9 11h.01" />
    <path d="M9 14h.01" />
  </svg>
);

const IconContact = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M20 13a3 3 0 0 0-3 3" />
    <path d="M19 12h2" />
    <path d="M5 12h7" />
  </svg>
);

const icons = {
  home: IconHome,
  projects: IconProjects,
  about: IconAbout,
  services: IconServices,
  resume: IconResume,
  contact: IconContact,
};
export default NavMenu;