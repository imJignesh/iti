import React from "react";


const subjectRows = [
  [
    { name: "English", link: "/english-tutor-in-dubai/" },
    { name: "French", link: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Spanish", link: "/spanish-tutor-in-dubai/" },
    { name: "Computer Science", link: "/computer-science-tutor-in-dubai/" },
    { name: "Economics", link: "/economics-tutor-in-dubai/" },
  ],
  [
    { name: "Biology", link: "/biology-tutor-in-dubai/" },
    { name: "Chemistry", link: "/chemistry-tutor-in-dubai/" },
  ],
  [
    { name: "Physics", link: "/physics-tutor-in-dubai/" },
    { name: "Maths", link: "/maths-tutor-in-dubai/" },
    { name: "Accounting", link: "/accounting-tutor-in-dubai/" },
  ],
  [
    { name: "Business Studies", link: "/business-studies-tutor-in-dubai/" },
    { name: "Psychology", link: "/psychology-tutor-in-dubai/" },
  ],
];

export default function Subjects({ }) {
  return (
    <section
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className="fade-in-section subjectSection"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="container">
        <div className="subjectSectionInner blue">
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className="bgRect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg5.png"
            alt="bg-shape"
            className="bgRect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className="bgRect"
          />
          <div className="col-4 subjectLeft">
            <span
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section SubHeading"
              style={{ animationDelay: "0.1s" }}
            >
              SUBJECT TUTORING
            </span>
            <h1
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section subjectTitle"
              style={{ animationDelay: "0.2s" }}
            >
              Expert Guidance For Every Subject In Every{" "}
              <span className="subjectHighlight">Way</span>
            </h1>
            <p
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section subjectDesc"
              style={{ animationDelay: "0.3s" }}
            >
              We help students strengthen subject knowledge, choose the right curriculum path, & build the academic confidence needed to excel.
            </p>
          </div>
          <div className="col-8 subjectRight">
            <div className="subjectBubblesGrid">
              {subjectRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section subjectBubbleRow`}
                  style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                >
                  {row.map((subj) => (
                    <a key={subj.name} href={subj.link} className="subjectBubble nodecoration">
                      {subj.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}