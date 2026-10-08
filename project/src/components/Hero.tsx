import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Construction site with tower cranes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-12 bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Residential · Commercial · Industrial · Turnkey
            </span>
          </div>

          <h1
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Building Today.
            <br />
            <span className="text-amber-400">Defining Tomorrow.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-200 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            KB Constructions delivers thoughtfully planned and professionally executed
            construction projects, combining quality workmanship, modern construction
            practices and attention to detail.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row"
            style={{ animationDelay: '0.8s' }}
          >
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 border border-ink-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              View Our Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Brand quote */}
          <div
            className="mt-16 max-w-2xl border-l-2 border-amber-400/60 pl-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '1s' }}
          >
            <p className="font-display text-lg italic leading-relaxed text-ink-300">
              &ldquo;We don&rsquo;t just construct buildings. We create spaces where ideas,
              businesses and lives can grow.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#services" className="flex flex-col items-center gap-2 text-ink-400 transition-colors hover:text-amber-400">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
        </a>
      </div>
    </section>
  );
}
