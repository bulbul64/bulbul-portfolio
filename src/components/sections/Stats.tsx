'use client';

import { useEffect, useState } from 'react';
import { statsData } from '@/data';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/styles/animations';
import Hero from './Hero';
import Image from 'next/image';

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
      {/* HERO SECTION */}
      <section className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div >
          <Hero role={roles[index]} />
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <Image
              src="/images/avatar.png"
              alt="Profile Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>

      {/* STATS */}
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