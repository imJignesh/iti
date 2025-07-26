import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
import Hero from "@/components/home/Hero";
import Course from "@/components/home/Course";
import MovingBanner from "@/components/home/MovingBanner";
import About from "@/components/home/About";
import Test from "@/components/home/Test";
import Subjects from "@/components/home/Subjects";
import Alumni from "@/components/home/Alumni";
import Usps from "@/components/home/Usps";
import Trainers from "@/components/home/Trainers";
import Testimonial from "@/components/home/Testimonial";
import Blog from "@/components/home/Blog";

function useInViewAnimation(threshold = 0.3) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);
  return [ref, inView];
}


const Home = () => {
  const [active, setActive] = useState(1);
  const [activeIndex, setActiveIndex] = React.useState(1);
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);
  const [courseHeadingRef, courseHeadingInView] = useInViewAnimation();

  const [isMobileSwiper, setIsMobileSwiper] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileSwiper(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });

      scrollInstanceRef.current = scroll;
      // setTimeout(() => {
      //   if (scrollInstanceRef.current?.update) {
      //     scrollInstanceRef.current.update();
      //     console.log("✅ LocomotiveScroll updated");
      //   }
      // }, 500);
    };
    if (typeof window !== "undefined") {
      initScroll();
    }

    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Banner Section */}
      <Hero />

      {/* Course Section  */}
      <Course />

      {/* Moving Banner Section */}
      <MovingBanner />

      {/* About US Section  */}
      <About />
      {/* Test Section  */}
      <Test
        setActive={setActive}
        isMobileSwiper={isMobileSwiper}
        active={active}
      />

      {/* Subject Section */}
      <Subjects />

      {/* Alumni Section */}
      <Alumni setActiveIndex={setActiveIndex} />

      {/* Our USPs */}
      <Usps  />

      {/* Trainers Section */}
      <Trainers />
      
      {/* Testimonial Section */}
      <Testimonial />

      {/* Blogs Section  */}
      <Blog />

    </>
  );
};

export default Home;
