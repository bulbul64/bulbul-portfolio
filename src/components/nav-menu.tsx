'use client';

import Link from "next/link";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

type IconProps = { className?: string };

const svgProps: React.SVGAttributes<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// ================= ICONS =================
const IconHome = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const IconProjects = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M4 4h16v16H4z" />
    <path d="M8 8h8M8 12h6" />
  </svg>
);

const IconAbout = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c2-4 14-4 16 0" />
  </svg>
);

const IconServices = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

const IconResume = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M6 2h9l3 3v17H6z" />
    <path d="M9 12h6M9 16h6" />
  </svg>
);

const IconContact = ({ className }: IconProps) => (
  <svg {...svgProps} className={className}>
    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
    <path d="M21 8l-9 6-9-6" />
  </svg>
);

// ================= ICON MAP (FIXED ORDER) =================
const icons = {
  home: IconHome,
  projects: IconProjects,
  about: IconAbout,
  services: IconServices,
  resume: IconResume,
  contact: IconContact,
};

// ================= NAV ITEM =================
const NavItem = ({ id, label }: { id: string; label: string }) => {
  const Icon = icons[id as keyof typeof icons] ?? IconHome;

  return (
    <Link
      href={`#${id}`}
      className="
        group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm
        font-medium text-zinc-600 dark:text-zinc-300
        hover:text-zinc-900 dark:hover:text-white
        hover:bg-zinc-100 dark:hover:bg-zinc-800/60
        transition-all duration-200
      "
    >
      <Icon className="h-4 w-4 font-black  transition-transform group-hover:scale-110" />
      <span className="font-black relative z-10">{label}</span>

      {/* glow */}
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
    </Link>
  );
};

// ================= NAV MENU =================
export const NavMenu = ({
  className,
  orientation = 'horizontal',
}: {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}) => {
  return (
    <nav
      className={`flex gap-1.5 ${
        orientation === 'vertical'
          ? 'flex-col items-start'
          : 'items-center'
      } ${className ?? ''}`}
    >
      {navItems.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </nav>
  );
};

export default NavMenu;