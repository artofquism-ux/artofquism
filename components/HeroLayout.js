"use client";

export default function HeroLayout({
  title,
  subtitle,
  variant = "default",
}) {
  return (
    <section className={`hero hero-${variant} hero-gradient`}>
      <div className={`hero-inner hero-inner-${variant}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}