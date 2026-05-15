'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { Button } from '../ui/button';

type HeroProps = {
  role: string;
};

export default function Hero({ role }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className=""
      id="hero"
    >
      {/* TAG */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-62"
      >
        <SparklesIcon size={15} />
        <span>Hi, I build modern web apps</span>
      </motion.p>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className=" font-black relative z-10 text-xl md:text-2xl lg:text-4xl capitalize md:leading-16 mt-2 max-w-3xl"
      >
        I&apos;m <span className="text-blue-500">Bulbul</span>,
        <span className="inline-block relative whitespace-nowrap">
          <AnimatePresence mode="wait">
            <motion.span
              className="inline-block font-black relative z-10 text-xl md:text-2xl lg:text-4xl"
              key={role}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.5 }}
            >
              {role}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-5 flex gap-2"
      >
        <Button asChild>
          <a href="#projects">My projects</a>
        </Button>

        <Button asChild variant="outline">
          <a href="/cv.pdf" download>
            Download CV
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
