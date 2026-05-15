'use client';

import { motion } from 'framer-motion';
import type { ToolsType } from '@/types';
import { toolIconMap } from '../icons/resume-icons';

export default function ToolsCard({ tool }: { tool: ToolsType }) {
  const key = tool.label.toLowerCase().replace(/\s/g, '');

  const Icon =
    toolIconMap[key as keyof typeof toolIconMap] ?? toolIconMap.default;

  return (
    <motion.div className="group flex flex-col items-center justify-center rounded-xl border p-4 bg-white/40 dark:bg-zinc-900/40">

      <motion.div whileHover={{ scale: 1.1 }} className="p-3 rounded-lg bg-black text-white">
        <Icon className="w-8 h-8" />
      </motion.div>

      <p className="mt-2 font-semibold">{tool.label}</p>
    </motion.div>
  );
}