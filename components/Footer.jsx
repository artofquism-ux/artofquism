"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getTranslation } from "@/app/content";

export default function Footer({ lang = "en" }) {
  const t = getTranslation(lang);

  const pathname = usePathname();
  const isSecrets = pathname?.includes("secrets");
  const isLightBg = true;
  
  return (
    
    <footer className={`site-footer ${isSecrets ? "secrets-footer" : ""}`}>
 
      <div className="footer-divider" />
      <div className="footer-divider" />
      {/* 🔹 END LOGO */}
      <div className="footer-logo">
        <Image
        src={isLightBg ? "/images/end-logo-strong.png" : "/images/end-logo-soft.png"}          
        width={260}
          height={80}
          alt="Art of Quism"
          priority
        />
      </div>
 
      <h3 className="footer-title">
        {t.footer.title}
      </h3>

      <p className="footer-desc">
        {t.footer.description}
      </p>

      <p>
        {t.footer.subtitle}
      </p>

      <div className="footer-divider" />

      <p className="footer-copy">
        © {new Date().getFullYear()} {t.footer.copyright}
      </p>

    </footer>
  );
}