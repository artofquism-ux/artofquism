import { secretsData } from "@/lib/data/secretsData";
import ContentPage from "@/components/ContentPage";

export default async function Page({ params }) {

  const { slug } = await params;

  const tab = secretsData.tabs.find(
    (t) => t.link.split("/").pop() === slug
  );

  if (!tab) return null;

  return (
    <ContentPage
      data={{
        title: tab.name,
        content: tab.blocks,
      }}
    />
  );
}