import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function IbcCopyIgniteAboutCard() {
  const config = getOurApproachData("ibc-copy");
  return <OurApproach config={config} />;
}
