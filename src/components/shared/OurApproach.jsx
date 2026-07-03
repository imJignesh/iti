"use client";
import React, { useEffect, useState } from "react";

export default function OurApproach({ config }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!config) return null;

  return (
    <div
      className="overflow-hidden fade-in-section container aboutignite-card"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}
    >
      <div
        className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: "1140px", animationDelay: "0.15s" }}
      >
        <div className="curriculumSubSection">
          <h2 className="SubHeading testSubheading">
            {config.subheading}
          </h2>
          <div className="testHeadings">
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", fontSize: "2rem" }}
            >
              {config.mainHeading}<span className="highlight"> {config.highlightText} </span>
            </h3>
          </div>
        </div>
      </div>

      <div
        className="check-boxes-container fade-in-section approach"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.3s" }}
      >
        <div className="check-box d-flex flex-md-row flex-column justify-content-around">
          {config.items.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center gap-2 mb-4 mb-md-0"
            >
              <h3 className="heading-title gradient-text">{item.title}</h3>
              <p
                className="heading-subtitle"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: "Monstra";
          src: url("/fonts/Monstra.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        .aboutignite-card {
          text-align: center;
        }

        .approach {
          max-width: 80vw;
          margin: 0 auto;
        }

        .gradient-text {
          background: linear-gradient(to right, #161664, #3f88ba);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .check-boxes-container {
          display: flex;
          gap: 40px;
          margin-top: 40px;
          padding: 0 20px;
        }

        .check-box {
          background: linear-gradient(269.51deg, rgba(231, 246, 255, 0) -9.55%, rgba(163, 202, 245, 0.35) 92.85%);
          border-radius: 15px;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          border: 2px solid #A6EAC7;
          flex: 1;
        }

        .heading-title {
          font-family: "Monstra", sans-serif;
          font-weight: bolder;
          font-size: clamp(20px, 5vw, 28px);
          text-align: center;
          position: relative;
          display: inline-block;
        }

        .heading-title::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%);
          width: 120%;
          height: 1px;
          background-color: #212529;
          border-radius: 2px;
          opacity: 0.2;
        }

        .heading-subtitle {
          font-size: clamp(14px, 2vw, 16px);
          text-align: center;
          color: #233467;
          margin: 0;
          line-height: 1.5;
          font-weight: 500;
        }

        @media (max-width: 1200px) {
          .check-boxes-container {
            gap: 30px;
          }

          .check-box {
            padding: 25px 15px;
          }
        }

        @media (max-width: 768px) {
          .approach {
            max-width: 95vw;
          }

          .check-boxes-container {
            flex-direction: column;
            gap: 20px;
            padding: 0 15px;
          }

          .check-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 15px;
          }

          .heading-title {
            font-size: 20px;
          }

          .heading-subtitle {
            font-size: 14px;
            max-width: 90%;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .heading-title {
            font-size: 18px;
          }

          .heading-subtitle {
            font-size: 13px;
          }

          .check-box {
            padding: 15px 10px;
          }
        }
      `}</style>
    </div>
  );
}
