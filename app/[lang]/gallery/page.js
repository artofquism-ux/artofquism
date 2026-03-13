import Link from "next/link";
import en from "../../content/en";
import bn from "../../content/bn";
import hi from "../../content/hi";
import es from "../../content/es";

export default async function GalleryPage({ params }) {

const { lang } = await params;

const data =
lang==="bn"?bn:
lang==="hi"?hi:
lang==="es"?es:
en;

return(

<section className="gallery-page">

<h1>{data.gallery.title}</h1>
<p className="gallery-desc">{data.gallery.desc}</p>

<div className="gallery-entry-grid">

<Link href={`/${lang}/gallery/creation`} className="gallery-entry-card">
Creation
</Link>

<Link href={`/${lang}/gallery/recreation`} className="gallery-entry-card">
Recreation
</Link>

<Link href={`/${lang}/gallery/enlightenment`} className="gallery-entry-card">
Enlightenment
</Link>

</div>

</section>

);
}