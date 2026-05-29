import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
      <ScrollTopButton />
    </>
  );
}