

import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import { education, experience, tools } from '@/data';
import ExpCard from '../cards/ExpCard';
import ToolsCard from '../cards/ToolsCard';
import { fadeUp, staggerContainer } from '@/styles/animations';


export default function Resume() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30  scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and learning journey.'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 px-5 md:px-0 leading-relaxed'
      >
        I am a self-taught Frontend Developer with a strong focus on learning and building
        real-world projects. Over the past year, I’ve been developing my skills by working on
        personal projects and exploring modern web technologies like HTML, CSS, JavaScript, React,
        and Tailwind CSS.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((edu, i) => (
              <ExpCard
                edu={edu}
                key={i}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((edu, i) => (
              <ExpCard
                edu={edu}
                key={i}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'
        >
          {tools.map((tool, i) => (
            <ToolsCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
