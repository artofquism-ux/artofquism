"use client";

 import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect, useRef } from "react";
 
 export default function Navbar({ lang }) {
  const currentLang = lang || "en";
 
const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (!menuRef.current) return;

    // 👉 click যদি menu এর বাইরে হয়
    if (!menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [menuOpen]);

  return (
 <header>
  <div className="nav-wrap">

    {/* LEFT */}
    <div className="nav-left">
      <Link href={`/${currentLang}`} className="logo">
        <img src="/images/diamond-icon.png" alt="logo" />
        <span>ART OF QUISM</span>
      </Link>
    </div>

   <nav
  ref={menuRef}
  className={`nav ${menuOpen ? "open" : ""}`}>
      <Link href={`/${currentLang}`}>Home</Link>
      <Link href={`/${currentLang}/about`}>About</Link>
      <Link href={`/${currentLang}/museum`}>Museum</Link>
      <Link href={`/${currentLang}/gallery`}>Gallery</Link>
      <Link href={`/${currentLang}/art-culture`}>Art & Culture</Link>
      <Link href={`/${currentLang}/secrets`}>Secrets</Link>
      <Link href={`/${currentLang}/founder`}>Founder</Link>
    </nav>

    {/* RIGHT */}
 {menuOpen && (
  <div
    className={`overlay ${menuOpen ? "show" : ""}`}
    onClick={() => setMenuOpen(false)}
  />
)}

<div className="nav-right">

  <div className="header-actions">

    <LanguageSwitcher currentLang={currentLang} />

    <button
      className="menu-btn"
      onClick={(e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
      }}
    >
      ☰   <span>Menu</span>
    </button>

  </div>

</div>
</div>
 
</header>
  );
}