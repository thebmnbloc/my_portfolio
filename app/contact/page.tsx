

// app/contact/page.tsx

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-slate-50 mx-auto rounded-2xl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-950">
            Let&apos;s Build Something Great
          </h1>
          <p className="text-xl md:text-2xl text-blue-950/80 font-medium">
            Got a project in mind? Drop me a message — I&apos;d love to chat!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info / Alternative ways */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4 text-blue-950/90">
                <p className="flex items-center gap-3">
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:info@thebmnbloc.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    info@thebmnbloc.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Based in:</span>
                  <span>South Sudan (remote)</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Availability:</span>
                  <span>Open for new projects • Jan–Mar 2026</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/thebmnbloc" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/bior-malual-3bb284264/" },
                  { name: "Twitter/X", href: "https://x.com/Thebmnbloc" },
                  { name: "Calendly", href: "https://calendly.com/app/personal/profile" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white border border-blue-200 rounded-lg text-blue-950 hover:border-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual inspiration break (optional) */}
        <div className="mt-20 text-center">
          <p className="text-blue-950/60 italic text-lg">
            "The best projects start with a simple conversation."
          </p>
        </div>
      </div>
    </section>
  );
}