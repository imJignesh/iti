import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("business-tutoring");

export default function BusinessSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
