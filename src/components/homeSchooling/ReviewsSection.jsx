// import React from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "swiper/css/scrollbar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   EffectCoverflow,
//   Scrollbar,
//   Mousewheel,
// } from "swiper/modules";


// const testimonialData = [
//   {
//     type: "video",
//     img: "/images/testimonial1.jpg",
//     video: true,
//     name: "LOREM IPSUM",
//     subtitle: "Lorem ipsum dolor sit",
//   },
//   {
//     type: "text",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "",
//     subtitle: "",
//   },
//   {
//     type: "video",
//     img: "/images/testimonial2.jpg",
//     video: true,
//     name: "LOREM IPSUM",
//     subtitle: "Lorem ipsum dolor sit",
//   },
//   {
//     type: "text",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "",
//     subtitle: "",
//   },
//   {
//     type: "video",
//     img: "/images/testimonial2.jpg",
//     video: true,
//     name: "LOREM IPSUM",
//     subtitle: "Lorem ipsum dolor sit",
//   },
//   {
//     type: "text",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "",
//     subtitle: "",
//   },
// ];


// export default function Testimonial({ }) {
//   return (
//     <>
//       <section className="testimonialSection">
//         <div
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat="true"
//           className="fade-in-section"
//           style={{ animationDelay: "0.1s" }}
//         >
//           <div className="testimonialHeader">
//             <span className="SubHeading">REVIEWS & TESTIMONIALS</span>
//           </div>
//         </div>

//         <div
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat="true"
//           className="fade-in-section testimonialBgBox"
//           style={{ animationDelay: "0.2s" }}
//         >
//           {/* Decorative rectangles */}
//           <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="bg-shape" className="testimonialRect" />

//           <img
//             src="/images/google-logo.png"
//             alt="google logo"
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             className="googlelogo"
//             style={{ animationDelay: "0.2s" }}
//             width={250}
//             height={80}
//           />

//           <h2
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat="true"
//             className="fade-in-section testimonialTitle"
//             style={{ animationDelay: "0.3s" }}
//           >
//             IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI
//           </h2>

//           <p
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat="true"
//             className="fade-in-section googleReview"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <span>4.9 </span>
//             Google Reviews
//           </p>

//           <img
//             src="/images/star-review.png"
//             alt="star review"
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             className="starReview"
//             style={{ animationDelay: "0.5s" }}
//             width={250}
//             height={80}
//           />
//         </div>

//         <div className="testimonialSliderWrap">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             loop={true}
//             spaceBetween={20}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             pagination={{
//               clickable: true,
//               el: ".testimonialPagination",
//             }}
//             breakpoints={{
//               0: { slidesPerView: 2, slidesPerGroup: 2 },
//               576: { slidesPerView: 2 },
//               992: { slidesPerView: 3 },
//               1200: { slidesPerView: 4 },
//             }}
//             className="testimonialSwiper"
//           >
//             {testimonialData.map((item, idx) => (
//               <SwiperSlide key={idx}>
//                 {item.type === "video" ? (
//                   <div className="testimonialCard testimonialCardVideo">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="testimonialImg"
//                     />
//                     <div className="testimonialVideoOverlay"></div>
//                     <div className="testimonialPlayBtn">
//                       <svg
//                         width="48"
//                         height="48"
//                         viewBox="0 0 48 48"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle
//                           cx="24"
//                           cy="24"
//                           r="23"
//                           fill="#0000008a"
//                           stroke="#ffffff60"
//                           strokeWidth="2"
//                         />
//                         <polygon points="20,16 34,24 20,32" fill="#ffffff90" />
//                       </svg>
//                     </div>
//                     <div className="testimonialVideoText">
//                       <b>{item.name}</b>
//                       <span>{item.subtitle}</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="testimonialCard testimonialCardText">
//                     <div className="testimonialText">{item.text}</div>
//                     <div className="testimonialTextName">
//                       <b>{item.name}</b>
//                     </div>
//                     <div className="testimonialTextSubtitle">{item.subtitle}</div>
//                   </div>
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <button className="swiper-button-prev" tabIndex={0} aria-label="Previous testimonial">
//             <img
//               src="/images/right-arrow-blue.png"
//               alt="Prev"
//               style={{ transform: "rotate(180deg)" }}
//               width={32}
//               height={32}
//             />
//           </button>
//           <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
//             <img
//               src="/images/right-arrow-blue.png"
//               alt="Next"
//               width={32}
//               height={32}
//             />
//           </button>

//           <div className="testimonialPagination"></div>
//         </div>
//         <style jsx>{`

//         .testimonialSection .testimonialCard {
//   background: #fff;
//   border-radius: 32px;
//   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
//   padding: 0;
//   height: 450px; /* Fixed height for all cards */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   position: relative;
//   overflow: hidden;
// }

// .testimonialSection .testimonialCardVideo {
//   background: #f6f6f6;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// }

// .testimonialSection .testimonialCardText {
//   background: #eaf8ff;
//   padding: 40px 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   border: 2px solid #4dbd92;
//   height: 450px; /* Ensure same height as video cards */
// }

// .testimonialSection .testimonialImg {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 32px;
//   display: block;
// }

// .testimonialSection .testimonialText {
//   font-size: 1vw;
//   text-align: start;
//   font-weight: 500;
//   line-height: 1.6;
//   letter-spacing: 0.8px;
//   overflow: auto; /* Add scroll if content is too long */
//   flex-grow: 1; /* Allow text to take available space */
// }

// /* For mobile responsiveness */
// @media (max-width: 1199px) {
//   .testimonialSection .testimonialCard,
//   .testimonialSection .testimonialCardText {
//     height: 400px;
//   }

//   .testimonialSection .testimonialText {
//     font-size: 1rem;
//   }
// }

// @media (max-width: 767px) {
//   .testimonialSection .testimonialCard,
//   .testimonialSection .testimonialCardText {
//     height: 350px;
//   }
// }

//         `}</style>
//       </section>
//     </>
//   );
// }













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
  {
    type: "video",
    img: "/images/testimonial1.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "Ignite made my online schooling experience much more enjoyable. Everyone there are so lovely and fun, I truly felt comfortable in that space. The amount of support from everyone was wonderful and helped me thrive academically. There was no unnecessary pressure, they pushed me to do the best I could in a supportive way. I definitely recommend Ignite for homeschoolers / online students!",
    name: "Melia",
    subtitle: "",
  },
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
    name: "Nicole Morgan",
    subtitle: "",
  },
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources",
    name: "Abdullah Al Noubani",
    subtitle: "",
  },
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "Passionate teachers , supportive and flexible management",
    name: "Elham Abu Omar",
    subtitle: "",
  },
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "Homeschooling with Ignite gave me the structure and guidance I needed to stay focused. The tutors constantly checked on my progress and encouraged me to push my limits while still being very understanding. The sense of community they build makes you feel you’re never alone in your studies. I can proudly say my academic journey has improved so much because of Ignite.",
    name: "Rayan",
    subtitle: "",
  },
  {
    type: "video",
    img: "/images/testimonial2.jpg",
    video: true,
    name: "LOREM IPSUM",
    subtitle: "Lorem ipsum dolor sit",
  },
  {
    type: "text",
    text: "I took the private candidate route with Ignite, and it worked out perfectly. The flexible classes and constant support kept me motivated. It never felt like I was studying alone, and I felt fully prepared for my exams.",
    name: "Lina",
    subtitle: "",
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
