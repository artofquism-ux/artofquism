import ContentPage from "@/components/ContentPage";
import { aboutData } from "@/lib/data/aboutData";
import content from "@/app/content";

export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  const t = content[lang] || content.en;

  return (
    <ContentPage
      data={aboutData}
      lang={lang}
      t={t}
    />
  );
}