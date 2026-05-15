'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Code, Rocket, Users, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import { staggerContainer } from '@/styles/animations';

const statsData = [
  { number: '5+', label: 'Projects Completed', icon: Code },
  { number: '1+', label: 'Years Experience', icon: Rocket },
  { number: '0+', label: 'Happy Clients', icon: Users },
  { number: '0+', label: 'Awards Won', icon: Award },
];

export default function Stats() {
  const roles = ['Frontend Developer', 'Full Stack Learner'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="
    relative overflow-hidden
    py-24 px-4 sm:px-6 lg:px-8
  "
      >
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute  rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full max-w-xl"
          >
            <Hero role={roles[index]} />
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="
          relative w-72 h-72 md:w-80 md:h-80
          rounded-[28px]
          overflow-hidden

          border border-white/10
          dark:border-white/10

          bg-white/40 dark:bg-zinc-900/40
          backdrop-blur-2xl

          shadow-2xl
          group
        "
            >
              <Image
                src="/images/avatar.png"
                alt="Bulbul Profile Photo"
                fill
                className="
            object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
              />

              {/* Overlay gradient */}
              <div
                className="
            absolute inset-0
            bg-linear-to-tr
            from-blue-500/10
            via-transparent
            to-violet-500/10
            mix-blend-overlay
          "
              />

              {/* Glow hover effect */}
              <div
                className="
            absolute inset-0
            opacity-0 group-hover:opacity-30
            transition-opacity duration-500
            bg-blue-500/20 blur-2xl
          "
              />

              {/* subtle border glow */}
              <div
                className="
            absolute inset-0
            rounded-[28px]
            ring-1 ring-white/10
          "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS GRID */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.15)}
        className="relative px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <div
              className="
                mb-4 inline-flex items-center gap-2

                rounded-full

                border border-white/10

                bg-white/5

                px-4 py-2

                text-sm text-blue-400

                backdrop-blur-xl
              "
            >
              <Sparkles size={14} />
              Quick Overview
            </div>

            <h1
              className="
                text-4xl font-black tracking-tight

                text-zinc-900
                dark:text-white
              "
            >
              My Stats
            </h1>

            <h2
              className="
                text-4xl font-black tracking-tight

                text-zinc-900
                dark:text-white
              "
            >
              By The Numbers
            </h2>
          </div>

          {/* Stats Grid */}
          <div
            className="
              grid gap-6

              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="
                  group relative overflow-hidden

                  rounded-[28px]

                  border border-white/10

                  bg-white/60
                  dark:bg-white/5

                  p-7

                  shadow-lg

                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:-translate-y-2
                  hover:border-blue-500/20

                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0

                    bg-linear-to-br
                    from-blue-500/0
                    via-cyan-400/0
                    to-violet-500/0

                    opacity-0

                    transition-opacity duration-500

                    group-hover:opacity-100

                    group-hover:from-blue-500/10
                    group-hover:to-violet-500/10
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative z-10 mb-6

                    flex h-16 w-16 items-center justify-center

                    rounded-2xl

                    bg-linear-to-br
                    from-blue-500/10
                    to-violet-500/10

                    transition-all duration-500

                    group-hover:scale-110
                  "
                >
                  <stat.icon
                    size={30}
                    className="
                      text-blue-600
                      dark:text-blue-400
                    "
                  />
                </div>

                {/* Number */}
                <h3
                  className="
                    relative z-10

                    text-5xl font-black tracking-tight

                    text-zinc-900
                    dark:text-white
                  "
                >
                  {stat.number}
                </h3>

                {/* Label */}
                <p
                  className="
                    relative z-10 mt-3

                    text-sm font-medium uppercase tracking-[0.15em]

                    text-zinc-500
                    dark:text-zinc-400
                  "
                >
                  {stat.label}
                </p>

                {/* Corner Dot */}
                <div
                  className="
                    absolute right-5 top-5

                    h-2.5 w-2.5 rounded-full

                    bg-linear-to-r
                    from-blue-500
                    to-violet-500
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
