"use client";

import { useState } from "react";
import "./secrets.css";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import UniversalTabs from "@/components/UniversalTabs";
import Lightbox from "@/components/Lightbox";


import { secretsData } from "@/lib/data/secretsData";

export default function SecretsPage() {

  const [activeTab, setActiveTab] = useState(0);
 const [active, setActive] = useState(false);
  const tab = secretsData.tabs[activeTab];

  return (
    <>
      <main className="secrets-page">

        <div className="secrets-container">

          {/* ===== HERO ===== */}
          <section className="secrets-hero">

            <Reveal>
              <h1>{secretsData.title}</h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="subtitle">
                {secretsData.subtitle}
              </p>
            </Reveal>

          </section>


          {/* ===== TABS ===== */}
          <div className="secrets-actions">

            <UniversalTabs
              tabs={secretsData.tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

          </div>
 
          {/* ===== CONTENT ===== */}
          <section className="secrets-poetry">

            {tab.blocks?.map((block, i) => (

              <Reveal
                key={i}
                delay={i * 0.03}
              >

                {/* ===== HEADING ===== */}
             

    {/* ===== HEADING ===== */}
           {block.type === "heading" && (
  <h2 className="poetry-heading">
    <span className="heading-title">
      {block.title}
    </span>

    <span className="heading-text">
      {" "}{block.text}
    </span>
  </h2>
)}

            

 


                {/* ===== POETRY ===== */}
                {block.type === "poetry" && (
                  <div className="center-content">

                     <p className="poetry-line">
                      {block.text?.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>

                    <div className="separator">★</div>

                  </div>
                )}


{/* ===== TREE ===== */}
{block.type === "tree" && (
  <div className="center-content life-tree">
    <p className="tree-line">
      {Array.isArray(block.text)
        ? block.text.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))
        : block.text}
    </p>
  </div>
)}

                {/* ===== SECTION TEXT ===== */}
                {block.type === "section" && (
                  <div className="stanza">
                    <p>
                      {block.title && (
                        <strong>{block.title}</strong>
                      )}
                      {" "}
                      {block.text}
                    </p>
                  </div>
                )}

 

    {/* VIDEO */}
    {block.type === "video" && (
      <div className="video-wrap">

<video
  controls
  playsInline
  preload="metadata"
  style={{ width: "100%" }}
>
  <source src={block.src} type="video/mp4" />
</video>

      </div>
    )}

    {/* IMAGES */}
    {block.type === "images" && (

      <div className="gallery-grid grid-5">

        {block.items?.map((item, idx) => (

       <Link
    href={item.link || "#"}
    key={idx}
    className="gallery-card"
          >

            <button
              type="button"
              className="zoom-btn"
              onClick={() => {
                setActive({
                  items: block.items,
                  index: idx,
                });
              }}
            >

             <img
              src={item.image}
              alt={item.title}
              className={item.className || ""}
              />
            </button>

            {item.title && (
             <figcaption className="gallery-title">
  {item.title}
</figcaption>
            )}
          </Link>
        ))}
      </div>
         )}
   </Reveal>
))}
  </section>
        </div>
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