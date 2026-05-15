'use client';

import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeader from '../shared/SectionHeader';
import { fadeUp } from '@/styles/animations';


type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};


export default function Contact() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });


  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
    // Add your submit logic here
    form.reset();
  };


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="relative mt-20 scroll-mt-10 px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden"
      id="contact"
    >
      {/* SECTION HEADER (Mobile Only) */}
      <div className="lg:hidden mb-10">
        <SectionHeader subtitle="Contact" title="Let's Make Something Great Together!" />
      </div>


      {/* LAYOUT */}
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        {/* LEFT SIDE - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex flex-col space-y-8"
        >
          {/* SECTION HEADER */}
          <SectionHeader subtitle="Contact Me" title="Let's Make Something Great Together!" />


          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mt-4 text-xl"
          >
            <a
              href="https://github.com/bulbul64/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-blue-500 to-purple-500 dark:from-blue-900/50 dark:to-indigo-900/50 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>


            <a
              href="https://www.linkedin.com/in/shafiulla-bulbul/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-linear-to-br from-blue-500 to-purple-500 dark:from-blue-900/50 dark:to-indigo-900/50 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>


            {/* Sparkle Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fbbf24"
              strokeWidth={1.5}
              className="w-6 h-6 shrink-0 ml-2 animate-pulse"
            >
              <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
            </svg>
          </motion.div>


          {/* CONTACT INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-4 text-sm w-full max-w-md"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-blue-900/20 dark:via-zinc-900 dark:to-indigo-900/20 backdrop-blur-sm border border-blue-100 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Email</p>
                <a href="mailto:bbb46483@gmail.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  bbb46483@gmail.com
                </a>
              </div>
            </div>


            <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-purple-50/80 via-white to-indigo-50/80 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-blue-900/20 backdrop-blur-sm border border-purple-100 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.11l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.11-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Phone</p>
                <a href="tel:+8801727527349" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  +88 01727527349
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE (FORM) */}
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 relative p-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* DECORATIVE CORNERS (Top) */}
          <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-br-2xl bg-linear-to-br from-blue-500 to-purple-500 dark:from-blue-900 dark:to-indigo-900 opacity-20" />
          </div>


          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-bl-2xl bg-linear-to-bl from-purple-500 to-blue-500 dark:from-indigo-900 dark:to-blue-900 opacity-20" />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
            {/* Name */}
            <Controller
              name="name"
              control={form.control}
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-zinc-700 dark:text-zinc-300 font-medium mb-1 inline-block">Name</FieldLabel>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-200 w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
                  />
                  <FieldError className="text-red-500 text-xs mt-1" errors={fieldState.error ? [{ message: fieldState.error.message }] : []} />
                </Field>
              )}
            />


            {/* Company */}
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-zinc-700 dark:text-zinc-300 font-medium mb-1 inline-block">Company</FieldLabel>
                  <Input
                    placeholder="Your Company (Optional)"
                    {...field}
                    className="h-12 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-200 w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
                  />
                  <FieldError className="text-red-500 text-xs mt-1" errors={fieldState.error ? [{ message: fieldState.error.message }] : []} />
                </Field>
              )}
            />
          </div>


          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            rules={{ 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-zinc-700 dark:text-zinc-300 font-medium mb-1 inline-block">Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...field}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-200 w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
                />
                <FieldError className="text-red-500 text-xs mt-1" errors={fieldState.error ? [{ message: fieldState.error.message }] : []} />
              </Field>
            )}
          />


          {/* Phone */}
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-zinc-700 dark:text-zinc-300 font-medium mb-1 inline-block">Phone</FieldLabel>
                <Input
                  type="tel"
                  placeholder="+88 01XXX-XXXXXX"
                  {...field}
                  className="h-12 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-200 w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
                />
                <FieldError className="text-red-500 text-xs mt-1" errors={fieldState.error ? [{ message: fieldState.error.message }] : []} />
              </Field>
            )}
          />


          {/* Message */}
          <Controller
            name="message"
            control={form.control}
            rules={{ required: "Message cannot be empty" }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-zinc-700 dark:text-zinc-300 font-medium mb-1 inline-block">Message</FieldLabel>
                <Textarea
                  rows={5}
                  placeholder="How can I help you?"
                  {...field}
                  className="border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-200 resize-none w-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-3"
                />
                <FieldError className="text-red-500 text-xs mt-1" errors={fieldState.error ? [{ message: fieldState.error.message }] : []} />
              </Field>
            )}
          />


          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="flex-1 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 bg-linear-to-r from-blue-600 to-purple-600 text-white border-2 border-transparent hover:border-white/20 dark:hover:border-white/10 group active:scale-95"
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              <svg
                className="w-5 h-5 inline-block ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </Button>


            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => form.reset()}
              className="py-4 sm:w-32 rounded-xl font-semibold border-blue-200 hover:border-blue-500 dark:border-zinc-700 dark:hover:border-blue-500/80 bg-white/60 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group active:scale-95"
            >
              Reset
              <svg
                className="w-4 h-4 inline-block ml-2 -rotate-45 opacity-70 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </Button>
          </motion.div>


          {/* DECORATIVE LINE */}
          <div className="hidden sm:block absolute -left-8 top-1/2 w-px h-24 -translate-y-1/2 bg-linear-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        </motion.form>
      </div>


      {/* DECORATIVE CORNERS (Bottom) */}
      <div className="absolute -bottom-4 left-4 w-20 h-20 overflow-hidden pointer-events-none -z-10">
        <div className="absolute bottom-0 left-0 w-full h-full rounded-tr-3xl bg-linear-to-br from-blue-500 to-purple-500 dark:from-blue-900 dark:to-indigo-900 opacity-10 blur-sm" />
      </div>


      <div className="absolute -bottom-4 right-4 w-20 h-20 overflow-hidden pointer-events-none -z-10">
        <div className="absolute bottom-0 right-0 w-full h-full rounded-tl-3xl bg-linear-to-bl from-purple-500 to-blue-500 dark:from-indigo-900 dark:to-blue-900 opacity-10 blur-sm" />
      </div>
    </motion.section>
  );
}
