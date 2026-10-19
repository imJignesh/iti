const CURRICULA = [
  {
    category: "IB",
    title: "IB Diploma (IBDP)",
    description: "HL and SL subject tutoring, IAs, Extended Essay and TOK.",
    links: [{ label: "View IBDP tutors", href: "/courses/ibdp-tutors-in-dubai" }],
  },
  {
    category: "IB",
    title: "IB MYP",
    description: "Years 6 to 10 support in maths, sciences, languages and personal project.",
    links: [{ label: "View MYP tutors", href: "/courses/myp-tutors-in-dubai" }],
  },
  {
    category: "British",
    title: "IGCSE and GCSE",
    description: "Board-specific teaching for Cambridge, Edexcel and AQA papers.",
    links: [{ label: "View IGCSE tutors", href: "/courses/igcse-tutors-in-dubai" }],
  },
  {
    category: "British",
    title: "A-Levels",
    description: "AS and A2 tutoring with past-paper practice and mock exams.",
    links: [{ label: "View A-Level tutors", href: "/courses/a-level-tutors-in-dubai" }],
  },
  {
    category: "American",
    title: "AP and ACT",
    description: "Advanced Placement subjects and ACT preparation for US university entry.",
    links: [
      { label: "AP tutors", href: "/advanced-placements-tutors-in-dubai" },
      { label: "ACT tutors", href: "/act-tutors-in-dubai" },
    ],
  },
  {
    category: "Flexible",
    title: "Homeschooling",
    description: "Structured support for homeschooled students and private candidates.",
    links: [
      { label: "View homeschooling", href: "/courses/homeschooling-tutors-in-dubai" },
    ],
  },
];

const SUBJECTS = [
  ["Maths", "/maths-tutor-in-dubai"],
  ["Physics", "/physics-tutor-in-dubai"],
  ["Chemistry", "/chemistry-tutor-in-dubai"],
  ["Biology", "/biology-tutor-in-dubai"],
  ["English", "/english-tutor-in-dubai"],
  ["Computer Science", "/computer-science-tutor-in-dubai"],
  ["Economics", "/economics-tutor-in-dubai"],
  ["Business Studies", "/business-studies-tutor-in-dubai"],
  ["Psychology", "/psychology-tutor-in-dubai"],
  ["Accounting", "/accounting-tutor-in-dubai"],
  ["French", "/french-tutor-in-dubai"],
  ["Spanish", "/spanish-tutor-in-dubai"],
];

export default function GmbWhatWeTeach() {
  return (
    <section className="whatWeTeach" aria-labelledby="what-we-teach-title">
      <div className="sectionContainer">
        <div className="sectionIntro">
          <h2 className="SubHeading">What We Teach</h2>
          <h3 id="what-we-teach-title" className="testTitle">
            Curricula and exams taught at the <span className="highlight">JLT centre</span>
          </h3>
          <p>
            Choose your curriculum or your subject. Each link opens the full page with tutors,
            topics and exam preparation.
          </p>
        </div>

        <div className="curriculumGrid">
          {CURRICULA.map((item) => (
            <article className="curriculumCard" key={item.title}>
              <span className="cardCategory">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="cardLinks">
                {item.links.map((link) => (
                  <a href={link.href} key={link.href}>
                    <span>{link.label}</span>
                    <img
                      className="linkArrow"
                      src="/assets/rar.webp"
                      alt=""
                      width="25"
                      height="25"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="subjectsBlock">
          <h3>Or start from a subject</h3>
          <nav className="subjectLinks" aria-label="Tutoring subjects">
            {SUBJECTS.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        .whatWeTeach {
          padding: 70px 0;
          background: #fff;
        }

        .sectionContainer {
          width: 90vw;
          margin: 0 auto;
        }

        .sectionIntro {
          max-width: none;
          margin: 0 auto 40px;
          text-align: center;
        }

        .sectionIntro p {
          max-width: 60%;
          margin: 0 auto;
          color: var(--grey-text);
          font-size: 1vw;
          line-height: 1.5vw;
          opacity: 0.5;
        }

        .curriculumGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .curriculumCard {
          position: relative;
          display: flex;
          min-height: 235px;
          flex-direction: column;
          padding: 27px 30px;
          overflow: hidden;
          background: linear-gradient(105deg, rgba(230, 235, 252, 0.78), rgba(255, 255, 255, 0.96));
          border: 1px solid rgba(121, 190, 165, 0.52);
          border-radius: 18px;
          box-shadow: 0 12px 32px rgba(37, 35, 109, 0.08);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .curriculumCard::before {
          position: absolute;
          inset: 0 0 auto;
          height: 5px;
          background: linear-gradient(90deg, #08a990, #83cbb6);
          content: "";
        }

        .curriculumCard:hover {
          box-shadow: 0 18px 40px rgba(37, 35, 109, 0.14);
          transform: translateY(-4px);
        }

        .cardCategory {
          color: #078f7c;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .curriculumCard h3 {
          margin: 12px 0 12px;
          color: #201d6d;
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.25;
        }

        .curriculumCard p {
          margin: 0 0 20px;
          color: #4f526a;
          font-size: 1rem;
          line-height: 1.65;
        }

        .cardLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }

        .cardLinks a {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 7px 8px 7px 15px;
          color: #201d6d;
          background: linear-gradient(90deg, #a3caf5, #e7f6ff);
          border-radius: 30px;
          box-shadow: 1px 3px 7px rgba(38, 66, 149, 0.2);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-decoration: none;
          text-transform: uppercase;
          transition: filter 180ms ease, transform 180ms ease;
        }

        .cardLinks a:hover {
          filter: brightness(1.04);
          transform: translateY(-2px);
        }

        .linkArrow {
          display: block;
          width: 25px;
          height: 25px;
          flex: 0 0 25px;
          object-fit: contain;
          transition: transform 180ms ease;
        }

        .cardLinks a:hover .linkArrow {
          transform: translateX(3px);
        }

        .subjectsBlock {
          margin-top: 54px;
          padding-top: 38px;
          border-top: 1px solid rgba(40, 37, 112, 0.18);
        }

        .subjectsBlock h3 {
          margin: 0 0 22px;
          color: #201d6d;
          font-size: 1.35rem;
          font-weight: 800;
        }

        .subjectLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .subjectLinks a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          padding: 10px 20px;
          color: #201d6d;
          background: #fff;
          border: 1px solid rgba(121, 190, 165, 0.72);
          border-radius: 30px;
          font-size: 0.94rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 180ms ease, background 180ms ease, transform 180ms ease;
        }

        .subjectLinks a:hover {
          color: #fff;
          background: #282570;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .whatWeTeach {
            padding: 50px 0;
          }

          .sectionContainer {
            width: 92vw;
          }

          .curriculumGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sectionIntro p {
            max-width: 700px;
            font-size: 20px;
            line-height: 1.5;
          }

        }

        @media (max-width: 575px) {
          .whatWeTeach {
            padding: 50px 0;
          }

          .sectionContainer {
            width: 90vw;
          }

          .sectionIntro {
            margin-bottom: 30px;
          }

          .sectionIntro p {
            max-width: 100%;
            font-size: 14px;
            line-height: 22px;
          }

          .curriculumGrid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .curriculumCard {
            min-height: 0;
            padding: 22px 20px;
          }

          .curriculumCard h3 {
            margin: 8px 0;
            font-size: 1.35rem;
          }

          .curriculumCard p {
            margin-bottom: 16px;
            line-height: 1.55;
          }

          .cardLinks a {
            min-height: 38px;
            padding: 6px 7px 6px 13px;
            font-size: 0.76rem;
          }

          .linkArrow {
            width: 24px;
            height: 24px;
            flex-basis: 24px;
          }

          .subjectsBlock {
            margin-top: 40px;
            padding-top: 30px;
          }

          .subjectLinks {
            gap: 10px;
          }

          .subjectLinks a {
            min-height: 40px;
            padding: 8px 16px;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
