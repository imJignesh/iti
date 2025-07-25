import React from "react";

export default function Trainers({ isTrainersSwiper, trainers }) {
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
            <span className={`SubHeading trainersSubheading`}>
              OUR TRAINERS
            </span>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section trainersTitle`}
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
            <span className="trainersHighlight">ADIPISCING</span>
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
                pagination={{
                  clickable: true,
                  el: ".trainersPagination",
                }}
                breakpoints={{
                  0: { slidesPerView: 1.4 },
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                className="trainersSwiper"
              >
                <button
                  className={`swiper-button-prev customNavBtn`}
                  tabIndex={0}
                  aria-label="Previous trainer"
                >
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
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className={`fade-in-section trainerCard ${
                          isActive ? "activeTrainer" : "inactiveTrainer"
                        }`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className="trainerName">{t.name}</div>
                        <div className="trainerImgWrap">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="trainerImg"
                          />
                        </div>
                        <div className="trainerSubtitle">{t.subtitle}</div>
                        <div className="trainerExp">{t.experience}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
                <button
                  className={`swiper-button-next customNavBtn`}
                  tabIndex={0}
                  aria-label="Next trainer"
                >
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Next"
                    width={32}
                    height={32}
                  />
                </button>
              </Swiper>
              <div className="trainersPagination"></div>
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section trainersSeeMore`}
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </div>
          ) : (
            <>
              <div className="trainersGrid">
                {trainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section trainerCard`}
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
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section trainersSeeMore`}
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
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
