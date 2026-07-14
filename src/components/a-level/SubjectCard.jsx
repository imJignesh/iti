import SubjectCardCarousel from "@/components/shared/SubjectCardCarousel";
import { getSubjectCardCarouselData } from "@/data/subjectCardCarouselConfig";

export default function SubjectsCard() {
  const config = getSubjectCardCarouselData("a-level");
  return <SubjectCardCarousel config={config} />;
}
