import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'

const deliverables = [
  { t: 'High-Converting Website Design & Development', d: 'Bespoke design and responsive engineering built to turn traffic into qualified revenue.' },
  { t: 'Local & Global SEO for Google Rankings', d: 'Technical search optimization to dominate search results and capture high-intent local & global search traffic.' },
  { t: 'Social Media Marketing That Drives Engagement & Leads', d: 'Engagement-driven content strategies and campaigns that build trust and capture warm business leads.' },
  { t: 'Brand Identity That Builds Trust', d: 'Premium visual design and comprehensive corporate logo suites that command brand trust.' },
  { t: 'Paid Ads Strategy (Google & Social Media)', d: 'Laser-targeted Google and Meta marketing campaigns focused on traffic, scaling, and ROI.' },
  { t: 'Lead Generation Systems for Business Growth', d: 'Automated sales pipelines, CRM integrations, and lead captures that simplify client onboarding.' }
]

const values = [
  { t: 'Measurable Growth', d: 'Every design choice and campaign strategy is built to increase traffic, capture leads, and improve your ROI.' },
  { t: 'Predictable Revenue', d: 'We construct end-to-end automated pipelines that turn passive site visitors into active, paying customers.' },
  { t: 'Transparent Partnership', d: 'Clear milestone tracking, collaborative communication, and detailed analytics reports. No jargon.' },
  { t: 'Agile Delivery', d: 'We execute fast, iterate based on real performance data, and deliver scalable systems that compound in value.' }
]

export default function About() {
  return (
    <>
      <PageHeader 
        eyebrow="About Us" 
        title="Pixel Nest Creative is a results-driven digital growth agency." 
        subtitle="We help businesses build a powerful online presence and generate consistent leads." 
      />
<section className="section bg-white">
  <div className="container-x grid md:grid-cols-2 gap-12">
    <div>
      <span className="eyebrow">Who We Are</span>
      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 leading-tight">
        Pixel Nest Creative is a results-driven digital growth agency helping businesses build a powerful online presence and generate consistent leads.
      </h2>

      <p className="mt-5 text-slate-600 leading-relaxed text-lg">
        We work with startups, small businesses, and growing brands to turn their digital presence into a predictable revenue system through high-converting websites and performance marketing strategies.
      </p>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Our focus is simple: more visibility, more leads, and more sales.
      </p>

      <p className="mt-4 text-slate-600 leading-relaxed">
        We don’t just design websites or run marketing campaigns — we build complete digital systems that attract qualified customers and convert them into paying clients.
      </p>
    </div>

    <div className="grid gap-6">
      <div className="card">
        <span className="eyebrow">What We Deliver</span>
        <h3 className="text-xl font-bold text-slate-900 mt-2">
          Complete Digital Growth Solutions
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• High-Converting Website Design & Development</li>
          <li>• Local & Global SEO for Google Rankings</li>
          <li>• Social Media Marketing That Drives Engagement & Leads</li>
          <li>• Brand Identity That Builds Trust</li>
          <li>• Paid Ads Strategy (Google & Social Media)</li>
          <li>• Lead Generation Systems for Business Growth</li>
        </ul>
      </div>

      <div className="card bg-slate-50 border-slate-100">
        <span className="eyebrow text-brand-600">
          Why Businesses Choose Us
        </span>

        <h3 className="text-xl font-bold text-slate-900 mt-2">
          Measurable Growth
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Because we focus on measurable growth, not just design. Every strategy
          is built to increase traffic, generate leads, and improve ROI.
        </p>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          If you're looking to scale your business online, we're ready to help
          you grow faster and smarter.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Deliverables Section */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">What We Deliver</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Everything you need to grow faster and smarter.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map(d => (
              <div key={d.t} className="card bg-white flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">{d.t}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Values */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Our Agency Values</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">How we drive success.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.t} className="card flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-brand-600">{v.t}</h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900 text-white">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to scale your business online?</h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">We are ready to build a growth system that scales. Let's discuss your targets.</p>
          <Link to="/contact" className="btn-primary mt-7">Get a Free Growth Consultation →</Link>
        </div>
      </section>
    </>
  )
}
