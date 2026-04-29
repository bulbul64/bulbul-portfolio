import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import SectionHeader from '../shared/SectionHeader';
import { fadeUp, staggerContainer } from '@/styles/animations';

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
    >
      <SectionHeader
        subtitle="About Me"
        title="Turning complex ideas into simple, user-friendly interfaces."
      />

      <motion.div
        variants={fadeUp}
        className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed"
      >
        <p className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-6">
          I&apos;m a self-taught Frontend Developer who enjoys turning ideas into clean, responsive
          and user-friendly web interfaces. My journey into programming started with curiosity, and
          over time it has become something I genuinely enjoy doing every day.
        </p>

        <p className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-6">
          I love working with modern technologies like HTML, CSS, JavaScript, React, and Tailwind
          CSS. I focus on writing clean, maintainable code and building real-world projects to
          improve my skills and problem-solving ability.
        </p>

        <p className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-6">
          Outside of coding, I enjoy exploring new technologies, learning how things work, and
          continuously improving myself. I&apos;m currently expanding my knowledge towards full
          stack development and aiming to grow as a professional developer.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }} className="mt-6">
        <Button className="px-6 py-2 rounded-xl">Contact Me</Button>
      </motion.div>
    </motion.section>
  );
}
