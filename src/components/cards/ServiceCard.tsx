'use client';

import type { ServiceType } from '@/data/services';

export default function ServiceCard({
  service,
}: {
  service: ServiceType;
}) {
  const Icon = service.icon;

  return (
    <div className="flex items-start justify-between rounded-2xl border p-6">
      
      <div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>

        <div>
          {service.projects}
        </div>
      </div>

      <div>
        <Icon className="w-8 h-8" />
      </div>

    </div>
  );
}