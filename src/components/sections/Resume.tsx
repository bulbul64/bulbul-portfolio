'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { education, experience } from '@/data';
import ExpCard from '../cards/ExpCard';
import { fadeUp, staggerContainer } from '@/styles/animations';
import Icons from '@/components/icons/tech-icons';

export default function Resume() {
  // ✅ Frontend ও Backend ক্যাটাগরিতে আলাদা করা হলো
  const frontendIcons = [
    { name: 'HTML', label: 'HTML5' },
    { name: 'CSS', label: 'CSS3' },
    { name: 'JavaScript', label: 'JavaScript' },
    { name: 'React', label: 'React.js' },
    { name: 'NextJS', label: 'Next.js' },
    { name: 'Tailwind', label: 'Tailwind CSS' },
  ];

  const backendIcons = [
    { name: 'NodeJS', label: 'Node.js' },
    { name: 'Express', label: 'Express.js' },
    { name: 'MongoDB', label: 'MongoDB' },
    { name: 'API', label: 'REST API' },
  ];

  const toolsIcons = [
    { name: 'Git', label: 'Git' },
    { name: 'Figma', label: 'Figma' },
    { name: 'MobileResponsive', label: 'Responsive' },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10 px-4 sm:px-6 lg:px-8 pb-20 max-w-6xl mx-auto"
      id="resume"
    >
      <SectionHeader subtitle="Resume" title="Education & Professional Journey" />

      {/* EDUCATION + EXPERIENCE */}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-semibold mb-6 text-zinc-900 dark:text-white">
            <span className="relative z-10 flex items-center gap-2">
              Education
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fbbf24"
                strokeWidth={1.5}
                className="w-6 h-6"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M9 14h.01 M14 14h.01" stroke="#7c3aed" />
              </svg>
            </span>
          </h2>

          <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800/50 pl-6">
            {education.map((edu, i) => (
              <ExpCard key={i} data={edu} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-zinc-900 dark:text-white">
            <span className="relative z-10 flex items-center gap-2">
              Experience
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fbbf24"
                strokeWidth={1.5}
                className="w-6 h-6"
              >
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M9 14h6 M12 7v10" stroke="#7c3aed" />
              </svg>
            </span>
          </h2>

          <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800/50 pl-6">
            {experience.map((exp, i) => (
              <ExpCard key={i} data={exp} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* TECH STACK SECTION */}
      <div className="my-16 mt-30">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-white"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Tech Stack
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7c3aed"
              strokeWidth={1.5}
              className="w-6 h-6"
            >
              <path d="M9 18h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
              <path d="M8 14h.01 M16 14h.01" stroke="#7c3aed" />
            </svg>
          </span>
        </motion.h2>


        {/* Frontend Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Frontend
          </h3>
          <motion.div
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {frontendIcons.map((item, i) => (
              <TechStackItem key={i} iconName={item.name} label={item.label} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Backend Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Backend
          </h3>
          <motion.div
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {backendIcons.map((item, i) => (
              <TechStackItem key={i} iconName={item.name} label={item.label} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Tools Grid */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Tools & Others
          </h3>
          <motion.div
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {toolsIcons.map((item, i) => (
              <TechStackItem key={i} iconName={item.name} label={item.label} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Tech Stack Item
interface TechStackItemProps {
  iconName: string;
  label: string;
  delay: number;
}

function TechStackItem({ iconName, label, delay }: TechStackItemProps) {
  // Add type safety and fallback for Icons
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as Record<string, React.FC<any>>)[iconName] || Icons['default'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center rounded-xl border p-4 
                 bg-linear-to-br from-white/80 via-transparent to-blue-50/10 dark:from-zinc-900/80 
                 dark:via-zinc-900/90 dark:to-indigo-900/10 backdrop-blur-sm
                 border-blue-100 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300
                 group hover:-translate-y-1 hover:border-blue-500/40 "
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.3 }}
        className="p-3 rounded-lg bg-linear-to-br from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg"
      >
        <Icon className="w-7 h-7" />
      </motion.div>

      <p className="mt-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {label}
      </p>
    </motion.div>
  );
}
