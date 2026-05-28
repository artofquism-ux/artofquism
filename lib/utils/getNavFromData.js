export function getNavFromData(data, slug, title) {
  const imageBlock = data.tabs?.[0]?.blocks?.find(
    (b) => b.type === "images"
  );

  return {
    slug,
    title,
    img: imageBlock?.items?.[0]?.image || "/fallback.jpg",
  };
}