"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
      if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");

    let initialTheme;

    if (saved) {
      initialTheme = saved;
    } else {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = systemDark ? "dark" : "light";
    }

  // 🔐 safe update
  requestAnimationFrame(() => {
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  });

}, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  if (!theme) return null;

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}