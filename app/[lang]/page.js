
import Link from "next/link";
import { homeContent } from "../content/home";
import Reveal from "@/components/Reveal";

export default async function Page({ params }) {
const lang = (await params)?.lang || "en";

const t = homeContent[lang];

  return (
    <main className="page">
      <section className="hero">
     <div className="hero-inner">
<Reveal> 
    <h1 className="hero-title"> THE ART OF QUISM </h1>
 <p className="hero-tagline"> Reflection of Zero-Dimensional Life — Full of Emptiness</p>
</Reveal> 
 
 <Reveal> 
    <div className="hero-actions">
              <a href={`/${lang}/about`}>Read About Quism</a>
              <a href={`/${lang}/museum`}>Explore Museum</a>
              <a href={`/${lang}/gallery`}>Explore Gallery</a>
            </div>
 </Reveal> 
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