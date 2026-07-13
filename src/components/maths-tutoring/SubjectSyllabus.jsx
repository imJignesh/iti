import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("maths-tutoring");

export default function MathsSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
