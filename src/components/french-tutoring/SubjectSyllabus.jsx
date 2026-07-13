import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("french-tutoring");

export default function FrenchSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
