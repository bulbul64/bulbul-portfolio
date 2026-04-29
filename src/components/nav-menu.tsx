"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  FileText,
  MessageCircle,
} from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export const NavMenu = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        let currentId: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentId = entry.target.id;
          }
        });

        if (currentId) {
          setActive(currentId);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.25,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <nav className="flex items-center gap-1">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleClick(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200
              ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                  : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
          >
            <Icon size={16} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};