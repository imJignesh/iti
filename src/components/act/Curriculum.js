import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";


const Curriculum = () => {

  return (
    <section className="container">
      <div className="row align-items-center justify-content-around p-10">
        <div className="col-lg-5">
          <div className="curriculum-col curriculum-col-left">
            <p className="curriculum-section-heading1">INTERNATIONAL <br></br> BACCALAUREATE <br></br> Tutors For</p>
            <p className="curriculum-section-sub-heading1">IBDP</p>
            <p className="curriculum-section-content">We provide comprehensive academic support through our customized IB curriculum courses, giving students access to high-end learning with experienced and certified IB tutors across various IB subjects.</p>
            <button
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="aboutBtn fade-in-section curriculum-left-button"
              style={{ animationDelay: "0.5s" }}
              type="button"
            >
              EXPLORE 3 COURSES{" "}
              <Image
                src="/images/right-arrow-skyblue.png"
                width={40}
                height={40}
                quality={100}
              />
            </button>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="curriculum-col curriculum-col-right">

            <p className="curriculum-section-heading2">INTERNATIONAL <br></br>BACCALAUREATE <br></br> Tutors For</p>
            <p className="curriculum-section-sub-heading2">MYP</p>
            <p className="curriculum-section-content">We provide comprehensive academic support through our customized IB curriculum courses, giving students access to high-end learning with experienced and certified IB tutors across various IB subjects.</p>

            <button
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="aboutBtn fade-in-section  curriculum-right-button"
              style={{ animationDelay: "0.5s" }}
              type="button"
            >
              EXPLORE 3 COURSES{" "}
              <Image
                src="/images/right-arrow-skyblue.png"
                width={40}
                height={40}
                quality={100}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;