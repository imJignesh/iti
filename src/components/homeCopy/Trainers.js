import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const trainers = [
  {
    name: "MASAB",
    img: "/images/trainer1.png",
    subtitle: "Maths & Accounting",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "SADAF",
    img: "/images/trainer2.png",
    subtitle: "Accounting, Economics & Business",
    experience: "11+ YEARS",
    color: "green",
  },
  {
    name: "SARANYA",
    img: "/images/trainer1.png",
    subtitle: "Physics",
    experience: "8+ YEARS",
    color: "blue",
  },
  {
    name: "ASHWANI",
    img: "/images/trainer2.png",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "IRTIQA",
    img: "/images/trainer1.png",
    subtitle: "Computer Science, ICT",
    experience: "6+ YEARS",
    color: "blue",
  },
  {
    name: "ABDUL",
    img: "/images/trainer2.png",
    subtitle: "Maths",
    experience: "13+ YEARS",
    color: "green",
  },
  {
    name: "HARSHA",
    img: "/images/trainer1.png",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "NAMRATA",
    img: "/images/trainer2.png",
    subtitle: "Maths & Physics",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "KRITIKA",
    img: "/images/trainer1.png",
    subtitle: "Maths",
    experience: "3+ YEARS",
    color: "blue",
  },
  {
    name: "RUSTHA",
    img: "/images/trainer2.png",
    subtitle: "Chemistry, Biology, & EVM",
    experience: "3+ YEARS",
    color: "green",
  },
  {
    name: "IPSITA",
    img: "/images/trainer1.png",
    subtitle: "Biology & EVM",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "FREEZY",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "AASHIMA",
    img: "/images/trainer1.png",
    subtitle: "Spanish",
    experience: "5+ YEARS",
    color: "blue",
  },
  {
    name: "ANUJA",
    img: "/images/trainer2.png",
    subtitle: "English & French",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "DR. HAYA",
    img: "/images/trainer1.png",
    subtitle: "Chemistry, Physics, Biology",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "DEEPAK",
    img: "/images/trainer2.png",
    subtitle: "Physics & Maths",
    experience: "13+ YEARS",
    color: "green",
  },
];

// Removed the 'scrollInstance' prop
export default function Trainers() {
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const trainersGridRef = React.useRef(null);

  // Existing resize logic
  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Removed the useEffect for Locomotive Scroll update and scroll

  const displayTrainers = showAll ? trainers : trainers.slice(0, 10);

  return (
    <>
      {/* data-scroll-section can remain here to ensure the parent page scrolls correctly */}
      <section className="trainersSection" data-scroll-section>
        <div className="container">
          <div
          // Removed data-scroll attributes

          >
            <span className="SubHeading trainersSubheading">OUR TUTORS</span>
          </div>

          <h2
            // Removed data-scroll attributes
            className="trainersTitle"

          >
            The Best Trainers For Your Success Journey
          </h2>

          {isTrainersSwiper ? (
            <div className="trainersSwiperWrap">
              {/* ... (Swiper content) ... */}
            </div>
          ) : (
            <>
              <div className="trainersGrid" ref={trainersGridRef}>
                {displayTrainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    // ALL data-scroll attributes REMOVED from the trainerCard
                    className="trainerCard"
                  // The inline style for animationDelay is now a pure CSS delay for the new quick-fade-in animation

                  >
                    <div className="trainerName">{t.name}</div>
                    <div className="trainerImgWrap">
                      <img src={t.img} alt={t.name} className="trainerImg" />
                    </div>
                    <div className="trainerSubtitle">{t.subtitle}</div>
                    <div className="trainerExp">{t.experience}</div>
                  </div>
                ))}
              </div>

              {trainers.length > 10 && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  // ALL data-scroll attributes REMOVED from the button
                  className="trainersSeeMore"

                >
                  SEE MORE
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}