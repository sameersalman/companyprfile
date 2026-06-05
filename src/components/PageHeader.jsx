export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-dark text-white">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 40%), radial-gradient(circle at 80% 60%, #ec4899 0%, transparent 40%)'}} />
      <div className="container-x relative py-24 sm:py-32 text-center">
        {eyebrow && <span className="eyebrow text-pink-300">{eyebrow}</span>}
        <h1 className="h-display mt-3 text-white">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
