
"use client";

import {useState, useEffect} from "react";
export default function SecretsClient() {

  /* ✅ STATES */
const [active,setActive] = useState(null);
const [zoom,setZoom] = useState(false);
const [pos,setPos] = useState({x:0,y:0});
const [drag,setDrag] = useState(false);
const [start,setStart] = useState({x:0,y:0});

  const images = [
  { src: "/gallery/enlightenment/enl-01.jpg", title: "Enlightenment 1" },
  { src: "/gallery/enlightenment/enl-02.jpg", title: "Enlightenment 2" },
  { src: "/gallery/enlightenment/enl-03.jpg", title: "Enlightenment 3" },
  { src: "/gallery/enlightenment/enl-04.jpg", title: "Enlightenment 4" },
  { src: "/gallery/enlightenment/enl-05.jpg", title: "Enlightenment 5" },
  { src: "/gallery/enlightenment/enl-06.jpg", title: "Enlightenment 6" },
  { src: "/gallery/enlightenment/enl-07.jpg", title: "Enlightenment 7" },  
  { src: "/gallery/enlightenment/enl-08.jpg", title: "Enlightenment 8" },
  { src: "/gallery/enlightenment/enl-09.jpg", title: "Enlightenment 9" },
  { src: "/gallery/enlightenment/enl-10.jpg", title: "Enlightenment 10" },
];
 

useEffect(()=>{
  const key=(e)=>{
    if(active===null) return;

    if(e.key==="Escape"){
      setZoom(false);
      setPos({x:0,y:0});
      setActive(null);
    }

    if(e.key==="ArrowRight"){
      setZoom(false);
      setActive(a=>a===images.length-1?0:a+1);
    }

    if(e.key==="ArrowLeft"){
      setZoom(false);
      setActive(a=>a===0?images.length-1:a-1);
    }
  };

  document.addEventListener("keydown",key);
  return()=>document.removeEventListener("keydown",key);

},[active]);

  /* ✅ RETURN UI */
  return (
    <>
      {/* GRID */}
      <div className="painting-grid">
        {images.map((img, i) => (
          <img key={i} src={img.src} onClick={() => setActive(i)} />
        ))}
      </div>

      {/* LIGHTBOX */}
{active !== null && (
  <div
    className="lightbox"
    onClick={(e)=>{
      if(e.target === e.currentTarget){
        setZoom(false);
        setPos({x:0,y:0});
        setActive(null);
      }
    }}
  >

    {/* LEFT ARROW */}
    <span
      className="lightbox-arrow left"
      onClick={(e)=>{
        e.stopPropagation();
        setZoom(false);
        setActive(active === 0 ? images.length - 1 : active - 1);
      }}
    >
      ‹
    </span>

     {/* IMAGE */}
    <img
      src={images[active].src}
      className={`lightbox-img ${zoom ? "zoomed":""}`}
      
      onClick={(e)=>{
        e.stopPropagation();
        setZoom(z=>!z);
      }}

      onMouseDown={(e)=>{
        if(!zoom) return;
        setDrag(true);
        setStart({
          x:e.clientX-pos.x,
          y:e.clientY-pos.y
        });
      }}

      onMouseUp={()=>setDrag(false)}
      onMouseLeave={()=>setDrag(false)}

      onMouseMove={(e)=>{
        if(!drag||!zoom) return;

        setPos({
          x:e.clientX-start.x,
          y:e.clientY-start.y
        });
      }}

      onTouchMove={(e)=>{
  if(!zoom) return;

  const touch=e.touches[0];

  setPos(p=>({
    x:p.x + touch.movementX || 0,
    y:p.y + touch.movementY || 0
  }));
}}

   onMouseUp={()=>setDrag(false)}
onMouseLeave={()=>setDrag(false)}

onMouseMove={(e)=>{
  if(!drag || !zoom) return;

   setPos(p=>({
          x:p.x + e.movementX,
          y:p.y + e.movementY
        }));
      }}


      style={{
        transform: zoom
          ? `scale(1.8) translate(${pos.x}px,${pos.y}px)`
          : "scale(1)"
      }}
    />

 

    {/* RIGHT ARROW */}
    <span
      className="lightbox-arrow right"
      onClick={(e)=>{
        e.stopPropagation();
        setZoom(false);
        setActive(active === images.length - 1 ? 0 : active + 1);
      }}
    >
      ›
    </span>

  </div>
)}
    </>
  );
}