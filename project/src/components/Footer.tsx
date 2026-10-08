import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

const footerLinks = {
  services: [
    { label: 'Residential Construction', href: '#services' },
    { label: 'Commercial Construction', href: '#services' },
    { label: 'Industrial Construction', href: '#services' },
    { label: 'Turnkey Construction', href: '#services' },
    { label: 'Renovation & Remodeling', href: '#services' },
    { label: 'Project Management', href: '#services' },
  ],
  company: [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#top" className="group flex items-center gap-3">
              <Logo size={40} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <span className="block font-display text-base font-semibold tracking-tight text-white">
                  KB CONSTRUCTIONS
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-400">
                  Building Today. Defining Tomorrow.
                </span>
              </div>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-400">
              Delivering thoughtfully planned and professionally executed construction projects
              with quality workmanship and modern practices.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+910000000000" className="group flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-amber-400" />
                  +91 9876543210
                </a>
              </li>
              <li>
                <a href="mailto:info@kbconstructions.com" className="group flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-amber-400" />
                  info@kbconstructions.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 text-amber-400" />
                Ahmedabad City, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-800 py-8 md:flex-row">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} KB Constructions. All rights reserved.
          </p>
          <p className="text-xs text-ink-600">
            From a vision to a finished space — we build with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
