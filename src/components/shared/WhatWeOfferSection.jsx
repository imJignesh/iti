import React from 'react';

const WhatWeOfferSection = ({ config }) => {
  if (!config) return null;

  return (
    <>
      <section className="what-we-offer-section" data-scroll-section>
        <div className="container">
          <div className="text-center mb-md-5 mb-4 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.2s" }}>
            <div className="testHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <h2 className="SubHeading testSubheading">WHAT MORE DO WE OFFER?</h2>
              </div>
              <h3
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ animationDelay: "0.2s", fontSize: "2rem" }}
              >
                {config.heading} <span className="highlight">Milestone</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="container what-we-offer">
          {config.steps.map((step) => (
            <div key={step.number} className="step fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="icon-wrap" data-step={step.number}>
                <img src="/images/school.webp" alt={step.title} width={134} height={134} />
              </div>
              <h3 className="step-title mb-0">{step.title}</h3>
              <div className="step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 575px) {
          .what-we-offer-section .SubHeading {
            margin: 0;
          }
        }
        .what-we-offer {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1500px;
          margin: auto;
          text-align: center;
        }

        .what-we-offer .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .what-we-offer .icon-wrap {
          position: relative;
          display: inline-block;
        }

        .what-we-offer .icon-wrap img {
          max-width: 100px;
          height: auto;
        }

        .what-we-offer .icon-wrap::after {
          content: attr(data-step);
          position: absolute;
          font-size: 70px;
          font-weight: bold;
          color: rgba(0, 163, 144, 0.15);
          bottom: 20px;
          right: -20px;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .what-we-offer .step-title {
          font-weight: bold;
          font-size: 18px;
          margin-top: 20px;
          color: #152f63;
        }

        .what-we-offer .step-desc {
          margin-top: 10px;
          font-size: 15px;
          color: #808c9c;
        }

        @media (max-width: 900px) {
          .what-we-offer {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .what-we-offer {
            grid-template-columns: 1fr;
          }

          .what-we-offer .icon-wrap img {
            max-width: 60px;
            height: auto;
          }

          .what-we-offer .step {
            padding: 0;
          }

          .what-we-offer .icon-wrap::after {
            bottom: 10px;
            right: -10px;
            font-size: 40px;
          }

          .what-we-offer .step-desc {
            margin-top: 0;
            font-size: 15px;
            line-height: 1.2;
          }
        }
      `}</style>
    </>
  );
};

export default WhatWeOfferSection;
