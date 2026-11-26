const PROGRAMMES = [
  {
    name: "IB Diploma (IBDP)",
    years: "Grades 11 and 12, HL and SL",
    subjects: "Maths AA, Maths AI, Physics, Chemistry, Biology, Computer Science, Business Management, Economics, English Language and Literature, French, Spanish and Psychology.",
    formats: ["One-to-one tutoring", "Group finals preparation", "Pre-IBDP summer bridge course", "Spring revision course"],
  },
  {
    name: "IB MYP",
    years: "Grades 6 to 10",
    subjects: "Maths (Standard and Extended), Physics, Chemistry, Biology, English Language and Literature, and French.",
    formats: ["One-to-one tutoring", "eAssessment preparation in groups"],
  },
  {
    name: "IGCSE and GCSE",
    years: "Grades 9 to 11",
    subjects: "Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Combined and Double Award Science, Computer Science and ICT, Business Studies, Economics, Accounting, English, French, Spanish, Psychology and Environmental Management.",
    formats: ["One-to-one tutoring", "Year 10 groups", "Group finals preparation", "Resit course"],
  },
  {
    name: "AS and A Level",
    years: "Years 12 and 13",
    subjects: "Pure Maths, Statistics, Further Maths, Physics, Chemistry, Biology, Computer Science, Business Studies, Economics, Accounting, English, French, Spanish, Psychology and Environmental Management.",
    formats: ["One-to-one tutoring", "AS (Year 12) groups", "A2 (Year 13) groups", "AS summer head start", "Resit programme"],
  },
];

export default function GmbCourses() {
  return (
    <section className="block" aria-labelledby="szr-courses-title">
      <div className="inner">
        <header className="intro">
          <h2 className="SubHeading">Courses</h2>
          <h3 id="szr-courses-title" className="title">
            Subjects and courses by <span className="highlight">year group</span>
          </h3>
          <p>
            Find your child&apos;s curriculum below to see the year groups, subjects and course options.
            You can also compare our programmes as a whole on our <a href="/">tuition centres in Dubai</a> page.
          </p>
        </header>
        <div className="grid">
          {PROGRAMMES.map((item) => (
            <article className="card" key={item.name}>
              <h4>{item.name}</h4>
              <p className="years">{item.years}</p>
              <p>{item.subjects}</p>
              <ul>
                {item.formats.map((format) => (
                  <li key={format}>{format}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="note">Batch timings and availability are confirmed when you book your free demo class.</p>
      </div>
      <style jsx>{`
        .block { padding: 60px 0; background: #fff; }
        .inner { width: 90vw; margin: 0 auto; }
        .intro { margin: 0 auto 32px; text-align: center; }
        .title { color: #201d6d; font-size: clamp(1.3rem, 2.2vw, 2rem); font-weight: 800; text-transform: uppercase; }
        .intro p { max-width: 760px; margin: 12px auto 0; color: #4f526a; font-size: 1rem; line-height: 1.65; }
        .intro a { color: #078f7c; font-weight: 700; text-decoration: underline; }
        .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
        .card { padding: 26px; background: #f6f8fe; border: 1px solid rgba(121, 190, 165, 0.52); border-radius: 18px; }
        .card h4 { margin: 0 0 4px; color: #201d6d; font-size: 1.35rem; font-weight: 800; }
        .card p { margin: 0 0 14px; color: #4f526a; font-size: 0.98rem; line-height: 1.65; }
        .card .years { color: #078f7c; font-weight: 800; }
        .card ul { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
        .card li { padding: 6px 12px; background: #fff; border: 1px solid rgba(32, 29, 109, 0.18); border-radius: 999px; color: #201d6d; font-size: 0.85rem; font-weight: 600; }
        .note { margin: 24px 0 0; color: #4f526a; text-align: center; }
        @media (max-width: 767px) { .block { padding: 44px 0; } .grid { grid-template-columns: 1fr; } .card { padding: 20px; } }
      `}</style>
    </section>
  );
}
