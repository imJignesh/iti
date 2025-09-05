import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const trainers = [
  {
    name: "MASAB",
    img: "/images/trainer1.png",
    subtitle: "Maths & Accounting",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "SADAF",
    img: "/images/trainer2.png",
    subtitle: "Accounting, Economics & Business",
    experience: "11+ YEARS",
    color: "green",
  },
  {
    name: "SARANYA",
    img: "/images/trainer1.png",
    subtitle: "Physics",
    experience: "8+ YEARS",
    color: "blue",
  },
  {
    name: "ASHWANI",
    img: "/images/trainer2.png",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "IRTIQA",
    img: "/images/trainer1.png",
    subtitle: "Computer Science, ICT",
    experience: "6+ YEARS",
    color: "blue",
  },
  {
    name: "ABDUL",
    img: "/images/trainer2.png",
    subtitle: "Maths",
    experience: "13+ YEARS",
    color: "green",
  },
  {
    name: "HARSHA",
    img: "/images/trainer1.png",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "NAMRATA",
    img: "/images/trainer2.png",
    subtitle: "Maths & Physics",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "KRITIKA",
    img: "/images/trainer1.png",
    subtitle: "Maths",
    experience: "3+ YEARS",
    color: "blue",
  },
  {
    name: "RUSTHA",
    img: "/images/trainer2.png",
    subtitle: "Chemistry, Biology, & EVM",
    experience: "3+ YEARS",
    color: "green",
  },
  {
    name: "IPSITA",
    img: "/images/trainer1.png",
    subtitle: "Biology & EVM",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "FREEZY",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "AASHIMA",
    img: "/images/trainer1.png",
    subtitle: "Spanish",
    experience: "5+ YEARS",
    color: "blue",
  },
  {
    name: "ANUJA",
    img: "/images/trainer2.png",
    subtitle: "English & French",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "DR. HAYA",
    img: "/images/trainer1.png",
    subtitle: "Chemistry, Physics, Biology",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "DEEPAK",
    img: "/images/trainer2.png",
    subtitle: "Physics & Maths",
    experience: "13+ YEARS",
    color: "green",
  },
];

export default function Trainers({ scrollInstance }) {
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const trainersGridRef = React.useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // UseEffect to update Locomotive Scroll after content changes
  useEffect(() => {
    if (scrollInstance) {
      scrollInstance.update();
      if (showAll && trainersGridRef.current) {
        const cards = trainersGridRef.current.querySelectorAll('.trainerCard');
        cards.forEach(card => {
          if (!card.classList.contains('is-inview')) {
            card.classList.add('is-inview');
          }
        });
      }
    }
  }, [showAll, scrollInstance]);

  const displayTrainers = showAll ? trainers : trainers.slice(0, 10);

  return (
    <>
      <section className="trainersSection">
        <div className="container">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="SubHeading trainersSubheading">OUR TUTORS</span>
          </div>

          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section trainersTitle"
            style={{ animationDelay: "0.2s" }}
          >
            The Best Trainers For Your Success Journey
          </h2>

          {isTrainersSwiper ? (
            <div className="trainersSwiperWrap">
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
                pagination={{ clickable: true, el: ".trainersPagination" }}
                breakpoints={{
                  0: { slidesPerView: 1.4 },
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                className="trainersSwiper"
              >
                <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Prev"
                    style={{ transform: "rotate(180deg)" }}
                    width={32}
                    height={32}
                  />
                </button>

                {trainers.map((t, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        data-color={t.color}
                        className={` trainerCard ${isActive ? "activeTrainer" : "inactiveTrainer"}`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className="trainerName">{t.name}</div>
                        <div className="trainerImgWrap">
                          <img src={t.img} alt={t.name} className="trainerImg" />
                        </div>
                        <div className="trainerSubtitle">{t.subtitle}</div>
                        <div className="trainerExp">{t.experience}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}

                <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next trainer">
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
                className="fade-in-section trainersSeeMore"
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
              <div className="trainersPagination"></div>
            </div>
          ) : (
            <>
              <div className="trainersGrid" ref={trainersGridRef}>
                {displayTrainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section trainerCard"
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                  >
                    <div className="trainerName">{t.name}</div>
                    <div className="trainerImgWrap">
                      <img src={t.img} alt={t.name} className="trainerImg" />
                    </div>
                    <div className="trainerSubtitle">{t.subtitle}</div>
                    <div className="trainerExp">{t.experience}</div>
                  </div>
                ))}
              </div>

              {trainers.length > 10 && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section trainersSeeMore"
                  style={{ animationDelay: `${0.3 + displayTrainers.length * 0.06}s` }}
                >
                  SEE MORE
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}