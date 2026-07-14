import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function AboutusIgniteAboutCard() {
  const config = getOurApproachData("aboutus");
  return <OurApproach config={config} />;
}
