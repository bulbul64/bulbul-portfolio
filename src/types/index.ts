import type { ElementType } from 'react';

/* ================= PROJECT ================= */
export type ProjectType = {
  id: string;
  imgSrc: string;
  title: string;
  projectLink: string;

  tags: {
    label: string;
    link: string;
  }[];

  detailsLink: string;

  description?: string;
  techStack?: string[];
  features?: string[];
  challenges?: string[];
  futurePlans?: string[];
};

/* ================= EXPERIENCE ================= */
export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
  company?: string;
  role?: string;
  duration?: string;
};

/* ================= SERVICE ================= */
export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: ElementType; // ✔️ এখানে icon function/component যাবে
};

/* ================= TOOLS ================= */
export type ToolsType = {
  label: string;
  icon: React.FC<{ className?: string }>;
};

/* ================= STATS ================= */
export type StatsType = {
  number: string;
  label: string;
};

/* ================= TESTIMONIAL ================= */
export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

/* ================= LINKS ================= */
export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};