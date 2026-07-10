import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("computer-tutoring");

export default function ComputerChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
