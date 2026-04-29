

import { motion } from 'framer-motion';

import type { ToolsType } from '@/types';

import Image from 'next/image';
import { fadeUp } from '@/styles/animations';



export default function ToolsCard({ tool }: { tool: ToolsType }) {
  return (
      <motion.div
          variants={fadeUp}
          className='border  border-neutral-700 rounded-md flex justify-center items-center flex-col py-4'
      >
          <Image
           width={60}
           height={60}
           src={tool.imgSrc} alt={tool.label} />
          
          <p className='font-bold mt-2'>{tool.label}</p>
      </motion.div>
  );
}
