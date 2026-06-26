
import "@/app/essence.css";
import ContentPage from "@/components/ContentPage";
import { seedMap } from "@/lib/data/seed";
import { notFound } from "next/navigation";

export default async function SeedSlugPage({ params }) {
  const { lang, slug } = await params;

  const item = seedMap[slug];

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