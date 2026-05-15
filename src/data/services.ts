import {
  IconWebDev,
  IconUIDesign,
  IconEcommerce,
  IconAPI,
  IconMobile,
  IconCMS,
} from '@/components/icons/service-icons';

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: React.FC<{ className?: string }>;
};

export const services: ServiceType[] = [
  {
    title: 'Frontend Development',
    desc: 'Responsive modern UI using React, Next.js and Tailwind CSS.',
    projects: 'React • Next.js • Tailwind CSS • TypeScript',
    icon: IconWebDev,
  },

  {
    title: 'Backend Development',
    desc: 'REST APIs and server-side logic using Node.js and Express.',
    projects: 'Node.js • Express • MongoDB • JWT Auth',
    icon: IconAPI,
  },

  {
    title: 'Full Stack Development',
    desc: 'End-to-end web application development with frontend + backend integration.',
    projects: 'React • Node.js • MongoDB • API Integration',
    icon: IconEcommerce,
  },

  {
    title: 'Database Design',
    desc: 'Designing and managing scalable MongoDB databases.',
    projects: 'MongoDB • Mongoose • Data Modeling',
    icon: IconCMS,
  },

  {
    title: 'Mobile Responsive UI',
    desc: 'Mobile-first responsive layouts using modern CSS systems.',
    projects: 'Tailwind CSS • Flexbox • Grid',
    icon: IconMobile,
  },

  {
    title: 'UI Implementation',
    desc: 'Turning Figma designs into real web interfaces.',
    projects: 'Figma • HTML • CSS • Tailwind',
    icon: IconUIDesign,
  },
];