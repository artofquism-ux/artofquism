"use client";

export default function LanguageSwitcherEssence({
  lang,
  setLang,
}) {
  return (
    <div className="essence-lang-switcher">

      <button
        className={lang === "bn" ? "active" : ""}
        onClick={() => setLang("bn")}
      >
        বাংলা
      </button>

      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>

      <button
        className={lang === "hi" ? "active" : ""}
        onClick={() => setLang("hi")}
      >
        HI
      </button>

      <button
        className={lang === "sa" ? "active" : ""}
        onClick={() => setLang("sa")}
      >
        SA
      </button>

    </div>
  );
}