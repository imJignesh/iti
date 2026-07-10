import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("psychology-tutoring");

export default function PsychologyChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
