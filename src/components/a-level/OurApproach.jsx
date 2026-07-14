import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function ALevelIgniteAboutCard() {
  const config = getOurApproachData("a-level");
  return <OurApproach config={config} />;
}
