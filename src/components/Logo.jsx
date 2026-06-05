import { Link } from 'react-router-dom'

export default function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-3.5 group" aria-label="Pixel Nest Creative Home">
      <div className={`relative w-14 h-14 rounded-full overflow-hidden border shadow-lg group-hover:scale-105 transition-all duration-200 bg-white ${light ? 'border-white/20 shadow-white/5' : 'border-slate-200/85 shadow-indigo-500/5'}`}>
        <img 
          src="/projects_images/mainlogo.jpeg" 
          alt="Pixel Nest Creative Logo" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-black tracking-tight leading-none transition-colors duration-200 ${light ? 'text-white' : 'text-slate-900 group-hover:text-indigo-605'}`}>
          Pixel Nest
        </span>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 transition-colors duration-200 ${light ? 'text-slate-400' : 'text-slate-500 group-hover:text-pink-500'}`}>
          Creative
        </span>
      </div>
    </Link>
  )
}
