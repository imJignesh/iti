import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionBC() {
  const config = getWhatWeOfferData("bc");
  return <WhatWeOfferSection config={config} />;
}
