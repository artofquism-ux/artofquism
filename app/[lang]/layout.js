import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
      <ScrollProgress />
    </>
  );
}