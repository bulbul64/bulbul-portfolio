'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import SectionHeader from '../shared/SectionHeader';
import { staggerContainer } from '@/styles/animations';
import Link from 'next/link';
// import { fadeUp, staggerContainer } from '@/styles/animations'; // প্রয়োজন হলে ব্যবহার করুন

const MotionLink = motion(Link);

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-20 scroll-mt-10 px-4 sm:px-6 lg:px-8 pb-20"
      id="about"
    >
      {/* SECTION HEADER */}
      <SectionHeader
        subtitle="About Me"
        title="Turning complex ideas into simple, user-friendly interfaces."
      />

      {/* MAIN CONTENT GRID */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* LEFT CONTENT - Text */}
        <div className="space-y-6">
          {/* PARS - Each with individual animations */}

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-white/50 via-transparent to-blue-50/10 dark:from-zinc-900/50 dark:via-zinc-900/50 dark:to-blue-900/10 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <span className="text-blue-500 text-xl mb-2 block">💡</span>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I&apos;m a self-taught Frontend Developer who enjoys turning ideas into clean,
              responsive and user-friendly web interfaces. My journey into programming started with
              curiosity, and over time it has become something I genuinely enjoy doing every day.
            </p>
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-white/50 via-transparent to-purple-50/10 dark:from-zinc-900/50 dark:via-zinc-900/50 dark:to-purple-900/10 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <span className="text-blue-500 text-xl mb-2 block">🚀</span>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I love working with modern technologies like HTML, CSS, JavaScript, React, and
              Tailwind CSS. I focus on writing clean, maintainable code and building real-world
              projects to improve my skills and problem-solving ability.
            </p>
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-white/50 via-transparent to-indigo-50/10 dark:from-zinc-900/50 dark:via-zinc-900/50 dark:to-indigo-900/10 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <span className="text-blue-500 text-xl mb-2 block">📚</span>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, learning how things work, and
              continuously improving myself. I&apos;m currently expanding my knowledge towards full
              stack development and aiming to grow as a professional developer.
            </p>
          </motion.p>

          {/* SKILLS TAGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 backdrop-blur-sm shadow-lg"
          >
            <p className="text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
              Tech Stack I Use Daily
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'React',
                'Next.js',
                'Tailwind CSS',
                'TypeScript',
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/60 dark:bg-zinc-800/60 border border-blue-100 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT - Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          {/* BULBUL THEME - CODE VISUALIZATION */}
          <motion.div
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative w-72 h-72 rounded-3xl overflow-hidden border-2 border-blue-100 dark:border-blue-900/30 shadow-xl group"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-zinc-900 dark:to-indigo-900/20" />

            {/* Code Lines Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Code Brackets */}
                  <path d="M9 6h.01 M15 6h.01" stroke="#2563eb" strokeWidth={1.5} />
                  <path d="M9 18h.01 M15 18h.01" stroke="#7c3aed" strokeWidth={1.5} />

                  {/* Code Lines */}
                  <rect
                    x="5"
                    y="8"
                    width="52"
                    height="4"
                    rx="2"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth={1}
                  />
                  <rect
                    x="5"
                    y="16"
                    width="52"
                    height="4"
                    rx="2"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth={1}
                  />
                  <rect
                    x="5"
                    y="24"
                    width="52"
                    height="4"
                    rx="2"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth={1}
                  />

                  {/* Function Curly Braces */}
                  <path
                    d="M13 6.5c0-3.2 2.6-5.7 5.7-5.7s5.7 2.6 5.7 5.7v13a5.7 5.7 0 0 1-5.7 5.7h-.1c-3.1 0-5.6-2.5-5.6-5.6"
                    stroke="#fbbf24"
                    strokeWidth={1}
                  />
                  <path
                    d="M83 6.5c0-3.2-2.6-5.7-5.7-5.7s-5.7 2.6-5.7 5.7v13a5.7 5.7 0 0 0 5.7 5.7h.1c3.1 0 5.6-2.5 5.6-5.6"
                    stroke="#fbbf24"
                    strokeWidth={1}
                  />
                </svg>
              </motion.div>
            </div>

            {/* BULBUL WATERMARK */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-70 mix-blend-overlay pointer-events-none" />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-blue-500/20" />
          </motion.div>

          {/* Floating Badge - Contact */}
          <MotionLink
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce group"
          >
            Let&apos;s Talk!
            <motion.svg
              className="w-5 h-5 inline-block ml-1 -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </MotionLink>
        </motion.div>

        {/* CONTACT BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex justify-center items-center"
        >
          <Button
            asChild
            variant="default"
            size="lg"
            className="px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-2 border-transparent hover:border-white/20 dark:hover:border-white/10 group"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get in Touch
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
          </Button>
        </motion.div>
      </motion.div>

      {/* BULBUL THEME DECORATIVE CORNERS */}
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-900 dark:to-indigo-900 opacity-20" />
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-purple-500 to-blue-500 dark:from-indigo-900 dark:to-blue-900 opacity-20" />
      </div>
    </motion.section>
  );
}
