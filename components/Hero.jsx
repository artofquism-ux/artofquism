export default function Hero({ title, subtitle, dark }) {
  return (
    <section className={`hero ${dark ? "hero-dark" : ""}`}>
      <div className="hero-inner">

        <h1 className="hero-title">{title}</h1>

        {subtitle && (
          <p className="hero-sub">{subtitle}</p>
        )}

      </div>
    </section>
  );
}