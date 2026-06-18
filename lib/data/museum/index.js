import { life } from "./life";
import { nature } from "./nature";
import { art } from "./art";
import { culture } from "./culture";
import { communication } from "./communication";

export const museumMap = {
  [life.slug]: life,
  [nature.slug]: nature,
  [art.slug]: art,
  [culture.slug]: culture,
  [communication.slug]: communication,
};