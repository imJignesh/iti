const OPTIONS = [
  ["One-to-one tuition", "A private tutor for one student, planned around the level check and target grade."],
  ["Small group classes", "Learn with a few students following the same board and subject."],
  ["Online lessons", "The same tutors and the same progress tracking, from home."],
  ["Exam preparation", "Past-paper practice and mock results compared against the target grade."],
];

export default function GmbClasses() {
  return (
    <section className="block" aria-labelledby="szr-classes-title">
      <div className="inner">
        <header className="intro">
          <h2 className="SubHeading">Classes</h2>
          <h3 id="szr-classes-title" className="title">
            Tuition classes on <span className="highlight">Sheikh Zayed Road</span>
          </h3>
          <p>Choose how your child learns. We are open seven days a week, 9:30 am to 9 pm.</p>
        </header>
        <ul className="grid">
          {OPTIONS.map(([name, text]) => (
            <li key={name}>
              <div className="card">
                <strong>{name}</strong>
                <span>{text}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="note">
          Looking for individual support? See our <a href="/private-tutors-in-dubai">private tutors in Dubai</a>.
        </p>
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
