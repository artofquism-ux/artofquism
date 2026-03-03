export default function sitemap() {
  const baseUrl = "https://artofquism.com";

  const languages = ["en", "bn", "hi", "es"];

  const routes = [
    "",
    "/gallery",
    "/museum",
  ];

  const urls = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return urls;
}