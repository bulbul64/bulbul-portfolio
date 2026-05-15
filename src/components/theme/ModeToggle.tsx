'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

type IconProps = {
  className?: string;
  color?: string;
  size?: number;
};

const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDark = resolvedTheme === 'dark';

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" />
    );
  }

  return (
    <div className="group">
      <Button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        variant="outline"
        size="icon"
        className="
          relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 transition-all duration-300 cursor-pointer hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/60 group-hover:border-blue-400/50 dark:group-hover:border-blue-500/50"
      >
        <SunIcon size={22} color="#fbbf24" className={`absolute transition-all duration-500 ${!isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
        <MoonIcon size={22} color="#2563eb" className={`absolute transition-all duration-500 ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
      </Button>
    </div>
  );
};

const SunIcon = ({ className, color = '#fbbf24', size = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}
    >
      <circle cx="12" cy="12" r="4" fill={color} />
      <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M6.34 17.66l-1.41 1.41 M19.07 4.93l-1.41 1.41" />
    </svg>
  );
};

const MoonIcon = ({ className, color = '#2563eb', size = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <circle cx="17" cy="7" r="1" fill={color} opacity="0.5" />
    </svg>
  );
};

export default ModeToggle;
