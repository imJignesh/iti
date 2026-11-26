const GUIDES = [
  ["How to Choose an IGCSE Tutor in Dubai", "Five checks to make before you book.", "/blog/igcse-tutors-in-dubai"],
  ["IB MYP Programme Guide", "Subjects, structure and assessment explained.", "/blog/ib-myp-programme"],
  ["What Grades Do You Need To Do A Levels?", "Entry requirements by curriculum and subject.", "/blog/what-grades-do-you-need-to-do-alevels"],
  ["Homeschooling In The UAE", "Private candidacy, pathways and exam registration.", "/blog/homeschooling-in-uae"],
];

export default function GmbGuides() {
  return (
    <section className="block" aria-labelledby="szr-guides-title">
      <div className="inner">
        <header className="intro">
          <h2 className="SubHeading">Helpful Guides</h2>
          <h3 id="szr-guides-title" className="title">
            Read before you <span className="highlight">choose a tutor</span>
          </h3>
          <p>Short guides for parents and students comparing courses and tuition options.</p>
        </header>
        <div className="grid">
          {GUIDES.map(([name, text, href]) => (
            <a className="card" href={href} key={href}>
              <strong>{name}</strong>
              <span>{text}</span>
              <em>Read guide &rarr;</em>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .block { padding: 60px 0; background: #f6f8fe; }
        .inner { width: 90vw; margin: 0 auto; }
        .intro { margin: 0 auto 32px; text-align: center; }
        .title { color: #201d6d; font-size: clamp(1.3rem, 2.2vw, 2rem); font-weight: 800; text-transform: uppercase; }
        .intro p { max-width: 760px; margin: 12px auto 0; color: #4f526a; font-size: 1rem; line-height: 1.65; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; }
        .card { display: flex; flex-direction: column; gap: 8px; height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(121, 190, 165, 0.52); border-radius: 18px; box-shadow: 0 12px 32px rgba(37, 35, 109, 0.08); }
        .card strong { color: #201d6d; font-size: 1.12rem; line-height: 1.35; }
        .card span { color: #4f526a; font-size: 0.96rem; line-height: 1.6; }
        a.card { text-decoration: none; transition: transform 180ms ease; }
        a.card:hover { transform: translateY(-4px); }
        a.card em { margin-top: auto; color: #078f7c; font-style: normal; font-weight: 800; }
        .note { margin: 26px 0 0; color: #4f526a; text-align: center; }
        .note a { color: #078f7c; font-weight: 700; text-decoration: underline; }
        @media (max-width: 575px) { .block { padding: 44px 0; } .card { padding: 18px; } }
      `}</style>
    </section>
  );
}
