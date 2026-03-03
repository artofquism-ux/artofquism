"use client";

import { usePathname, useRouter } from "next/navigation";

const languages = ["en", "bn", "hi", "es"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1];

  const handleSwitch = (lang) => {
    const segments = pathname.split("/");
    segments[1] = lang; // replace current lang
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div style={{ padding: "10px" }}>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleSwitch(lang)}
          style={{
            marginRight: "8px",
            padding: "5px 10px",
            background: currentLang === lang ? "black" : "white",
            color: currentLang === lang ? "white" : "black",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}