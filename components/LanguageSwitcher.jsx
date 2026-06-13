"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { languages } from "@/lib/i18n";

export default function LanguageSwitcher() {
  
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
 const currentLang =
    pathname.split("/")[1] || "en";

  const dropdownRef = useRef(null);

console.log(currentLang);
console.log(pathname);

  useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };

}, []);


  const changeLang = (newLang) => {
  const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
    setOpen(false);
  };

const langLabel =
  currentLang === "bn"
    ? "BN"
    : currentLang === "hi"
    ? "HI"
    : currentLang === "sa"
    ? "SA"
    : "EN";

const languageNames = {
  en: "English",
  bn: "বাংলা",
  hi: "हिन्दी",
  sa: "संस्कृतम्",
};


  return (
<div className="lang-switch" ref={dropdownRef}>
  
    <button
  type="button"
  className="lang-btn"
  onClick={() => setOpen(!open)}
>
  🌐 Language ({currentLang.toUpperCase()})
  <span className="arrow">▾</span>
</button>

 

      {open && (
        <div className="lang-dropdown">
        {languages.map((lng) => (
  <div
    key={lng}
    onClick={() => changeLang(lng)}
  >
    {lng.toUpperCase()} – {languageNames[lng]}
  </div>
))}
        </div>
      )}

    </div>
  );
}