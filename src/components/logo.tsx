import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-3 group cursor-pointer"
    title="BULBUL Web Dev"
  >
    {/* BULBUL SVG Logo */}
    <Image
      src="/favicon.svg"
      alt="BULBUL Logo"
      width={28}
      height={28}
      className="transition-transform duration-300 group-hover:scale-105 drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
    />

    {/* Logo Text */}
    <span className="text-[20px]  font-black tracking-tight text-zinc-900 dark:text-white">
      BULBUL
    </span>
  </Link>
);
