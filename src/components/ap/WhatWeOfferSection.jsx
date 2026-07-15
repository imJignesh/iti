import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionAP() {
  const config = getWhatWeOfferData("ap");
  return <WhatWeOfferSection config={config} />;
}
