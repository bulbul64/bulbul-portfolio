

import type { ExperienceType } from '@/types';

export default function ExpCard({ edu }: { edu: ExperienceType }) {
  return (
    <div className='relative group'>
      <div className='absolute -left-7.5 top-2 size-3 bg-muted-foreground  group:hover:bg-primary rounded-full transition duration-300'></div>

      <span className='text-neutral-400 lining-nums  group-hover:text-primary transition duration-300'>
        {edu.year}
      </span>

      <h3 className='text-lg font-semibold  mb-1'>{edu.title}</h3>
      <p className='text-sm text-neutral-400'>
        Course by <span className='font-medium'>{edu.institute}</span>
      </p>

      <p className='text-sm text-neutral-400'> {edu.desc} </p>
    </div>
  );
}
