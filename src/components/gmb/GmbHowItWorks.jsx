const STEPS = [
  {
    title: "Book a free demo",
    description:
      "Tell us the curriculum, subject and year. We confirm a slot at the JLT centre or online.",
  },
  {
    title: "Level check",
    description:
      "The tutor reviews recent work to find gaps and set a realistic target.",
  },
  {
    title: "Match with a tutor",
    description:
      "You get a tutor who teaches your board and subject, 1:1 or in a small group.",
  },
  {
    title: "Track progress",
    description:
      "Regular feedback to parents and mock results against the target grade.",
  },
];

export default function GmbHowItWorks() {
  return (
    <section className="howItWorks" aria-labelledby="how-it-works-title">
      <div className="sectionContainer">
        <div className="sectionIntro">
          <h2 className="SubHeading">How It Works</h2>
          <h3 id="how-it-works-title" className="testTitle">
            From first call to <span className="highlight">first lesson</span>
          </h3>
        </div>

        <ol className="steps">
          {STEPS.map((step, index) => (
            <li className="step" key={step.title}>
              <div className="stepTop">
                <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
                <span className="stepLabel">Step {index + 1}</span>
              </div>
              <h3 className="stepTitle">{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <style jsx>{`
        .howItWorks {
          padding: 70px 0;
          background: #fff;
        }

        .sectionContainer {
          width: 90vw;
          margin: 0 auto;
        }

        .sectionIntro {
          margin-bottom: 40px;
          text-align: center;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: linear-gradient(105deg, rgba(230, 235, 252, 0.9), rgba(255, 255, 255, 0.98));
          border: 1px solid rgba(121, 190, 165, 0.58);
          border-radius: 18px;
          box-shadow: 0 14px 36px rgba(37, 35, 109, 0.08);
          list-style: none;
        }

        .step {
          position: relative;
          min-width: 0;
          padding: 32px 28px 34px;
          border-right: 1px solid rgba(40, 37, 112, 0.14);
        }

        .step:last-child {
          border-right: 0;
        }

        .stepTop {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .stepNumber {
          display: grid;
          width: 38px;
          height: 38px;
          color: #1c1a69;
          background: linear-gradient(135deg, #acf2d6, #a3caf5);
          border-radius: 50%;
          font-size: 0.78rem;
          font-weight: 900;
          place-items: center;
        }

        .stepLabel {
          color: #078f7c;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .stepTitle {
          margin: 0 0 12px;
          color: #201d6d;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.3;
        }

        p {
          margin: 0;
          color: #4f526a;
          font-size: 1rem;
          line-height: 1.7;
        }

        @media (max-width: 991px) {
          .howItWorks {
            padding: 50px 0;
          }

          .sectionContainer {
            width: 92vw;
          }

          .steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .step {
            border-bottom: 1px solid rgba(40, 37, 112, 0.14);
          }

          .step:nth-child(2) {
            border-right: 0;
          }

          .step:nth-child(n + 3) {
            border-bottom: 0;
          }
        }

        @media (max-width: 575px) {
          .howItWorks {
            padding: 50px 0;
          }

          .sectionContainer {
            width: 90vw;
          }

          .sectionIntro {
            margin-bottom: 30px;
            text-align: center;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .step {
            padding: 25px 22px 27px;
            border-right: 0;
            border-bottom: 1px solid rgba(40, 37, 112, 0.14);
          }

          .step:nth-child(n + 3) {
            border-bottom: 1px solid rgba(40, 37, 112, 0.14);
          }

          .step:last-child {
            border-bottom: 0;
          }

          .stepTitle {
            font-size: 1.3rem;
          }

          p {
            font-size: 0.96rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
