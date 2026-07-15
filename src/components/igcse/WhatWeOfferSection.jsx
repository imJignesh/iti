import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionIGCSE() {
  const config = getWhatWeOfferData("igcse");
  return <WhatWeOfferSection config={config} />;
}
