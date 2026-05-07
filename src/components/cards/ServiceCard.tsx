import type { ServiceType } from '@/types';

export default function ServiceCard({ service }: { service: ServiceType }) {
  const Icon = service.icon;

  return (
    <div className="group flex items-start justify-between rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-6 md:p-8 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-600">

      {/* LEFT CONTENT */}
      <div className="space-y-3">

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {service.desc}
        </p>

        {/* BADGE (REQUIREMENT FRIENDLY VISUAL) */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            {service.projects}
          </span>
        </div>

      </div>

      {/* ICON */}
      <div className="shrink-0 text-zinc-500 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
        <Icon size={34} className="opacity-80 group-hover:opacity-100 transition" />
      </div>

    </div>
  );
}