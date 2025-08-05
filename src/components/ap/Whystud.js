import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const whystud = [
  {
    name: "EARN COLLEGE CREDITS",
    img: "/images/earn-college.png",
    description: "Missing out on a chance that helps you set foot on your dream campus doesn't seem apt, right? Your AP score fetch you the much-needed advantage over other applicants in the entrance procedure.",
    color: "blue",
  },
  {
    name: "UNIVERSITY READY PROFILES",
    img: "/images/university.png",
    description: "Research proves that AP students are better prepared for university. We agree! They're more likely to develop the right skills, get familiar with environment, & stand out with college-ready proficiency.",
    color: "green",
  },
  {
    name: "DISPLAY SUBJECT PROFICIENCY",
    img: "/images/subjects.png",
    description: "Taking AP exams allow students to study a subject in depth which leads to developing full competency in the discipline. Disconnecting your ideal career path in the due process helps find the right path moving ahead.",
    color: "blue",
  },
  {
    name: "UNIQUE COLLEGE APPLICATION",
    img: "/images/application.png",
    description: "Your AP score transcripted in your college application automatically highlights a sense of commitment coming from you. This in turn boosts your chances of securing credit & placement from top universities.",
    color: "green",
  },
];


export default function Whystud({ }) {

  const [isWhystudSwiper, setIsWhystudSwiper] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWhystudSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <section className="whystudSection">
        <div className="container">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="SubHeading whystudSubheading">WHY STUD</span>
          </div>



          {isWhystudSwiper ? (
            <div className="whystudSwiperWrap">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".whystudPagination" }}
                breakpoints={{
                  0: { slidesPerView: 1.4 },
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                className="whystudSwiper"
              >
                <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous whystud">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Prev"
                    style={{ transform: "rotate(180deg)" }}
                    width={32}
                    height={32}
                  />
                </button>

                {whystud.map((t, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        data-color={t.color}
                        className={`whystudCard ${isActive ? "activeWhystud" : "inactiveWhystud"}`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className="whystudIcon">
                          <img src={t.img} alt={t.name} />
                        </div>
                        <div className="whystudTitle">{t.name}</div>
                        <div className="whystudDescription">{t.description}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}

                <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next whystud">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Next"
                    width={32}
                    height={32}
                  />
                </button>
              </Swiper>


              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section whystudSeeMore"
                style={{ animationDelay: `${0.3 + whystud.length * 0.06}s` }}
              >
                SEE MORE
              </button>
              <div className="whystudPagination"></div>
            </div>
          ) : (
            <>
              <div className="whystudGrid">
                {whystud.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section whystudCard"
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                  >
                    <div className="whystudIcon">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="whystudTitle">{t.name}</div>
                    <div className="whystudDescription">{t.description}</div>
                  </div>
                ))}
              </div>

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section whystudSeeMore"
                style={{ animationDelay: `${0.3 + whystud.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}