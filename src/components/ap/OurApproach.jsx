import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function ApIgniteAboutCard() {
  const config = getOurApproachData("ap");
  return <OurApproach config={config} />;
}
