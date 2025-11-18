import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';

const uspData = [
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
  // Define the text for both desktop and mobile
  const desktopText = "We go beyond just tutoring with personalised learning, proven methods, & expert support that deliver real results.";
  const mobileText = "Beyond just tutoring: personalised learning, proven methods, & expert support deliver real results.";

  return (
    <>
      {/* CRITICAL FIX: Removed the outer <section data-scroll-section> wrapper.
        The host page (e.g., HomeCopy.js, subject-tutoring.js) must now provide the <section data-scroll-section>.
      */}
      <div
        className="usp-section sp-container" // Main container for styling
      >
        <div
          className="fade-in-sections uspSection" // This is the data-scroll-target container
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                className="uspLeft"
                // FIX: These attributes enable Locomotive Scroll's custom sticky behavior
                data-scroll
                data-scroll-sticky
                data-scroll-target=".uspSection"
              >
                <h2
                  className="fade-in-sections SubHeading"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  className="fade-in-sections uspTitle"
                  style={{ animationDelay: "0.2s" }}
                >
                  Here's Why Ignite Is The UAE's First Choice
                </h3>


                <h4
                  className="fade-in-sections uspSubtitle"
                  style={{ animationDelay: "0.3s" }}
                >
                  Real Support, Real Progress
                </h4>

                {/* 1. DESKTOP TEXT (Visible on large screens and up) */}
                <p
                  className="fade-in-section uspDesc d-none d-lg-block"
                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring & focus on personalised learning, proven methods, & expert guidance that drive real results. Discover what makes us the trusted choice for students & parents alike.
                </p>

                {/* 2. MOBILE TEXT (Visible on small/medium screens only) */}
                <p
                  className="fade-in-section uspDesc d-lg-none"
                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring with personalised learning, proven methods, & expert support that deliver real results.
                </p>

                <a
                  href="/why-ignite/"
                  className="uspBtn fade-in-sections buttonSkyBlue"
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
                      <div key={i} className="uspItem">
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