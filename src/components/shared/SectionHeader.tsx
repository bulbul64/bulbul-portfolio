import { fadeUp } from '@/styles/animations';
import { motion } from 'framer-motion';
import { SparkleIcon } from 'lucide-react';
import { ReactNode } from 'react';

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col items-center md:items-start text-center md:text-left px-4"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-300 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm"
      >
        <SparkleIcon size={14} />
        {subtitle}
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold capitalize leading-tight max-w-2xl"
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}