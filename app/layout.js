import "./globals.css";
import { Noto_Serif, Noto_Serif_Bengali } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-en",
});

const notoBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-bn",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://artofquism.com"
  ),
};

export default async function RootLayout({ children, params }) {
  const lang = params?.lang ?? "en";

  return (
    <html lang={lang}>
      <head>
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Art of Quism",
              url: "https://artofquism.com",
              inLanguage: ["en", "bn", "hi", "es"],
            }),
          }}
        />
      </head>

      <body className={`${notoSerif.variable} ${notoBengali.variable}`}>
        {children}
      </body>
    </html>
  );
}