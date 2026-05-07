import type { ProjectType } from '@/types';

export const projectsData: ProjectType[] = [
  {
    id: 'e-commerce',

    imgSrc: '/images/project-ph-1.png',
    title: 'E-Commerce',
    projectLink: 'https://e-commerce-one-blush-82.vercel.app/',

    detailsLink: '/projects/e-commerce',

    tags: [
      {
        label: 'Live',
        link: 'https://e-commerce-one-blush-82.vercel.app/',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/bulbul64/E-commerce',
      },
    ],

    description:
      'A modern e-commerce frontend application focused on responsive UI and shopping experience.',

    techStack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'ESLint'],

    features: [
      'Responsive product listing layout',
      'Modern shopping UI',
      'Fast performance using Vite',
      'Reusable components',
      'Mobile friendly design',
    ],

    challenges: [
      'Responsive layout handling',
      'Component structure management',
      'UI consistency across pages',
    ],

    futurePlans: [
      'Add cart system',
      'Add authentication',
      'Add backend integration',
      'Improve UX flow',
    ],
  },

  {
    id: 'issues-tracker',

    imgSrc: '/images/project-ph-2.png',
    title: 'GitHub Issues Tracker',
    projectLink: 'https://issues-tracker-eight.vercel.app/',

    detailsLink: '/projects/issues-tracker',

    tags: [
      {
        label: 'Live',
        link: 'https://issues-tracker-eight.vercel.app/',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/bulbul64/issues-tracker',
      },
    ],

    description: 'A simple issue tracking tool built for learning DOM manipulation and UI logic.',

    techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],

    features: [
      'Create and manage issues',
      'Modal-based input system',
      'Dashboard view',
      'Responsive layout',
    ],

    challenges: ['DOM manipulation handling', 'Modal interaction logic', 'UI state management'],

    futurePlans: [
      'Add local storage',
      'Add filtering system',
      'Add authentication',
      'Improve UI structure',
    ],
  },

  {
    id: 'qurbanihat',

    imgSrc: '/images/project-ph-3.png',
    title: 'Qurbanihat',
    projectLink: 'https://qurbanihat-nine.vercel.app/',

    detailsLink: '/projects/qurbanihat',

    tags: [
      {
        label: 'Live',
        link: 'https://qurbanihat-nine.vercel.app/',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/bulbul64/qurbanihat',
      },
    ],

    description:
      'A livestock booking platform for Qurbani season with authentication and booking features.',

    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'React Hook Form',
      'Zod',
      'Better Auth',
    ],

    features: [
      'User authentication system',
      'Google OAuth login',
      'Animal booking system',
      'Protected routes',
      'Profile management',
      'Responsive UI',
      'Toast notifications',
    ],

    challenges: [
      'Auth flow handling',
      'Protected routing',
      'Form validation complexity',
      'Responsive dashboard UI',
    ],

    futurePlans: [
      'Admin dashboard',
      'Payment integration',
      'Booking history',
      'Search & filtering',
    ],
  },
];
