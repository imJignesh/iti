import React from "react";
import Image from "next/image";

export default function Usps({ config }) {
  if (!config || !config.usps) {
    return null;
  }

  const uspDataRows = [];
  for (let i = 0; i < config.usps.length; i += 2) {
    uspDataRows.push(config.usps.slice(i, i + 2));
  }

  return (
    <>
      <style jsx global>{`
        .usp-section .usp-container {
          background: linear-gradient(to right, var(--green-color) 0%, var(--lightgreen-color) 100%);
          border-radius: 3.2vw;
          padding: 3.47vw 2.78vw;
          color: var(--white-color);
          margin: 0 auto;
          max-width: 90vw;
          box-shadow: 0 0.28vw 2.22vw rgba(0, 0, 0, 0.08);
        }

        :global(.blue) .usp-container {
          background: linear-gradient(132deg, rgba(22, 22, 100, 1) 3%, rgba(63, 136, 186, 1) 91%);
        }

        .usp-section .usp-left {
          display: flex;
          flex-direction: column;
          gap: 1.39vw;
          min-width: 22.22vw;
          max-width: 31.94vw;
          position: sticky;
          top: 10vw;
        }

        .usp-section .usp-left h2 {
          -webkit-text-fill-color: var(--white-color);
          width: max-content;
          margin-bottom: 20px;
        }

        .usp-section .usp-left h2::before,
        .usp-section .usp-left h2::after {
          width: 16px;
          filter: contrast(0) brightness(2);
        }

        .usp-section .usp-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 18px;
          line-height: 1.2;
          text-transform: uppercase;
          color: var(--white-color);
        }

        .usp-section .usp-subtitle {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 18px;
          letter-spacing: 1px;
          color: var(--white-color);
        }

        .usp-section .usp-desc {
          font-size: 0.8vw;
          margin-bottom: 32px;
          color: var(--white-color);
          opacity: 0.7;
          letter-spacing: 1px;
          line-height: 1.6;
          padding-bottom: 40px;
          border-bottom: 1px solid;
        }

        .usp-section .usp-btn {
          width: max-content;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .usp-section .usp-right {
          position: relative;
          padding-top: 1vw;
        }

        .usp-section .usp-slide {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 50px;
          height: auto !important;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .usp-section .usp-item {
          background: transparent;
          border-radius: 18px;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: var(--white-color);
          min-width: 0;
          flex: 1;
          position: relative;
        }

        .usp-section .usp-number {
          position: absolute;
          top: -2.5vw;
          left: -1.5vw;
          font-size: 2.5rem;
          font-weight: 600;
          color: #b2e6d4;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        :global(.blue) .usp-number {
          color: #ffffff;
        }

        .usp-section .usp-icon-circle {
          background: #baefd4;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        :global(.blue) .usp-icon-circle {
          background: #eaf8ff;
        }

        .usp-section .usp-icon {
          width: 2rem;
          height: 2rem;
          object-fit: contain;
        }

        .usp-section .usp-item-title {
          font-size: 1vw;
          font-weight: 700;
          margin-bottom: 7px;
          color: var(--white-color);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .usp-section .usp-item-desc {
          letter-spacing: 1px;
          font-size: 0.8rem;
          color: var(--white-color);
          opacity: 0.7;
          line-height: 1.5;
        }

        .usp-section .usp-content {
          width: 100%;
        }

        @media (max-width: 1280px) {
          .usp-section .usp-desc {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 1100px) {
          .usp-section .usp-container {
            max-width: 90vw;
            flex-direction: column;
            gap: 20px;
            padding: 30px 20px;
          }

          .usp-section .usp-left {
            flex: none;
            max-width: 100%;
            text-align: center;
            align-items: center;
            gap: 20px;
            min-width: 100%;
            position: static;
            top: auto;
          }

          .usp-section .usp-title {
            font-size: 1.4rem;
          }

          .usp-section .usp-subtitle,
          .usp-section .usp-number {
            display: none;
          }

          .usp-section .usp-desc {
            font-size: 1rem;
            border: none;
            padding: 0 20px;
            margin-bottom: 10px;
            opacity: 0.8;
          }

          .usp-section .usp-slide {
            gap: 30px 40px;
          }

          .usp-section .usp-item {
            flex-direction: row;
            gap: 20px;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 0;
            padding-bottom: 30px;
          }

          .usp-section .usp-icon-circle {
            width: auto;
            height: auto;
            padding: 20px;
          }

          .usp-section .usp-icon {
            width: 40px;
            height: 40px;
          }

          .usp-section .usp-content {
            width: 80%;
          }

          .usp-section .usp-item-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 767px) {
          .usp-section .usp-container {
            max-width: 95vw;
          }

          .usp-section .usp-left h2::before,
          .usp-section .usp-left h2::after {
            width: 10px;
          }

          .usp-section .usp-slide {
            margin-bottom: 20px !important;
          }

          .usp-section .usp-item {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .usp-section .usp-slide {
            justify-content: space-between;
            gap: 20px;
          }

          .usp-section .usp-left h2,
          .usp-section .usp-title {
            font-size: 15px;
            margin-bottom: 0;
          }

          .usp-section .usp-btn {
            margin: 5vw 0;
          }

          .usp-section .usp-icon {
            width: 25px;
            height: 25px;
          }

          .usp-section .usp-title,
          .usp-section .usp-item-title {
            font-size: 20.4px;
            line-height: 23px;
          }

          .usp-section .usp-desc {
            font-size: 14px;
            line-height: 1.4;
          }

          .usp-section .usp-btn {
            font-weight: 600;
            font-size: 1rem;
          }
        }

        @media (max-width: 520px) {
          .usp-section .usp-title,
          .usp-section .usp-item-title {
            font-size: 16px !important;
            line-height: 18px !important;
          }

          .usp-section .usp-icon-circle {
            padding: 12px;
          }
        }

        @media (max-width: 425px) {
          .usp-section .usp-desc {
            padding: 0;
          }

          .usp-section .usp-right {
            padding-top: 3rem;
          }

          .usp-section .usp-btn {
            margin: 0 0 5vw 0;
          }

          .usp-section .usp-right {
            padding-top: 30px;
          }

          .usp-section .usp-item {
            flex-direction: row;
            gap: 20px;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 0;
            padding-bottom: 30px;
          }

          .usp-section .usp-slide:last-child .usp-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>

      <div className={`usp-section sp-container ${config.containerClass || ''}`}>
        <div
          className="usp-container fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className={`col-lg-4${config.wrapperClass ? ' ' + config.wrapperClass : ''}`}>
              <div
                className="usp-left"
                data-scroll
                data-scroll-sticky
                data-scroll-target=".usp-container"
              >
                <h2
                  className="fade-in-section SubHeading mb-0"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.1s" }}
                >
                  {config.subheading || "OUR PROMISE"}
                </h2>

                <h3
                  className="usp-title fade-in-section mb-0"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  {config.heading}
                </h3>

                {config.subtitle && (
                  <h4
                    className="usp-subtitle fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    style={{ animationDelay: "0.3s" }}
                  >
                    {config.subtitle}
                  </h4>
                )}

                {config.description && (
                  <p
                    className="usp-desc fade-in-section d-none d-lg-block"
                    data-scroll
                    data-scroll-class="is-inview"
                    style={{ animationDelay: "0.4s" }}
                  >
                    {config.description}
                  </p>
                )}

                <a
                  href={config.ctaHref || "/about-us/"}
                  className="usp-btn fade-in-section buttonSkyBlue"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: config.description ? "0.5s" : "0.5s" }}
                >
                  {config.ctaText || "KNOW MORE ABOUT IGNITE"}{" "}
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="usp-right">
                {uspDataRows.map((row, index) => (
                  <div key={index} className="usp-slide">
                    {row.map((usp, i) => (
                      <div
                        key={i}
                        className="usp-item fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                      >
                        <div className="usp-number">{usp.number}</div>
                        <div className="usp-icon-circle">
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            className="usp-icon"
                            width={usp.width}
                            height={usp.height}
                          />
                        </div>
                        <div className="usp-content">
                          <h3 className="usp-item-title">{usp.title}</h3>
                          {usp.desc && <div className="usp-item-desc">{usp.desc}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
