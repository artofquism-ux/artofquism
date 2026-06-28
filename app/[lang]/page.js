
import Link from "next/link";
import Reveal from "@/components/Reveal";
import content from "@/app/content";


export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  const t = content[lang] || content.en;

  return (
    <main className="page">
<div className="divider-white">
    </div>
<section className="home-slider">

  <img
    src="/images/banner-index-1.jpg"
    className="slide"
    alt=""
  />

  <img
    src="/images/banner-index-2.jpg"
    className="slide"
    alt=""
  />

  <img
    src="/images/banner-index-3.jpg"
    className="slide"
    alt=""
  />

  <img
    src="/images/banner-index-4.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-5.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-6.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-7.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-8.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-9.jpg"
    className="slide"
    alt=""
  />
    <img
    src="/images/banner-index-10.jpg"
    className="slide"
    alt=""
  />

</section>


<section className="hero-section">

  <Reveal>
    <h1 className="hero-title">
      {t.home.titlehead}
    </h1>

    <p className="hero-subtitle">
      {t.home.subtitlehead}
    </p>

    {/* Center Label */}
    <div className="hero-center">
      {t.home.center}
    </div>

    <h2 className="hero-heading">
      {t.home.title}
    </h2>

    <p className="hero-heading-subtitle">
      {t.home.subtitle}
    </p>

    <div className="home-text">
      {t.home.description.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>

  </Reveal>

</section>

      {/* HOME PREVIEW */}
     <div className="gallery home">
      {[
  { slug: "about", title: "About Quism", img: "/images/0-2.jpg" },
  { slug: "museum", title: "Museum", img: "/museum/lif-6.jpg" },
  { slug: "gallery", title: "Gallery", img: "/gallery/rec-1.jpg" },
  { slug: "art-culture", title: "Art & Culture", img: "/museum/art-1.jpg" },
  { slug: "founder", title: "Founder", img: "/images/0-1.jpg" },

  { slug: "essence", title: "Essence", img: "/images/essence.jpg" },

  { slug: "seed", title: "Seed", img: "/images/seed.jpg" },
  ].map((item) => (
        <Link
          key={item.slug}
          href={`/${lang}/${item.slug}`}
          className="card"
        >
                    
         <div className="card-image">
  <img src={item.img} alt={item.title} />
</div>

<p className="home-card-title">
  {item.title}
</p>
  </Link>
      ))}

    </div>
  

 
 </main>

);
}