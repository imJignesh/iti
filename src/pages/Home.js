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

function useInViewAnimation(threshold = 0.3) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
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

const courseData = [
  {
    number: "01.",
    title: "IBDP",
    label: "IB Diploma Programme",
    subtitle: "INTERNATIONAL BACCALAUREATE",
    details: ["Total Courses: 7", "|", "Online & In-Person"],
    img: "/images/course-bg1.jpg",
  },
  {
    number: "02.",
    title: "IB",
    label: "IB",
    subtitle: "INTERNATIONAL BACCALAUREATE",
    details: ["Total Courses: 7", "|", "Online & In-Person"],
    img: "/images/course-bg2.jpg",
  },
  {
    number: "03.",
    title: "MYP",
    label: "MYP",
    subtitle: "MIDDLE YEARS PROGRAMME",
    details: ["Total Courses: 5", "|", "Online & In-Person"],
    img: "/images/course-bg3.jpg",
  },
  {
    number: "04.",
    title: "IGCSE",
    label: "IGCSE",
    subtitle: "INTERNATIONAL GCSE",
    details: ["Total Courses: 8", "|", "Online & In-Person"],
    img: "/images/course-bg4.jpg",
  },
  {
    number: "05.",
    title: "A-LEVELS",
    label: "A-LEVELS",
    subtitle: "ADVANCED LEVELS",
    details: ["Total Courses: 6", "|", "Online & In-Person"],
    img: "/images/course-bg5.jpg",
  },
];

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
  const [hovered, setHovered] = useState(1);
  const [active, setActive] = useState(1);
  const [activeIndex, setActiveIndex] = React.useState(1);
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);
  const [courseHeadingRef, courseHeadingInView] = useInViewAnimation();
  // Responsive state for Test section Swiper
  const [isMobileSwiper, setIsMobileSwiper] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileSwiper(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive state for Trainers section Swiper
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <div ref={scrollRef} data-scroll-container>
        <section className={styles.hero} data-scroll-section>
          <div className="container">
            <div data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className="fade-in-section">
              <div className={`row ${styles.heroMain}`}>
                <div className={`col-12 col-lg  -6 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                  <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.heroMainHeading}`}
                    style={{ animationDelay: "0.4s" }}
                  >
                    <h3 className="SubHeading">Welcome to Ignite</h3>
                  </div>
                  <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <h1 className={styles.heroTitle}>
                      Lorem ipsum dolor sit amet,{" "}
                      <span className={styles.highlight}>consectetur</span> adipiscing
                    </h1>
                  </div>
                  <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <p className={styles.heroParagraph}>
                      <span>Lorem ipsum dolor sit amet</span>
                      <b> Achieve academic excellence in IBDP, MYP, I/GCSE, A-Levels & AP
                        with Ignite's expert tutors in Dubai. Our curriculum-focused
                        programs are designed to boost your grades and confidence!</b>
                      <strong>
                        Achieve academic excellence in IBDP, MYP, I/GCSE, A-Levels & AP
                        with Ignite's expert tutors in Dubai.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className={`col-12 col-lg -6 col-xl-5 ${styles.heroRight}`}>
                  <div className={styles.videoContainer}>
                    <video
                      className={styles.heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/images/banner-image-right.png"
                    >
                      <source src="/videos/education-video.mp4" type="video/mp4" />
                      {/* Fallback image if video doesn't load */}
                      <Image
                        src="/images/banner-image-right.png"
                        alt="Education Platform"
                        className={styles.heroImage}
                        width={500}
                        height={500}
                        quality={100}
                      />
                    </video>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button type="button">
                      Get A Free Demo{" "}
                      <Image
                        src="/images/right-arrow-skyblue.png"
                        width={40}
                        height={40}
                        quality={100}
                      />
                    </button>
                    <button type="button">
                      Explore Classes{" "}
                      <Image
                        src="/images/right-arrow-blue.png"
                        width={40}
                        height={40}
                        quality={100}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Course Section  */}
      <section className={styles.courseSection}>
        <div className="container">
          <div className={styles.courseHeadings}>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="SubHeading">TUTORING COURSES</h3>
            </div>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.25s" }}
            >
              <h1 className={styles.courseTitle}>
                Lorem ipsum dolor sit amet,{" "}
                <span className={styles.highlight}>consectetur</span> adipiscing
              </h1>
            </div>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.4s" }}
            >
              <p>
                Choosing us means partnering with experienced coaches who are
                dedicated to unlocking your potential.
              </p>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.courseInner}`}
            style={{ animationDelay: "0.4s" }}
          >
            {courseData.map((card, idx) => {
              const isActive = hovered === idx;
              return (
                <div
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={isActive ? styles.mainCard : styles.sideCard}
                  style={{ animationDelay: `${0.3 + idx * 0.25}s`, background: "none" }}
                  key={idx}
                  onMouseEnter={() => setHovered(idx)}
                >
                  <span className={styles.cardNumber}>{card.number}</span>
                  <span className={styles.cardTitle}>{card.title}</span>
                  <div
                    className={styles.cardBg}
                    style={{ backgroundImage: `url('${card.img}')` }}
                  />
                  <div
                    className={
                      (isActive
                        ? styles.mainCardContent
                        : styles.sideCardContent) +
                      " " +
                      (isActive ? styles.activeOverlay : styles.inactiveOverlay)
                    }
                  >
                    <div>
                      <div className={styles.mainCardLabel}>{card.label}</div>
                      <div className={styles.mainCardTitle}>
                        {card.subtitle}
                      </div>
                    </div>
                    <div className={styles.mainCardDetails}>
                      {card.details.map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>
                    <button className={styles.mainCardBtn}>
                      VIEW COURSE{" "}
                      <Image
                        src="/images/right-arrow-blue.png"
                        width={40}
                        height={40}
                        quality={100}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moving Banner Section */}
      <div
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className={`fade-in-section ${styles.bannerScroll}`}
        style={{ animationDelay: "0.4s" }}
      >
        <b>
          WHERE GRADE IMPROVEMENT BEGINS &nbsp;{" "}
          <b className={styles.dot}>●</b> &nbsp; WHERE GRADE IMPROVEMENT
          BEGINS &nbsp; <b className={styles.dot}>●</b> &nbsp; WHERE GRADE
          IMPROVEMENT BEGINS &nbsp; <b className={styles.dot}>●</b> &nbsp;
          WHERE GRADE IMPROVEMENT BEGINS &nbsp;{" "}
          <b className={styles.dot}>●</b> &nbsp; WHERE GRADE IMPROVEMENT
          BEGINS &nbsp; <b className={styles.dot}>●</b> &nbsp; WHERE GRADE
          IMPROVEMENT BEGINS
        </b>
      </div>

      {/* About US Section  */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutHeading}>
            <span className="SubHeading">ABOUT US</span>
          </div>
          <div className={`row ${styles.aboutSectionInner}`}>
            <div className={`col-12 col-lg-6 ${styles.aboutLeft}`}>
              <div className={styles.aboutImageWrap}>
                <div>
                  <img
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.rectangleBG}`}
                    src="/images/rectangle-bg1.png"
                    alt="Teacher"
                  />
                  <img
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.rectangleBG}`}
                    src="/images/rectangle-bg2.png"
                    alt="Teacher"
                  />
                  <img
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.rectangleBG}`}
                    src="/images/rectangle-bg2.png"
                    alt="Teacher"
                  />
                  <img
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.rectangleBG}`}
                    src="/images/rectangle-bg2.png"
                    alt="Teacher"
                  />
                </div>
                <Image
                  src="/images/about-us-img.png"
                  alt="Teacher"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section ${styles.aboutImage}`}
                  width={500}
                  height={400}
                />
                <div
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section ${styles.statCard + " " + styles.statCardYears}`}
                >
                  <div className={styles.statBig}>11 YEARS +</div>
                  <div className={styles.statSmall}>
                    OF RICH TUTORING EXPERIENCE
                  </div>
                </div>
                <div
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section ${styles.statCard + " " + styles.statCardResources}`}
                >
                  <div className={styles.statBig}>1000+</div>
                  <div className={styles.statSmall}>
                    RESOURCES THAT HELP YOU JOIN THE TOP 1%
                  </div>
                </div>
                <div className={styles.verticalLabel}>
                  <span>4.9</span> GOOGLE REVIEWS
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${styles.aboutRight}`}>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <div className={styles.aboutHeadingRow}>
                  <span className="SubHeading">ABOUT US</span>
                </div>
              </div>
              <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.aboutTitle}`}
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
                <span className={styles.aboutHighlight}>ADIPISCING</span>
              </h2>
              <p
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.aboutDesc}`}
                style={{ animationDelay: "0.3s" }}
              >
                Choosing us means partnering with experienced coaches who are
                dedicated to unlocking your potential.We offer personalized
                strategies, proven methods, and unwavering support to help you
                navigate challenges.
              </p>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section w-100"
                style={{ animationDelay: "0.4s" }}
              >
                <div className={styles.aboutStatsRow}>
                  <div className={styles.aboutStatBlock}>
                    <div className={styles.aboutStatBig}>2300+</div>
                    <div className={styles.aboutStatLabel}>
                      TRULY HAPPY STUDENTS FROM UAE
                    </div>
                  </div>
                  <span className={styles.aboutStatBorder}></span>
                  <div className={styles.aboutStatBlock}>
                    <div className={styles.aboutStatBig}>89%</div>
                    <div className={styles.aboutStatLabel}>
                      OF STUDENTS ACCEPTED TO TOP UNIVERSITIES
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`${styles.aboutBtn} fade-in-section`}
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
          </div>
        </div>
      </section>

      {/* Test Section  */}

      <section className={styles.testSection}>
        <div className="container">
          <div className={styles.testHeadings}>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className={`SubHeading ${styles.testSubheading}`}>STANDARDISED TESTS</div>
            </div>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section ${styles.testTitle}`}
              style={{ animationDelay: "0.2s" }}
            >
              LOREM IPSUM DOLOR SIT AMET,
              <br />
              CONSECTETUR <span className={styles.highlight}>ADIPISCING</span>
            </h2>
          </div>
          {isMobileSwiper ? (
            <Swiper
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section ${styles.testMobileSwiper}`}
              spaceBetween={25}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                400: { slidesPerView: 1.2 },
                575: { slidesPerView: 1.5 },
                786: { slidesPerView: 1.8 },
                900: { slidesPerView: 2.2 }
              }}
            >
              {testData.map((card, idx) => (
                <SwiperSlide key={idx}>
                  <div className={styles.testCardMobile}>
                    <div
                      className={styles.testCardImageWrap}
                      style={{ backgroundImage: `url(${card.img})` }}
                    >
                      <span className={styles.testCardNumber}>{card.number}</span>
                      <span className={styles.testCardTitle}>{card.title}</span>
                    </div>
                    <div className={styles.testCardDetailsWrap}>
                      <div className={styles.testCardLabel}>{card.label}</div>
                      <div className={styles.testCardDetails}>
                        {card.details &&
                          card.details.map((d, i) => <span key={i}>{d}</span>)}
                      </div>
                      <button className={styles.testCardBtnMobile} type="button">
                        {card.btn}
                        <span className={styles.btnArrow}>
                          <Image
                            src="/images/right-arrow-blue.png"
                            width={30}
                            height={30}
                            quality={100}
                            alt="arrow"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={`row ${styles.testCardsRow}`} >
              {testData.map((card, idx) => {
                const isCardActive = active === idx;
                return (
                  <div
                    key={idx}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section col-4 px-3 ${styles.testCard}`}
                    style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                    onMouseEnter={() => setActive(idx)}
                  >
                    <div
                      className={
                        styles.cardImageArea +
                        " " +
                        (isCardActive ? styles.activeImageArea : "")
                      }
                      style={{ backgroundImage: `url('${card.img}')` }}
                    >
                      <div className={styles.imageOverlay}></div>
                      <span className={styles.cardNumber}>{card.number}</span>
                      <span className={styles.cardTitle}>{card.title}</span>
                    </div>

                    <div
                      className={
                        styles.cardContentArea +
                        " " +
                        (isCardActive ? styles.showContent : styles.hideContent)
                      }
                    >
                      <div className={styles.cardLabel}>{card.label}</div>
                      <div className={styles.cardDetails}>
                        {card.details &&
                          card.details.map((d, i) => <p key={i} className="m-0">{d}</p>)}
                      </div>
                      <button className={styles.cardBtn} type="button">
                        {card.btn}{" "}
                        <Image
                          src="/images/right-arrow-blue.png"
                          width={40}
                          height={40}
                          quality={100}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Subject Section */}

      <section
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className={`fade-in-section ${styles.subjectSection}`}
        style={{ animationDelay: "0.2s" }}>
        <div className="container">
          <div className={styles.subjectSectionInner}>
            <img
              src="/images/rectangle-bg4.png"
              alt="bg-shape"
              className={styles.bgRect}
            />
            <img
              src="/images/rectangle-bg5.png"
              alt="bg-shape"
              className={styles.bgRect}
            />
            <img
              src="/images/rectangle-bg4.png"
              alt="bg-shape"
              className={styles.bgRect}
            />
            <div className={`col-5 ${styles.subjectLeft}`}>
              <span
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section SubHeading"
                style={{ animationDelay: "0.1s" }}
              >
                SUBJECT TUTORING
              </span>
              <h1
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.subjectTitle}`}
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
                <span className={styles.subjectHighlight}>ADIPISCING</span>
              </h1>
              <p
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.subjectDesc}`}
                style={{ animationDelay: "0.3s" }}
              >
                Choosing us means partnering with experienced coaches who are
                dedicated to unlocking your potential.
              </p>
            </div>
            <div className={`col-7 pe-5 ${styles.subjectRight}`}>
              <div className={styles.subjectBubblesGrid}>
                {subjectRows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.subjectBubbleRow}`}
                    style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                  >
                    {row.map((subj) => (
                      <div key={subj} className={styles.subjectBubble}>
                        {subj}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}

      <section className={styles.alumniSection}>
        <div className="container">
          <div className={styles.alumniSubSection}>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section SubHeading ${styles.alumniSubHeading}`}
              style={{ animationDelay: "0.1s" }}
            >
              OUR ALUMNI IN TOP UNIVERSITIES
            </h3>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section ${styles.alumniTitle}`}
              style={{ margin: "24px 0 0 0", animationDelay: "0.2s" }}
            >
              LOREM IPSUM DOLOR SIT AMET, consectetur{" "}
              <span className={styles.alumniHighlight}> ADIPISCING</span>
            </h2>
          </div>
          <div className={styles.alumniSwiper}>
            {/* Custom Swiper navigation buttons inside the slider */}
            <button className={`swiper-button-prev ${styles.customNavBtn}`}>
              <img
                src="/images/right-arrow-blue.png"
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
                width={32}
                height={32}
              />
            </button>
            <button className={`swiper-button-next ${styles.customNavBtn}`}>
              <img
                src="/images/right-arrow-blue.png"
                alt="Next"
                width={32}
                height={32}
              />
            </button>
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: -20,
                depth: 200,
                modifier: 2,
                initialSlide: 1,
                slideShadows: false,
              }}
              initialSlide={1}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={80}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className={styles.alumniSwiper}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                767: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
            >
              {alumniData.map((alumni, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <div
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className={`fade-in-section ${styles.alumniCard}`}
                      style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                    >
                      <div
                        className={
                          isActive
                            ? `${styles.alumniBg} ${styles.activeBg}`
                            : styles.alumniBg
                        }
                      ></div>
                      <div className={styles.alumniImageWrap}>
                        <img
                          src={alumni.img}
                          alt={alumni.name}
                          className={styles.alumniImage}
                        />
                        <div className={styles.alumniLogoBox}>
                          <img
                            src={alumni.logo}
                            alt="university logo"
                            className={styles.alumniLogo}
                          />
                        </div>
                      </div>
                      <div
                        className={
                          isActive
                            ? `${styles.alumniName} ${styles.activeName}`
                            : styles.alumniName
                        }
                      >
                        {alumni.name}
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Our USPs */}

      <section
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className={`fade-in-section ${styles.uspSection}`}
        style={{ animationDelay: "0.2s" }}>
        <div className={styles.uspLeft}>
          <span
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section SubHeading"
            style={{ animationDelay: "0.1s" }}
          >
            OUR USP'S
          </span>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.uspTitle}`}
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
          </h2>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.uspSubtitle}`}
            style={{ animationDelay: "0.3s" }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </div>
          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.uspDesc}`}
            style={{ animationDelay: "0.4s" }}
          >
            Choosing us means partnering with experienced coaches who are
            dedicated to unlocking your potential. We offer personalized
            strategies, proven methods, and unwavering support to help you
            navigate challenges.
          </p>
          <button
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`${styles.uspBtn} fade-in-section`}
            style={{ animationDelay: "0.5s" }}
            type="button"
          >
            KNOW MORE{" "}
            <Image
              src="/images/right-arrow-blue.png"
              width={40}
              height={40}
              quality={100}
            />
          </button>
        </div>
        <div className={styles.uspRight}>
          <Swiper
            direction="vertical"
            slidesPerView="auto"
            spaceBetween={80}
            speed={800}
            freeMode={true}
            grabCursor={true}
            mousewheel={true}
            scrollbar={{
              el: `.${styles.uspScrollbar}`,
              draggable: true,
            }}
            modules={[Scrollbar, Mousewheel]}
            className={styles.uspSwiper}
          >
            {uspDataRows.map((row, index) => (
              <SwiperSlide key={index} className={styles.uspSlide}>
                {row.map((usp, i) => (
                  <div key={i} className={styles.uspItem}>
                    <div className={styles.uspNumber}>{usp.number}</div>
                    <div className={styles.uspIconCircle}>
                      <img
                        src={usp.icon}
                        alt={usp.title}
                        className={styles.uspIcon}
                      />
                    </div>
                    <div className={styles.uspContent}>
                      <div className={styles.uspItemTitle}>{usp.title}</div>
                      <div className={styles.uspItemDesc}>{usp.desc}</div>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.uspScrollbar} />
        </div>
      </section>

      {/* Trainers Section */}
      <section className={styles.trainersSection}>
        <div className="container">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <span className={`SubHeading ${styles.trainersSubheading}`}>OUR TRAINERS</span>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.trainersTitle}`}
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,
            <br />
            CONSECTETUR{" "}
            <span className={styles.trainersHighlight}>ADIPISCING</span>
          </h2>
          {isTrainersSwiper ? (
            <div className={styles.trainersSwiperWrap}>
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
                pagination={{ clickable: true, el: "." + styles.trainersPagination }}
                breakpoints={{
                  0: { slidesPerView: 1.4 },
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                className={styles.trainersSwiper}
              >
                <button className={`swiper-button-prev ${styles.customNavBtn}`} tabIndex={0} aria-label="Previous trainer">
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
                        className={`fade-in-section ${styles.trainerCard} ${isActive ? styles.activeTrainer : styles.inactiveTrainer}`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className={styles.trainerName}>{t.name}</div>
                        <div className={styles.trainerImgWrap}>
                          <img src={t.img} alt={t.name} className={styles.trainerImg} />
                        </div>
                        <div className={styles.trainerSubtitle}>{t.subtitle}</div>
                        <div className={styles.trainerExp}>{t.experience}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
                <button className={`swiper-button-next ${styles.customNavBtn}`} tabIndex={0} aria-label="Next trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Next"
                    width={32}
                    height={32}
                  />
                </button>
              </Swiper>
              <div className={styles.trainersPagination}></div>
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.trainersSeeMore}`}
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </div>
          ) : (
            <>
              <div className={styles.trainersGrid}>
                {trainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className={`fade-in-section ${styles.trainerCard}`}
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                  >
                    <div className={styles.trainerName}>{t.name}</div>
                    <div className={styles.trainerImgWrap}>
                      <img src={t.img} alt={t.name} className={styles.trainerImg} />
                    </div>
                    <div className={styles.trainerSubtitle}>{t.subtitle}</div>
                    <div className={styles.trainerExp}>{t.experience}</div>
                  </div>
                ))}
              </div>
              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${styles.trainersSeeMore}`}
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <div className={styles.testimonialHeader}>
            <span className="SubHeading">REVIEWS & TESTIMONIALS</span>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className={`fade-in-section ${styles.testimonialBgBox}`}
          style={{ animationDelay: "0.2s" }}>
          {/* Decorative rectangles */}
          <img
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className={styles.testimonialRect}
          />
          <img
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className={styles.testimonialRect}
          />
          <img
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className={styles.testimonialRect}
          />

          <img
            src="/images/google-logo.png"
            alt="bg-shape"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.googlelogo}`}
            style={{ animationDelay: "0.2s" }}
            width={250}
            height={80}
          />
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.testimonialTitle}`}
            style={{ animationDelay: "0.3s" }}
          >
            IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI
          </h2>
          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.googleReview}`}
            style={{ animationDelay: "0.4s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>
          <img
            src="/images/star-review.png"
            alt="bg-shape"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.starReview}`}
            style={{ animationDelay: "0.5s" }}
            width={250}
            height={80}
          />
        </div>
        <div className={styles.testimonialSliderWrap}>
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
              el: "." + styles.testimonialPagination,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={styles.testimonialSwiper}
          >
            <button className={`swiper-button-prev`} tabIndex={0} aria-label="Previous testimonial">
              <img
                src="/images/right-arrow-blue.png"
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
                width={32}
                height={32}
              />
            </button>
            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx}>
                {item.type === "video" ? (
                  <div
                    className={`${styles.testimonialCard} ${styles.testimonialCardVideo}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.testimonialImg}
                    />
                    <div className={styles.testimonialVideoOverlay}></div>
                    <div className={styles.testimonialPlayBtn}>
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
                    <div className={styles.testimonialVideoText}>
                      <b>{item.name}</b>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${styles.testimonialCard} ${styles.testimonialCardText}`}
                  >
                    <div className={styles.testimonialText}>{item.text}</div>
                    <div className={styles.testimonialTextName}>
                      <b>{item.name}</b>
                    </div>
                    <div className={styles.testimonialTextSubtitle}>
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <button className={`swiper-button-next`} tabIndex={0} aria-label="Next testimonial">
              <img
                src="/images/right-arrow-blue.png"
                alt="Next"
                width={32}
                height={32}
              />
            </button>
          </Swiper>
          <div className={styles.testimonialPagination}></div>
        </div>
      </section>

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
                className={`${styles.blogAllBtn} fade-in-section`}
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
                  <img src={blog.img} alt="blog" className={styles.blogImg} />
                  <div className={styles.blogCardContent}>
                    <div className={styles.blogCardTitle}>{blog.title}</div>
                    <div className={styles.blogCardDesc}>{blog.desc}</div>
                    <span className={styles.blogCardLine}></span>
                    <button className={styles.blogReadMoreBtn}>
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
              className={`${styles.blogAllBtnmobile} fade-in-section`}
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
