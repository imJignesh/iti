import React, { useState, useEffect, useCallback } from "react";
// ... (rest of imports)
import Image from '@/components/CustomImageWrapper';

// Custom Hook to Detect Mobile/Tablet View for disabling sticky logic
const useIsStickyDisabled = (breakpoint = 1100) => {
  const [isStickyDisabled, setIsStickyDisabled] = useState(false);

  const checkStickyDisabled = useCallback(() => {
    if (typeof window !== "undefined") {
      // Disable sticky tracking when screen width is less than the CSS breakpoint (1100px)
      setIsStickyDisabled(window.innerWidth <= breakpoint);
    }
  }, [breakpoint]);

  useEffect(() => {
    checkStickyDisabled();
    window.addEventListener("resize", checkStickyDisabled);
    return () => window.removeEventListener("resize", checkStickyDisabled);
  }, [checkStickyDisabled]);

  return isStickyDisabled;
};


const uspData = [
  // ... uspData remains the same ...
  {
    number: "01",
    icon: "/images/usp-icon1.png",
    title: "EXPERIENCED TUTORS",
    desc: "Learn from highly qualified tutors with a proven track record of academic success.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "STRUCTURED LEARNING",
    desc: "A well-organised approach that ensures clarity, consistency, & a strong foundation.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "TAILORED PROGRAMS",
    desc: "Customised study plans aligned with each student's needs, pace, & curriculum.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "FLEXIBLE SCHEDULING",
    desc: "Convenient session timings designed to fit around school & lifestyle demands.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "INTERACTIVE SESSIONS",
    desc: "Engaging, discussion-based learning that encourages curiosity & critical thinking.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "INDIVIDUAL SUPPORT",
    desc: "Receive personalised guidance every step of the way to overcome any challenges.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "EXTENSIVE EXAM PREP",
    desc: "Practice with unit tests, past papers, & mock exams under exam-like conditions",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "EXCELLENT RESOURCES",
    desc: "Access to curated notes, practice tests, & subject-specific learning material.",
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  const isStickyDisabled = useIsStickyDisabled();

  // Helper function to return data-scroll attributes or empty object
  const getStickyProps = () => {
    if (isStickyDisabled) {
      return {};
    }
    return {
      "data-scroll": true,
      "data-scroll-sticky": true,
      "data-scroll-target": ".uspSection",
    };
  };

  return (
    <>
      <div
        className="usp-section sp-container"
      >
        <div
          className="fade-in-sections uspSection"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                className="uspLeft"
                // Apply sticky props only on desktop (when sticky is NOT disabled)
                {...getStickyProps()}
              >
                <h2
                  className="fade-in-sections SubHeading"
                  data-scroll // Added data-scroll to ensure animation runs, even without sticky
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  className="fade-in-sections uspTitle"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.2s" }}
                >
                  Here's Why Ignite Is The UAE's First Choice
                </h3>


                <h4
                  className="fade-in-sections uspSubtitle"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.3s" }}
                >
                  Real Support, Real Progress
                </h4>

                {/* 1. DESKTOP TEXT (Visible on large screens and up) */}
                <p
                  className="fade-in-section uspDesc d-none d-lg-block"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring & focus on personalised learning, proven methods, & expert guidance that drive real results. Discover what makes us the trusted choice for students & parents alike.
                </p>

                {/* 2. MOBILE TEXT (Visible on small/medium screens only) */}
                <p
                  className="fade-in-section uspDesc d-lg-none"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring with personalised learning, proven methods, & expert support that deliver real results.
                </p>

                <a
                  href="/why-ignite/"
                  className="uspBtn fade-in-sections buttonSkyBlue"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE{" "}
                  <Image
                    src="/images/right-arrow-blue.png"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="uspRight">
                {uspDataRows.map((row, index) => (
                  <div key={index} className="uspSlide">
                    {row.map((usp, i) => (
                      <div
                        key={i}
                        className="uspItem"
                        // Added data-scroll attributes to the individual USP items for animation tracking
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                      >
                        <div className="uspNumber">{usp.number}</div>
                        <div className="uspIconCircle">
                          <Image
                            src={usp.icon}
                            alt={usp.title}
                            className="uspIcon"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="uspContent">
                          <h3 className="uspItemTitle">{usp.title}</h3>
                          <div className="uspItemDesc">{usp.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}