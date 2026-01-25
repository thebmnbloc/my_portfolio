// app/contact/page.tsx

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
          <div className="md:col-span-3">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-950 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-blue-950 placeholder:text-blue-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-950 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-blue-950 placeholder:text-blue-400"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-950 mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-5 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-blue-950 placeholder:text-blue-400 resize-none"
                  placeholder="Tell me about your project, timeline, or just say hi..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-blue-500 text-slate-50 font-semibold rounded-lg shadow-md hover:opacity-65 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Send Message →
              </button>
            </form>

            <p className="mt-6 text-sm text-blue-950/70 text-center md:text-left">
              I usually reply within 24–48 hours. Looking forward to hearing from you!
            </p>
          </div>

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
                  { name: "GitHub", href: "https://github.com/YOUR-USERNAME" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/YOUR-USERNAME" },
                  { name: "Twitter/X", href: "https://x.com/YOUR-USERNAME" },
                  { name: "Calendly", href: "https://calendly.com/YOUR-USERNAME" },
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