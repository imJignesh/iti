import OurApproach from "@/components/shared/OurApproach";
import { getOurApproachData } from "@/data/ourApproachConfig";

export default function MypIgniteAboutCard() {
  const config = getOurApproachData("myp");
  return <OurApproach config={config} />;
}
