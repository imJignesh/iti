const SPACES = [
  {
    title: "Classroom",
    description: "A focused space for small-group lessons and guided exam practice.",
    type: "classroom",
  },
  {
    title: "One-to-one study room",
    description: "A quiet setting for personalised tutoring and focused support.",
    type: "study",
  },
  {
    title: "Reception, Level 11",
    description: "A welcoming arrival point at our Tiffany Tower centre.",
    type: "reception",
  },
];

function SpaceIllustration({ type }) {
  return (
    <>
      <div className={`illustration ${type}`} role="img" aria-label={`${type} placeholder illustration`}>
        <span className="wallAccent" />
        {type === "classroom" && (
          <>
            <span className="board"><i /><i /><i /><i /></span>
            <span className="desk deskOne" />
            <span className="desk deskTwo" />
          </>
        )}
        {type === "study" && (
          <>
            <span className="person personOne" />
            <span className="person personTwo" />
            <span className="studyDesk" />
            <span className="laptop" />
          </>
        )}
        {type === "reception" && (
          <>
            <span className="brand">IGNITE</span>
            <span className="counter" />
            <span className="plant plantOne" />
            <span className="plant plantTwo" />
          </>
        )}
      </div>

      <style jsx>{`
        .illustration {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: linear-gradient(145deg, #e8f3ff 0%, #f6fbff 62%, #dff7ef 100%);
        }

        .illustration::after {
          position: absolute;
          right: -25%;
          bottom: -70%;
          width: 90%;
          height: 120%;
          background: rgba(163, 202, 245, 0.35);
          border-radius: 50%;
          content: "";
        }

        .wallAccent {
          position: absolute;
          top: 25px;
          left: 25px;
          width: 74px;
          height: 9px;
          background: #08a990;
          border-radius: 9px;
        }

        .board {
          position: absolute;
          top: 55px;
          left: 50%;
          width: 62%;
          height: 88px;
          border: 5px solid #282570;
          border-radius: 8px;
          transform: translateX(-50%);
        }

        .board i {
          position: absolute;
          top: 52%;
          width: 22%;
          height: 4px;
          background: #1597d0;
          border-radius: 4px;
          transform: rotate(-40deg);
        }

        .board i:nth-child(1) { left: 8%; }
        .board i:nth-child(2) { left: 27%; transform: rotate(37deg); }
        .board i:nth-child(3) { left: 47%; transform: rotate(-47deg); }
        .board i:nth-child(4) { left: 67%; transform: rotate(38deg); }

        .desk,
        .studyDesk {
          position: absolute;
          bottom: 34px;
          width: 31%;
          height: 10px;
          background: #282570;
          border-radius: 4px;
        }

        .desk::before,
        .desk::after,
        .studyDesk::before,
        .studyDesk::after {
          position: absolute;
          top: 8px;
          width: 7px;
          height: 35px;
          background: #31558e;
          content: "";
        }

        .desk::before,
        .studyDesk::before { left: 12%; }
        .desk::after,
        .studyDesk::after { right: 12%; }
        .deskOne { left: 12%; }
        .deskTwo { right: 12%; }

        .studyDesk {
          left: 50%;
          width: 57%;
          transform: translateX(-50%);
        }

        .laptop {
          position: absolute;
          bottom: 44px;
          left: 50%;
          width: 24%;
          height: 42px;
          background: #fff;
          border: 3px solid #1597d0;
          border-radius: 4px;
          transform: translateX(-50%);
        }

        .person {
          position: absolute;
          bottom: 44px;
          width: 36px;
          height: 45px;
          background: #075448;
          border-radius: 18px 18px 8px 8px;
        }

        .person::before {
          position: absolute;
          top: -27px;
          left: 4px;
          width: 28px;
          height: 28px;
          background: #08a990;
          border-radius: 50%;
          content: "";
        }

        .personOne { left: 25%; }
        .personTwo { right: 25%; background: #08a990; }

        .brand {
          position: absolute;
          top: 54px;
          left: 50%;
          padding: 10px 19px;
          color: #fff;
          background: #075448;
          border-radius: 5px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          transform: translateX(-50%);
        }

        .counter {
          position: absolute;
          bottom: 32px;
          left: 50%;
          width: 42%;
          height: 68px;
          background: linear-gradient(to bottom, #1597d0 0 12px, #282570 12px 100%);
          border-radius: 6px;
          transform: translateX(-50%);
        }

        .plant {
          position: absolute;
          bottom: 30px;
          width: 34px;
          height: 34px;
          background: #08a990;
          border-radius: 50%;
        }

        .plant::after {
          position: absolute;
          top: 30px;
          left: 15px;
          width: 4px;
          height: 20px;
          background: #31558e;
          content: "";
        }

        .plantOne { left: 14%; }
        .plantTwo { right: 14%; }

        @media (max-width: 575px) {
          .illustration { height: 205px; }
        }
      `}</style>
    </>
  );
}

export default function GmbInsideCentre() {
  return (
    <section className="insideCentre" aria-labelledby="inside-centre-title">
      <div className="sectionContainer">
        <div className="sectionIntro">
          <h2 className="SubHeading">Inside the Centre</h2>
          <h3 id="inside-centre-title" className="testTitle">
            A look at our <span className="highlight">JLT learning space</span>
          </h3>
          <p>
            Purpose-built spaces for focused lessons, individual support and a comfortable
            learning experience.
          </p>
        </div>

        <div className="spaceGrid">
          {SPACES.map((space) => (
            <article className="spaceCard" key={space.title}>
              <SpaceIllustration type={space.type} />
              <div className="spaceContent">
                <span className="placeholderLabel">Image coming soon</span>
                <h3 className="spaceTitle">{space.title}</h3>
                <p>{space.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="placeholderNote">
          Centre illustrations are temporary placeholders and can be replaced with JLT photos.
        </p>
      </div>

      <style jsx>{`
        .insideCentre {
          padding: 70px 0;
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
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

        .spaceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .spaceCard {
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(121, 190, 165, 0.55);
          border-radius: 20px;
          box-shadow: 0 14px 36px rgba(37, 35, 109, 0.09);
        }

        .illustration {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: linear-gradient(145deg, #e8f3ff 0%, #f6fbff 62%, #dff7ef 100%);
        }

        .illustration::after {
          position: absolute;
          right: -25%;
          bottom: -70%;
          width: 90%;
          height: 120%;
          background: rgba(163, 202, 245, 0.35);
          border-radius: 50%;
          content: "";
        }

        .wallAccent {
          position: absolute;
          top: 25px;
          left: 25px;
          width: 74px;
          height: 9px;
          background: #08a990;
          border-radius: 9px;
        }

        .board {
          position: absolute;
          top: 55px;
          left: 50%;
          width: 62%;
          height: 88px;
          border: 5px solid #282570;
          border-radius: 8px;
          transform: translateX(-50%);
        }

        .board i {
          position: absolute;
          top: 52%;
          width: 22%;
          height: 4px;
          background: #1597d0;
          border-radius: 4px;
          transform: rotate(-40deg);
        }

        .board i:nth-child(1) { left: 8%; }
        .board i:nth-child(2) { left: 27%; transform: rotate(37deg); }
        .board i:nth-child(3) { left: 47%; transform: rotate(-47deg); }
        .board i:nth-child(4) { left: 67%; transform: rotate(38deg); }

        .desk,
        .studyDesk {
          position: absolute;
          bottom: 34px;
          width: 31%;
          height: 10px;
          background: #282570;
          border-radius: 4px;
        }

        .desk::before,
        .desk::after,
        .studyDesk::before,
        .studyDesk::after {
          position: absolute;
          top: 8px;
          width: 7px;
          height: 35px;
          background: #31558e;
          content: "";
        }

        .desk::before,
        .studyDesk::before { left: 12%; }
        .desk::after,
        .studyDesk::after { right: 12%; }
        .deskOne { left: 12%; }
        .deskTwo { right: 12%; }

        .studyDesk {
          left: 50%;
          width: 57%;
          transform: translateX(-50%);
        }

        .laptop {
          position: absolute;
          bottom: 44px;
          left: 50%;
          width: 24%;
          height: 42px;
          background: #fff;
          border: 3px solid #1597d0;
          border-radius: 4px;
          transform: translateX(-50%);
        }

        .person {
          position: absolute;
          bottom: 44px;
          width: 36px;
          height: 45px;
          background: #075448;
          border-radius: 18px 18px 8px 8px;
        }

        .person::before {
          position: absolute;
          top: -27px;
          left: 4px;
          width: 28px;
          height: 28px;
          background: #08a990;
          border-radius: 50%;
          content: "";
        }

        .personOne { left: 25%; }
        .personTwo { right: 25%; background: #08a990; }

        .brand {
          position: absolute;
          top: 54px;
          left: 50%;
          padding: 10px 19px;
          color: #fff;
          background: #075448;
          border-radius: 5px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          transform: translateX(-50%);
        }

        .counter {
          position: absolute;
          bottom: 32px;
          left: 50%;
          width: 42%;
          height: 68px;
          background: linear-gradient(to bottom, #1597d0 0 12px, #282570 12px 100%);
          border-radius: 6px;
          transform: translateX(-50%);
        }

        .plant {
          position: absolute;
          bottom: 30px;
          width: 34px;
          height: 34px;
          background: #08a990;
          border-radius: 50%;
        }

        .plant::after {
          position: absolute;
          top: 30px;
          left: 15px;
          width: 4px;
          height: 20px;
          background: #31558e;
          content: "";
        }

        .plantOne { left: 14%; }
        .plantTwo { right: 14%; }

        .spaceContent {
          padding: 25px 27px 28px;
        }

        .placeholderLabel {
          display: inline-flex;
          padding: 6px 10px;
          color: #078f7c;
          background: #e1f7ef;
          border-radius: 20px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .spaceTitle {
          margin: 15px 0 8px;
          color: #201d6d;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .spaceContent p {
          margin: 0;
          color: #4f526a;
          font-size: 0.96rem;
          line-height: 1.65;
        }

        .placeholderNote {
          margin: 23px 0 0;
          color: #74778b;
          font-size: 0.82rem;
          text-align: center;
        }

        @media (max-width: 991px) {
          .insideCentre { padding: 50px 0; }
          .sectionContainer { width: 92vw; }
          .sectionIntro p { max-width: 700px; font-size: 20px; line-height: 1.5; }
          .spaceGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .spaceCard:last-child { grid-column: 1 / -1; }
        }

        @media (max-width: 575px) {
          .insideCentre { padding: 50px 0; }
          .sectionContainer { width: 90vw; }
          .sectionIntro { margin-bottom: 30px; }
          .sectionIntro p { max-width: 100%; font-size: 14px; line-height: 22px; }
          .spaceGrid { grid-template-columns: 1fr; gap: 18px; }
          .spaceCard:last-child { grid-column: auto; }
          .illustration { height: 205px; }
          .spaceContent { padding: 22px 22px 24px; }
        }
      `}</style>
    </section>
  );
}
