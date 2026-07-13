import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("psychology-tutoring");

export default function PsychologySubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
