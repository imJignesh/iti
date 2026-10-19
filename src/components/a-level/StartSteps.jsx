const steps = [
  {
    number: "1",
    title: "Book a free demo class",
    text: "Meet the matched A Level tutor, ask board-specific questions and see a real session.",
  },
  {
    number: "2",
    title: "Take the diagnostic test",
    text: "We map strengths and gaps against your exam board's mark scheme.",
  },
  {
    number: "3",
    title: "Follow your study plan",
    text: "One-to-one or small group, online or in person at Sheikh Zayed Road or JLT.",
  },
];

export default function StartSteps() {
  return (
    <section className="startSteps">
      <div className="container">
        <div className="startStepsHeader text-center mb-md-5 mb-4">
          <div className="testHeadings">
            <h2 className="SubHeading testSubheading">How To Start</h2>
            <h3 className="testTitle">Start A Level Tuition In Three Steps</h3>
          </div>
        </div>

        <div className="stepsGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <span className="stepNumber" aria-hidden="true">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <a className="stepsCta" href="/join-free-demo-class/">
          <span>Book Your Free Demo</span>
          <span className="stepsCtaArrow" aria-hidden="true">
            <img src="/assets/arrowright.webp" alt="" width="16" height="14" />
          </span>
        </a>
      </div>

      <style jsx>{`
        .startSteps {
          padding: 0;
        }

        .startStepsHeader {
          margin-right: auto;
          margin-left: auto;
          max-width: 820px;
        }

        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .stepCard {
          border: 1px solid #8fc4ff;
          border-radius: 22px;
          min-height: 195px;
          padding: 26px;
        }

        .stepNumber {
          align-items: center;
          background: #e7f6ff;
          border-radius: 15px;
          color: var(--blue-text);
          display: flex;
          font-size: 1rem;
          font-weight: 700;
          height: 46px;
          justify-content: center;
          margin-bottom: 18px;
          width: 46px;
        }

        .stepCard h4 {
          color: var(--blue-text);
          font-size: clamp(1.1rem, 1.25vw, 1.35rem);
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 10px;
        }

        .stepCard p {
          color: #4d5568;
          font-size: 1rem;
          line-height: 1.55;
          margin: 0;
        }

        .stepsCta {
          align-items: center;
          background: linear-gradient(90deg, #161664, #3f88ba);
          border-radius: 40px;
          color: white;
          display: inline-flex;
          font-size: 0.875rem;
          font-weight: 700;
          justify-content: space-between;
          letter-spacing: 1px;
          margin-top: 26px;
          padding: 6px 7px 6px 22px;
          text-decoration: none;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }

        .stepsCta:hover {
          color: white;
          opacity: 0.9;
        }

        .stepsCtaArrow {
          align-items: center;
          background: linear-gradient(90deg, #e7f6ff, #a3caf5);
          border-radius: 50%;
          display: flex;
          height: 2.35rem;
          justify-content: center;
          margin-left: 1.25rem;
          width: 2.35rem;
        }

        .stepsCtaArrow img {
          display: block;
          height: 14px;
          width: 16px;
        }

        @media (max-width: 991px) {
          .stepsGrid {
            grid-template-columns: 1fr;
          }

          .stepCard {
            min-height: 0;
          }
        }

        @media (max-width: 575px) {
          .stepCard {
            border-radius: 18px;
            padding: 22px 20px;
          }

          .stepsCta {
            display: flex;
            font-size: 0.75rem;
            margin: 26px auto 0;
            padding: 5px 7px 5px 16px;
            width: max-content;
          }

          .stepsCtaArrow {
            height: 2rem;
            margin-left: 0.875rem;
            width: 2rem;
          }

          .stepsCtaArrow img {
            height: 12px;
            width: 14px;
          }
        }
      `}</style>
    </section>
  );
}
