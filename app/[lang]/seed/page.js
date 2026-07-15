
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroLayout from "@/components/HeroLayout";
import RenderBlock from "@/components/RenderBlock";
import SubNavbar from "@/components/SubNavbar";
import { seed } from "@/lib/data/collections";
import { abhidhanHome } from "@/lib/data/seed/abhidhanHome";
import { usePathname } from "next/navigation";
 
export default function seedPage() {
  
const pathname = usePathname();
const safeLang = pathname.split("/")[1] || "bn";

  return (
 <main className="page">

<HeroLayout
title={abhidhanHome.title?.[safeLang]}
subtitle={abhidhanHome.subtitle?.[safeLang]}
/>

      <SubNavbar
        items={seed}
        base="seed"
        lang={safeLang}
      />

      <section className="page-article">

        {abhidhanHome.content?.map((item, i) => (
          <RenderBlock
            key={i}
            item={item}
            lang={safeLang}
          />
        ))}

        
        
     <Reveal>
          <div className="enter-line">
            <Link href={`/${safeLang}/seed/abhidhan`}>
              ENTER SEED →
            </Link>
          </div>
        </Reveal>

      </section>

    </main>
  );
}



 

