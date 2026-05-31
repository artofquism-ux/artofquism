import { gallery } from "@/lib/data/collections";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
 
export default async function GalleryPage({ params }) {
 const { lang } = await params; 
 const safeLang = lang || "en";

  const items = gallery || [];
  const first = items[0];
 
  return (
    <main className="page">
      
        <HeroLayout
          title="GALLERY"
          subtitle="A visual journey through symbolic forms and inner reflections..."
          variant="gallery"
        />
        <section className="page-article">
          <Reveal delay={0.3}>
            <p>
             The Gallery of Quism presents visual expressions of consciousness and inner harmony; each section unfolds a philosophical dimension of creation, recreation and enlightenment;
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