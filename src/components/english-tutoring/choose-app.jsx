import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("english-tutoring");

export default function EnglishChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
