import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("spanish-tutoring");

export default function SpanishChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
