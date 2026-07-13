import { useEffect, useState } from "react";

export default function SubjectSyllabus({ config }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!config) return null;
  if (!mounted) return null;

  const {
    title = "SUBJECT SYLLABUS",
    subtitlePrefix = "Explore Key Areas In The",
    highlightWord,
    subtitleSuffix = "Syllabus",
    subjects = [],
  } = config;

  return (
    <section className="subject-syllabus">
      <style jsx global>{`
        .subject-syllabus .subjects-card .subjects-name {
          margin-bottom: 0;
        }

        .subject-syllabus .achievementsHeadings {
          text-align: center;
        }

        .subject-syllabus .achievementsTitle {
          font-size: 2rem;
          font-weight: 700;
          margin: 40px 0 30px;
          line-height: 1.1;
          text-transform: uppercase;
          color: var(--blue-color);
        }

        .subject-syllabus .achievementsTitle .highlight {
          background: linear-gradient(
            to right,
            var(--lightgreen-color),
            var(--green-color)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subject-syllabus .subjects-card {
          padding: 20px;
          gap: 25px;
          display: flex;
          flex-direction: column;
          border-radius: 30px;
          transition: all 0.3s ease;
          height: 100%;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .subject-syllabus .subjects-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(269.48deg, #e7f6ff 2.74%, #a3caf5 93.4%);
          opacity: 0.5;
          z-index: -1;
        }

        .subject-syllabus .subjects-card:hover::before {
          background: linear-gradient(47.43deg, #00a491 0%, #003e37 123.39%);
          opacity: 1;
        }

        .subject-syllabus .subjects-card:hover .subjects-name {
          color: rgba(255, 255, 255, 1);
        }
        .subject-syllabus .subjects-card:hover .counts {
          color: rgba(255, 255, 255, 1);
        }
        .subject-syllabus .subjects-card .counts {
          font-size: 40px;
          font-weight: 700;
          color: rgba(22, 22, 100, 1);
        }
        .subject-syllabus .subjects-card .subjects-name {
          font-size: 20px;
          font-weight: 700;
          color: rgba(22, 22, 100, 1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .subject-syllabus .subjects-card {
            padding: 15px !important;
            gap: 10px !important;
            border-radius: 30px;
          }
          .subject-syllabus .achievementsTitle {
            font-size: 1.8em;
          }
        }
        @media (max-width: 575px) {
          .subject-syllabus {
            padding: 0 0 0 0;
          }
          .subject-syllabus .achievementsHeadings {
            margin-bottom: 0 !important;
          }
          .subject-syllabus .achievementsTitle {
            margin: 20px 0;
          }
        }
        @media (max-width: 768px) {
          .subject-syllabus .achievementsTitle {
            font-size: 23px;
          }
          .subject-syllabus .subjects-card {
            border-radius: 10px !important;
          }
          .subject-syllabus .subjects-card .subjects-name {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="container">
        <div className="achievementsHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="SubHeading">{title}</h2>
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.25s" }}
          >
            <h3 className="achievementsTitle text-uppercase">
              {subtitlePrefix} <br></br>{" "}
              <span className="highlight"> {highlightWord}</span> {subtitleSuffix}{" "}
            </h3>
          </div>
        </div>
        <div
          className="row gy-4 gy-sm-3 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
        >
          {subjects.map((name, idx) => (
            <div className="col-6 col-lg-3" key={idx}>
              <div
                className="subjects-card text-uppercase"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="counts">{String(idx + 1).padStart(2, "0")}.</div>
                <h3 className="subjects-name">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
