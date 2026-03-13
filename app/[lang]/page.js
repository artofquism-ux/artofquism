import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import AboutSection from "@/components/AboutSection";

export default function Home(){

const featured = [
 {
   img:"/images/f1.jpg",
   title:"Creation",
   link:"/en/gallery"
 },
 {
   img:"/images/f2.jpg",
   title:"Recreation",
   link:"/en/gallery"
 },
 {
   img:"/images/f3.jpg",
   title:"Enlightenment",
   link:"/en/gallery"
 }
];

return(
<>
<Hero
 title="THE ART OF QUISM"
 subtitle="Reflection of Zero-Dimensional Life"
 button={{
   label:"Explore Gallery",
   link:"/en/gallery"
 }}
/>

<FeaturedGrid items={featured}/>
<AboutSection/>
</>
);

}