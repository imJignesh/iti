"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      {/* Header Row */}
      <div className="header" onClick={() => setOpen(!open)}>
        <div className="text-content">
          <h2 className="title">Complete past paper & mock exam series for IGCSE, A Levels & IB in the UAE</h2>
          <p className="subtitle">Ignite offers a structured test series combining past papers, full syllabus mock exams, and predicted papers for students across the UAE. Designed for Grades 9–13, the program ensures complete syllabus coverage before May/June 2026 board exams. Students benefit from exam-style practice, detailed evaluation, and competitive benchmarking. The focus is on performance, precision, and final grade improvement.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IGCSE past papers for Edexcel, Cambridge & OxfordAQA exam boards</h2>
          <p className="subtitle">Access carefully selected IGCSE past papers aligned with Edexcel, Cambridge, and OxfordAQA specifications. The papers reflect updated exam patterns and assessment objectives. Students practice real board-style questions to strengthen accuracy and exam familiarity. Ideal for Year 10 and Year 11 students preparing for final boards.</p>          <br />

          <h2 className="title">A Level Past Papers for Edexcel, Cambridge & OxfordAQA Boards</h2>
          <p className="subtitle">Ignite provides structured A Level past paper practice for Sixth Form and Grade 12–13 students. Papers are aligned with current exam board marking schemes and formats. The focus is on advanced applications, structured responses, and high-scoring strategies. This ensures stronger preparation for final A Level exams in Dubai and the UAE.</p>          <br />

          <h2 className="title">IB Diploma past paper mock tests for Higher Level & Standard Level (Grade 11 & 12)</h2>
          <p className="subtitle">IB Diploma students receive HL and SL mock tests designed around official IB assessment criteria. The structure mirrors actual exam components, including data analysis and extended responses. This prepares Grade 11 and 12 students for rigorous final IB assessments. Performance insights help students refine strategy before finals.</p>          <br />

          <h2 className="title">Complete IGCSE revision support for higher grades in 2026</h2>
          <p className="subtitle">Our IGCSE revision program strengthens conceptual clarity and exam application skills. Students receive systematic practice across core areas before the May/June 2026 exams. The structured approach ensures consistent preparation and measurable academic progress. Ideal for students aiming for A and A* outcomes.</p>          <br />

          <h2 className="title">Structured A Level revision for stronger final exam performance</h2>
          <p className="subtitle">Ignite’s A Level revision combines concept consolidation with exam-focused testing. Students receive guided practice to enhance analytical writing, structured answers, and subject depth. The approach ensures readiness for final board assessments. Designed for ambitious students targeting top university placements.</p>          <br />

          <h2 className="title">Thorough IB Diploma revision for HL & SL success with Ignite’s test series</h2>
          <p className="subtitle">Our IB revision framework supports both Higher Level and Standard Level students. It integrates syllabus consolidation with timed assessments and exam-specific practice. Students gain clarity on assessment objectives and scoring expectations. The result is improved consistency and stronger predicted grades.</p>          <br />

          <h2 className="title">IGCSE topic-wise past papers for targeted exam practice</h2>
          <p className="subtitle">Topic-wise, IGCSE past papers allow students to strengthen specific weak areas. This method supports focused revision rather than random paper solving. Each topic is practiced using board-aligned questions. Ideal for structured preparation before attempting full mock exams.</p>          <br />

          <h2 className="title">A Level topic-wise past papers for focused concept mastery</h2>
          <p className="subtitle">Students practice A Level questions topic-by-topic to master complex concepts. This targeted approach improves depth, accuracy, and exam technique. It ensures clarity before progressing to full-length mock exams. A strategic way to strengthen high-weightage units.</p>          <br />

          <h2 className="title">What is the difference between mock exams & past paper practice?</h2>
          <p className="subtitle">Past paper practice focuses on solving previously asked board questions. Mock exams simulate the full final exam experience in a structured setting. While past papers build familiarity, mocks test readiness and performance strategy. Both are essential for comprehensive exam preparation.</p>          <br />

          <h2 className="title">What is the best mock test series in Dubai for May 2026?</h2>
          <p className="subtitle">The best mock test series should offer full syllabus coverage, exam-style testing, and detailed evaluation. Ignite’s May 2026 Test Series combines past papers, predicted papers, and structured mocks. It is designed specifically for IGCSE, A Level, and IB students in Dubai. Competitive ranking and performance tracking add further value.</p>          <br />

          <h2 className="title">Where can I practice IGCSE past papers topic-wise in the UAE?</h2>
          <p className="subtitle">Students can practice structured IGCSE topic-wise past papers through Ignite’s revision test series. The program provides curated board-specific questions for focused preparation. This ensures clarity in weaker topics before full mock assessments. Available for students across Dubai and the UAE.</p>          <br />

          <h2 className="title">Where can I find A-Level past papers practice in Dubai?</h2>
          <p className="subtitle">Ignite offers organized A Level past paper practice aligned with Edexcel, Cambridge, and OxfordAQA boards. Students receive exam-focused guidance and structured assessments. This ensures proper preparation for final board exams. Suitable for Year 12 and Year 13 students.</p>          <br />

          <h2 className="title">Are there IB HL & SL mock exams available in the UAE?</h2>
          <p className="subtitle">Yes, Ignite provides structured IB HL and SL mock exams for Diploma students. These assessments mirror official IB formats and marking criteria. Students gain exam readiness before final assessments. The program supports Grade 11 and 12 IB candidates.</p>          <br />

          <h2 className="title">Ignite’s final exam preparation test series for IGCSE, A Levels & IB in Dubai</h2>
          <p className="subtitle">Ignite’s comprehensive test series is built for serious exam preparation in Dubai. It integrates revision, past papers, mock exams, and predicted papers into one structured framework. Students receive evaluation, benchmarking, and academic guidance. Designed to maximize performance for May/June 2026 board exams.</p>
        </div>
      )}

      <style jsx>{`
        .card {
          background-image: url('/assets/Rectangle130.webp');
          background-size: cover;
          background-position: center;
          max-width:90vw;
          color: white;
          padding: 24px;
          transition: all 0.3s ease;
          margin: 0 auto !important;
         border-radius: 30px; overflow: hidden;}

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .text-content {
          flex: 1;
        }

        .title {
          font-weight: bold;
          letter-spacing: 0.05em;
          font-size: 1.125rem; /* 18px */
          margin: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin: 4px 0 0 0;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
        }

        .expanded {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.5;
        }
                  @media (max-width: 575px) {
                          .card {
          max-width:95vw;
          color: white;
          padding: 20px;
          transition: all 0.3s ease;
          
         border-radius: 30px; overflow: hidden;}
            }
      `}</style>
    </div>
  );
}
