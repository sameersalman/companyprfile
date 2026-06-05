import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    socialUrl: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    emailjs.send(
      'service_97kkot3',
      'template_dqw6t8x',
      {
        name:      form.name,
        email:     form.email,
        phone:     form.phone,
        subject:   form.subject,
        service:   form.service,
        socialUrl: form.socialUrl,
        message:   form.message,
      },
      'YogmmNRV9uW5zqell'
    )
    .then(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', subject: '', service: '', socialUrl: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    })
    .catch(() => {
      setLoading(false)
      setError(true)
      setTimeout(() => setError(false), 5000)
    })
  }

  const field =
    'w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition'

  const services = [
    'Website Design',
    'Website Development',
    'Mobile App Development',
    'Business Automation',
    'Local & Global SEO',
    'Content Writing',
    'Graphic Design',
    'Logo Design',
    '3D Art & Visualization',
    'UI/UX Design',
    'SaaS Development',
    'Digital Solutions',
    'Custom Software Development',
    'General Query',
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        subtitle="Tell us about your project — we typically reply within one business day."
      />
      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-5 gap-12">

          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">We'd love to hear from you.</h2>
              <p className="mt-3 text-slate-600">Whether you have a fully scoped brief or just a rough idea, we're here to help shape it.</p>
            </div>

            <div className="card">
              <div className="text-sm text-slate-500">Email</div>
              <div className="font-bold text-slate-900">hello@pixelnestcreative.com</div>
            </div>

            <div className="card">
              <div className="text-sm text-slate-500">Response Time</div>
              <div className="font-bold text-slate-900">Within 1 business day</div>
            </div>

            {/* Social links */}
            <div className="card">
              <div className="text-sm text-slate-500 mb-3">Follow Us</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/pixelnestcreatives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.063-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-pink-600 transition-colors">@pixelnestcreatives</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pixelnestcreative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A66C2] text-white shadow-sm group-hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-[#0A66C2] transition-colors">PixelNest Creative</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 card !p-8 space-y-5">

            {sent && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 text-sm">
                Thanks! Your message has been received. We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                <input required name="name" value={form.name} onChange={onChange} className={field} placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className={field} placeholder="jane@company.com" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Number *</label>
              <input required type="tel" name="phone" value={form.phone} onChange={onChange} className={field} placeholder="+92 300 0000000" />
            </div>

            {/* Subject + Service */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                <input required name="subject" value={form.subject} onChange={onChange} className={field} placeholder="Website redesign" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Enquiry *</label>
                <select required name="service" value={form.service} onChange={onChange} className={field}>
                  <option value="">Select a service...</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Social URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Social Media URL</label>
              <input type="url" name="socialUrl" value={form.socialUrl} onChange={onChange} className={field} placeholder="https://instagram.com/yourbrand or https://facebook.com/yourbrand" />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                rows="6"
                className={field}
                placeholder="Tell us about your project, goals and timeline..."
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Sending...' : 'Send Message →'}
            </button>

          </form>

        </div>
      </section>
    </>
  )
}