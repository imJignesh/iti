import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function IbcIgniteAboutCard() {
  const config = getOurApproachData("ibc");
  return <OurApproach config={config} />;
}
