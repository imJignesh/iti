import WhatWeOfferSection from "@/components/shared/WhatWeOfferSection";
import { getWhatWeOfferData } from "@/data/whatWeOfferConfig";

export default function WhatWeOfferSectionMYP() {
  return <WhatWeOfferSection config={getWhatWeOfferData("myp")} />;
}
