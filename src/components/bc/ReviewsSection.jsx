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
} from "swiper/modules";


const testimonialData = [
  // Placeholder Video 1
  {
    type: "video",
    img: "/images/testimonial1.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 1: Zeynep Inan
  {
    type: "text",
    text: "I have taken lessons for IGCSE science and math which has helped me achieve top grades. With the help of my trainers, I was able to get offers from top universities in the UK such as UCL and University of Edinburgh.",
    name: "Zeynep Inan",
    subtitle: "IB & IGCSE Student",
  },

  // Placeholder Video 2
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 2: Hassan Ali
  {
    type: "text",
    text: "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my GCSEs to getting 8-9s in my actual GCSE exams. This place helped me a lot and has very good tutors as well.",
    name: "Hassan Ali",
    subtitle: "GCSE Student",
  },

  // Placeholder Video 3
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 3: Sushma Menon (Parent)
  {
    type: "text",
    text: "My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Their dedication and quality of tutoring truly stand out.",
    name: "Sushma Menon",
    subtitle: "Parent",
  },

  // Placeholder Video 4
  {
    type: "video",
    img: "/images/testimonial1.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 4: Ben Dunatov
  {
    type: "text",
    text: "Great tutoring service! Perfect for struggling GCSE students.",
    name: "Ben Dunatov",
    subtitle: "GCSE Student",
  },

  // Placeholder Video 5
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 5: Rosie Seldon (Parent)
  {
    type: "text",
    text: "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
    name: "Rosie Seldon",
    subtitle: "Parent",
  },

  // Placeholder Video 6
  {
    type: "video",
    img: "/images/testimonial1.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },

  // Text Testimonial 6: Riyad Bouarissa
  {
    type: "text",
    text: "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams.",
    name: "Riyad Bouarissa",
    subtitle: "Student",
  },
];


export default function Testimonial({ }) {
  return (
    <>
      <section className="testimonialSection">
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="testimonialHeader">
            <span className="SubHeading">REVIEWS & TESTIMONIALS</span>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section testimonialBgBox"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Decorative rectangles */}
          <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />

          <img
            src="/images/google-logo.png"
            alt="google logo"
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className="googlelogo"
            style={{ animationDelay: "0.2s" }}
            width={250}
            height={80}
          />

          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testimonialTitle"
            style={{ animationDelay: "0.3s" }}
          >
            IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI
          </h2>

          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section googleReview"
            style={{ animationDelay: "0.4s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>

          <img
            src="/images/star-review.png"
            alt="star review"
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className="starReview"
            style={{ animationDelay: "0.5s" }}
            width={250}
            height={80}
          />
        </div>

        <div className="testimonialSliderWrap">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".testimonialPagination",
            }}
            breakpoints={{
              0: { slidesPerView: 2, slidesPerGroup: 2 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="testimonialSwiper"
          >


            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx}>
                {item.type === "video" ? (
                  <div className="testimonialCard testimonialCardVideo">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="testimonialImg"
                    />
                    <div className="testimonialVideoOverlay"></div>
                    <div className="testimonialPlayBtn">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0000008a"
                          stroke="#ffffff60"
                          strokeWidth="2"
                        />
                        <polygon points="20,16 34,24 20,32" fill="#ffffff90" />
                      </svg>
                    </div>
                    <div className="testimonialVideoText">
                      <b>{item.name}</b>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div className="testimonialCard testimonialCardText">
                    <div className="testimonialText">{item.text}</div>
                    <div className="testimonialTextName">
                      <b>{item.name}</b>
                    </div>
                    <div className="testimonialTextSubtitle">{item.subtitle}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}

          </Swiper>  <button className="swiper-button-prev" tabIndex={0} aria-label="Previous testimonial">
            <img
              src="/images/right-arrow-blue.png"
              alt="Prev"
              className="btntest"
              style={{ transform: "rotate(180deg)" }}
              width={32}
              height={32}
            />
          </button>
          <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
            <img
              src="/images/right-arrow-blue.png"
              alt="Next"
              className="btntest"
              width={32}
              height={32}
            />
          </button>

          <div className="testimonialPagination"></div>
        </div>
      </section>

    </>
  );
}
