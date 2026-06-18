import { museum } from "@/lib/data/collections";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import { museumHome } from "@/lib/data/museum/museumHome";

export default async function MuseumPage({ params }) {
  const { lang } = await params;  
  const safeLang = lang || "en";   

 const items = museum || [];
const first = museum[0];

const columns = items.length === 4 ? 4 : 5;

  
return (
    <main className="page">
    
    <HeroLayout
  title={museumHome.title[safeLang]}
  subtitle={museumHome.subtitle[safeLang]}
  variant="museum"
/> 
  <section className="page-article">
     <Reveal delay={0.3}>
       <p>
       {museumHome.intro[safeLang]}
       </p>
          </Reveal>

          <Reveal>
     <div className="enter-line">
   {first && (
            <Link href={`/${safeLang}/museum/${first.slug}`}>
              ENTER MUSEUM NO. 1 → {first.title}
             </Link>
              )}
           </div>
          </Reveal>
        </section>
      
    </main>
  );
}