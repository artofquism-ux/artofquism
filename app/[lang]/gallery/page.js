import { gallery } from "@/lib/data/collections";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import { galleryHome } from "@/lib/data/gallery/galleryHome";

export default async function GalleryPage({ params }) {
 const { lang } = await params;  
  const safeLang = lang || "en";   

 const items = gallery || [];
const first = gallery[0];

const columns = items.length === 4 ? 4 : 5;

  
return (
    <main className="page">
      
        <HeroLayout
           title={galleryHome.title[safeLang]}
           
           variant="gallery"
        />
       <section className="page-article">
          <Reveal delay={0.3}>
            <p>
             {galleryHome.intro[safeLang]}
            </p>
          </Reveal>

          <Reveal>
            <div className="enter-line">
        {first && (
             <Link href={`/${safeLang}/gallery/${first.slug}`}>
              ENTER GALLERY → {first.title}
            </Link>
              )}
           </div>
          </Reveal>
        </section>
      
    </main>
  );
}