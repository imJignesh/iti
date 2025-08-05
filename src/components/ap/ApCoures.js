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
  EffectCoverflow,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";



export default function IbdpCoures({ }) {
  return (
    <>
      <div className="container ibdp-faq-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item accordion-item1 ">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ACT SUBJECT-TEST PREPARATION
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>The IBDP Finals Prep Program at Ignite
                          Training Institute is a 9-month intensive
                          course (August to April) designed for
                          Year 2 IBDP students preparing for their
                          final exams in May. With over 80 hours of
                          subject-specific.training, the program
                          features expert tutoring, small group
                          sessions (3-6 students), regular IBDP-
                          style testing, and mock exams under real
                          exam conditions to build exam
                          confidence and mastery.</p>

                      </div>
                      <div className="col-md-6">
                        <img src="/images/ibdp-cources-faq-img.jpg"></img>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="accordion-item accordion-item2">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem ipsum dolor sit amet?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}