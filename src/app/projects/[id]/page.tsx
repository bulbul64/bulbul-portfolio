import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, Layers3, Sparkles, Target, Rocket } from 'lucide-react';

import { projectsData } from '@/data';
import { GiThunderBlade } from 'react-icons/gi';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectsDetails({ params }: Props) {
  const { id } = await params;

  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-30 top-20 h-75 w-75 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-30 top-75 h-75 w-75 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-10">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-300 backdrop-blur">
              <Sparkles size={16} />
              Featured Project
            </div>

            {/* Title */}
            <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
              <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.tags?.map((tag) => {
                const isGithub = tag.label.toLowerCase().includes('github');

                return (
                  <Link
                    key={tag.label}
                    href={tag.link}
                    target="_blank"
                    className={`group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${
                      isGithub
                        ? 'border border-white/10 bg-white/5 hover:bg-white/10'
                        : 'bg-linear-to-r from-blue-600 to-violet-600 hover:scale-[1.03]'
                    }`}
                  >
                    {isGithub ? <GiThunderBlade size={18} /> : <ArrowUpRight size={18} />}

                    {tag.label}
                  </Link>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <Layers3 className="text-cyan-400" />
                <h2 className="text-2xl font-bold">Tech Stack</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <Image
                src={project.imgSrc}
                alt={project.title}
                width={1200}
                height={800}
                priority
                className="h-full w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Features */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-green-400" />
              <h3 className="text-2xl font-bold">Features</h3>
            </div>

            <div className="space-y-4">
              {project.features?.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <Target className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Challenges</h3>
            </div>

            <div className="space-y-4">
              {project.challenges?.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />

                  <p className="text-gray-300">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <Rocket className="text-violet-400" />
              <h3 className="text-2xl font-bold">Future Plans</h3>
            </div>

            <div className="space-y-4">
              {project.futurePlans?.map((plan) => (
                <div key={plan} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-violet-400" />

                  <p className="text-gray-300">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-linear-to-r from-blue-600/20 to-violet-600/20 p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-black md:text-4xl">Interested In This Project?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Explore the live project and check the source code to see how everything was built with
            modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {project.tags?.map((tag) => (
              <Link
                key={tag.label}
                href={tag.link}
                target="_blank"
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 transition hover:bg-white/20"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
