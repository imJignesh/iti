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
//           <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />

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
  Autoplay,
} from "swiper/modules";


const testimonialData = [
  // {
  //   type: "video",
  //   img: "/images/testimonial1.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me get offers from top universities in the UK such as UCL and University of Edinburgh.",
    name: "Zeynep Inan",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my Gcses to getting 8-9s in my actual gcse exams. This place helped me a lot and has very good tutors aswell.",
    name: "Hassan Ali",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students.My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter’s confidence and performance.I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience.I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future .",
    name: "Sushma Menon",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "Great tutoring service! Perfect for struggling GCSE students.",
    name: "Ben Dunatov",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work",
    name: "Rosie Seldon",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.jpg",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams. Without such exceptional teaching, the overall value of the institute would have been compromised. While the management and other aspects of the institute are satisfactory, it is the teaching that truly made a significant impact on my learning experience.",
    name: "Riyad Bouarissa",
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
          <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="igcse tutor in dubai" className="testimonialRect" />

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
            modules={[Navigation, Pagination, Autoplay]}
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
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
