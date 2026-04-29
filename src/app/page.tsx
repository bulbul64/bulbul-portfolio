'use client';

import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <main className="w-full flex flex-col">
          <Stats />
          <Projects />
          <About />
          <Services />
          <Resume />
          <Testimonials />
          <Contact />
          
        </main>
      </div>
    </div>
  );
}