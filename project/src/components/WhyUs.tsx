import { ShieldCheck, Workflow, MessagesSquare, Sparkles, Users, TrendingUp } from 'lucide-react';
import { features } from '@/data/content';

const iconMap = {
  ShieldCheck,
  Workflow,
  MessagesSquare,
  Sparkles,
  Users,
  TrendingUp,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Why KB Constructions
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Quality That Shows.
            <br />
            <span className="text-amber-400">Execution You Can Trust.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            Every project represents our commitment to quality, precision and responsible execution.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-px bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.number}
                className={`reveal reveal-delay-${index % 3 + 1} group relative bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-ink-800 text-amber-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-ink-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-ink-700 transition-colors group-hover:text-amber-500/30">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
