'use client';

import { NavMenu } from "@/components/nav-menu";
import ModeToggle from "../theme/ModeToggle";
import { Logo } from "../logo";
import { NavigationSheet } from "../navigation-sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 backdrop-blur-xl border-b border-white/10 bg-white/30 dark:bg-zinc-900/30">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">

        <Logo />

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-md p-1 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40">
            <ModeToggle />
          </div>

          <div className="md:hidden">
            <NavigationSheet />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;