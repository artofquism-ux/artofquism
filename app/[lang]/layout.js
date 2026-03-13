import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Art of Quism",
  description:
    "Art of Quism explores consciousness, nature, and inner awareness through visual art and philosophical reflection.",
};

export default async function LangLayout({ children, params }) {

  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );

}