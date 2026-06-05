import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container-x text-center py-24">
        <div className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-hero">404</div>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary mt-7">Go Home</Link>
      </div>
    </section>
  )
}
