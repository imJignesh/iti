import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("economics-tutoring");

export default function EconomicsChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
