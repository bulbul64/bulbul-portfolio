import { 
  IconHTML, 
  IconCSS, 
  IconJavaScript, 
  IconReact,
  IconWebDev,
  IconMobile,
} from '@/components/icons/resume-icons'; // আইকন ইম্পোর্ট করুন

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  icon?: React.FC<{ className?: string }>;
}

export const education: EducationItem[] = [
  {
    institution: 'Bangladesh University of Textiles',
    degree: 'Bachelor in Fashion Design',
    year: '2015 - 2019',
    icon: IconHTML,
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Digital Agency Ltd.',
    role: 'Senior Frontend Developer',
    duration: '2021 - Present',
    description: 'Developed responsive web applications using React and Next.js',
  },
];

export interface ToolItem {
  label: string;
  icon: React.FC<{ className?: string }>;
}

export const tools: ToolItem[] = [
  { label: 'HTML5', icon: IconHTML },
  { label: 'CSS3', icon: IconCSS },
  { label: 'JavaScript', icon: IconJavaScript },
  { label: 'React', icon: IconReact },
  { label: 'Next.js', icon: IconWebDev },
];

export default { education, experience, tools };
