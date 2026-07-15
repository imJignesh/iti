import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionIBCCopy() {
  const config = getWhatWeOfferData("ibc-copy");
  return <WhatWeOfferSection config={config} />;
}
