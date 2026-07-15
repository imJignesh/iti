import React from "react";

const UniversityLogosCard = ({ logos }) => {
  return (
    <>
      <div
        className="container-fluid py-4 d-flex justify-content-center align-items-center university-logos-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          animationDelay: "0.3s",
        }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center w-100 gap-4 gap-md-0">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="logo-img"
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px;
        }

        .logo-img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        .university-logos-container {
          height: auto;
        }

        @media (max-width: 767px) {
          .logo-wrapper {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 575px) {
          .university-logos-container {
            padding: 0 0 0 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default UniversityLogosCard;
