import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";


const Achivement = () => {

  return (
    <section className="container" style={{marginBottom:"70px"}}> 
      <div className="row align-items-center justify-content-around p-10 mb-4">

        <div className="col-lg-5 a">
          <div className="achievement-col achievement-col-right">
            <p className="achievement-section-sub-heading2">60%</p>
            <p style={{ borderRight: "1px solid #3F88BA", height: "80px", marginBottom: "0px", margin: "0px 20px" }}>&nbsp;</p>
            <div className="achievement-section-content">
              <p className="achievement-section-title"></p>
              <p className="achievement-section-desc">We provide comprehensive academic support through our customized </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="achievement-col achievement-col-left">
            <p className="achievement-section-sub-heading1">30+</p>
            <p style={{ borderRight: "1px solid #3F88BA", height: "80px", marginBottom: "0px", margin: "0px 20px" }}>&nbsp;</p>
            <div className="achievement-section-content">
              <p className="achievement-section-title"></p>
              <p className="achievement-section-desc">We provide comprehensive academic support through our customized </p>
            </div>
          </div>
        </div>

      </div>
      <div className="row align-items-center justify-content-around p-10">
        <div className="col-lg-5">
          <div className="achievement-col achievement-col-left">
            <p className="achievement-section-sub-heading1">30+</p>
            <p style={{ borderRight: "1px solid #3F88BA", height: "80px", marginBottom: "0px", margin: "0px 20px" }}>&nbsp;</p>
            <div className="achievement-section-content">
              <p className="achievement-section-title"></p>
              <p className="achievement-section-desc">We provide comprehensive academic support through our customized </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5 a">
          <div className="achievement-col achievement-col-right">
            <p className="achievement-section-sub-heading2">60%</p>
            <p style={{ borderRight: "1px solid #3F88BA", height: "80px", marginBottom: "0px", margin: "0px 20px" }}>&nbsp;</p>
            <div className="achievement-section-content">
              <p className="achievement-section-title"></p>
              <p className="achievement-section-desc">We provide comprehensive academic support through our customized </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center mt-4">
        <button
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="articleBtn fade-in-section"
          style={{ animationDelay: "0.5s" }}
          type="button"
        >
          GET A FREE DEMO{" "}
          <Image
            src="/images/right-arrow-blue.png"
            width={40}
            height={40}
            quality={100}
          />
        </button>
      </div>
    </section>
  );
};

export default Achivement;