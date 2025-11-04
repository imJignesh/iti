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
//           <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />
//           <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />

//           <img
//             src="/images/google-logo.png"
//             alt="ibdp tutor in dubai"
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
//             alt="ibdp tutor in dubai"
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
//               alt="ibdp tutor in dubai"
//               style={{ transform: "rotate(180deg)" }}
//               width={32}
//               height={32}
//             />
//           </button>
//           <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
//             <img
//               src="/images/right-arrow-blue.png"
//               alt="ibdp tutor in dubai"
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
    text: "We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved good grade in Chemistry. Thank you so much to Ahzeb and the Ignite team for supporting us in this!",
    name: "Nidhi Choudhury",
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
    text: "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey. Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
    name: "Genesis Tech",
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
    text: "One of the best Business and Economics teachers for the IB. The syllabus is covered thoroughly, and difficult concepts are explained within seconds, making them easy to understand. I have been working with this tutor for the best part of my DP course so far, and my grades have gone right up. I am now on track for a great DP score all thanks to this support.",
    name: "Kabir Kochhar",
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
    text: "I’m an IB student and had a great experience with my Math tutoring at Ignite. The sessions explained and covered topics really well online. I used to think that face-to-face was more effective than online tutoring, but I was able to learn just as effectively online. I highly recommend Ignite Institute for Math tutoring.",
    name: "Maya Alrawi",
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
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
    name: "Nicole Morgan",
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
    text: "My teacher at Ignite is a fantastic economic teacher, making sure the syllabus was covered and has gone through all the 15 past exam papers I did.",
    name: "Kovidh Verma",
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
          <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />
          <img src="/images/rectangle-bg4.png" alt="ibdp tutor in dubai" className="testimonialRect" />

          <img
            src="/images/google-logo.png"
            alt="ibdp tutor in dubai"
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
            alt="ibdp tutor in dubai"
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
              alt="ibdp tutor in dubai"
              className="btntest"
              style={{ transform: "rotate(180deg)" }}
              width={32}
              height={32}
            />
          </button>
          <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
            <img
              src="/images/right-arrow-blue.png"
              alt="ibdp tutor in dubai"
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
