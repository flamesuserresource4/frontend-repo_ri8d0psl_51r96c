import React from 'react';
import { Brush, Droplets, Palette, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'Deep Clean',
    desc: 'Meticulous inside-out cleaning that removes stains, odors, and buildup while preserving materials.'
  },
  {
    icon: Palette,
    title: 'Color Restore',
    desc: 'Premium recolor and touch-ups for scuffs and fade, matched to your original tone or a fresh look.'
  },
  {
    icon: Droplets,
    title: 'Hydrate & Condition',
    desc: 'Nourish leather and suede with professional-grade conditioners for softness and longevity.'
  },
  {
    icon: ShieldCheck,
    title: 'Protective Coating',
    desc: 'Water and stain-repellent barrier to keep your footwear fresh for months.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services crafted for every shoe
          </h2>
          <p className="mt-3 text-slate-600">
            From everyday sneakers to premium leather, our blue-standard care revives and protects.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-blue-100 bg-gradient-to-b from-white to-blue-50/30 p-6 hover:shadow-lg hover:shadow-blue-600/10 transition-all">
              <div className="inline-flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 p-3 ring-1 ring-inset ring-blue-200">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-blue-600 rounded-full transition-all group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
