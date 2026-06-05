import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'
import { services } from '../data.js'

export default function Services() {
  return (
    <>
      <PageHeader 
        eyebrow="Our Services" 
        title="Revenue growth engines built for your business." 
        subtitle="We deliver high-converting website development, performance SEO, and automated lead generation systems." 
      />
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="card">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero text-white grid place-items-center text-2xl shadow-lg shadow-indigo-500/20 mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Looking to scale your business online?</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">We are ready to build complete digital growth systems to increase traffic, generate leads, and improve ROI.</p>
          <Link to="/contact" className="btn-primary mt-7">Book a Growth Strategy Session →</Link>
        </div>
      </section>
    </>
  )
}
