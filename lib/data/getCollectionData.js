// ABOUT / CORE
import { aboutData } from "@/lib/data/aboutData";
import { artCultureData } from "@/lib/data/artCultureData";
import { founderData } from "@/lib/data/founderData";

// MUSEUM
import { life } from "@/lib/data/museum/life";
import { nature } from "@/lib/data/museum/nature";
import { art } from "@/lib/data/museum/art";
import { culture } from "@/lib/data/museum/culture";
import { communication } from "@/lib/data/museum/communication";

// GALLERY
import { creation } from "@/lib/data/gallery/creation";
import { recreation } from "@/lib/data/gallery/recreation";
import { enlightenment } from "@/lib/data/gallery/enlightenment";
import { modernism } from "@/lib/data/gallery/modernism";
import { expressionism } from "@/lib/data/gallery/expressionism";


export function getCollectionData(collection, slug) {
  const map = {
    about: {
      default: aboutData,
    },

    "art-culture": {
      default: artCultureData,
    },

    founder: {
      default: founderData,
    },

    museum: {
      life: life,
      nature: nature,
      art: art,
      culture: culture,
      communication: communication,
    },

    gallery: {
      creation: creation,
      enlightenment: enlightenment,
      recreation: recreation,
      modernism: modernism,
      expressionism: expressionism,
    },
  };

  const group = map[collection];

  if (!group) return null;

  return group[slug] || group.default || null;
}