import SubjectCardCarousel from "@/components/shared/SubjectCardCarousel";
import { getSubjectCardCarouselData } from "@/data/subjectCardCarouselConfig";

export default function SubjectsCard() {
  const config = getSubjectCardCarouselData("ap");
  return <SubjectCardCarousel config={config} />;
}
