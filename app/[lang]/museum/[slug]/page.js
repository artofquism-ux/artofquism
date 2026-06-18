import ContentPage from "@/components/ContentPage";
import { museumMap } from "@/lib/data/museum";
import { notFound } from "next/navigation";

export default async function MuseumSlugPage({ params }) {
  const { lang, slug } = await params;

  const item = museumMap[slug];

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