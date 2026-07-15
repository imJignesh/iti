import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionIBC() {
  const config = getWhatWeOfferData("ibc");
  return <WhatWeOfferSection config={config} />;
}
