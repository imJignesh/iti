
"use client"

import { useEffect, useState } from "react";

export default function IgniteAchievements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('reserve-form-section');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return (
    <div className="mobileign fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s", marginBlock: isMobile ? "20px!important" : "0!important" }}>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: '90vw', animationDelay: "0.15s", marginBlock: isMobile ? "0px" : "0" }}>

        {/* Mobile Header Section - Only show on mobile */}
        <div className="d-md-none text-center mb-4 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}>
          <h2 className="SubHeading testSubheading">The Smart Final Push
          </h2>

          {/* Main Title */}
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle text-uppercase"
            style={{ animationDelay: "0.2s" }}
          >

            Who Is This  <span className="highlight"> Test Series </span>for?

          </h3>

          {/* Subtitle */}
          <p className="mx-auto fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "#233467",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: "0.9rem",
              lineHeight: isMobile ? "1.3" : "1.2",
            }}>
            Designed specifically for May–June 2026 final exam students seeking structured preparation and higher score outcomes.
          </p>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-block fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Desktop Stats Container */}
          <div className="desktop-stats-container">
            {/* Left Side Content - Header + Button */}
            <div className="left-content">
              {/* Desktop Header */}
              <div className="mb-4">
                <div className="mb-3">
                  <h2 className="SubHeading testSubheading fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>The Smart Final Push
                  </h2>
                </div>

                {/* Main Title */}
                <h3
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section testTitle"

                >
                  Who Is This  <span className="highlight"> Test Series </span>for?
                </h3>


                {/* Subtitle */}
                <p className="lh-sm mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#233467",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",

                    fontSize: "1.2rem",
                    marginTop: "16px",
                  }}>
                  Designed specifically for May–June 2026 final exam students seeking structured preparation and higher score outcomes.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-4 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat>
                <button
                  className="btn cust-text fw-bold d-flex align-items-center rounded-pill"
                  style={{
                    background: "linear-gradient(90deg,#161664, #3F88BA)",
                    color: 'white',
                    padding: '12px 14px 12px 20px',
                    border: 'none',
                    transition: 'opacity 0.3s ease',
                    letterSpacing: "3px",
                    fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                  onClick={scrollToForm}
                >
                  Reserve Your Test Slots Now
                  <div
                    className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",

                      marginLeft: "2.1rem"
                    }}
                  >
                    <img src="/assets/arrowright.webp" alt="chemistry tutor in dubai" width={16} height={16} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="stats-grid-desktop fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat>
              {/* Top Row */}
              <div className="stats-row">
                {/* Stat 1 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">IGCSE</div>
                  <div className="stat-content">
                    <p className="stat-description"> (Cambridge | Edexcel | AQA)</p>
                  </div>
                  <div className="stat-divider"></div>

                </div>
              </div>

              {/* Bottom Row */}
              <div className="stats-row">
                {/* Stat 3 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">AS & A Levels</div>
                  <div className="stat-content">
                    <p className="stat-description">(Cambridge | Edexcel | Oxford AQA)</p>
                  </div>
                  <div className="stat-divider"></div>
                </div>
              </div>
              <div className="stats-row">
                {/* Stat 1 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">IBDP</div>
                  <div className="stat-content">
                    <p className="stat-description"> (HL & SL Subjects)</p>
                  </div>
                  <div className="stat-divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="d-md-none fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Mobile CTA Button */}
          <div className="text-center mb-4">
            <button
              className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
              style={{
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                color: 'white',
                padding: '12px 14px 12px 20px',
                border: 'none',
                transition: 'opacity 0.3s ease',
                letterSpacing: "3px",
                fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
              onClick={scrollToForm}
            >
              Reserve Your Test Slots Now
              <div
                className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                  marginLeft: "2.1rem"
                }}
              >
                <img src="/assets/arrowright.webp" alt="chemistry tutor in dubai" width={16} height={16} />
              </div>
            </button>
          </div>

          {/* Mobile Stats - 2x2 Grid */}
          <div className="stats-grid-mobile">
            {/* Row 1 */}
            <div className="row g-3 mb-3">
              <div className="col-12">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">IGCSE</div>
                  <div className="stat-content">
                    <p className="stat-description"> (Cambridge | Edexcel | AQA)</p>
                  </div>
                  <div className="stat-divider"></div>
                </div>
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">AS & A Levels</div>
                  <div className="stat-content">
                    <p className="stat-description">(Cambridge | Edexcel | Oxford AQA)</p>
                  </div>
                  <div className="stat-divider"></div>
                </div>

                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">IBDP</div>
                  <div className="stat-content">
                    <p className="stat-description"> (HL & SL Subjects)</p>
                  </div>
                  <div className="stat-divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
       .testTitle {
          font-size: 2rem;
          font-weight: 700;
          max-width: 100%;
          color: var(--blue-color);
          margin: 40px 0;
          line-height: 1.2;
          text-transform: uppercase;
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

        /* Color Classes */
        .teal-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blue-text {
          background: linear-gradient(90deg, #161664, #3F88BA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop Layout */
        .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 400px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 3.4rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-left: 20px;
          position: relative;
        }
          .stat-card-desktop .teal-text:before,.stat-card-mobile .teal-text:before{
            content: "•";
            position: absolute;
            top: 0;
            left: 0;
            font-size: 2.3rem;
            font-weight: 700;
            line-height: 1;
           -webkit-text-fill-color: #019A88;
          }
           .stat-card-desktop .blue-text:before,.stat-card-mobile .blue-text:before{
            content: "•";
            position: absolute;
            top: 0;
            left: 0;
            font-size: 2.3rem;
            font-weight: 700;
            line-height: 1;
           -webkit-text-fill-color: #233467;
          }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
      .stat-divider {
        width: 250px;
        height: 2px;
        background: linear-gradient(
          to right,
          rgba(0, 164, 145, 0.2),
          rgba(0, 62, 55, 0.2)
        );
        border-radius: 2px;
      }


        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

        .stat-description {
          font-size: 1rem;
          line-height: 1;
          margin: 0;
          color: #666;
        }

        /* Mobile Layout */
        .stats-grid-mobile {
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
        }
        
        .stat-card-mobile {
          text-align: left;
          padding: 1.5rem 1rem;
        }
        
        .stat-card-mobile .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 1rem;
        }
        
        .stat-title-mobile {
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          //text-transform: uppercase;
        }

                @media (min-width: 1900) {
                        .left-content {
          flex: 0 0 45%;
          margin-top: 3.5rem !important;
        }
                }


        /* Responsive adjustments */
        @media (max-width: 575px) {
          .stat-card-mobile .stat-number {
            font-size: 1.6rem;
          }
          
          .stat-title-mobile {
            font-size: 0.7rem;
          }
          
          .stats-grid-mobile {
            padding: 1.5rem;
          }
            .stat-content{
            padding-bottom:10px;
            }
        }
          @media (max-width: 575px) {
          .mobileign{
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          }
          .custom-grid {
            gap: .5rem;
          }
            .cust-text {
              background: linear-gradient(90deg, #161664, #3F88BA) !important;
              color: white !important;
              padding: 8px 8px 8px 13px !important;
              border: none !important;
              -webkit-transition: opacity .3s ease !important;
              -moz-transition: opacity.3s ease!important;
              -o-transition: opacity.3s ease!important;
              transition: opacity .3s ease !important;
              letter-spacing: 1px !important;
              font-size: 1rem !important;
              margin-block: 30px !important;
              font-weight:600 !important;
            }
            .testTitle{
              margin:20px 0;
            }
            .stat-card-mobile{
              padding:1rem;
              position:relative;
            }
            .stat-card-mobile .stat-number:before{
              top:10px;
            }
            .stat-title-mobile{
              font-size:0.9rem;
            }
            .custom-height {
              width: 30px !important;
              height: 30px !important;
              background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
              animation-delay: 0.75s !important;
              margin-left: 1rem !important;
            }
          }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
   .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 400px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 3.4rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
      .stat-divider {
        width: 200px;
        height: 2px;
        background: linear-gradient(
          to right,
          rgba(0, 164, 145, 0.2),
          rgba(0, 62, 55, 0.2)
        );
        border-radius: 2px;
      }


        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

        .stat-description {
          font-size: 1.1rem;
          line-height: 1.3;
          margin: 0;
          color: #666;
        }
      }
                 @media screen and (min-width: 1536px) and (max-width: 1919px) {
  .custom-grid {
    gap: .5rem;
    margin-bottom:3.5rem;
  }

  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
padding: 10px 8px 10px 15px !important;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity .3s ease !important;
    -o-transition: opacity .3s ease !important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: clamp(0.7rem, 0.9rem, 1.1rem) !important;
    margin-top: 15px !important;
    font-weight: 600 !important;
  }

  .custom-height {
        width: 30px !important;
        height: 30px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 1rem !important;
  }
}
      `}</style>
    </div>
  );
}