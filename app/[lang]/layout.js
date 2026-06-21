import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import "@/app/essence.css";

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