import { museum } from "@/lib/data/collections";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";


export default async function MuseumPage({ params }) {
  const { lang } = await params;  
  const safeLang = lang || "en";   

 const items = museum || [];
const first = museum[0];

const columns = items.length === 4 ? 4 : 5;

  
return (
    <main className="page">
    
    <HeroLayout
  title="MUSEUM"
  subtitle="The Museum of Quism is a contemplative space where art becomes a mirror of consciousness; each section unfolds a philosophical dimension of Life, Nature, Art, Culture, and Communication..."
  variant="museum"
/> 

  <section className="page-article">
     <Reveal delay={0.3}>
       <p>
         Quism Museum: This special collection highlights an enlightened state of self-realization, where art connects the reflection of inner consciousness and the outer world through its various forms, symbols and colors; here quism's perspective indicates that "eternal life" is essentially a symbol of the subconscious mind, which becomes a reflection of the first life in the world related to sub-reality; each form carries an underlying formula here—which rises above visible reality and penetrates the depths of consciousness; thus art creates a unique path of experience and perception in the mind of each viewer, which transcends the boundaries of time...
            </p>
          </Reveal>

          <Reveal>
         <div className="enter-line">
          {first && (
            <Link href={`/${safeLang}/museum/${first.slug}`}>
              ENTER MUSEUM → {first.title}
             </Link>
              )}
           </div>
          </Reveal>
        </section>
      
    </main>
  );
}