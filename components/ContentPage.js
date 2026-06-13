"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Clock from "@/components/clock/page";
import Reveal from "@/components/Reveal";
import RenderBlock from "@/components/RenderBlock";
import UniversalTabs from "@/components/UniversalTabs";
import Lightbox from "@/components/Lightbox";
import SubNavbar from "@/components/SubNavbar";

import { museum, gallery } from "@/lib/data/collections";

export default function ContentPage({ data, lang, t, }) {

  
  if (!data) return null;

  const pathname = usePathname();

  const currentLang = lang || "en";

  const [activeTab, setActiveTab] = useState(0);

  const [active, setActive] = useState(null);
  const [openText, setOpenText] = useState(null);

console.log("data =", data);
console.log("lang =", lang);
console.log("t =", t);
  
  const isTabs =
    data?.tabs ||
    data?.content?.[0]?.tabs;

  const tab =
    data?.tabs?.[activeTab] ||
    data?.content?.[0]?.tabs?.[activeTab];

if (!data) {
  return <h1>Data Not Found</h1>;
}
  
  return (

    <>
      <main
  className={`content-page ${
    pathname.includes("/museum")
      ? "museum-page"
      : pathname.includes("/gallery")
      ? "gallery-page"
      : ""
  }`}
>

        {/* ===== HERO ===== */}
        <section className="hero">

          <div className="hero-inner">

<Reveal>
 <h1>
  {typeof data?.title === "object"
    ? data.title?.[currentLang]
    : data?.title}
</h1>

  {t?.subtitle && (
    <p className="page-subtitle">
      {t.subtitle}
    </p>
  )}

  {t?.description && (
    <p className="home-text">
      {t?.description}
    </p>
  )}
</Reveal>

            {/* ===== SUB NAV ===== */}

            {pathname.includes("/museum") ? (

              <SubNavbar
                items={museum}
                base="museum"
                lang={currentLang}
              />

            ) : pathname.includes("/gallery") ? (

              <SubNavbar
                items={gallery}
                base="gallery"
                lang={currentLang}
              />

            ) : null}

          </div>

        </section>

        {/* ===== CONTENT ===== */}

        <section className="page-article">

          {/* ===== TABS ===== */}

          {isTabs && (

            <UniversalTabs
             tabs={
             data.tabs ||
             data.content?.[0]?.tabs
             }
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              lang={lang}
              />
          )}

 
          {/* ===== BLOCKS ===== */}

         {(
  isTabs
    ? tab?.blocks
    : data?.content
)?.map((block, i) => (

  block.type === "clock" ? (

    <div
      key={`clock-${i}`}
      className="founder-clock"
    >
      <Clock />
    </div>

  ) : (

  <RenderBlock
  key={`${block.type}-${i}`}
  item={block}
  lang={lang}
  setActive={setActive}
  openText={openText}
  onOpenText={setOpenText}
/>

  )

))}
        </section>

      </main>

      {/* ===== LIGHTBOX ===== */}

      {active && (
        <Lightbox
          active={active}
          setActive={setActive}
        />
      )}
    </>

  );
}