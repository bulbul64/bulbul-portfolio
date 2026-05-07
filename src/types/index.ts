import type { ElementType } from 'react';

export type ProjectType = {
  id: string;

  imgSrc: string;
  title: string;

  projectLink: string;

  tags: {
    label: string;
    link: string;
  }[];

  detailsLink: string; // ✅ add this

  description?: string;
  techStack?: string[];
  features?: string[];
  challenges?: string[];
  futurePlans?: string[];
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: ElementType;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};