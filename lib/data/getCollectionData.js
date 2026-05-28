// ABOUT / CORE
import { aboutData } from "@/lib/data/aboutData";
import { artCultureData } from "@/lib/data/artCultureData";
import { founderData } from "@/lib/data/founderData";

// MUSEUM
import { lifeData } from "@/lib/data/museum/lifeData";
import { natureData } from "@/lib/data/museum/natureData";
import { artData } from "@/lib/data/museum/artData";
import { cultureData } from "@/lib/data/museum/cultureData";
import { communicationData } from "@/lib/data/museum/communicationData";

// GALLERY
import { creationData } from "@/lib/data/gallery/creationData";
import { recreationData } from "@/lib/data/gallery/recreationData";
import { enlightenmentData } from "@/lib/data/gallery/enlightenmentData";

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
      life: lifeData,
      nature: natureData,
      art: artData,
      culture: cultureData,
      communication: communicationData,
    },

    gallery: {
      creation: creationData,
      enlightenment: enlightenmentData,
      recreation: recreationData,
    },
  };

  const group = map[collection];

  if (!group) return null;

  return group[slug] || group.default || null;
}