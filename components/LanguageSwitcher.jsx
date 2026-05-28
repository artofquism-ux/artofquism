"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { languages } from "@/lib/i18n";

export default function LanguageSwitcher({ currentLang }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (newLang) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="lang-switch">

      <div className="lang-btn" onClick={() => setOpen(!open)}>
        🌐 Language ({currentLang.toUpperCase()})
        <span className="arrow">▾</span>
      </div>

      {open && (
        <div className="lang-dropdown">
          {languages.map((lng) => (
            <div key={lng} onClick={() => changeLang(lng)}>
              {lng.toUpperCase()}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}