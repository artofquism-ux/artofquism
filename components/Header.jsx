"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {

  const { lang } = useParams();

  const [open, setOpen] = useState(false);
  const [museum, setMuseum] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggleMuseum = () => {
    setMuseum(!museum);
    setGallery(false);
    setDrop(false);
  };

  const toggleGallery = () => {
    setGallery(!gallery);
    setMuseum(false);
    setDrop(false);
  };

  const toggleDrop = () => {
    setDrop(!drop);
    setMuseum(false);
    setGallery(false);
  };

  useEffect(() => {
    const close = () => {
      setMuseum(false);
      setGallery(false);
      setDrop(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="header">

      {/* LOGO */}
      <Link href={`/${lang}`} className="logo">
        Art of Quism
      </Link>

{/* DESKTOP NAV */}
<nav className="main-nav desktop-nav">
  <Link href={`/${lang}`}>HOME</Link>
  <Link href={`/${lang}/about`}>ABOUT</Link>
  <Link href={`/${lang}/museum`}>MUSEUM</Link>
  <Link href={`/${lang}/gallery`}>GALLERY</Link>
  <Link href={`/${lang}/art-culture`}>ART & CULTURE</Link>
  <Link href={`/${lang}/secrets`}>SECRETS</Link>
  <Link href={`/${lang}/founder`}>FOUNDER</Link>
  <Link href={`/${lang}/essence`}>ESSENCE</Link>
  <Link href={`/${lang}/seed`}>SEED</Link>
</nav>

{/* MOBILE MENU BUTTON */}
<button
  type="button"
  className="mobile-menu-toggle"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
  aria-expanded={open}
>
  ☰ Menu
</button>

{/* MOBILE MENU */}
{open && (
  <nav className="mobile-menu">
    <Link href={`/${lang}`} onClick={() => setOpen(false)}>HOME</Link>
    <Link href={`/${lang}/about`} onClick={() => setOpen(false)}>ABOUT</Link>
    <Link href={`/${lang}/museum`} onClick={() => setOpen(false)}>MUSEUM</Link>
    <Link href={`/${lang}/gallery`} onClick={() => setOpen(false)}>GALLERY</Link>
    <Link href={`/${lang}/art-culture`} onClick={() => setOpen(false)}>ART & CULTURE</Link>
    <Link href={`/${lang}/secrets`} onClick={() => setOpen(false)}>SECRETS</Link>
    <Link href={`/${lang}/founder`} onClick={() => setOpen(false)}>FOUNDER</Link>
    <Link href={`/${lang}/essence`} onClick={() => setOpen(false)}>ESSENCE</Link>
    <Link href={`/${lang}/seed`} onClick={() => setOpen(false)}>SEED</Link>
  </nav>
)}

      {/* LANGUAGE SWITCH */}
      <LanguageSwitcher />

    </header>
  );
}