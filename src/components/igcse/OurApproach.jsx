import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function IgcseIgniteAboutCard() {
  const config = getOurApproachData("igcse");
  return <OurApproach config={config} />;
}
