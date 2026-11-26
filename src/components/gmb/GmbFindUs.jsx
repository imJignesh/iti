const DIRECTIONS_URL = "https://maps.app.goo.gl/wA94yvAvyNqSWje37";

const OPENING_HOURS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function GmbFindUs() {
  return (
    <section className="findUs" aria-labelledby="find-us-title">
      <div className="sectionContainer">
        <div className="sectionIntro">
          <h2 className="SubHeading">Find Us</h2>
          <h3 id="find-us-title" className="testTitle">
            Al Moosa Tower 1, Office 1503, <span className="highlight">Sheikh Zayed Road</span>
          </h3>
          <p>
            Visit our tuition centre in Sheikh Zayed Road, Dubai, or open the location directly
            in Google Maps. We are open seven days a week, 9:30 am to 9 pm, including Sunday.
          </p>
        </div>

        <div className="locationLayout">
          <div className="hoursCard">
            <div className="cardHeading">
              <span className="cardIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <span>Opening hours</span>
                <strong>Open every day</strong>
              </div>
            </div>

            <dl className="hoursList">
              {OPENING_HOURS.map((day) => (
                <div className="hoursRow" key={day}>
                  <dt>{day}</dt>
                  <dd>9:30 am to 9 pm</dd>
                </div>
              ))}
            </dl>

            <p className="hoursNote">Hours as listed on our Google profile. Public holidays may differ.</p>
            <p className="metroNote">
              <strong>Nearest Metro:</strong> Emirates Towers Metro Station
              <span>Close to DIFC, Trade Centre and Business Bay.</span>
            </p>
          </div>

          <aside className="mapCard" aria-label="Sheikh Zayed Road centre map">
            <iframe
              title="Map showing Ignite Training Institute at Al Moosa Tower 1, Sheikh Zayed Road"
              src="https://www.google.com/maps?q=25.216861,55.277798&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </aside>
        </div>
      </div>

      <style jsx>{`
        .findUs {
          padding: 70px 0;
          background: var(--white-color);
        }

        .sectionContainer {
          width: 90vw;
          margin: 0 auto;
        }

        .sectionIntro {
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

        .locationLayout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
          gap: 28px;
          max-width: 85vw;
          margin: 0 auto;
        }

        .hoursCard,
        .mapCard {
          border: 1px solid rgba(121, 190, 165, 0.55);
          border-radius: 22px;
          box-shadow: 0 14px 36px rgba(37, 35, 109, 0.09);
        }

        .hoursCard {
          padding: 30px 34px;
          background: linear-gradient(105deg, rgba(230, 235, 252, 0.75), #fff);
        }

        .cardHeading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .cardIcon,
        .mapIcon {
          display: grid;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          color: #282570;
          background: linear-gradient(135deg, #acf2d6, #a3caf5);
          border-radius: 14px;
          place-items: center;
        }

        .cardIcon svg,
        .mapIcon svg {
          width: 24px;
          height: 24px;
        }

        .cardHeading span:not(.cardIcon) {
          display: block;
          color: #078f7c;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .cardHeading strong {
          display: block;
          margin-top: 3px;
          color: #201d6d;
          font-size: 1.35rem;
          line-height: 1.25;
        }

        .hoursList {
          margin: 0;
        }

        .hoursRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 13px 2px;
          border-bottom: 1px solid rgba(40, 37, 112, 0.14);
        }

        .hoursRow dt,
        .hoursRow dd {
          margin: 0;
          color: #4f526a;
          font-size: 1rem;
          line-height: 1.45;
        }

        .hoursRow dd {
          color: #201d6d;
          font-weight: 800;
        }

        .hoursNote {
          margin: 18px 0 0;
          color: #74778b;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .metroNote {
          margin: 22px 0 0;
          color: #4f526a;
          font-size: 0.96rem;
          line-height: 1.55;
        }

        .metroNote strong {
          color: #201d6d;
        }

        .metroNote span {
          display: block;
          margin-top: 6px;
          color: #078f7c;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .mapCard {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #075448;
        }

        .mapCard iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 991px) {
          .findUs { padding: 50px 0; }
          .sectionContainer { width: 92vw; }
          .sectionIntro p { max-width: 700px; font-size: 20px; line-height: 1.5; }
          .locationLayout { grid-template-columns: 1fr; max-width: 88vw; }
          .mapCard { min-height: 420px; }
        }

        @media (max-width: 575px) {
          .findUs { padding: 50px 0; }
          .sectionContainer { width: 90vw; }
          .sectionIntro { margin-bottom: 30px; }
          .sectionIntro p { max-width: 100%; font-size: 14px; line-height: 22px; }
          .locationLayout { max-width: none; gap: 18px; }
          .hoursCard, .mapCard { border-radius: 18px; }
          .hoursCard { padding: 24px 20px; }
          .hoursRow { padding: 11px 0; }
          .hoursRow dt, .hoursRow dd { font-size: 0.92rem; }
          .mapCard { min-height: 320px; }
        }
      `}</style>
    </section>
  );
}
