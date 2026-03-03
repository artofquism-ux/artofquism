import bn from "../../content/bn";
import en from "../../content/en";
import hi from "../../content/hi";
import es from "../../content/es";

// ==============================
// METADATA
// ==============================

export async function generateMetadata({ params }) {
  const { lang } = params;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://artofquism.com";

  return {
    title: "Gallery | Art of Quism",

    alternates: {
      canonical: `/${lang}/gallery`,
      languages: {
        en: "/en/gallery",
        bn: "/bn/gallery",
        hi: "/hi/gallery",
        es: "/es/gallery",
      },
    },

    openGraph: {
      url: `${baseUrl}/${lang}/gallery`,
      locale: lang,
      type: "website",
    },
  };
}

// ==============================
// STATIC PARAMS
// ==============================

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "bn" },
    { lang: "hi" },
    { lang: "es" },
  ];
}

// ==============================
// PAGE
// ==============================

export default function GalleryPage({ params }) {
  const { lang } = params;

  const contentMap = { bn, en, hi, es };
  const content = contentMap[lang] || en;

  return (
    <main>
      <h1>{content.gallery.title}</h1>
      <p>{content.gallery.description}</p>
    </main>
  );
}