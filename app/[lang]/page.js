import { notFound } from "next/navigation";
import bn from "../content/bn";
import en from "../content/en";
import hi from "../content/hi";
import es from "../content/es";

const allowedLangs = ["en", "bn", "hi", "es"];

export function generateStaticParams() {
  return allowedLangs.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const { lang } = params;

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  const baseUrl = "https://artofquism.com";

  return {
    title: content.home?.title || "Art of Quism",
    description: content.home?.description || "",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        bn: `${baseUrl}/bn`,
        hi: `${baseUrl}/hi`,
        es: `${baseUrl}/es`,
      },
    },
  };
}

export default function HomePage({ params }) {
  const { lang } = params;

  if (!allowedLangs.includes(lang)) {
    notFound();
  }

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  return (
    <main>
      <h1>{content.home?.title}</h1>
      <p>{content.home?.description}</p>
    </main>
  );
}