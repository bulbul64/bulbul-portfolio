'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../cards/ProjectCard';
import SectionHeader from '../shared/SectionHeader';
import { projectsData } from '@/data';
import { staggerContainer } from '@/styles/animations';


export default function Projects() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10 px-4 sm:px-6 lg:px-8 pb-20"
      id="projects"
    >
      {/* SECTION HEADER */}
      <SectionHeader
        subtitle="Projects"
        title="My Featured Projects"
        // description="Explore my portfolio of web applications built with modern technologies and clean code."
      />

      {/* PROJECTS GRID */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
      >
        {projectsData.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* LOAD MORE BUTTON (OPTIONAL) */}
      {projectsData.length > 6 && (
        <div className="text-center mt-12">
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            View All Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      )}
    </motion.section>
  );
}
