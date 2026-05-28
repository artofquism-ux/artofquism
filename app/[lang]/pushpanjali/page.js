
"use client";

import Link from "next/link";

 import { useState, useEffect } from "react";
import "../pushpanjali/pushpanjali.css";
import Reveal from "@/components/Reveal";
import { useParams } from "next/navigation";
 
export default function PushpanjaliPage() {
const { lang } = useParams();
const [active, setActive] = useState(null);
const currentLang = lang || "en";
 
useEffect(() => {
  const audio = new Audio("/audio/ambient.mp3");
  audio.loop = true;
  audio.volume = 0.2;

  const play = () => {
    audio.play();
    window.removeEventListener("click", play);
  };

  window.addEventListener("click", play);
}, []);

return (

<main className="pushpanjali-page">

 
 

      {/* 🌸 HERO */}
      <section className="push-hero">
          <Reveal> 
            <h1>Pushpanjali</h1>
       <p>
  <strong>Pushpanjali</strong> Offerings of silence, devotion & inner light...
  
</p>
        </Reveal> 
        </section>

 <Reveal> 
   <div className="push-actions">
<Link href={`/${currentLang}/founder`}>Founder's Philosophy</Link>
<Link href={`/${currentLang}/pushpanjali`}>Spiritual Expressions 
</Link>
</div>
</Reveal> 

      {/* 🌿 POETRY */}
      <section className="push-poetry">

        <Reveal>
          <p className="verse">
            <span>In silence, the soul unfolds like a flower,</span>
            <span>offering fragrance to the unseen universe;</span>
          </p>
        </Reveal>

        <div className="separator">✧</div>

        <Reveal delay={0.2}>
          <p className="verse">
            <span>Each breath becomes a sacred rhythm,</span>
            <span>where the self dissolves into light;</span>
          </p>
        </Reveal>

        <div className="separator">✧</div>

        <Reveal delay={0.4}>
          <p className="verse">
            <span>No path, no destination remains,</span>
            <span>only the eternal presence within;</span>
          </p>
        </Reveal>

      </section>

      {/* 🌌 FINAL MESSAGE */}
      <section className="push-closing">
        <Reveal>
          <p>
            In this offering, there is no giver or receiver—
            only a silent unfolding of existence itself.
          </p>
        </Reveal>

        
 
</section>
 
</main>
);
}