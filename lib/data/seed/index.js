import { abhidhan } from "./abhidhan";
import { foundation } from "./foundation";
import { observation } from "./observation";
import { symbols } from "./symbols";
import { banyan } from "./banyan";
import { research } from "./research";
import { abhidhanHome } from "./abhidhanHome";   // ← এটাও import করুন

console.log(abhidhan.slug);

export const seedMap = {
  [abhidhan.slug]: abhidhan,
  [foundation.slug]: foundation,
  [observation.slug]: observation,
  [research.slug]: research,
  [symbols.slug]: symbols,
  [banyan.slug]: banyan,
};

export { abhidhanHome };

 