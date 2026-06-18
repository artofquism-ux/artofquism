
import ContentPage from "@/components/ContentPage";
import { galleryMap } from "@/lib/data/gallery";
import { notFound } from "next/navigation";

export default async function GallerySlugPage({ params }) {
  const { lang, slug } = await params;

  const item = galleryMap[slug];

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