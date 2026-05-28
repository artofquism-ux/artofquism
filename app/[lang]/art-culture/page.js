import ContentPage from "@/components/ContentPage";
import { artCultureData } from "@/lib/data/artCultureData";

export default async function Page({ params }) {
const lang = (await params)?.lang || "en";

  return (
<ContentPage data={artCultureData} lang={lang}/>
 
  );
}