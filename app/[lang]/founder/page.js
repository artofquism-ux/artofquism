import ContentPage from "@/components/ContentPage";
import { founderData } from "@/lib/data/founderData";

export default async function Page({ params }) {

  const lang = (await params)?.lang || "en";

  return (
    <>
    

      <ContentPage
        data={founderData}
        lang={lang}
      />
    </>
  );
}