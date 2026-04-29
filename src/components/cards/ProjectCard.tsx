import { motion } from 'framer-motion';

import type { ProjectType } from '@/types';

import Image from 'next/image';
import { fadeUp } from '@/styles/animations';


export default function ProjectCard({ imgSrc, title, tags , projectLink }: ProjectType) {
    return <motion.div variants={fadeUp} className='relative'>
        <figure className='overflow-hidden h-62.5 rounded-md'>
        <a href={projectLink} target='_blank'>
            <Image src={imgSrc}
                width={500}
                height={300}
                alt={title}
                className='rounded-md transition duration-500 hover:scale-115 w-full'
                />
                </a>
        </figure>

        <div className="absolute bottom-0 p-2 flex gap-2">
            {tags.map((tag, index) => (
                <span key={index} className='bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer'>{tag}</span>
            ))}
        </div>
  </motion.div>;
}
