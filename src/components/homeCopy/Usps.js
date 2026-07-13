import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("homeCopy");

export default function HomeCopyUsps() {
  return <Usps config={uspData} />;
}
