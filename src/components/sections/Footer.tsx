"use client";

import Link from "next/link";

const footerLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Resume", href: "#resume" },
  { title: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT - BRAND */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              My Logo
            </h2>

            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Frontend Developer focused on building clean, modern and user-friendly web experiences.
            </p>
          </div>

          {/* RIGHT - LINKS */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">
              Navigation
            </h3>

            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-12 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} My Logo. All rights reserved.
          </p>

          <p className="text-xs text-zinc-500">
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;