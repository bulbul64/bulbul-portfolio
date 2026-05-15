'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type IconProps = {
  className?: string;
  color?: string;
  size?: number;
};

const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="group">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="
              relative flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-full

              border border-zinc-200
              bg-zinc-100

              transition-all duration-300

              hover:bg-zinc-200

              dark:border-zinc-700
              dark:bg-zinc-800/50
              dark:hover:bg-zinc-700/60

              group-hover:border-blue-400/50
              dark:group-hover:border-blue-500/50
            "
          >
            {/* Sun Icon */}
            <SunIcon
              size={22}
              color="#2563eb"
              className={`
                absolute transition-all duration-500
                ${
                  isDark
                    ? 'scale-0 rotate-90 opacity-0'
                    : 'scale-100 rotate-0 opacity-100'
                }
              `}
            />

            {/* Moon Icon */}
            <MoonIcon
              size={22}
              color="#fbbf24"
              className={`
                absolute transition-all duration-500
                ${
                  isDark
                    ? 'scale-100 rotate-0 opacity-100'
                    : 'scale-0 -rotate-90 opacity-0'
                }
              `}
            />

            {/* Decorative Ring */}
            <div
              className="
                absolute inset-0 rounded-full
                border-2 border-zinc-200
                opacity-0 transition-opacity duration-300

                group-hover:opacity-100
                dark:border-zinc-700
              "
            />

            <span className="sr-only">Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="
            rounded-xl border border-zinc-200
            bg-white

            dark:border-zinc-700
            dark:bg-zinc-900
          "
        >
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className="
              cursor-pointer
              hover:bg-zinc-100
              dark:hover:bg-zinc-800
            "
          >
            <SunIcon
              size={16}
              color="#f59e0b"
              className="mr-2"
            />

            Light
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className="
              cursor-pointer
              hover:bg-zinc-100
              dark:hover:bg-zinc-800
            "
          >
            <MoonIcon
              size={16}
              color="#818cf8"
              className="mr-2"
            />

            Dark
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className="
              cursor-pointer
              hover:bg-zinc-100
              dark:hover:bg-zinc-800
            "
          >
            <SystemIcon
              size={16}
              className="mr-2"
            />

            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// ============================================
// Icons
// ============================================

const SunIcon = ({
  className,
  color = '#2563eb',
  size = 24,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        fill={color}
      />

      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
};

const MoonIcon = ({
  className,
  color = '#fbbf24',
  size = 24,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />

      <circle
        cx="17"
        cy="7"
        r="1"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
};

const SystemIcon = ({
  className,
  size = 24,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
      />

      <path d="M8 20h8" />
      <path d="M12 18v2" />
    </svg>
  );
};

export default ModeToggle;