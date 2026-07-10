import ChooseAppShared from "@/components/shared/ChooseApp";
import { getChooseAppData } from "@/data/chooseAppConfig";

const chooseAppData = getChooseAppData("physics-tutoring");

export default function PhysicsChooseApp() {
  return <ChooseAppShared config={chooseAppData} />;
}
