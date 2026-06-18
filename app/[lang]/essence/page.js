import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import { pushpanjaliHome } from "@/lib/data/essence/pushpanjaliHome";
  
export default async function EssencePage({ params }) {
  const { lang } = await params;
  
  const safeLang = lang || "en";
  
  console.log("lang =", lang);
console.log("safeLang =", safeLang);

  return (
    <main className="page">

   <HeroLayout
        title={pushpanjaliHome.title[safeLang]}
        subtitle={pushpanjaliHome.subtitle[safeLang]}
        variant="essence"
      />
 

      <section className="page-article">

        {pushpanjaliHome.intro[safeLang]?.map((para, i) => (
          <Reveal key={i}>
            <p>{para}</p>
          </Reveal>
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



 

