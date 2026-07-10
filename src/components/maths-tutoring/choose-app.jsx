import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("maths-tutoring");

export default function MathsChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
