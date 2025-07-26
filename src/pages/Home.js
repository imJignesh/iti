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

const testData = [
  {
    number: "01.",
    title: "ACT",
    img: "/images/test-section1.jpg",
    label: "ACT",
    details: ["Total Courses: 3", "Online & In-Person"],
    btn: "VIEW TUTORING COURSE",
  },
  {
    number: "02.",
    title: "AP",
    img: "/images/test-section2.jpg",
    label: "ADVANCED PLACEMENTS",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW TUTORING COURSE",
  },
  {
    number: "03.",
    title: "UCAT",
    img: "/images/test-section3.jpg",
    label: "UCAT",
    details: ["Total Courses: 1", "Online & In-Person"],
    btn: "VIEW TUTORING COURSE",
  },
];

const subjectRows = [
  ["English", "French"],
  ["Spanish", "Computer", "Economics"],
  ["Biology", "Chemistry"],
  ["Physics", "Maths", "Accounting"],
  ["Business Studies"],
];

const alumniData = [
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider1.png",
    logo: "/images/university_logo.png",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider2.png",
    logo: "/images/university_logo.png",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider3.png",
    logo: "/images/university_logo.png",
  },
];

const uspData = [
  {
    number: "01",
    icon: "/images/usp-icon1.png",
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "TAILORED COURSES",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "FLEXIBLE SCHEDULING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "INTERACTIVE SESSIONS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "INDIVIDUAL SUPPORT",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
];

const trainers = [
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Lorem ipsum dolor sit",
    experience: "12+ YEARS",
    color: "green",
  },
];

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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "",
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "",
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "",
    subtitle: "",
  },
];

const blogData = [
  {
    img: "/images/blogImage1.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    desc: "Choosing us means partnering with experienced coaches who are...",
  },
  {
    img: "/images/blogImage2.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    desc: "Choosing us means partnering with experienced coaches who are...",
  },
  {
    img: "/images/blogImage3.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    desc: "Choosing us means partnering with experienced coaches who are...",
  },
];

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

  // // Responsive state for Trainers section Swiper
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const uspDataRows = [];
  for (let i = 0; i < uspData.length; i += 2) {
    uspDataRows.push(uspData.slice(i, i + 2));
  }

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
        testData={testData}
        setActive={setActive}
        isMobileSwiper={isMobileSwiper}
        active={active}
      />

      {/* Subject Section */}

      <Subjects subjectRows={subjectRows} />
      {/* Alumni Section */}
      <Alumni alumniData={alumniData} setActiveIndex={setActiveIndex} />
      {/* Our USPs */}
      <Usps uspDataRows={uspDataRows} />
      {/* Trainers Section */}
      <Trainers isTrainersSwiper={isTrainersSwiper} trainers={trainers} />
      {/* Testimonial Section */}
      <Testimonial testimonialData={testimonialData} />

      {/* Blogs Section  */}

      <section className={styles.blogSection} >
        <div className="container">
          <div className="row gap-5 gap-lg-0">
            <div className={`col-12 col-lg-4 ${styles.blogLeft}`}>
              <div
                className={`fade-in-section ${styles.blogHeadingRow}`}
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="SubHeading">BLOGS</span>
              </div>
              <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.blogTitle}`}
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR
                SIT AMET, CONSECTETUR
                ADIPISCING
              </h2>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.blogSubtitle}`}
                style={{ animationDelay: "0.3s" }}
              >
                LOREM IPSUM DOLOR SIT AMET
              </div>
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`${styles.blogAllBtn} buttonBlue fade-in-section`}
                style={{ animationDelay: "0.4s" }}
              >
                VIEW ALL BLOGS
                <img
                  src="/images/right-arrow-skyblue.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className={`col-12 col-lg-8 ${styles.blogRight}`} >
              {blogData.map((blog, i) => (
                <div
                  key={i}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section ${styles.blogCard}`}
                  style={{ animationDelay: "0.2" }}
                >
                  <img src={blog.img} alt="blog" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" data-scroll-offset="-10%" className={styles.blogImg} />
                  <div className={styles.blogCardContent}>
                    <div className={styles.blogCardTitle}>{blog.title}</div>
                    <div className={styles.blogCardDesc}>{blog.desc}</div>
                    <span className={styles.blogCardLine}></span>
                    <button className={`${styles.blogReadMoreBtn} buttonSkyBlue`}>
                      READ MORE
                      <span className={styles.blogReadMoreArrow}>
                        <img
                          src="/images/right-arrow-blue.png"
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`${styles.blogAllBtnmobile} buttonBlue fade-in-section`}
              style={{ animationDelay: "0.4s" }}
            >
              VIEW ALL BLOGS
              <img
                src="/images/right-arrow-skyblue.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
