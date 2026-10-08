import { ArrowRight, ImageOff } from 'lucide-react';

type ProjectPlaceholder = {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  scope: string;
  image: string;
};

const projects: ProjectPlaceholder[] = [
  {
    id: 'p1',
    name: 'Project Alpha',
    category: 'Residential',
    location: 'Location TBC',
    year: '2025',
    scope: 'Full construction',
    image: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p2',
    name: 'Project Beta',
    category: 'Commercial',
    location: 'Location TBC',
    year: '2025',
    scope: 'Turnkey delivery',
    image: 'https://images.pexels.com/photos/934586/pexels-photo-934586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p3',
    name: 'Project Gamma',
    category: 'Industrial',
    location: 'Location TBC',
    year: '2024',
    scope: 'Warehouse construction',
    image: 'https://images.pexels.com/photos/18709802/pexels-photo-18709802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                Featured Projects
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Spaces That Speak
              <br />
              For Themselves
            </h2>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-amber-600"
          >
            View Our Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${index + 1} group relative overflow-hidden bg-ink-950 shadow-lg transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Image / Placeholder */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                {/* Placeholder badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-ink-950/80 px-3 py-1.5 backdrop-blur-sm">
                  <ImageOff className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-[10px] uppercase tracking-wider text-ink-200">Placeholder</span>
                </div>

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-amber-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-950">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-white transition-colors group-hover:text-amber-400">
                  {project.name}
                </h3>

                <div className="mt-4 space-y-2 border-t border-ink-700/50 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-400">Location</span>
                    <span className="font-medium text-ink-100">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-400">Year</span>
                    <span className="font-medium text-ink-100">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-400">Scope of Work</span>
                    <span className="font-medium text-ink-100">{project.scope}</span>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-ink-500">
                  Project details and photographs will be updated once final information is provided.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
