"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isSecrets = pathname?.includes("secrets");
  const isLightBg = true;
  return (
    
    <footer className={`site-footer ${isSecrets ? "secrets-footer" : ""}`}>

      {/* 🔹 TOP DIVIDER */}
      
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

      {/* 🔹 BRAND TEXT */}
      <h3 className="footer-title">ART OF QUISM</h3>

      <p className="footer-desc">
         A contemplative space where art becomes a mirror of consciousness — exploring nature, silence, creation, and inner awareness;
   </p>
     <p>
        The awakening of subconscious, a stable life in emptiness — life buoyant with vitality, constant with infinite life;
      </p>

      {/* 🔹 BOTTOM DIVIDER */}
      <div className="footer-divider" />

      {/* 🔹 COPYRIGHT */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Art of Quism
      </p>

    </footer>
  );
}