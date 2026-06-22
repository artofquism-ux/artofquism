"use client";

export default function LanguageSwitcherEssence({
  lang,
  setLang,
}) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button onClick={() => setLang("bn")}>BN</button>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("hi")}>HI</button>
      <button onClick={() => setLang("sa")}>SA</button>
    </div>
  );
}