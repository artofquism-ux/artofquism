import Link from "next/link";
import en from "../../content/en";
import bn from "../../content/bn";
import hi from "../../content/hi";
import es from "../../content/es";

export default async function MuseumPage({ params }) {

const { lang } = await params;

const data =
lang==="bn"?bn:
lang==="hi"?hi:
lang==="es"?es:
en;

return(

<section className="museum-page">

<h1>{data.museum.title}</h1>
<p className="museum-desc">{data.museum.desc}</p>

<div className="museum-grid">

<Link href={`/${lang}/museum/life`} className="museum-card">Life</Link>
<Link href={`/${lang}/museum/nature`} className="museum-card">Nature</Link>
<Link href={`/${lang}/museum/art`} className="museum-card">Art</Link>
<Link href={`/${lang}/museum/culture`} className="museum-card">Culture</Link>
<Link href={`/${lang}/museum/communication`} className="museum-card">Communication</Link>

</div>

</section>

);
}