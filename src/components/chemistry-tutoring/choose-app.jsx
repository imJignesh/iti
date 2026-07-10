import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("chemistry-tutoring");

export default function ChemistryChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
