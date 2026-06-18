import { pushpanjali } from "./pushpanjali";
import { innerPath } from "./innerPath";
import { lastLayer } from "./lastLayer";
import { reflectivePoint } from "./reflectivePoint";
import { atomicJourney } from "./atomicJourney";

console.log(pushpanjali.slug);

export const essenceMap = {
  [pushpanjali.slug]: pushpanjali,
  [innerPath.slug]: innerPath,
  [lastLayer.slug]: lastLayer,
  [reflectivePoint.slug]: reflectivePoint,
  [atomicJourney.slug]: atomicJourney,
};