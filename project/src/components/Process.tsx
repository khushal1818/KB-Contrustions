import { Search, Map, HardHat, CheckCircle2 } from 'lucide-react';
import { processSteps } from '@/data/content';

const iconMap = {
  Search,
  Map,
  HardHat,
  CheckCircle2,
};

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Construction Process
            </span>
            <div className="h-px w-10 bg-amber-500" />
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            From Idea to Reality
          </h2>
        </div>

        {/* Process steps */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 hidden h-px w-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 lg:block" />

          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${index + 1} relative flex flex-col items-center text-center`}
              >
                {/* Icon circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-ink-950 text-amber-400 shadow-xl transition-all duration-500 hover:scale-110 hover:bg-amber-500 hover:text-ink-950">
                  <Icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-ink-950">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
