"use client";

import { useEffect } from "react";

export default function Reveal({ children, delay = 0 }) {

  useEffect(() => {
    const el = document.querySelectorAll(".reveal");

    el.forEach((item) => {
      item.style.transitionDelay = `${delay}s`;
    });
  }, [delay]);

  return <div className="reveal">{children}</div>;
}