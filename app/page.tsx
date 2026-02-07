import { CheckIcon, DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import ProjectsPage from './projects/page';
import TechStackPage from './tech-stack/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import DownloadButton from '@/components/downloadButton';

export default function HomeHero() {
  return (
    <>
    <section className="min-h-[80vh] flex items-center py-6 md:py-8 lg:py-10 px-6 md:px-12 lg:px-20 bg-slate-50 rounded-2xl">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-5 max-w-4xl">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-blue-950">
            Hi, I’m Bior Malual
            <br />
            <span className="text-blue-500">Full Stack Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-950/90 leading-relaxed font-light max-w-3xl">
            I build <span className="text-blue-500 font-medium">modern web applications</span>,{' '}
            <span className="text-blue-500 font-medium">high-converting landing pages</span> and{' '}
            <span className="text-blue-500 font-medium">powerful dashboards</span>
            <br />
            for startups and established companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 mt-4 md:mt-8">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2.5 bg-blue-500 text-slate-50 font-medium text-lg px-9 py-5 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
            >
              Check My Work
              <CheckIcon size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <DownloadButton />
          </div>
        </div>
      </div>
    </section>

    <ProjectsPage />
    <TechStackPage/>
    <AboutPage />
    <ContactPage />
    </>
  );
}