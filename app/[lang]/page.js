import { notFound } from "next/navigation";
import bn from "../content/bn";
import en from "../content/en";
import hi from "../content/hi";
import es from "../content/es";

const allowedLangs = ["en", "bn", "hi", "es"];

export const dynamic = "force-static"; // ✅ VERY IMPORTANT

export function generateStaticParams() {
  return allowedLangs.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;

  if (!allowedLangs.includes(lang)) {
    return {};
  }

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  const baseUrl = "https://artofquism.com";

  return {
    title: content.home?.title || "Art of Quism",
    description: content.home?.description || "",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
    },
  };
}

export default function LangPage({ params }) {
  const { lang } = params;

  if (!allowedLangs.includes(lang)) {
    notFound();
  }

  return <h1>Language: {lang}</h1>;
}