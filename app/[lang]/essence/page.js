import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import RenderBlock from "@/components/RenderBlock";
import SubNavbar from "@/components/SubNavbar";
import { essence } from "@/lib/data/collections";
import { pushpanjaliHome } from "@/lib/data/essence/pushpanjaliHome";
  
export default async function EssencePage({ params }) {
  const { lang } = await params;
  
  const safeLang = lang || "en";
  
  console.log("lang =", lang);
console.log("safeLang =", safeLang);

return (
  <main className="page">

<HeroLayout
  title={pushpanjaliHome.title?.[safeLang]}
  subtitle={pushpanjaliHome.subtitle?.[safeLang]}
  variant="essence"
/>

    <SubNavbar
      items={essence}
      base="essence"
      lang={safeLang}
    />

    
      <section className="page-article">

{pushpanjaliHome.content?.map((item, i) => (
  <RenderBlock
    key={i}
    item={item}
    lang={safeLang}
  />
))}


        <Reveal>
          <div className="enter-line">
            <Link href={`/${safeLang}/essence/pushpanjali`}>
              ENTER PUSHPANJALI →
            </Link>
          </div>
        </Reveal>

      </section>

    </main>
  );
}



 

