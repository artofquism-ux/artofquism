import en from "../../content/en";
import bn from "../../content/bn";
import hi from "../../content/hi";
import es from "../../content/es";

import Hero from "@/components/Hero";
import SecretsClient from "./SecretsClient";

export const metadata = {
title: "Secrets of Quism",
description: "Inner journey of silence and awareness in Quism philosophy",

openGraph:{
title:"Art of Quism",
description:"Exploring consciousness through art",
images:["/image.png"],
}

};

export default async function SecretsPage({ params }) {

  const { lang } = await params;

  const contentMap = { en, bn, hi, es };
  const content = contentMap[lang] || en;

  return (
    <>

      <Hero
        title={content.secrets.title}
        subtitle={content.secrets.subtitle}
        dark
      />

      <div className="secrets-page">

        <p className="secrets-desc">
          {content.secrets.description}
        </p>

        <SecretsClient />

      </div>

    </>
  );
}