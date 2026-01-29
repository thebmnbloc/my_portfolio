// app/about/page.tsx  (or wherever you keep your pages)

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-slate-50 from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 mx-auto rounded-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Hero / Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-950">
           More About Me
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-400 font-medium text-blue-950">
            Full Stack Developer crafting fast, beautiful, and scalable web experiences
          </p>
        </div>

        {/* Main content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-blue-950">
            I build modern web applications, high-converting landing pages, and powerful internal dashboards 
            that help startups move fast and established companies operate smarter.
          </p>

          <p className="text-blue-950">
            With a passion for clean code, great user experiences, and performance that feels effortless, 
            I work across the full stack — from pixel-perfect interfaces to robust APIs, databases, 
            authentication flows, and cloud infrastructure.
          </p>

          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-950">What I love building</h2>
            <ul className="grid md:grid-cols-2 gap-6 not-prose">
              {[
                "Responsive & accessible front-ends with Next.js, React & Tailwind",
                "Performant back-ends & APIs (Node.js, Express, tRPC, Next.js API routes)",
                "Modern databases — PostgreSQL, MongoDB, Supabase, PlanetScale",
                "SaaS dashboards, admin panels & internal tools",
                "High-conversion marketing sites & landing pages",
                "Authentication & user management (NextAuth.js, Clerk, Lucia)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-blue-500 p-6 rounded-xl shadow-sm border border-blue-500 hover:shadow-md transition-shadow text-slate-50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-blue-950">
            I believe the best products feel simple to users while being powerful (and maintainable) under the hood.  
            That&apos;s why I obsess over developer experience, clean architecture, type safety with TypeScript, 
            and delivering real business value — whether it&apos;s faster onboarding, higher conversions, 
            or reducing operational friction for teams.
          </p>

          <p className="text-blue-950">
            When I&apos;m not coding, you&apos;ll probably find me exploring new tech, reading about product & design, 
            playing with side projects, or enjoying a good cup of coffee while planning the next build.
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-8 text-blue-950">
            Ready to build something great together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-slate-50 font-medium rounded-lg transition-colors shadow-lg shadow-blue-200/50 dark:shadow-blue-500/50"
            >
              Let&apos;s talk →
            </a>
            <a
              href="https://github.com/thebmnbloc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-500 hover:bg-gray-100 dark:hover:bg-blue-500 font-medium rounded-lg transition-colors text-blue-950 hover:text-slate-50"
            >
              View my GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}