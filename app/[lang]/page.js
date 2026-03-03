import bn from "../content/bn";
import en from "../content/en";
import hi from "../content/hi";
import es from "../content/es";

export async function generateMetadata({ params }) {
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

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "bn" },
    { lang: "hi" },
    { lang: "es" },
  ];
}

export default function HomePage({ params }) {
  const { lang } = params;

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  return (
    <main>
      <h1>{content.home?.title}</h1>
      <p>{content.home?.description}</p>
    </main>
  );
}