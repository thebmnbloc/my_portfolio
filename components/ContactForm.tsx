"use client"

import { useState } from "react"

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null) 

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (res.ok) {
        setStatus('Message sent successfully!')
        e.currentTarget.reset()
      } else {
        setStatus(json.error || 'Failed to send message')
      }
    } catch {
      setStatus('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
   <div className="md:col-span-3">
            <form className="space-y-6"
             onSubmit={handleSubmit}
            >
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
                 {loading ? 'Sending...' : 'Send Message →'}
              </button>
              {status && <p className="text-center mt-4">{status}</p>}
            </form>

            <p className="mt-6 text-sm text-blue-950/70 text-center md:text-left">
              I usually reply within 24–48 hours. Looking forward to hearing from you!
            </p>
          </div>
  )
}

export default ContactForm;