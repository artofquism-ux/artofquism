"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let mounted = true; // ✅ guard

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      if (mounted) {
        setWidth(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      mounted = false; // ✅ prevent update after unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div style={{ width: `${width}%` }} className="progress-bar" />;
}