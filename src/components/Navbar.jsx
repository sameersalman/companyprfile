import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/85 backdrop-blur border-b border-slate-200' : 'bg-white/0'}`}>
      <div className="container-x flex items-center justify-between h-18 py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'}
              className={({isActive}) => `px-4 py-2 rounded-full text-sm font-semibold transition ${isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-700 hover:text-brand-600'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-3 !py-2 !px-5 text-sm">Get a Quote</Link>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-slate-300">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18"/> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={()=>setOpen(false)}
                className={({isActive}) => `px-4 py-3 rounded-lg font-semibold ${isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-700'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={()=>setOpen(false)} className="btn-primary mt-2">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}
