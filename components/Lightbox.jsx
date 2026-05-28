"use client";
import { useState, useEffect } from "react";

export default function Lightbox({ active, setActive }) {


  
  const [zoom, setZoom] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
const [position, setPosition] = useState({ x: 0, y: 0 });
const [start, setStart] = useState({ x: 0, y: 0 });
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const images = active?.items || [];
  const index = active?.index || 0;

  const onClose = () => setActive(null);

  if (!active) return null;
const current = active?.items?.[active?.index];

if (!current) return null;

const currentImage = current.image;

  const next = () => {
    setActive((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));
    setZoom(false);
  };

  const prev = () => {
    setActive((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length,
    }));
    setZoom(false);
  };

const handleZoom = (e) => {
  e.stopPropagation();

  const rect = e.target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  e.target.style.transformOrigin = `${x}% ${y}%`;

  setZoom((prev) => !prev); // 🔥 toggle
};
const handleMouseDown = (e) => {
  if (!zoom) return;

  setIsDragging(true);
  setStart({
    x: e.clientX - position.x,
    y: e.clientY - position.y,
  });
};

const handleMouseMove = (e) => {
  if (!isDragging || !zoom) return;

  setPosition({
    x: e.clientX - start.x,
    y: e.clientY - start.y,
  });
};

const handleMouseUp = () => {
  setIsDragging(false);
};


  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <div 
    className="lightbox"
      onClick={() => setActive(false)}
    >

      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>

   

        {/* 🔥 IMAGE */}
         {/* IMAGE AREA */}
  <div className="lightbox-image-wrap">
<img src={current.image}
  onClick={handleZoom}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
  className={zoom ? "zoomed" : ""}
  style={{
    transform: zoom
      ? `scale(2) translate(${position.x}px, ${position.y}px)`
      : "scale(1)",
    cursor: zoom ? (isDragging ? "grabbing" : "grab") : "zoom-in",
  }}
/>
  </div>
     {/* 🔥 NAV INSIDE LIGHTBOX */}
       <div className="lightbox-controls">

  <button
    className="ctrl prev"
    onClick={(e) => {
      e.stopPropagation();
      prev();
    }}
  >
    ‹
  </button>

  <button
    className="ctrl close"
    onClick={(e) => {
      e.stopPropagation();
      setActive(null);
    }}
  >
     ×
  </button>

  <button
    className="ctrl next"
    onClick={(e) => {
      e.stopPropagation();
      next();
    }}
  >
    ›
  </button>

</div>
 

</div>
    </div>
  );
}