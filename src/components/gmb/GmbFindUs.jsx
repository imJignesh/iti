const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ignite+Training+Institute+-+Tutors+In+JLT+Dubai%2C+Tiffany+Tower%2C+Cluster+W%2C+Dubai&destination_place_id=ChIJyXrTXsptXz4Rd6QlegZ6lkk";

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
            Tiffany Tower, Level 11, <span className="highlight">Cluster W</span>
          </h3>
          <p>
            Visit our JLT tuition centre seven days a week, or open the location directly in
            Google Maps.
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
                  <dd>9 am to 9 pm</dd>
                </div>
              ))}
            </dl>

            <p className="hoursNote">Hours as listed on our Google profile. Public holidays may differ.</p>
            <p className="metroNote">
              <strong>Nearest Metro:</strong> Sobha Realty Metro Station
              <span>Confirm walking time, parking and landmarks before travelling.</span>
            </p>
          </div>

          <aside className="mapCard" aria-label="JLT centre Google Maps details">
            <span className="mapIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span className="mapLabel">Plus code</span>
            <strong className="plusCode">34GX+VW</strong>
            <p>Tiffany Tower, Cluster W, Jumeirah Lakes Towers, Dubai</p>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
              <span>Open in Google Maps</span>
              <img src="/assets/rar.webp" alt="" width="35" height="35" aria-hidden="true" />
            </a>
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
          display: flex;
          min-height: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding: 36px;
          overflow: hidden;
          background: linear-gradient(145deg, #073f3a 0%, #075448 60%, #086b5c 100%);
        }

        .mapCard::after {
          position: absolute;
          right: -110px;
          bottom: -150px;
          width: 330px;
          height: 330px;
          background: rgba(172, 242, 214, 0.08);
          border-radius: 50%;
          content: "";
        }

        .mapIcon {
          position: relative;
          z-index: 1;
          margin-bottom: 30px;
        }

        .mapLabel {
          position: relative;
          z-index: 1;
          color: #c9f4e1;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .plusCode {
          position: relative;
          z-index: 1;
          margin-top: 9px;
          color: #a6eac7;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1;
        }

        .mapCard p {
          position: relative;
          z-index: 1;
          max-width: 520px;
          margin: 24px 0 34px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .mapCard a {
          position: relative;
          z-index: 1;
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: auto;
          padding: 8px 9px 8px 20px;
          color: #201d6d;
          background: linear-gradient(90deg, #acf2d6, #e7f6ff);
          border-radius: 30px;
          box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.18);
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 180ms ease;
        }

        .mapCard a:hover {
          transform: translateY(-2px);
        }

        .mapCard a img {
          width: 35px;
          height: 35px;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .findUs { padding: 50px 0; }
          .sectionContainer { width: 92vw; }
          .sectionIntro p { max-width: 700px; font-size: 20px; line-height: 1.5; }
          .locationLayout { grid-template-columns: 1fr; max-width: 88vw; }
          .mapCard { min-height: 410px; }
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
          .mapCard { min-height: 360px; padding: 26px 22px; }
          .mapIcon { margin-bottom: 24px; }
          .mapCard p { margin: 20px 0 28px; font-size: 0.96rem; }
          .mapCard a { min-height: 46px; padding-left: 17px; font-size: 0.76rem; }
          .mapCard a img { width: 31px; height: 31px; }
        }
      `}</style>
    </section>
  );
}
