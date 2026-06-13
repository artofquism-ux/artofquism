import { gallery } from "@/lib/data/collections";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import { galleryHomeData } from "@/lib/data/gallery/galleryHomeData";


export default async function GalleryPage({ params }) {
 const { lang } = await params; 
 const safeLang = lang || "en";

  const items = gallery || [];
  const first = items[0];
 
  return (
    <main className="page-bg">
      
        <HeroLayout
           title={galleryHomeData.title[safeLang]}
           subtitle={galleryHomeData.subtitle[safeLang]}
           variant="gallery"
        />
        <section className="page-article">
          <Reveal delay={0.3}>
            <p>
             {galleryHomeData.intro[safeLang]}
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