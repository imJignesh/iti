const AREAS = [
  ["Emirates Towers", "Our nearest Metro station, a short walk from Al Moosa Tower."],
  ["DIFC", "Tutors near DIFC for IB, IGCSE and A-Level students, by Metro or car."],
  ["Trade Centre", "A convenient tuition centre for families around Trade Centre."],
  ["Business Bay", "Students from Business Bay can reach us by Metro or car."],
];

export default function GmbAreas() {
  return (
    <section className="block" aria-labelledby="szr-areas-title">
      <div className="inner">
        <header className="intro">
          <h2 className="SubHeading">Areas We Serve</h2>
          <h3 id="szr-areas-title" className="title">
            Tuition near <span className="highlight">DIFC and Business Bay</span>
          </h3>
          <p>Students visit our Al Moosa Tower centre from nearby neighbourhoods.</p>
        </header>
        <ul className="grid">
          {AREAS.map(([name, text]) => (
            <li key={name}>
              <div className="card">
                <strong>{name}</strong>
                <span>{text}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="note">
          Closer to Jumeirah Lake Towers? Visit our <a href="/tutors-in-jlt-dubai">tutoring centre in JLT</a>.
        </p>
      </div>
      <style jsx>{`
        .block { padding: 60px 0; background: #fff; }
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
