import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { services, portfolio, whyUs, process, testimonials } from '../data.js'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Listen to Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }

  const featuredPortfolio = [
    ...portfolio.filter(p => p.category === 'SaaS').slice(0, 2),
    ...portfolio.filter(p => p.category === 'Websites').slice(0, 3),
    ...portfolio.filter(p => p.category === 'Artwork').slice(0, 2),
    ...portfolio.filter(p => p.category === 'Logos').slice(0, 2),
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark text-white">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(circle at 15% 20%, #6366f1 0%, transparent 35%), radial-gradient(circle at 85% 70%, #ec4899 0%, transparent 35%)'}} />
        <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center py-24 lg:py-32">
          <div>
            <span className="eyebrow text-pink-300">Results-Driven Digital Growth Agency</span>
            <h1 className="h-display mt-4 text-white">
              We turn your digital presence into a <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-300 to-amber-200">predictable revenue system</span>.
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              Pixel Nest Creative helps startups, small businesses, and growing brands scale faster through high-converting websites, technical SEO, and performance marketing strategies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Start Growing Today →</Link>
              <Link to="/portfolio" className="btn-light">See Our Portfolio</Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ['3.2x','Avg ROI'],
                ['80+','Brands Scaled'],
                ['100%','Focus on Growth']
              ].map(([n,l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold text-white">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Displaying actual screenshots of projects stacked nicely in the hero */}
            <div className="aspect-square rounded-3xl bg-gradient-hero p-1 shadow-2xl shadow-indigo-500/30 rotate-2 relative group overflow-hidden">
              <div className="w-full h-full rounded-[22px] bg-ink-800 p-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-white/10 relative bg-slate-900 group">
                  <img src="/projects_images/productimage/fulldashbiardpic-CbqXUzMn.png" alt="SaaS Dashboard" className="w-full h-full object-cover object-top hover:scale-105 transition duration-300 animate-[pulse_6s_infinite_ease-in-out]" />
                  <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white font-bold transition duration-200">BitePing SaaS</div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 relative bg-slate-900 group">
                  <img src="/projects_images/luxoraweb1.png" alt="Luxora E-Commerce" className="w-full h-full object-cover object-top hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white font-bold transition duration-200">Luxora Premium</div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 relative bg-slate-900 group">
                  <img src="/projects_images/annalisecaptures1.png" alt="Annalise Portfolio" className="w-full h-full object-cover object-top hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white font-bold transition duration-200">Annalise Portfolio</div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 relative bg-slate-900 group">
                  <img src="/projects_images/lieedit1.png" alt="LieEdit Platform" className="w-full h-full object-cover object-top hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white font-bold transition duration-200">LieEdit App</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-4 shadow-xl hidden sm:block border border-slate-100">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Our Goal</div>
              <div className="font-extrabold text-lg text-brand-600">More Visibility, Leads & Sales</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-slate-900 rounded-2xl p-4 shadow-xl hidden sm:block border border-slate-100">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Conversion rate</div>
              <div className="font-extrabold text-lg text-emerald-600">★ 4.9/5 Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Agency Preview */}
      <section className="section bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">We focus on measurable growth, not just design.</h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              We work with startups, small businesses, and growing brands to turn their digital presence into a predictable revenue system through high-converting websites and performance marketing strategies.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our focus is simple: more visibility, more leads, and more sales. We don’t just design websites or run marketing campaigns — we build complete digital systems that attract qualified customers and convert them into paying clients.
            </p>
            <Link to="/about" className="btn-primary mt-7">Learn More About Us</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['Website Design','High-converting, bespoke UX'],
              ['Technical SEO','Local & global Google search dominance'],
              ['Paid Ads Strategy','ROI-focused campaign optimization'],
              ['Lead Gen Systems','Automated sales pipelines & CRMs']
            ].map(([t,s])=>(
              <div key={t} className="card flex flex-col justify-between">
                <div className="text-brand-600 text-lg font-extrabold">{t}</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeading 
            eyebrow="What We Deliver" 
            title="Services built to scale your business" 
            subtitle="From local search rankings to high-performance funnels, we provide the complete growth toolkit." 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map(s => (
              <div key={s.title} className="card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero text-white grid place-items-center text-2xl mb-5 shadow-lg shadow-indigo-500/10">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-605 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-ghost">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 40%)'}} />
        <div className="container-x relative">
          <SectionHeading 
            light 
            eyebrow="Selected Work" 
            title="Real systems. Proven outcomes." 
            subtitle="Take a look at the high-converting websites and SaaS platforms we've recently deployed." 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPortfolio.map(p => {
              const categoryStyles = {
                SaaS: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
                Websites: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
                Artwork: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
                Logos: 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }
              const badgeStyle = categoryStyles[p.category] || 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
              return (
                <div 
                  key={p.name} 
                  onClick={() => openProjectModal(p)}
                  className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 group flex flex-col h-full cursor-pointer hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:bg-slate-900/80 transition-all duration-300"
                >
                  <div className="h-44 rounded-xl overflow-hidden mb-5 bg-slate-950 relative border border-white/5 shadow-inner">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-all duration-500 ease-out" 
                    />
                    {/* Hover indicator overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 backdrop-blur-[2px]">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                        View Showcase →
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyle}`}>
                        {p.category}
                      </span>
                      <h3 className="mt-3 text-base font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors duration-200">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-slate-400 text-xs line-clamp-2 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Impact:</span>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {p.details.impact.split(',')[0]}
                        </span>
                      </div>
                      <Link 
                        to="/contact"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-full text-center text-[11px] font-bold py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-indigo-500/20 transition-all duration-200"
                      >
                        Start a Similar Project →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-light">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeading eyebrow="The Pixel Nest Difference" title="Why businesses choose us to scale" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="card flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{w.icon}</div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{w.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ink-900 text-white">
        <div className="container-x">
          <SectionHeading light eyebrow="Our Growth Framework" title="A simple, results-driven process" />
          <div className="grid md:grid-cols-4 gap-6">
            {process.map(p => (
              <div key={p.step} className="card-dark flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">{p.step}</div>
                  <h3 className="mt-3 text-lg font-bold text-white leading-snug">{p.title}</h3>
                  <p className="mt-2.5 text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Success Stories" title="Client feedback on measurable growth" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 text-sm">★★★★★</div>
                  <p className="mt-3 text-slate-700 leading-relaxed text-sm">"{t.quote}"</p>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 sm:p-16 text-white text-center">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 0%, transparent 30%), radial-gradient(circle at 80% 80%, white 0%, transparent 30%)'}} />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Ready to scale your business online?</h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
                Get a complete digital growth plan. Let's build a predictable revenue system for your brand.
              </p>
              <Link to="/contact" className="btn-light mt-8">Get a Free Growth Consultation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 text-white rounded-3xl w-full max-w-5xl shadow-2xl border border-white/5 overflow-hidden grid md:grid-cols-5 max-h-[90vh] md:max-h-[85vh] relative animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full grid place-items-center shadow-md transition z-30 font-bold text-lg border border-white/10"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* ScreenShot Gallery Area (Spans 3 cols) */}
            <div className="md:col-span-3 flex flex-col bg-slate-950 border-r border-white/5 h-[45vh] md:h-full justify-between relative group/img">
              {/* Main Image View */}
              <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-slate-950 p-2 sm:p-4">
                <img 
                  src={selectedProject.screenshots[activeImageIndex]} 
                  alt={`${selectedProject.name} Screenshot`} 
                  onClick={() => {
                    setActiveImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length)
                  }}
                  className="max-w-full max-h-[35vh] md:max-h-[60vh] object-contain rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
                />
                
                {/* Left/Right Navigation Arrows */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        setActiveImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length)
                      }}
                      className="absolute left-4 bg-slate-800/80 hover:bg-slate-700 text-white w-11 h-11 rounded-full flex items-center justify-center transition border border-white/10 opacity-0 group-hover/img:opacity-100 font-extrabold text-2xl select-none shadow-lg animate-fade-in"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => {
                        setActiveImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length)
                      }}
                      className="absolute right-4 bg-slate-800/80 hover:bg-slate-700 text-white w-11 h-11 rounded-full flex items-center justify-center transition border border-white/10 opacity-0 group-hover/img:opacity-100 font-extrabold text-2xl select-none shadow-lg animate-fade-in"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {selectedProject.screenshots.length > 1 && (
                <div className="p-3 bg-slate-900 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-thin">
                  {selectedProject.screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-12 rounded-md overflow-hidden flex-shrink-0 border-2 transition ${
                        activeImageIndex === idx ? 'border-indigo-500 scale-95' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={shot} alt="thumbnail" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Sidebar (Spans 2 cols) */}
            <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-full bg-slate-900">
              <div>
                <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">{selectedProject.category}</span>
                <h2 className="text-2xl font-extrabold text-white mt-1 leading-snug">{selectedProject.name}</h2>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">{selectedProject.desc}</p>
                
                {/* Meta details */}
                <div className="mt-6 space-y-3.5 border-t border-white/5 pt-5 text-sm">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client</div>
                    <div className="font-semibold text-slate-200 mt-0.5">{selectedProject.details.client}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scope of Work</div>
                    <div className="font-semibold text-slate-200 mt-0.5">{selectedProject.details.scope}</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Measurable Growth Impact</div>
                    <div className="font-bold text-emerald-300 mt-1 leading-relaxed text-sm">{selectedProject.details.impact}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
