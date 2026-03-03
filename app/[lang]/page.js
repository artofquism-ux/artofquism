const allowedLangs = ["en", "bn", "hi", "es"];

export function generateStaticParams() {
  return allowedLangs.map((lang) => ({ lang }));
}

export default function LangPage({ params }) {
  return <h1>Language: {params.lang}</h1>;
}