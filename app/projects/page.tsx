// app/projects/page.tsx

import Image from 'next/image';
import projects from '@/constants/projects';

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-slate-50 rounded-2xl mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-950">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-950/80 font-medium">
            A selection of web applications, dashboards, and landing pages I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aA9l9wAAAABJRU5ErkJggg==" // tiny blur placeholder
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-blue-950 mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-950/80 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 text-slate-50 font-medium rounded-lg hover:opacity-65 transition-opacity duration-200 shadow-sm"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-950 font-medium rounded-lg hover:opacity-65 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-20 text-center">
          <p className="text-xl text-blue-950/80 mb-8">
            Want to see more or discuss your next project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-blue-500 text-slate-50 font-semibold rounded-lg shadow-md hover:opacity-65 transition-opacity duration-200"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}