import React, { useEffect, useState } from "react";

const items = [
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
];


const MarqueeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  return (
    <section>
      <div
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section bannerScroll1"
        style={{ animationDelay: "0.4s", marginBottom: isMobile ? "100px" : "0" }}
      >
        <div className="scrollContent1">
          {/* Repeat twice for infinite effect */}
          {[...Array(2)].map((_, i) =>
            items.map((text, idx) => (
              <div className="scrollItem1" key={`${i}-${idx}`}>
                <span className="dot">●</span> {text}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MarqueeBanner;
