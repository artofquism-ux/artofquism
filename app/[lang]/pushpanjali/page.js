
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "../pushpanjali/pushpanjali.css";
import Reveal from "@/components/Reveal";
import { useParams } from "next/navigation";
import { pushpanjaliData } from "@/lib/data/pushpanjaliData";
import UniversalTabs from "@/components/UniversalTabs";
import RenderBlock from "@/components/RenderBlock";

export default function PushpanjaliPage() {
  const { lang } = useParams();
  const currentLang = lang || "en";

  const t = (value) =>
    typeof value === "object"
      ? value?.[currentLang] || value?.en
      : value;

  const [active, setActive] = useState(null);

  useEffect(() => {
    const audio = new Audio("/audio/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.2;

    const play = () => {
      audio.play();
      window.removeEventListener("click", play);
    };

    window.addEventListener("click", play);

    return () => {
      audio.pause();
      window.removeEventListener("click", play);
    };
  }, []);

const hero = pushpanjaliData.content[0];

const [activeTab, setActiveTab] = useState(0);

const tabs = pushpanjaliData.content?.[1]?.tabs || [];
const tab = tabs[activeTab];
 


  return (
    <main className="pushpanjali-page">

      {/* HERO */}
      <section className="push-hero">
     <Reveal>
      {/* Hero */}
<h1>{pushpanjaliData.title[currentLang]}</h1>

<p className="push-hero-subtitle">
  {pushpanjaliData.content[0].text[currentLang]}
</p>

{/* Tabs */}
<UniversalTabs
  tabs={tabs}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  className="push-tabs"
/>

{/* Current Part Heading */}
<p className="push-part-info">
  <strong>
    {tab.blocks?.[0]?.title?.[currentLang]}
  </strong>

  {" : "}

  {tab.blocks?.[0]?.text?.[currentLang]}
</p>

{/* Poetry */}
<section className="push-poetry">
  {tab?.blocks?.slice(1).map((block, i) => (
    <RenderBlock
      key={`${block.type}-${i}`}
      item={block}
      lang={currentLang}
    />
  ))}
</section>
</Reveal>
         
      </section>

    </main>
  );
}