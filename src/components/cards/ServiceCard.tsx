import type { ServiceType } from '@/types';

export default function ServiceCard({ service }: { service: ServiceType }) {
  const Icon = service.icon;

  return (
    <div className="group flex items-start justify-between rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-8 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md">
      {/* LEFT CONTENT */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
          {service.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">{service.desc}</p>

        <span className="text-sm lining-nums text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide">
          {service.projects}
        </span>
      </div>
      {/* ICON */}
      <div className="shrink-0 text-zinc-500 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
        <Icon size={32} className="opacity-80 group-hover:opacity-100 transition" />
      </div>
    </div>
  );
}
