import ContentPage from "@/components/ContentPage";
import { founderData } from "@/lib/data/founderData";
import content from "@/app/content";

export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  const t = content[lang] || content.en;

  return (
    <ContentPage
      data={founderData}
      lang={lang}
      t={t}
    />
  );
}