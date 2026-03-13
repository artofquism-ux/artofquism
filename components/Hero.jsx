export default function Hero({ title, subtitle, button, dark }) {
  return (
    <section className={dark ? "hero hero-dark" : "hero"}>
      <div className="hero-inner">

        <h1 className="hero-title">{title}</h1>

        {subtitle && (
          <p className="hero-sub">{subtitle}</p>
        )}

        {button && (
          <a href={button.link} className="hero-btn">
            {button.label}
          </a>
        )}

      </div>
    </section>
  );
}