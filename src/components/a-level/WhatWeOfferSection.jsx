import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionA() {
  const config = getWhatWeOfferData("a-level");
  return <WhatWeOfferSection config={config} />;
}
