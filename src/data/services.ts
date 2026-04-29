import type { ServiceType } from '@/types';
import { Globe, Layers } from 'lucide-react';

export const services: ServiceType[] = [
  {
    title: 'Web Development',
    desc: 'Building responsive and interactive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.',
    projects: '1+ Personal Projects',
    icon: Globe,
  },
  {
    title: 'Frontend UI Design',
    desc: 'Creating clean, minimal, and user-friendly interfaces for web projects to improve usability.',
    projects: '1+ Personal Projects',
    icon: Layers,
  },
];