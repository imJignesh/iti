const plannerItems = [
  {
    period: "July – August",
    title: "Summer Head Start",
    description:
      "Year 11 students bridge from IGCSE with the AS Level Summer Head Start.",
  },
  {
    period: "September – October",
    title: "Year 12 AS Classes Begin",
    description:
      "Join the 10-month AS group or start one-to-one tutoring in the first term.",
  },
  {
    period: "After Autumn Mocks",
    title: "Year 13 A2 Classes",
    description:
      "Predicted grades land. Year 13 students sharpen paper technique ahead of UCAS.",
  },
  {
    period: "14 Jan / 15 Oct",
    title: "UCAS Deadlines",
    description:
      "14 January for most UK universities, 15 October for Oxbridge and medicine.",
  },
  {
    period: "May – June",
    title: "Main Exam Series",
    description:
      "Timed mocks and paper reviews continue through to the final papers.",
  },
  {
    period: "October – November",
    title: "Resit Series",
    description:
      "The October/November Resit Success Programme targets a stronger grade for university offers.",
  },
];

export default function YearPlanner() {
  return (
    <div className="yearPlanner">
      <div className="container yearPlannerInner">
        <div className="yearPlannerHeader">
          <h2 className="SubHeading testSubheading">A-Level Year Planner</h2>

          <h3 className="plannerTitle">When To Start A-Level Tuition In Dubai</h3>
          <p className="intro">
            Every step of the AS and A2 calendar, and the Ignite course that fits it.
            Dates follow the May/June and October/November exam series.
          </p>
        </div>

        <div className="plannerGrid">
          {plannerItems.map((item) => (
            <article className="plannerCard" key={item.title}>
              <span className="period">{item.period}</span>
              <h4 className="cardTitle">{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .yearPlanner {
          padding: 0;
          background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
        }

        .yearPlannerInner {
          max-width: 1180px;
        }

        .yearPlannerHeader {
          max-width: 820px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .yearPlannerHeader :global(.SubHeading) {
          margin: 0 0 16px;
        }

        .plannerTitle {
          margin: 0 auto;
          color: #161664;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .intro {
          max-width: 680px;
          margin: 18px auto 0;
          color: #475578;
          font-size: 1rem;
          line-height: 1.65;
        }

        .plannerGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .plannerCard {
          min-height: 170px;
          padding: 28px 26px;
          background: #ffffff;
          border: 1px solid rgba(40, 118, 231, 0.48);
          border-radius: 22px;
          box-shadow: 0 10px 28px rgba(22, 22, 100, 0.045);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .plannerCard:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 164, 145, 0.7);
          box-shadow: 0 16px 34px rgba(22, 22, 100, 0.09);
        }

        .period {
          display: inline-block;
          margin-bottom: 13px;
          padding: 6px 12px;
          border-radius: 999px;
          background: #e8f5fb;
          color: #244993;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .cardTitle {
          margin: 0 0 9px;
          color: #161664;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
        }

        .plannerCard p {
          margin: 0;
          color: #566078;
          font-size: 15px;
          line-height: 1.55;
        }

        @media (max-width: 991px) {
          .yearPlannerInner {
            padding-right: 24px;
            padding-left: 24px;
          }

          .plannerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .plannerTitle {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 575px) {
          .yearPlannerInner {
            padding-right: 18px;
            padding-left: 18px;
          }

          .yearPlannerHeader {
            margin-bottom: 30px;
          }

          .yearPlannerHeader :global(.SubHeading) {
            margin-bottom: 14px;
          }

          .plannerTitle {
            font-size: 20.4px;
            line-height: 23px;
          }

          .intro {
            margin-top: 14px;
            font-size: 0.93rem;
            line-height: 1.55;
          }

          .plannerGrid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .plannerCard {
            min-height: auto;
            padding: 24px 22px;
            border-radius: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plannerCard {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
