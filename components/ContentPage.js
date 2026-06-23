"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Clock from "@/components/clock/page";
import Reveal from "@/components/Reveal";
import RenderBlock from "@/components/RenderBlock";
import UniversalTabs from "@/components/UniversalTabs";
import Lightbox from "@/components/Lightbox";
import SubNavbar from "@/components/SubNavbar";
import { museum, gallery, essence } from "@/lib/data/collections";

export default function ContentPage({
  data,
  locale,
  lang,
  t,
  children,
}) {

  if (!data) return null;
  const pathname = usePathname();
  const currentLang = lang || "en";
 
const subheadline =
  data?.content?.find(
    item => item.type === "subheadline"
  );


  
const [activeTab, setActiveTab] = useState(0);

const tabs =
  data?.tabs ||
  data?.content?.filter(
    item => item.slug?.startsWith("part-")
  ) ||
  [];

const isTabs = tabs.length > 0;

const activeItem = tabs[activeTab];

  
const blocks =
  activeItem?.blocks ||
  data?.content?.filter(
    item => item.type !== "subheadline"
  ) ||
  [];


  const [active, setActive] = useState(null);
  const [openText, setOpenText] = useState(null);

 const contentTitle = data?.title?.[locale];
 const contentSubtitle = data?.subtitle?.[locale];
  
const displayTitle =
  activeTab === 1 && data?.titleAlt
    ? data.titleAlt[currentLang]
    : data.title?.[currentLang];





console.log("tabs =", tabs);
console.log("activeItem =", activeItem);
console.log("slug =", data?.slug);

console.log("data =", data);
console.log("data.tabs =", data.tabs);
console.log("content[0] =", data.content?.[0]);
console.log("content[1] =", data.content?.[1]);

console.log("tabs =", tabs);
console.log("activeItem =", activeItem);

if (!data) {
  return <h1>Data Not Found</h1>;
}
    return (
    <>
<main
  className={`page content-page ${
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
<h1>{displayTitle}</h1>

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

 {/* ===== essence: pushpanjali// ===== */}

{contentTitle && (
  <h2 className="content-title">
    {contentTitle}
  </h2>
)}

{contentSubtitle && (
  <p className="content-subtitle">
    {contentSubtitle}
  </p>
)}

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

              ) : pathname.includes("/essence") ? (

              <SubNavbar
                items={essence}
                base="essence"
                lang={currentLang}
              />

            ) : null}

          </div>

        </section>

        {/* ===== CONTENT ===== */}

     <section className="page-article">

{subheadline && (
  <div className="subheadline-title">

    <strong>
      {subheadline.title?.[currentLang] ||
       subheadline.title?.en}
    </strong>

    <span className="subheadline-text">
      {subheadline.text?.[currentLang] ||
       subheadline.text?.en}
    </span>

  </div>
)}

{/* ===== TABS ===== */}

{isTabs && (
  <UniversalTabs
    tabs={tabs}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    lang={lang}
  />
)}


  {/* ===== BLOCKS ===== */}




{blocks?.map((block, i) => (

 block.type === "clock" ? (
  <Clock />

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