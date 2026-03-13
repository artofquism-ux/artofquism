import Link from "next/link";

export default function FeaturedGrid({ items }) {
  return (
    <section className="featured">

      <div className="featured-inner">

        <h2 className="featured-title">Featured Works</h2>

        <div className="featured-grid">

          {items.map((item, i) => (
            <Link key={i} href={item.link} className="featured-card">

              <img src={item.img} alt={item.title} />

              <div className="featured-overlay">
                <h3>{item.title}</h3>
              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}