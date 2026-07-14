"use client";
import React, { useEffect, useState } from "react";

export default function OurApproach({ config = {} }) {
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

  const { title = "", highlightText = "", items = [] } = config;

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
          <h2 className="SubHeading testSubheading">OUR APPROACH</h2>
          <div className="testHeadings">
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", fontSize: "2rem" }}
            >
              {title}
              <span className="highlight"> {highlightText} </span>
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
          {items.map((item, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center gap-2 mb-4 mb-md-0"
            >
              <h3 className="heading-title gradient-text">{item.heading}</h3>
              <p className="heading-subtitle">{item.text}</p>
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

        .my-text {
          font-family: "Monstra", sans-serif;
        }

        .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
          top: 5%;
          left: -45%;
          width: 350px;
          height: 88px;
        }

        .rect-2 {
          top: 40%;
          right: 100%;
          width: 114px;
          height: 88px;
        }

        .rect-3 {
          bottom: 5%;
          right: 100%;
          width: 542px;
          height: 88px;
        }

        .ignite-section {
          padding: 0 20px;
          max-width: 88vw;
          margin: 0 auto;
          font-family: "Montserrat", sans-serif;
        }

        .approach {
          max-width: 80vw;
          margin: 0 auto;
        }

        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
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

        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 0;
        }

        .header-title {
          font-size: 30px;
          line-height: 1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00a491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 36.864px;
          font-weight: 700;
          color: #2c5f7d;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2rem;
          font-weight: 700;
          color: #233467;
          line-height: 1.2;
          margin: 40px auto;
          margin-bottom: 25px;
          text-align: center;
        }

        .green-text {
          background: linear-gradient(90deg, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          font-weight: 600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.5vw;
          font-weight: 700;
          background: linear-gradient(90deg, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 35px;
          letter-spacing: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
          font-size: 1vw;
          font-weight: 600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .check-box {
          background: linear-gradient(
            269.51deg,
            rgba(231, 246, 255, 0) -9.55%,
            rgba(163, 202, 245, 0.35) 92.85%
          );
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border: 2px solid #a6eac7;
          flex: 1;
        }

        .check-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-box span {
          font-size: 1rem;
          color: #2c5f7d;
          font-weight: 500;
          line-height: 1.4;
        }

        .heading-title {
          font-family: "Monstra", sans-serif;
          font-weight: bolder;
          font-size: 33px;
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
          font-size: 18px;
          text-align: center;
          color: #233467;
          margin: 0;
          line-height: 1.4;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .approach {
            max-width: 95vw;
          }

          .check-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 15px;
          }

          .heading-title {
            font-size: 18px;
          }

          .heading-subtitle {
            font-size: 14px;
            max-width: 90%;
            margin: 0 auto;
          }

          .check-boxes-container {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 1024px) {
          .ignite-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ignite-left {
            padding-right: 0;
          }

          .ignite-main-title {
            font-size: 2rem;
            font-weight: 700;
            color: #233467;
            line-height: 1;
            margin: 0 0 25px 0;
          }

          .check-boxes-container {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 19px !important;
            padding: 0 4px;
          }

          .header-title img {
            width: 12px !important;
            height: 15px !important;
          }

          .heading-title {
            font-size: 16px;
          }

          .heading-subtitle {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
