'use client';

import type { ExperienceType } from '@/types';

export default function ExpCard({ data }: { data: ExperienceType }) {
  return (
    <div className='relative group'>
      {/* ✅ FIXED: group:hover changed to group-hover 
        ✅ FIXED: -left-7.5 was invalid, changed to -left-[29px] 
        (This centers the 12px dot perfectly on the left border if parent has pl-6)
      */}
      <div className='absolute -left-7.25 top-1.5 h-3 w-3 bg-zinc-300 dark:bg-zinc-700 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition duration-300 shadow-sm border-2 border-white dark:border-zinc-900'></div>

      <span className='text-sm text-neutral-500 dark:text-neutral-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300'>
        {data.year}
      </span>

      <h3 className='text-lg font-semibold mt-1 mb-1 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
        {data.title}
      </h3>
      
      <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-2'>
        {/* If it's a job, it might be 'company' instead of 'institute'. Make sure your type supports it. */}
        At <span className='font-medium text-zinc-800 dark:text-zinc-200'>{data.institute || data.company}</span>
      </p>

      <p className='text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed'> 
        {data.desc} 
      </p>
    </div>
  );
}