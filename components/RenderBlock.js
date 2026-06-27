
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Clock from "@/components/clock/page";

export default function RenderBlock({
  
  item,
  lang,
  setActive,
  onOpenText,
  openText,
}) {

  console.log("LANG =", lang);
  console.log("TITLE =", item.title?.[lang]);
  console.log("TEXT =", item.text?.[lang]);

   const poetryText =
  typeof item.text === "object"
    ? item.text?.[lang] || item.text?.bn
    : item.text;

{Array.isArray(poetryText)
  ? poetryText.map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ))
  : poetryText}

   // 🟢 ESSENCE TEXT

  if (item.type === "essence-intro") {

  const introText =
    item.text?.[lang] || item.text?.bn;

  return (
    <div className="essence-intro">

      <p className="essence-intro-first">
        <strong>
          {item.title?.[lang] || item.title?.bn}
        </strong>

        {" "}
        {introText[0]}
      </p>

      <div className="essence-content">
        {introText.slice(1).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

    </div>
  );
}
 

 // 🟢 ESSENCE TEXT

  if (item.type === "seed-intro") {

  const introText =
    item.text?.[lang] || item.text?.bn;

  return (
    <div className="seed-intro">

      <p className="seed-intro-first">
        <strong>
          {item.title?.[lang] || item.title?.bn}
        </strong>

        {" "}
        {introText[0]}
      </p>

      <div className="seed-content">
        {introText.slice(1).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

    </div>
  );
}


if (item.type === "push-stanza") {

  const poetryText =
    item.text?.[lang] ||
    item.text?.bn ||
    [];

  return (
    <div className="push-stanza">
      {poetryText.map((line, i) => (
        <div key={i} className="verse">
          {line}
        </div>
      ))}
    </div>
  );
}

 
if (item.type === "seed-stanza") {

  const poetryText =
    item.text?.[lang] ||
    item.text?.bn ||
    [];

  return (
    <div className="seed-stanza">
      {poetryText.map((line, i) => (
        <div key={i} className="verse">
          {line}
        </div>
      ))}
    </div>
  );
}
 

 if (item.type === "push-note") {
  const noteText = item.text?.[lang] || item.text?.bn || [];

  return (
    <div className="push-note">
      {noteText.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

 if (item.type === "push-note-bold") {
  const noteText = item.text?.[lang] || item.text?.bn || [];

  return (
    <div className="push-note-bold">
      {noteText.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

if (item.type === "push-poetry-title") {

  const poetryText =
    item.text?.[lang] ||
    item.text?.bn ||
    [];

  return (
    <div className="push-poetry">
      {poetryText.map((line, i) => (
        <div
          key={i}
          className={
            i < (item.titleLines || 2)
              ? "verse poem-title"
              : "verse"
          }
        >
          {line}
        </div>
      ))}
    </div>
  );
}

  if (!item || typeof item !== "object") return null;

  // 🔹 IMAGE CLICK (lightbox)
  
  const handleClick = (items, index) => {
    if (typeof setActive !== "function") return;
    setActive({ items, index });
  };

    const items = item.items || [];

  // 🔥 AUTO GRID LOGIC
   

const gridClass =
  item.grid === "5"
    ? "grid-5"
    : item.grid === "4"
    ? "grid-4"
    : "grid-auto";


    // =========================
  // 🔥 TYPE BASED RENDER
  // =========================

if (item.type === "text" || (item.text && !item.type)) {
  return (
    <p className="page-text">
      {item.title && (
    <span className="para-title-inline">
     {item.title?.[lang] || item.title?.en}
    </span>
     )}
    </p>
  );
}

  // 🟢 HEADING

  
 if (item.type === "subheading") {
  return (
    <p className="subheading-title">
      <strong>
        {item.title?.[lang] || item.title?.en}
      </strong>

      <span className="subheading-text">
        {" "}
        {item.text?.[lang] || item.text?.en}
      </span>
    </p>
  );
}

 
if (item.type === "subtitle") {
  return (
    <div className="essence-subtitle">
      {item.text?.[lang] || item.text?.bn}
    </div>
  );
}

if (item.type === "subheadline") {
  return (
    <div
      className="subheadline-title"
      style={{ border: "3px solid red" }}
    >
      <strong>
        {item.title?.[lang] || item.title?.bn}
      </strong>

      <span className="subheadline-text">
        {item.text?.[lang] || item.text?.bn}
      </span>
    </div>
  );
}

if (item.type === "headline") {
  return (
<div className="headline-block">
  <h2 className="headline-title">
    {item.title?.[lang] || item.title?.en}
  </h2>

  {item.text && (
    <p className="headline-text">
      {item.text?.[lang] || item.text?.en}
    </p>
  )}
</div>
  );
}

if (item.type === "heading") {
  return (
    <div className="heading-row">
      <strong>
        {item.title?.[lang] || item.title?.en}
      </strong>

      <span className="heading-row">
        {" "}
        {item.text?.[lang] || item.text?.en}
      </span>
    </div>
  );
}
  
  if (item.type === "quote") {
    return (
      <div className="quote-item">
        {item.title && (
          <h3 className="quote-title">
            {item.title?.[lang] || item.title?.en}
            </h3>
        )}
        <p className="quote-text">
         {item.text?.[lang] || item.text?.en}
          </p>
      </div>
    );
  }

if (item.type === "cta") {
  return (
    <div className="cta-wrap">
      <Link
        href={`/${currentLang}${item.link}`}
        className="cta-link"
      >
        {item.text?.[lang] || item.text?.en}
      </Link>
    </div>
  );
}

if (item.type === "divider") {
  return (
    <div className="content-divider">
     </div>
   );
}

if (item.type === "divider") {
  return (
    <div className="divider">
     </div>
   );
}

if (item.type === "divider-gap") {
  return (
    <div className="divider-gap">
     </div>
   );
}

if (item.type === "divider-white") {
  return (
     <div className="divider-white">
    </div>
   );
}

  // 🟢 PARAGRAPH / TEXT
if (item.type === "section") {

  const [expanded, setExpanded] = useState(false);

const title =
  typeof item.title === "object"
    ? item.title?.[lang]
    : item.title;

const text =
  typeof item.text === "object"
    ? item.text?.[lang]
    : item.text;

const fullText =
  item.textFull?.[lang] ||
  item.textFull?.en ||
  item.fullText ||
  [];

 
console.log(
  "TITLE:",
  item.title?.en,
  "EXPANDED:",
  expanded,
  "LENGTH:",
  fullText.length
);

  return (
 <div className="section-text">
<p className="para-text">

  {item.title && (
    <span className="para-title-inline">
      {item.title?.[lang] || item.title?.en}
    </span>
  )}

  {item.text?.[lang] || item.text?.en}

{expanded && fullText?.[0] && (
  <>
    {" "}
    {fullText[0]}

    {fullText.length === 1 && (
      <span
        className="read-toggle"
        onClick={() => setExpanded(false)}
      >
        Read less
      </span>
    )}
  </>
)}

  {/* READ MORE */}
{!expanded && fullText?.length > 0 && (
  <span
    className="read-toggle"
    onClick={() => setExpanded(true)}
  >
    Read more
  </span>
)}
</p>

 

{/* FULL TEXT */}
{expanded &&
  fullText.length > 1 &&
  fullText.slice(1).map((para, i) => (
    <div key={i} className="extra-para">
      {para}

      {i === fullText.slice(1).length - 1 && (
        <span
          className="read-toggle"
          onClick={() => setExpanded(false)}
        >
          Read less
        </span>
      )}
    </div>
  ))
}

 </div>
 
);
}
 
    // 🟢 ART ROW  

if(item.type === "art-row"){

  return (

    <div className="art-row">

      <div
        className="art-image"
        onClick={()=>{
          if(item.lightbox){
            setActive(item.image);
          }
        }}
      >
          <img
              src={item.image}
              alt={item.title?.[lang] || item.title?.en}
              className={item.className || ""}
              />
      </div>

   <p className="para-text">

  <strong>
   {item.title?.[lang] || item.title?.en}
    </strong>{" "}

  {item.text?.[0]}

</p>

{item.text?.slice(1).map((p,i)=>(
  <p className="para-text" key={i}>
    {p}
  </p>
))}

    </div>

  );
}

  // 🟢 IMAGES GRID
 if (item.type === "images" && Array.isArray(item.items)) {

 
 
  const items = item.items || [];

  // 🔥 BONUS LOGIC
  const showMeta = item.showMeta !== false;

  return (

  <div className={`gallery ${gridClass}`}>
  
    {items.map((img, i) => {

if (img.type === "clock") {

  return (
    <div key={i} className="card clock-card">

<Clock image="/images/cosmos.jpg" />

      {img.title && (
        <p className="title">{img.title}</p>
      )}

    </div>
  );
}

  return (
    <div key={i} className="card">

      <div
        className="card-image"
        style={{ zIndex: 10, position: "relative" }}
 

  
onClick={() => {
  

  if(item.lightbox !== false){
    setActive?.({
      index:i,
      items,
    })
  }
}}
>
 
<img
  src={img.image}
  alt={img.title}
/>

{img.clock && (
  <div className="image-clock">
    <Clock />
  </div>
)}

</div>
 

  <div className="meta">

    {img.title && (
      <p className="title">{img.title}</p>
    )}

    {img.desc && (
  <div className="desc-short">
    <span>{img.desc}</span>
  </div>
)}

   {showMeta && img.descShort && (

 <div className="desc-short">
  <span>{img.descShort}</span>

  {openText?.title === img.title && (
    <span className="desc-full">
      {" "}{img.descFull}
    </span>
  )}

  {showMeta && img.descFull && (
    <span
      className="read-toggle"
onClick={(e) => {
  e.stopPropagation();

  onOpenText(
    openText?.title === img.title
      ? null
      : img
  );
}}
    >
      {openText?.title === img.title
        ? "Read less"
        : "Read more"}
    </span>
  )}
  
</div>

    )}
    {showMeta && img.size && (
      <p className="size">{img.size}</p>
    )}

  </div>
</div>
  );

})}

  </div>
 
)} 
  // 🟡 FALLBACK (unknown type)
  return null;
}


