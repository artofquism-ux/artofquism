
import "@/app/essence.css";
import ContentPage from "@/components/ContentPage";
import { essenceMap } from "@/lib/data/essence";
import { notFound } from "next/navigation";

export default async function EssenceSlugPage({ params }) {
  const { lang, slug } = await params;

  const item = essenceMap[slug];

  if (!item) {
    notFound();
  }

  return (
    <ContentPage
      data={item}
      lang={lang}
      slug={slug}
    />
  );
}