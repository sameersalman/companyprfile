import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { portfolio, services } from '../data.js'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
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

  const categories = ['All', ...services.map(s => s.title)]

  const filteredProjects = activeCategory === 'All'
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }

  return (
    <>
      <PageHeader 
        eyebrow="Our Portfolio" 
        title="High-converting systems we've shipped." 
        subtitle="A collection of websites, SaaS platforms, and brand identities designed to grow businesses." 
      />

      <section className="section bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 15% 15%, #6366f1 0%, transparent 45%), radial-gradient(circle at 85% 85%, #ec4899 0%, transparent 45%)'}} />
        <div className="container-x relative">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent shadow-[0_0_20px_rgba(99,102,241,0.35)] scale-105'
                    : 'bg-slate-900/60 border-white/5 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(p => {
              const categoryStyles = {
                SaaS: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
                Websites: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
                Artwork: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
                Logos: 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }
              const badgeStyle = categoryStyles[p.category] || 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
              return (
                <article 
                  key={p.name} 
                  onClick={() => openProjectModal(p)}
                  className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 group flex flex-col h-full cursor-pointer hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:bg-slate-900/80 transition-all duration-300"
                >
                  {/* Image Wrap */}
                  <div className="h-56 bg-slate-950 overflow-hidden relative rounded-xl border border-white/5 shadow-inner mb-5">
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
                  {/* Text Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyle}`}>
                        {p.category}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors duration-200">{p.name}</h3>
                      <p className="mt-2 text-slate-400 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                    </div>
                    {/* Results preview */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Key Result:</span>
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
                        className="w-full text-center text-xs font-bold py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-indigo-500/20 transition-all duration-200"
                      >
                        Start a Similar Project →
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
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
