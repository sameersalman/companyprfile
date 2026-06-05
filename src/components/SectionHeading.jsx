export default function SectionHeading({ eyebrow, title, subtitle, light=false, center=true }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-14`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
    </div>
  )
}
