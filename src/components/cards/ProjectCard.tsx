import { motion } from 'framer-motion';

import type { ProjectType } from '@/types';

import Image from 'next/image';
import { fadeUp } from '@/styles/animations';
import Link from 'next/link';

export default function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  detailsLink,
}: ProjectType) {
  return (
    <motion.div variants={fadeUp} className="relative">
      <figure className="overflow-hidden h-62.5 rounded-md">
        <a href={projectLink} target="_blank">
          <Image
            src={imgSrc}
            width={500}
            height={300}
            alt={title}
            className="rounded-md transition duration-500 hover:scale-115 w-full"
          />
        </a>
      </figure>

      <div className="absolute bottom-0 p-2 flex gap-2">
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            className="
        bg-white/80 text-gray-800
        dark:bg-zinc-800 dark:text-gray-100

        hover:bg-primary hover:text-black
        dark:hover:bg-primary dark:hover:text-black

        py-1 px-2 rounded-sm text-sm cursor-pointer

        transition-colors duration-200
      "
          >
            {tag.label}
          </Link>
        ))}

        <Link
          href={detailsLink}
          target="_blank"
          className="
      bg-white/80 text-gray-800
      dark:bg-zinc-800 dark:text-gray-100

      hover:bg-primary hover:text-black
      dark:hover:bg-primary dark:hover:text-black

      py-1 px-2 rounded-sm text-sm cursor-pointer

      transition-colors duration-200
    "
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
