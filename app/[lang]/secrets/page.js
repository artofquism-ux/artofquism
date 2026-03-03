import bn from "../../content/bn";
import en from "../../content/en";
import hi from "../../content/hi";
import es from "../../content/es";

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "bn" },
    { lang: "hi" },
    { lang: "es" },
  ];
}

export default function SecretsPage({ params }) {
  const { lang } = params;

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  return (
    <main>
      <h1>{content.secrets?.title}</h1>
      <p>{content.secrets?.description}</p>
    </main>
  );
} 