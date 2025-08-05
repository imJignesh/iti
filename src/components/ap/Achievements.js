import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import "../../styles/ib/Acheivements.css"; // plain CSS import
import "swiper/css";
import "swiper/css/navigation";

const achievements = [
  {
    id: 1,
    logo: "/images/fauget-university.png",
    score: "98%",
    name: "TANIYA SHARMA",
    description: "LOREM IPSUM DOLOR SIT",
  },
  {
    id: 2,
    logo: "/images/penn.png",
    score: "98%",
    name: "TANIYA SHARMA",
    description: "LOREM IPSUM DOLOR SIT",
  },
  {
    id: 3,
    logo: "/images/stanford.png",
    score: "98%",
    name: "TANIYA SHARMA",
    description: "LOREM IPSUM DOLOR SIT",
  },
];

const BookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20V19.5A2.5 2.5 0 0 1 17.5 22H6.5A2.5 2.5 0 0 1 4 19.5V4.5Z" />
  </svg>
);

const Achievements = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="achievements-container">
      <div className="achievements-swiperWrapper">
        <div
          className="achievements-navButton achievements-prev"
          ref={prevRef}
          aria-label="previous"
        >
          <svg className="achievements-arrow" viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div
          className="achievements-navButton achievements-next"
          ref={nextRef}
          aria-label="next"
        >
          <svg className="achievements-arrow" viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onInit={(swiper) => {
            // link custom navigation
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {achievements.map((a) => (
            <SwiperSlide key={a.id}>
              <div className="achievements-slideCard">
                <div className="achievements-logoWrapper">
                  <Image
                    src={a.logo}
                    width={200}
                    height={120}
                    quality={100}
                    alt={`${a.name} logo`}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="achievements-score">{a.score}</div>
                <div className="achievements-name">{a.name}</div>
                <div className="achievements-bottomRow">
                  <div className="achievements-iconWrapper">
                    <BookIcon />
                  </div>
                  <div className="achievements-descriptionText">{a.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievements;