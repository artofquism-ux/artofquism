import { notFound } from "next/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const allowedLangs = ["en", "bn", "hi", "es"];

export async function generateMetadata({ params }) {
  const { lang } = params;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://artofquism.com";

  const ogImage = `${baseUrl}/og-${lang}.jpg`;

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        bn: `${baseUrl}/bn`,
        hi: `${baseUrl}/hi`,
        es: `${baseUrl}/es`,
      },
    },

    openGraph: {
      title: "Art of Quism",
      url: `${baseUrl}/${lang}`,
      type: "website",
      locale: lang,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default function LangLayout({ children, params }) {
  const { lang } = params;

  if (!allowedLangs.includes(lang)) {
    notFound();
  }

  return (
    <>
      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Art of Quism",
            url: "https://artofquism.com",
            inLanguage: lang,
          }),
        }}
      />

      <LanguageSwitcher />
      {children}
    </>
  );
}