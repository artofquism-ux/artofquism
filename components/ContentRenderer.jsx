import Verse from "./Verse";
import Separator from "./Separator";
import ContentImage from "./ContentImage";
import ContentVideo from "./ContentVideo";
import ContentTree from "./ContentTree";

export function renderBlock(block) {

  switch(block.type){

    case "verse":
      return <Verse {...block} />;

    case "separator":
      return <Separator />;

    case "image":
      return <ContentImage {...block} />;

    case "video":
      return <ContentVideo {...block} />;

    case "tree":
      return <ContentTree {...block} />;

    default:
      return null;
  }
}