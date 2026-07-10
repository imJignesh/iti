import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Trainer Data - Custom set for psychology tutoring
const trainers = [
  {
    name: "MASAB",
    img: "/images/team/masab.webp",
    subtitle: "Maths & Accounting",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "SADAF",
    img: "/images/trainer2.webp",
    subtitle: "Accounting, Economics & Business",
    experience: "11+ YEARS",
    color: "green",
  },
  {
    name: "SARANYA",
    img: "/images/team/saranya.webp",
    subtitle: "Physics",
    experience: "8+ YEARS",
    color: "blue",
  },
  {
    name: "ASHWANI",
    img: "/images/team/ashwani.webp",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "IRTIQA",
    img: "/images/team/Irtiqa.webp",
    subtitle: "Computer Science, ICT",
    experience: "6+ YEARS",
    color: "blue",
  },
  {
    name: "ABDUL",
    img: "/images/team/abdul.webp",
    subtitle: "Maths",
    experience: "13+ YEARS",
    color: "green",
  },
  {
    name: "HARSHA",
    img: "/images/team/harsha.webp",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "NAMRATA",
    img: "/images/team/namrata.webp",
    subtitle: "Maths & Physics",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "KRITIKA",
    img: "/images/team/kritika.webp",
    subtitle: "Maths",
    experience: "3+ YEARS",
    color: "blue",
  },
  {
    name: "RUSTHA",
    img: "/images/team/rustha.webp",
    subtitle: "Chemistry, Biology, & EVM",
    experience: "3+ YEARS",
    color: "green",
  },
  {
    name: "IPSITA",
    img: "/images/team/ipsita.webp",
    subtitle: "Biology & EVM",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "FREEZY",
    img: "/images/team/freezy.webp",
    subtitle: "Biology, Chemistry",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "AASHIMA",
    img: "/images/team/aashima.webp",
    subtitle: "Spanish",
    experience: "5+ YEARS",
    color: "blue",
  },
  {
    name: "ANUJA",
    img: "/images/team/Anuja.webp",
    subtitle: "English & French",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "DR. HAYA",
    img: "/images/team/dr-haya.webp",
    subtitle: "Chemistry, Physics, Biology",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "DEEPAK",
    img: "/images/team/deepak.webp",
    subtitle: "Physics & Maths",
    experience: "13+ YEARS",
    color: "green",
  },
];

export default function Trainers() {
  const [showAll, setShowAll] = useState(false);
  const trainersGridRef = useRef(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayTrainers = showAll ? trainers : trainers.slice(0, 10);

  return (
    <>
      <style jsx global>{`
        .trainersSection {
          background: var(--white-bg);
          text-align: center;
        }

        .trainersSection .trainersHeader {
          margin-bottom: 32px;
        }

        .trainersSection .trainersTitle {
          font-size: 2rem;
          font-weight: 700;
          max-width: 60%;
          margin: 40px auto;
          line-height: 1.1;
          text-transform: uppercase;
          color: var(--blue-color);
        }

        .trainersSection .trainersGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px 24px;
          justify-items: center;
          margin-bottom: 36px;
          width: 70vw;
          margin: 0 auto;
          margin-bottom: 50px;
        }

        .trainersSection .trainerCard {
          padding: 20px 0 30px 0;
          border-radius: 40px;
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .trainersSection .trainerCard[data-color="blue"] {
          background: linear-gradient(var(--border-color) 0%, transparent 50%);
        }

        .trainersSection .trainerCard[data-color="green"] {
          background: linear-gradient(to top, var(--green-text) 0%, transparent 70%);
        }

        .trainersSection .trainerName {
          font-size: 1vw;
          font-weight: 500;
          color: var(--black-color);
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .trainersSection .trainerImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 0.9;
        }

        .trainersSection .trainerSubtitle {
          font-size: 0.7vw;
          color: var(--black-color);
          opacity: 0.5;
          margin-bottom: 10px;
          position: absolute;
          z-index: 9;
        }

        .trainersSection .trainerExp {
          background: linear-gradient(to left, #3f88ba, var(--blue-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          font-size: 1.2vw;
          position: absolute;
          bottom: 35px;
          z-index: 9;
        }

        .trainersSection .trainerCard[data-color="green"] .trainerExp {
          background: linear-gradient(to left, var(--green-color), var(--lightgreen-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .trainersSection .trainersSeeMore {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          padding: 5px 40px;
          border-radius: 40px;
          border: 3px solid transparent;
          background: linear-gradient(white, white) padding-box, linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
          color: var(--blue-color);
          font-size: 1vw;
          font-weight: 700;
          cursor: pointer;
          margin-top: 20px;
        }

        .trainersSection .trainersSeeMore:hover {
          color: var(--black-color);
          transform: scale(1.05);
        }

        @media (max-width: 1199px) {
          .trainersSection .trainersGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 12px;
          }
        }

        @media (max-width: 700px) {
          .trainersSection .trainersGrid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .trainersSection .trainersTitle {
            font-size: 20.4px;
            max-width: 100%;
            margin: 20px 0;
          }
        }
      `}</style>

      <section className="trainersSection">
        <div className="container">
          <h3 className="trainersTitle">
            The Best <span className="trainersHighlight">Trainers</span> For Your Success Journey
          </h3>

          {isTrainersSwiper ? (
            <div className="trainersSwiperWrap">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  700: { slidesPerView: 2, spaceBetween: 24 },
                  991: { slidesPerView: 3, spaceBetween: 24 },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".trainersPagination" }}
                onBeforeInit={(swiper) => {
                  if (swiper.params.navigation) {
                    swiper.params.navigation.prevEl = navPrevRef.current;
                    swiper.params.navigation.nextEl = navNextRef.current;
                  }
                }}
              >
                {trainers.map((t, i) => (
                  <SwiperSlide key={i}>
                    <a href="/our-team" className="nodecoration">
                      <div data-color={t.color} className="trainerCard">
                        <div className="trainerName">{t.name}</div>
                        <div className="trainerImgWrap">
                          <img src={t.img} alt={t.name} className="trainerImg" />
                        </div>
                        <div className="trainerSubtitle">{t.subtitle}</div>
                        <div className="trainerExp">{t.experience}</div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button ref={navPrevRef} className="customNavBtn swiper-button-prev">
                <img src="/images/left-arrow-blue.webp" alt="Previous" width={57} height={57} />
              </button>
              <button ref={navNextRef} className="customNavBtn swiper-button-next">
                <img src="/images/right-arrow-blue.webp" alt="Next" width={57} height={57} />
              </button>
              <div className="trainersPagination"></div>
            </div>
          ) : (
            <>
              <div className="trainersGrid" ref={trainersGridRef}>
                {displayTrainers.map((t, i) => (
                  <a href="/our-team" className="nodecoration" key={i}>
                    <div data-color={t.color} className="trainerCard">
                      <div className="trainerName">{t.name}</div>
                      <div className="trainerImgWrap">
                        <img src={t.img} alt={t.name} className="trainerImg" />
                      </div>
                      <div className="trainerSubtitle">{t.subtitle}</div>
                      <div className="trainerExp">{t.experience}</div>
                    </div>
                  </a>
                ))}
              </div>

              {trainers.length > 10 && (
                <button onClick={() => setShowAll(!showAll)} className="trainersSeeMore">
                  {showAll ? "SEE LESS" : "SEE MORE"}
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
