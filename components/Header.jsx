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

      {/* NAV */}
      <nav className="main-nav">

        <Link href={`/${lang}`}>HOME</Link>
        <Link href={`/${lang}/about`}>ABOUT</Link>
        <Link href={`/${lang}/museum`}>MUSEUM</Link>
        <Link href={`/${lang}/gallery`}>GALLERY</Link>
        <Link href={`/${lang}/art-culture`}>ART & CULTURE</Link>
        <Link href={`/${lang}/secrets`}>SECRETS</Link>
        <Link href={`/${lang}/founder`}>FOUNDER</Link>

      </nav>

      {/* LANGUAGE SWITCH */}
      <LanguageSwitcher />

    </header>
  );
}