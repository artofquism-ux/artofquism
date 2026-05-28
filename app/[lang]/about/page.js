import ContentPage from "@/components/ContentPage";
import { aboutData } from "@/lib/data/aboutData";

export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  return (
    <ContentPage
      data={aboutData}
      lang={lang}
    />
  );
}