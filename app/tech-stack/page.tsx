

// app/tech-stack/page.tsx  (or skills/page.tsx — whatever you prefer)

export default function TechStackPage() {
  // You can duplicate logos if you want the loop to feel longer/smoother
  const techLogos = [
    { name: "JavaScript", src: "https://www.clipartmax.com/png/middle/150-1504620_javascript-logo.png" },
    { name: "HTML5", src: "https://cdn.freebiesupply.com/logos/thumbs/2x/html-5-logo.png" },
    { name: "CSS3", src: "https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png" },
    { name: "React", src: "https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png" },
    { name: "Next.js", src: "https://iconape.com/wp-content/png_logo_vector/next-js-logo.png" },
    { name: "TypeScript", src: "https://www.typescriptlang.org/images/branding/logo-grouping.svg" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" },
    { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" },
    { name: "Express.js", src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg" },
    { name: "Shadcn UI", src: "https://blog.nashtechglobal.com/wp-content/uploads/2025/07/ee358d91675104492e67ab441cb3898b.png" },
    { name: "Prisma", src: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fia59h9w7j10soivayn70.png" },
    { name: "Mongoose", src: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fidh4o91b5qorg9dukuor.png" },
    { name: "MongoDB", src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png" },
    { name: "PostgreSQL", src: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png" },
    // Optional: duplicate some for smoother infinite feel
    { name: "JavaScript", src: "https://www.clipartmax.com/png/middle/150-1504620_javascript-logo.png" },
    { name: "React", src: "https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png" },
    { name: "Next.js", src: "https://iconape.com/wp-content/png_logo_vector/next-js-logo.png" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-slate-50 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-950">
            Tech Stack
          </h1>
          <p className="text-xl md:text-2xl text-blue-950/80 font-medium">
            Tools & technologies I use to build fast, scalable, and beautiful web applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 mb-20">
          {techLogos.slice(0, 14).map((tech) => (  // First 14 for the static grid
            <div
              key={tech.name}
              className="group bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center aspect-square"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                <img
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-blue-950 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite Marquee / Logo Loop */}
        <div className="overflow-hidden py-10">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {techLogos.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="mx-6 md:mx-10 flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={tech.src}
                      alt={`${tech.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee whitespace-nowrap absolute top-0 left-full">
              {techLogos.map((tech, index) => (
                <div
                  key={`${tech.name}-dup-${index}`}
                  className="mx-6 md:mx-10 flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={tech.src}
                      alt={`${tech.name} logo duplicate`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supplementary Tools Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">
            Supplementary Tools I Work With
          </h2>
          <p className="text-lg text-blue-950/80 max-w-3xl mx-auto">
            Postman • HTTPie • Requestly • Vercel • Git & GitHub • VS Code • Figma • Supabase • Drizzle (exploring) • Clerk / NextAuth • Redis (caching)
          </p>
        </div>

        {/* Optional CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-blue-500 text-slate-50 font-semibold rounded-lg shadow-md hover:opacity-65 transition-opacity duration-200"
          >
            Let&apos;s Build with These Tools →
          </a>
        </div>
      </div>

      {/* Add this to your global CSS or tailwind.config (recommended) */}
      {/*
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      */}
    </section>
  );
}