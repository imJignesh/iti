import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function ActIgniteAboutCard() {
  const config = getOurApproachData("act");
  return <OurApproach config={config} />;
}
