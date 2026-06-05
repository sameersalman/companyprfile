import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            A digital agency crafting premium websites, apps and SaaS products that drive real business growth.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home','About','Services','Portfolio','Contact'].map(x => (
              <li key={x}><Link to={x==='Home'?'/':'/'+x.toLowerCase()} className="hover:text-white">{x}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {['Website Design & Dev','Local & Global SEO','Social Media Marketing','Brand Identity','Paid Ads Strategy','Lead Gen Systems'].map(x => (
              <li key={x}><Link to="/services" className="hover:text-white">{x}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm text-slate-400">hello@pixelnestcreative.com</p>
          <Link to="/contact" className="btn-primary mt-5 !py-2.5 !px-5 text-sm">Start a Project</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Pixel Nest Creative. All rights reserved.</p>
          <p>Crafted with precision.</p>
        </div>
      </div>
    </footer>
  )
}
