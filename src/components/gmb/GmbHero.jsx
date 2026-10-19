const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ignite+Training+Institute+-+Tutors+In+JLT+Dubai%2C+Tiffany+Tower%2C+Cluster+W%2C+Dubai&destination_place_id=ChIJyXrTXsptXz4Rd6QlegZ6lkk";

export default function GmbHero() {
  return (
    <section className="gmbHero" aria-labelledby="gmb-hero-title">
      <div className="gmbHeroContainer">
        <picture className="heroBackground" aria-hidden="true">
          <source media="(max-width: 768px)" srcSet="/assets/ib-bg.webp" />
          <img
            src="/assets/ibc_bg_main.webp"
            alt=""
            width="2560"
            height="1707"
            fetchPriority="high"
          />
        </picture>

        <div className="gmbHeroContent">
          <h1 id="gmb-hero-title">
            <span>Expert Tutors in JLT, Dubai</span>
            <span>for Academic Growth</span>
          </h1>

          <span className="titleDivider" aria-hidden="true" />

          <h2 className="eyebrow">Tuition Centre in Jumeirah Lake Towers</h2>

          <div className="heroHighlights" aria-label="JLT tuition centre highlights">
            <div className="heroHighlight">
              <strong>Open 7 days</strong>
              <span>9 am to 9 pm</span>
            </div>
            <div className="heroHighlight">
              <strong>Online and in person</strong>
              <span>Same tutors, your choice</span>
            </div>
            <div className="heroHighlight">
              <strong>Free demo class</strong>
              <span>No commitment to start</span>
            </div>
            <div className="heroHighlight">
              <strong>Cluster W, JLT</strong>
              <span>On the lake side</span>
            </div>
          </div>

          <p className="description">
            IB, IGCSE, A-Level, AP and more, taught at our centre in Tiffany
            Tower, Cluster W, or online. Start with a free demo class.
          </p>

          <div className="actions">
            <a className="action actionPrimary" href="/join-free-demo-class">
              <span>Book a free demo</span>
              <img src="/assets/rar.webp" alt="" width="35" height="35" aria-hidden="true" />
            </a>
            <a
              className="action actionWhatsApp"
              href="https://wa.me/971561890917"
              target="_blank"
              rel="noreferrer"
            >
              <span>Chat on WhatsApp</span>
              <img src="/assets/rar.webp" alt="" width="35" height="35" aria-hidden="true" />
            </a>
            <a
              className="action actionDirections"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>Get directions</span>
              <img src="/assets/rar.webp" alt="" width="35" height="35" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="locationCard" aria-label="JLT centre information">
          <div className="cardHeader">
            <span className="headerIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <div>
              <h2>Visit the JLT Centre</h2>
              <p>Ignite Training Institute · Dubai</p>
            </div>
          </div>

          <dl>
            <div className="detailRow">
              <span className="detailIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <dt>Address</dt>
                <dd>
                  Tiffany Tower, Level 11, Cluster W, Al Thanyah Fifth,
                  Jumeirah Lakes Towers, Dubai, UAE
                </dd>
              </div>
            </div>
            <div className="detailRow">
              <span className="detailIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <dt>Hours</dt>
                <dd><span className="statusDot" />Open daily, 9 am to 9 pm</dd>
              </div>
            </div>
            <div className="detailRow">
              <span className="detailIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+971561890917">+971 56 189 0917</a></dd>
              </div>
            </div>
            <div className="detailRow">
              <span className="detailIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@ignitetraininginstitute.com">
                    hello@ignitetraininginstitute.com
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <a className="mapLink" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
            Open in Google Maps <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>

      <style jsx>{`
        .gmbHero {
          padding: 0;
        }

        .gmbHeroContainer {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(320px, 1fr);
          align-items: center;
          gap: clamp(30px, 4vw, 72px);
          width: 90vw;
          max-width: 90vw;
          min-height: 750px;
          margin: 0 auto;
          padding: 0 clamp(42px, 4.5vw, 76px) 0 24px;
          overflow: hidden;
          isolation: isolate;
          color: #fff;
          border-radius: 24px;
        }

        .heroBackground {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .heroBackground,
        .heroBackground img {
          width: 100%;
          height: 100%;
        }

        .heroBackground img {
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .gmbHeroContainer::after {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(5, 17, 28, 0.42) 0%,
            rgba(5, 17, 28, 0.12) 55%,
            rgba(5, 17, 28, 0.24) 100%
          );
          content: "";
          pointer-events: none;
        }

        .gmbHeroContent {
          max-width: 720px;
          align-self: start;
          padding-top: 90px;
        }

        .eyebrow,
        .locationCard h2,
        dt {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 700;
        }

        .eyebrow {
          margin: 18px 0 0;
          color: #fff;
          font-size: clamp(0.86rem, 0.9vw, 1.05rem);
          line-height: 1.45;
        }

        .titleDivider {
          display: block;
          width: min(100%, 680px);
          height: 1px;
          margin-top: 18px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.08));
        }

        h1 {
          max-width: 760px;
          margin: 0;
          color: #fff;
          font-size: 2.6rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0;
        }

        h1 span {
          display: block;
        }

        .description {
          max-width: 680px;
          margin: 34px 0 0;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.7;
          opacity: 0.9;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .heroHighlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 680px;
          margin-top: 28px;
        }

        .heroHighlight {
          position: relative;
          display: grid;
          gap: 4px;
          min-height: 82px;
          align-content: center;
          padding: 14px 16px 14px 52px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(8, 42, 55, 0.88), rgba(16, 32, 57, 0.82));
          border: 1px solid rgba(163, 202, 245, 0.42);
          border-radius: 14px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .heroHighlight::before {
          position: absolute;
          top: 50%;
          left: 16px;
          display: grid;
          width: 24px;
          height: 24px;
          color: #15386d;
          background: linear-gradient(135deg, #acf2d6, #a3caf5);
          border-radius: 50%;
          content: "✓";
          font-size: 0.78rem;
          font-weight: 900;
          place-items: center;
          transform: translateY(-50%);
        }

        .heroHighlight strong {
          color: #c4e0ff;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .heroHighlight span {
          color: #fff;
          font-size: 0.88rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .action {
          display: inline-flex;
          min-height: 55px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 10px 12px 10px 20px;
          color: #273972;
          background: linear-gradient(90deg, #a3caf5, #e7f6ff);
          border: 0;
          border-radius: 40px;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1;
          box-shadow: 2px 4px 8px rgba(38, 66, 149, 0.5);
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 180ms ease, filter 180ms ease;
        }

        .action img {
          display: block;
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
        }

        .action:hover {
          filter: brightness(1.06);
          transform: translateY(-2px);
        }

        .actionPrimary {
          color: #1d1b70;
        }

        .actionWhatsApp {
          color: #1d1b70;
        }

        .actionDirections {
          color: #1d1b70;
        }

        .locationCard {
          width: 100%;
          max-width: 560px;
          justify-self: end;
          padding: clamp(24px, 2.3vw, 36px);
          background: linear-gradient(145deg, rgba(7, 64, 62, 0.9), rgba(17, 34, 65, 0.88));
          border: 1px solid rgba(172, 242, 214, 0.55);
          border-radius: 20px;
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .cardHeader {
          display: flex;
          align-items: center;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        .headerIcon {
          display: grid;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          place-items: center;
          color: #17346d;
          background: linear-gradient(135deg, #acf2d6, #a3caf5);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .headerIcon svg {
          width: 24px;
          height: 24px;
        }

        .locationCard h2 {
          margin-bottom: 5px;
          color: #fff;
          font-size: clamp(0.88rem, 0.9vw, 1.05rem);
        }

        .cardHeader p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        dl,
        dd {
          margin: 0;
        }

        dl {
          display: grid;
          gap: 10px;
          padding: 14px 0;
        }

        .detailRow {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          padding: 11px 10px;
          border-radius: 13px;
          transition: background 180ms ease;
        }

        .detailRow:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .detailIcon {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          color: #acf2d6;
          background: rgba(172, 242, 214, 0.11);
          border: 1px solid rgba(172, 242, 214, 0.22);
          border-radius: 10px;
        }

        .detailIcon svg {
          width: 18px;
          height: 18px;
        }

        dt {
          margin-bottom: 5px;
          color: #acf2d6;
          font-size: 0.72rem;
        }

        dd {
          color: #fff;
          font-size: clamp(0.96rem, 1vw, 1.13rem);
          font-weight: 700;
          line-height: 1.55;
        }

        .statusDot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin: 0 8px 1px 0;
          background: #69efb8;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(105, 239, 184, 0.12);
        }

        dd a {
          color: inherit;
          overflow-wrap: anywhere;
          text-decoration: none;
        }

        .mapLink {
          display: flex;
          min-height: 45px;
          align-items: center;
          justify-content: space-between;
          padding: 11px 16px;
          color: #17346d;
          background: linear-gradient(90deg, #acf2d6, #d8f7ec);
          border-radius: 12px;
          font-size: 0.83rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .mapLink span {
          font-size: 1.25rem;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .mapLink:hover span {
          transform: translateX(3px);
        }

        @media (max-width: 991px) {
          .gmbHeroContainer {
            grid-template-columns: 1fr;
            gap: 38px;
            width: 95vw;
            max-width: 95vw;
            min-height: 650px;
            padding: 56px 40px;
          }

          .gmbHeroContent,
          .locationCard {
            max-width: none;
          }

          .gmbHeroContent {
            align-self: auto;
            padding-top: 0;
          }

          .locationCard {
            justify-self: stretch;
          }
        }

        @media (max-width: 575px) {
          .gmbHero {
            padding: 0;
          }

          .gmbHeroContainer {
            gap: 30px;
            padding: 38px 22px;
            border-radius: 18px;
          }

          .heroBackground img {
            object-position: center;
          }

          .eyebrow {
            margin-top: 15px;
            line-height: 1.5;
          }

          h1 {
            font-size: 2rem;
          }

          h1 span {
            display: inline;
          }

          h1 span + span::before {
            content: " ";
          }

          .description {
            margin-top: 18px;
            font-size: 1rem;
          }

          .heroHighlights {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 24px;
          }

          .heroHighlight {
            min-height: 72px;
          }

          .actions {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
          }

          .action {
            width: auto;
            min-width: 230px;
            padding: 8px 10px 8px 16px;
          }

          .action img {
            width: 30px;
            height: 30px;
            flex-basis: 30px;
          }

          .locationCard {
            padding: 24px 20px;
          }
        }

        @media (min-width: 1400px) {
          .gmbHeroContainer {
            padding-left: 64px;
          }

          .gmbHeroContent {
            padding-top: 64px;
          }
        }

        @media (min-width: 1200px) and (max-width: 1919px) {
          h1 {
            max-width: 90%;
            font-size: 2rem;
          }

          .description {
            max-width: 90%;
            font-size: 1rem;
            line-height: 1.6;
          }
        }

        @media (min-width: 1536px) and (max-width: 1919px) {
          .gmbHeroContainer {
            padding-left: 40px;
          }

          .gmbHeroContent {
            padding-top: 72px;
          }
        }

        @media (min-width: 1920px) {
          .gmbHeroContainer {
            padding-left: 80px;
          }

          .gmbHeroContent {
            padding-top: 80px;
          }
        }
      `}</style>
    </section>
  );
}
