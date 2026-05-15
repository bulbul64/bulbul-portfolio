'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Code, ExternalLink,  Star, Heart } from 'lucide-react';
import { fadeUp } from '@/styles/animations';
import { DiGithub } from 'react-icons/di';

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: Array<{ label: string; link?: string }>;
  projectLink: string;
  detailsLink: string;
  githubLink?: string;
}

export default function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  detailsLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* IMAGE */}
      <figure className="relative overflow-hidden h-72">
        <Link href={projectLink} target="_blank">
          <Image
            src={imgSrc}
            width={800}
            height={600}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </figure>

      {/* CONTENT */}
      <div className="relative p-6">
        <Link href={projectLink} target="_blank">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Link
              href={tag.link || '#'}
              key={index}
              className="px-3 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 transition"
            >
              {tag.label}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <Link
            href={detailsLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:bg-blue-50 dark:hover:bg-indigo-900/20"
          >
            <Code size={14} />
            View Details
          </Link>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:bg-blue-50"
            >
              <DiGithub size={14} />
              Code
            </a>
          )}

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:bg-blue-50"
          >
            <ExternalLink size={14} />
            Live
          </a>
        </div>

        {/* DECORATIVE ICONS */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <Heart size={14} className="text-red-500" />
        </div>

        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition">
          <Star size={14} className="text-yellow-500" />
        </div>
      </div>
    </motion.div>
  );
}