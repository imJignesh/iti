import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("computer-tutoring");

export default function ComputerSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
