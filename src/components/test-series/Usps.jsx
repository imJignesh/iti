import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("test-series");

export default function TestSeriesUsps() {
  return <Usps config={uspData} />;
}
