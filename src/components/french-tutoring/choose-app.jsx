import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("french-tutoring");

export default function FrenchChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
