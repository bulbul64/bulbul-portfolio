'use client';

import { useEffect, useState } from 'react';
import { statsData } from '@/data';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/styles/animations';
import Hero from './Hero';

const roles = ['Frontend Developer', 'Full Stack Learner'];

export default function Stats() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO (UPDATED) */}
      <Hero role={roles[index]} />

      {/* STATS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.2)}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="rounded-2xl flex flex-col justify-center items-center py-8 px-6 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm"
          >
            <p className="text-4xl font-bold tracking-tight lining-nums">
              {stat.number}
            </p>

            <p className="mt-2 text-zinc-600 dark:text-zinc-300 capitalize font-medium tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}