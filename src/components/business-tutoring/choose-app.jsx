import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("business-tutoring");

export default function BusinessChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
