import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function IbdpIgniteAboutCard() {
  const config = getOurApproachData("ibdp");
  return <OurApproach config={config} />;
}
