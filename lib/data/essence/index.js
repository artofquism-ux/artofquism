import { pushpanjali } from "./pushpanjali";
import { adhyavasaya } from "./adhyavasaya";
import { svarupa } from "./svarupa";
import { shunyta } from "./shunyta";
import { atmajnana } from "./atmajnana";

console.log(pushpanjali.slug);

export const essenceMap = {
  [pushpanjali.slug]: pushpanjali,
  [adhyavasaya.slug]: adhyavasaya,
  [svarupa.slug]: svarupa,
  [shunyta.slug]: shunyta,
  [atmajnana.slug]: atmajnana,
};