import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function BcIgniteAboutCard() {
  const config = getOurApproachData("bc");
  return <OurApproach config={config} />;
}
