import { getCollectionData } from "@/lib/data/getCollectionData";
import ContentPage from "@/components/ContentPage";

export default async function Page({ params }) {
  const { lang, collection, slug } = await params;
  const safeLang = lang || "en";

  
  // 🔥 MAIN FIX
  const data = getCollectionData(collection, slug);

 
 
 
  return (
    <ContentPage
      data={data}
      lang={safeLang}
      slug={slug}
    />
  );
}