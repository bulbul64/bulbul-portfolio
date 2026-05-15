'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Logo } from '../logo';

const footerLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Projects', href: '#projects' },
  { title: 'Resume', href: '#resume' },
  { title: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mt-24 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-24 pb-14"
    >
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1fr_auto]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Logo */}
          <Logo />

            {/* Description */}
            <p className="mt-6 max-w-md text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              Frontend developer focused on crafting clean, modern and
              user-friendly web experiences with precision, performance and
              thoughtful interaction.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/bulbul64/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <FaGithub className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/shafiulla-bulbul/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <FaLinkedin className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-6" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:items-end"
          >
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
              Navigation
            </span>

            <ul className="space-y-4 md:text-right">
              {footerLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-zinc-600 transition-all duration-300 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                  >
                    <span>{item.title}</span>

                    <svg
                      className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Card */}
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200/70 pt-8 dark:border-zinc-800/80 sm:flex-row"
        >
          <p className="text-center text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-left">
            © {new Date().getFullYear()} Bulbul. Crafted with passion for
            modern frontend development.
          </p>

          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium tracking-wide text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span>Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
    </footer>
  );
};

export default Footer;