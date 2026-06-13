import ContentPage from "@/components/ContentPage";
import { artCultureData } from "@/lib/data/artCultureData";
import content from "@/app/content";

export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  const t = content[lang] || content.en;

  return (
    <ContentPage
      data={artCultureData}
      lang={lang}
      t={t}
    />
  );
}