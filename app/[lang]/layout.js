import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default async function RootLayout({
  children,
  params,
}) {
  const { lang } = await params;

  return (
    <>
      <Navbar />
      <main>{children}</main>

      <Footer lang={lang} />
      <ScrollTopButton />
    </>
  );
}