import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";



const AchievementsCarousel = () => {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });
      scrollInstanceRef.current = scroll;
    };
    if (typeof window !== "undefined") {
      initScroll();
    }
    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);
  const SUBJECTLIST = [
    {
      counts: "01.",
      subjectsName: "Cell Biology",
    },
    {
      counts: "02.",
      subjectsName: "Biochemistry",
    },
    {
      counts: "03.",
      subjectsName: "Molecular Biology",
    },
    {
      counts: "04.",
      subjectsName: "Genetics",
    },
    {
      counts: "05.",
      subjectsName: "Immunology",
    },
    {
      counts: "06.",
      subjectsName: "Animal Physiology",
    },
    {
      counts: "07.",
      subjectsName: "Plant Biology",
    },
    {
      counts: "08.",
      subjectsName: "Biotechnology",
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="subject-syllabus">
      <div className="container">
        <div className="achievementsHeadings ">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="SubHeading">SUBJECT SYLLABUS</h2>
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.25s" }}
          >
            <h3 className="achievementsTitle text-uppercase">
              Explore Key Areas In The <br></br>{" "}
              <span className="highlight"> English</span> Syllabus{" "}
            </h3>
          </div>
        </div>
        <div className="row gy-4 gy-sm-3 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          {SUBJECTLIST.map((item, indx) => (
            <div className="col-6 col-lg-3">
              <div
                className="subjects-card text-uppercase"
                key={indx + 1}
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="counts">{item.counts}</div>
                <h3 className="subjects-name">{item.subjectsName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Header */
.subjects-card .subjects-name{
      margin-bottom: 0;
}

.achievementsHeadings {
  text-align: center;
}

.achievementsTitle {
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0 30px;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--blue-color);
}

.achievementsTitle .highlight {
  background: linear-gradient(
    to right,
    var(--lightgreen-color),
    var(--green-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive adjustments */
@media (max-width: 768px) {
          .subjects-card {
  padding: 15px !important;
  gap: 10px !important;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  transition: all 0.3s ease;
  height: 100%;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
  .achievementsTitle {
    font-size: 1.8em;
  }
}
@media (max-width: 575px) {
  .subject-syllabus{
    padding:0 0 0 0;
  }
  .subject-syllabus .achievementsHeadings{
    margin-bottom:0 !important;
  }
  .subject-syllabus .achievementsTitle{
      margin:20px 0;
  }
}

.subjects-card {
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
.subjects-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(269.48deg, #e7f6ff 2.74%, #a3caf5 93.4%);
  opacity: 0.5;
  z-index: -1;
}

.subjects-card:hover::before {
  background: linear-gradient(47.43deg, #00a491 0%, #003e37 123.39%);
  opacity: 1;
}

.subjects-card:hover .subjects-name {
  color: rgba(255, 255, 255, 1);
}
.subjects-card:hover .counts {
  color: rgba(255, 255, 255, 1);
}
.subjects-card .counts {
  font-size: 40px;
  font-weight: 700;
  color: rgba(22, 22, 100, 1);
}
.subjects-card .subjects-name {
  font-size: 20px;
  font-weight: 700;
  color: rgba(22, 22, 100, 1);
}

@media (max-width: 768px) {
  .achievementsTitle {
    font-size: 23px;
  }
  .subjects-card {
    border-radius: 10px !important;
  }
  .subjects-card .subjects-name {
    font-size: 14px;
  }
}

        `}</style>
    </section>
  );
};


export default AchievementsCarousel;