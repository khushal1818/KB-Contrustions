import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Logo size={44} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <div className="hidden sm:block">
            <span className="block font-display text-lg font-semibold tracking-tight text-white">
              KB CONSTRUCTIONS
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-400">
              Building Today. Defining Tomorrow.
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-ink-200 transition-colors hover:text-amber-400"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-amber-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-400"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="mx-4 mt-3 flex flex-col gap-1 bg-ink-900 p-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-ink-700/50 px-4 py-3 text-sm font-medium text-ink-200 transition-colors hover:text-amber-400"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 opacity-40" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-amber-500 px-5 py-3 text-sm font-semibold text-ink-950"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
