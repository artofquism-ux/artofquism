
import Link from "next/link";
import { homeContent } from "../content/home";
import Reveal from "@/components/Reveal";

export default async function Page({ params }) {
const lang = (await params)?.lang || "en";

const t = homeContent[lang];

  return (
    <main className="page">

<section className="hero-slider">

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


     <section className="hero">
     <div className="hero-inner">
<Reveal> 
  <h1 className="hero-title"> THE ART OF QUISM </h1>
 <p className="hero-tagline"> Reflection of Zero-Dimensional Life — Full of Emptiness</p>
</Reveal> 
 
   <div className="home-text">
    Quism reflects the silent origin of existence —
    where form dissolves into emptiness,
    and consciousness returns to the zero-dimensional source
    beyond material identity...
  </div>

 </div>
 </section>

      {/* HOME PREVIEW */}
     <div className="gallery home">
      {[
        { slug: "about", title: "About", img: "/images/0-2.jpg" },
        { slug: "museum", title: "Museum", img: "/museum/lif-6.jpg" },
        { slug: "gallery", title: "Gallery", img: "/gallery/rec-1.jpg" },
        { slug: "art-culture", title: "Art & Culture", img: "/museum/art-1.jpg" },
        { slug: "founder", title: "Founder", img: "/images/0-1.jpg" },
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