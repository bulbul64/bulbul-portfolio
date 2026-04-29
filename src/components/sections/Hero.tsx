'use client';

import { fadeUp, staggerContainer } from '@/styles/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { Button } from '../ui/button';

type HeroProps = {
  role: string;
};

export default function Hero({ role }: HeroProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-20"
      id="hero"
    >
      {/* SMALL TAG */}
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-62"
      >
        <SparklesIcon size={15} />
        <span>Hi, I build modern web apps</span>
      </motion.p>

      {/* MAIN TITLE WITH ANIMATION */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize md:leading-16 mt-2 max-w-3xl"
      >
        I&apos;m <span className="text-primary">Bulbul</span>,{' '} 
        <span className="inline-block relative min-w-55">
          <AnimatePresence mode="wait">
            <motion.span
              key={role}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {role}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      {/* BUTTONS */}
      <motion.div variants={fadeUp} className="mt-5 flex gap-2">
        <Button asChild>
          <a href="#projects">My projects</a>
        </Button>

        <Button variant="outline">Download CV</Button>
      </motion.div>
    </motion.section>
  );
}