export default function sitemap() {

const baseUrl = "https://artofquism.com";

/* ONLY REAL LANGUAGES */
const languages = ["en","bn"];

/* ALL ROUTES */
const routes = [
"",
"/gallery",
"/museum",
"/gallery3-enlightenment",
"/gallery2-life",
"/gallery1-creation"
];

const urls = [];

languages.forEach((lang)=>{

routes.forEach((route)=>{

urls.push({
url: `${baseUrl}/${lang}${route}`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: route === "" ? 1 : 0.8
});

});

});

return urls;

}