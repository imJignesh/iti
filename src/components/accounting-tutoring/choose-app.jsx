import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("accounting-tutoring");

export default function AccountingChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
