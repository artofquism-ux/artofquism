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
  metadataBase: new URL("https://artofquism.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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