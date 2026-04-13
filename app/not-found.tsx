import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="eyebrow">404</div>
      <h1 className="section-title">This page does not exist.</h1>
      <p className="lede">The route may have changed, or the link may be out of date.</p>
      <Link href="/" className="button-secondary">
        Return home
      </Link>
    </section>
  );
}