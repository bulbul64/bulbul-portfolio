'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';
// import { fadeUp } from '@/styles/animations'; // প্রয়োজন হলে ব্যবহার করুন

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  description?: string; // অপশনাল ফিল্ড
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center md:items-start text-center md:text-left "
    >
      {/* SUBTITLE (Optional) */}
      <AnimatePresence mode="wait">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 bg-blue-50/10 dark:bg-blue-900/10 font-medium"
          >
            <Sparkle size={14} className="text-blue-500 animate-pulse" />
            {subtitle}
          </motion.p>
        )}
      </AnimatePresence>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold capitalize leading-tight max-w-4xl tracking-tight"
      >
        {title}
      </motion.h1>

      {/* DESCRIPTION (Optional) */}
      <AnimatePresence mode="wait">
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-3 text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed px-4"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

      {/* BULBUL THEME DECORATIVE ELEMENT */}
      <div className="mt-4 w-12 h-px bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
