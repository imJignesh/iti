import Image from "next/image";

const SPACES = [
  {
    title: "Classroom",
    description: "A focused space for small-group lessons and guided exam practice.",
    image: "/images/tutors-in-sheikh-zayed-road-dubai/classroom.webp",
    alt: "Classroom at Ignite Training Institute on Sheikh Zayed Road, Dubai",
  },
  {
    title: "One-to-one study room",
    description: "A quiet setting for personalised tutoring and focused support.",
    image: "/images/tutors-in-sheikh-zayed-road-dubai/one-to-one.webp",
    alt: "One-to-one tutoring room at Ignite Training Institute on Sheikh Zayed Road",
  },
  {
    title: "Reception",
    description: "A welcoming arrival point at our Al Moosa Tower centre.",
    image: "/images/tutors-in-sheikh-zayed-road-dubai/reception.webp",
    alt: "Reception at Ignite Training Institute on Sheikh Zayed Road, Dubai",
    objectPosition: "center top",
  },
];

export default function GmbInsideCentre() {
  return (
    <section className="insideCentre" aria-labelledby="inside-centre-title">
      <div className="sectionContainer">
        <div className="sectionIntro">
          <h2 className="SubHeading">Inside the Centre</h2>
          <h3 id="inside-centre-title" className="testTitle">
            A look at our <span className="highlight">Sheikh Zayed Road learning space</span>
          </h3>
          <p>
            Our tutoring centre in Al Moosa Tower offers calm, purpose-built spaces for focused
            learning and individual attention.
          </p>
        </div>

        <div className="spaceGrid">
          {SPACES.map((space) => (
            <article className="spaceCard" key={space.title}>
              <div className="spaceImage">
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 575px) 90vw, (max-width: 991px) 46vw, 30vw"
                  style={{ objectPosition: space.objectPosition || "center" }}
                />
              </div>
              <div className="spaceContent">
                <h3 className="spaceTitle">{space.title}</h3>
                <p>{space.description}</p>
              </div>
            </article>
          ))}
        </div>

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

        .spaceImage {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: #eef3f7;
        }

        .spaceImage :global(img) {
          object-fit: cover;
        }

        .spaceContent {
          padding: 25px 27px 28px;
        }

        .spaceTitle {
          margin: 0 0 8px;
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
          .spaceImage { height: 205px; }
          .spaceContent { padding: 22px 22px 24px; }
        }
      `}</style>
    </section>
  );
}
