'use client';

import { testimonials } from '@/data';
import { fadeUp } from '@/styles/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, MoveRight, Sparkle, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className="mt-20 scroll-mt-10 px-4 sm:px-6 lg:px-8 pb-20"
      id="testimonials"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center md:items-start text-center md:text-left mb-8"
      >
        <motion.p
          variants={fadeUp}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 bg-blue-50/10 dark:bg-blue-900/10 font-medium"
        >
          <Sparkle size={14} className="text-blue-500 animate-pulse" /> Reviews
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize leading-tight max-w-4xl tracking-tight mt-3"
        >
          What People Say About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mt-3 px-4"
        >
          Read what my clients and colleagues have to say about working with me.
        </motion.p>
      </motion.div>

      {/* TESTIMONIAL SLIDER */}
      <div className="relative w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            layout
            className="relative overflow-hidden rounded-3xl p-1 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-zinc-900 dark:to-indigo-900/20 shadow-xl border-2 border-blue-100/50 dark:border-blue-800/30"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
              <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl" />
            </div>

            <motion.div
              layoutId={`testimonial-${currentSlide}`}
              className="relative p-6 sm:p-8 flex flex-col lg:flex-row items-start gap-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-blue-100 dark:border-blue-800/30 rounded-2xl"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <Image
                  width={80}
                  height={80}
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-800/30 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />

                {/* Status Indicator */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-linear-to-br from-green-400 to-blue-500 rounded-full border-2 border-white dark:border-zinc-800 shadow-md" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-5">
                {/* Name & Role */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {testimonials[currentSlide].name}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {testimonials[currentSlide].role}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5 text-yellow-400 shrink-0 mb-2">
                  <StarIcon size={18} fill="currentColor" />
                  <StarIcon size={18} fill="currentColor" />
                  <StarIcon size={18} fill="currentColor" />
                  <StarIcon size={18} fill="currentColor" />
                  <StarIcon size={18} fill="currentColor" />
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {testimonials[currentSlide].text}
                </p>

                {/* Project Link */}
                <a
                  href={testimonials[currentSlide].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                >
                  <span>View Project</span>
                  <MoveRight
                    size={18}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200"
                  />
                </a>
              </div>

              {/* Quote Mark Decoration */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 text-blue-500/20 dark:text-blue-400/10 pointer-events-none hidden lg:block"
              >
                <path
                  d="M89.3 17H73a12 12 0 0 1-12-12V5a12 12 0 0 1 12-12h16.3a12 12 0 0 1 12 12v10A12 12 0 0 1 89.3 17z"
                  stroke="currentColor"
                  strokeWidth={1}
                  fill="none"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 sm:mt-8 justify-center lg:justify-end">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="p-3 rounded-full border-2 border-blue-100 dark:border-blue-800/30 text-zinc-600 dark:text-zinc-400 hover:border-blue-500 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all duration-300 group"
          >
            <ChevronLeftIcon
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="p-3 rounded-full border-2 border-blue-100 dark:border-blue-800/30 text-zinc-600 dark:text-zinc-400 hover:border-blue-500 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all duration-300 group"
          >
            <ChevronRightIcon
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-2 mt-4 justify-center sm:justify-end">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-blue-600 dark:bg-blue-400 w-8 scale-110'
                  : 'bg-blue-200 dark:bg-blue-800/30 hover:bg-blue-300 dark:hover:bg-blue-700/40'
              }`}
            />
          ))}
        </div>

        {/* BULBUL DECORATIVE CORNERS */}
        <div className="absolute -top-3 -left-3 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-500 to-purple-500 dark:from-blue-900 dark:to-indigo-900 opacity-20" />
        </div>

        <div className="absolute -top-3 -right-3 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-purple-500 to-blue-500 dark:from-indigo-900 dark:to-blue-900 opacity-20" />
        </div>
      </div>
    </motion.section>
  );
}
