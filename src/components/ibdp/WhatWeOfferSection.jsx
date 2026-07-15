import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionIBDP() {
  const config = getWhatWeOfferData("ibdp");
  return <WhatWeOfferSection config={config} />;
}
