"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Clock from "@/components/clock/page";

export default function RenderBlock({
  item,
  setActive,
  onOpenText,
  openText,
}) {
  
  const params = useParams();
const currentLang = params?.lang || "en";

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
      {item.title}
    </span>
     )}
    </p>
  );
}

  // 🟢 HEADING
  if (item.type === "heading") {
  return (
    <h2 className="para-title">
      <strong>{item.title}</strong>

      {item.text && (
        <span className="heading-text">
          {" "}{item.text}
        </span>
      )}
    </h2>
  );
}
 

  if (item.type === "subheadline") {
  return (
     <div className="subheadline-title">
      <h2 className="subheadline-title">
       <strong>{item.title}</strong>

      {item.text && (
        <span className="subheadline-text">
          {" "}{item.text}
        </span>
      )}
    </h2>
    </div>
  );
}


if (item.type === "headline") {
  return (
    <div className="headline-block">
      <h2 className="headline-title">
        {item.title}
      </h2>
    </div>
  );
}

  
  if (item.type === "quote") {
    return (
      <div className="quote-item">
        {item.title && (
          <h3 className="quote-title">{item.title}</h3>
        )}
        <p className="quote-text">{item.text}</p>
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
        {item.text}
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

if (item.type === "divider-white") {
  return (
     <div className="divider-white">
    </div>
   );
}


  // 🟢 PARAGRAPH / TEXT
if (item.type === "section") {

  const [expanded, setExpanded] = useState(false);


  return (
 <div className="section-text">

  <p className="para-text">

  {item.title && (
    <span className="para-title-inline">
      {item.title}
    </span>
  )}

  {item.text}

  {/* SINGLE PARA */}
  {expanded &&
    item.textFull &&
    typeof item.textFull === "string" && (
      <span className="desc-full">
        {" "}
        {item.textFull}

        <span
          className="read-toggle"
          onClick={() => setExpanded(false)}
        >
          {" "}Read less
        </span>
      </span>
  )}

  {/* first extra paragraph */}
  {expanded &&
    item.textFull &&
    Array.isArray(item.textFull) && (
      <span className="desc-full">
        {item.textFull[0]}
      </span>
  )}
  
  {/* READ MORE */}
  {!expanded && item.textFull && (
    <span
      className="read-toggle"
      onClick={() => setExpanded(true)}
    >
      {" "}Read more
    </span>
  )}

</p>
 
 
{/* remaining paragraphs */}
{expanded &&
  item.textFull &&
  Array.isArray(item.textFull) &&
  item.textFull.slice(1).map((para, i) => (
    <div key={i} className="extra-para">
      {para}

      {i === item.textFull.slice(1).length - 1 && (
        <span
          className="read-toggle"
          onClick={() => setExpanded(false)}
        >
          {" "}Read less
        </span>
      )}
    </div>
))}
</div>
)} 
 
 
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
              alt={item.title}
              className={item.className || ""}
              />
      </div>

   <p className="para-text">

  <strong>{item.title}</strong>{" "}

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
        ? " Read less"
        : " Read more"}
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