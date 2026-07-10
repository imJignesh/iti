import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("biology-tutoring");

export default function BiologyChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
