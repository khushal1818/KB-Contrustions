import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14486702/pexels-photo-14486702.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
          alt="Construction crane against blue sky"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-900/70" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="reveal text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Start Your Journey
            </span>
            <div className="h-px w-10 bg-amber-400" />
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            Whether you&rsquo;re planning a new home, commercial property, industrial facility or
            complete turnkey project, let&rsquo;s discuss your vision.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-amber-500 px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-ink-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              Request a Consultation
            </a>
          </div>

          {/* Quick contact info */}
          <div className="mt-14 flex flex-col items-center gap-6 border-t border-ink-700/50 pt-10 sm:flex-row sm:justify-center sm:gap-12">
            <a href="tel:+910000000000" className="group flex items-center gap-3 text-ink-300 transition-colors hover:text-amber-400">
              <div className="flex h-10 w-10 items-center justify-center bg-ink-800 transition-colors group-hover:bg-amber-500 group-hover:text-ink-950">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">+91 9876543210</span>
            </a>
            <a href="mailto:info@kbconstructions.com" className="group flex items-center gap-3 text-ink-300 transition-colors hover:text-amber-400">
              <div className="flex h-10 w-10 items-center justify-center bg-ink-800 transition-colors group-hover:bg-amber-500 group-hover:text-ink-950">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">info@kbconstructions.com</span>
            </a>
            <div className="flex items-center gap-3 text-ink-300">
              <div className="flex h-10 w-10 items-center justify-center bg-ink-800">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Ahmedabad City, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
