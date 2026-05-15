'use client';

import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import ModeToggle from '../theme/ModeToggle';
import { Logo } from '../logo';

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 h-16
        border-b border-white/20 dark:border-white/10 
        bg-white/30 dark:bg-zinc-900/30 
        backdrop-blur-xl shadow-sm"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="rounded-md p-1 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 transition">
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
