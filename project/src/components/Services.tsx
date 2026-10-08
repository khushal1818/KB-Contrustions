import { Home, Building2, Factory, Layers, Hammer, ClipboardList, ArrowRight } from 'lucide-react';
import { services } from '@/data/content';

const iconMap = {
  Home,
  Building2,
  Factory,
  Layers,
  Hammer,
  ClipboardList,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              What We Build
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-5 text-lg text-ink-500">
            From a vision to a finished space — we build with purpose across every sector.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className={`reveal reveal-delay-${index % 3 + 1} group relative overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-ink-900/10`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-amber-500 text-ink-950 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-ink-900 transition-colors group-hover:text-amber-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-amber-600">{service.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors group-hover:text-amber-600"
                  >
                    Explore {service.title.split(' ')[0]}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 w-full bg-ink-100 transition-colors duration-500 group-hover:bg-amber-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
