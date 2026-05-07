"use client";

import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "../shared/SectionHeader";
import { fadeUp } from "@/styles/animations";

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
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className="mt-30 scroll-mt-10"
    >
      {/* MOBILE HEADER */}
      <div className="lg:hidden">
        <SectionHeader
          subtitle="Contact"
          title="Let's make something great together!"
        />
      </div>

      {/* LAYOUT */}
      <div className="mt-12 mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">
          <SectionHeader
            subtitle="Contact"
            title="Let's make something great together!"
          />

          {/* ICONS ADDED HERE */}
          <div className="flex items-center gap-4 mt-6 ml-5 text-xl text-zinc-500">
            <a
              href="https://github.com/bulbul64/"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shafiulla-bulbul/"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="Your Name" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Company</FieldLabel>
                  <Input placeholder="Your Company" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input type="email" placeholder="Your Email" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone</FieldLabel>
                  <Input placeholder="Your Phone" {...field} />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

          </div>

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Message</FieldLabel>
                <Textarea rows={6} placeholder="Your Message" {...field} />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <div className="flex gap-3">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>

        </form>
      </div>
    </motion.section>
  );
}