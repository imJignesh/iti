import Image from 'next/image'
import React from 'react'

export default function ChooseApp({ config }) {
  if (!config) return null

  const {
    heading,
    subtitlePrefix,
    subtitleHighlight,
    subtitleSuffix,
    curriculums = [],
    tests = [],
  } = config

  const hasTests = tests.length > 0
  const curriculumColClass = hasTests ? 'col-lg-6' : 'col-lg-6 mx-auto'

  return (
    <div className="chooseAppSection">
      <style jsx global>{`
        .chooseAppSection .achievementsHeadings {
          text-align: center;
        }

        .chooseAppSection .curriculum-info {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
        }

        .chooseAppSection .curriculum-info h3 {
          color: rgba(35, 52, 103, 1);
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 0;
        }

        .chooseAppSection .curriculum-section-heading1,
        .chooseAppSection .curriculum-section-heading2 {
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 40px;
          letter-spacing: 0%;
          vertical-align: middle;
          text-transform: uppercase;
          background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .chooseAppSection .curriculum-col {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          padding: 40px 80px;
        }

        .chooseAppSection .curriculum-col-left {
          background: linear-gradient(235.04deg, #EDFFF4 45.21%, #A6EAC7 95.86%);
        }

        .chooseAppSection .curriculum-col-right {
          background: linear-gradient(237.21deg, #E7F6FF 54.23%, #A3CAF5 103.75%);
        }

        @media (max-width: 768px) {
          .chooseAppSection .curriculum-info {
            padding: 15px 30px;
          }
          .chooseAppSection .curriculum-info h3 {
            font-size: 16px;
          }
          .chooseAppSection .curriculum-section-heading1,
          .chooseAppSection .curriculum-section-heading2 {
            font-size: 22px !important;
          }
          .chooseAppSection .curriculum-col {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            padding-right: 0px;
            padding: 30px;
          }
        }

        @media (min-width: 1536px) and (max-width: 1919px) {
          .chooseAppSection .curriculum-section-heading1,
          .chooseAppSection .curriculum-section-heading2 {
            font-size: 40px;
          }
          .chooseAppSection .curriculum-info h3 {
            font-size: 19px;
          }
          .chooseAppSection .curriculum-col {
            padding: 35px 75px;
          }
          .chooseAppSection .curriculum-info {
            padding: 12px;
          }
        }

        @media (min-width: 1200px) and (max-width: 1535px) {
          .chooseAppSection .curriculum-section-heading1,
          .chooseAppSection .curriculum-section-heading2 {
            font-size: 35px;
          }
          .chooseAppSection .curriculum-info h3 {
            font-size: 14px;
          }
          .chooseAppSection .curriculum-col {
            padding: 30px 70px;
          }
          .chooseAppSection .curriculum-info {
            padding: 10px;
          }
        }

        @media (max-width: 575px) {
          .chooseAppSection .achievementsHeadings .SubHeading {
            margin: 0;
          }
          .chooseAppSection .curriculum-info {
            padding: 5px 30px;
          }
          .chooseAppSection .curriculum-section-heading1,
          .chooseAppSection .curriculum-section-heading2 {
            margin-bottom: 0;
          }
        }
      `}</style>

      <section className="">
        <div className="container">
          <div className="achievementsHeadings">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: '0.1s' }}
            >
              <h2 className="SubHeading">{heading}</h2>
            </div>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: '0.25s' }}
            >
              <h3
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ animationDelay: '0.2s' }}
              >
                {subtitlePrefix}
                <span className="highlight"> {subtitleHighlight} </span>{subtitleSuffix}
              </h3>
            </div>
          </div>
          <div
            className="row gy-5 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
          >
            <div className={curriculumColClass}>
              <div
                className="curriculum-col curriculum-col-left"
                style={{ borderRadius: 20 }}
              >
                <p
                  className="curriculum-section-heading1 text-center"
                  style={{
                    fontSize: '2rem',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                >
                  CURRICULUMS
                </p>
                <div
                  style={{
                    border: '1px solid rgba(35, 52, 103, 1)',
                    width: 300,
                    opacity: '.25',
                    margin: 'auto auto 40px',
                  }}
                />
                <div className="row gy-3">
                  {curriculums.map((item, idx) => (
                    <div className="col-lg-6" key={idx}>
                      <div className="curriculum-info">
                        <Image
                          alt={item.alt}
                          src="/assets/check-inactive-blue.webp"
                          width={30}
                          height={30}
                          quality={100}
                        />{' '}
                        <h3 dangerouslySetInnerHTML={{ __html: item.text }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {hasTests && (
              <div className="col-lg-6">
                <div
                  className="curriculum-col curriculum-col-right"
                  style={{ borderRadius: 20 }}
                >
                  <p
                    className="curriculum-section-heading2 text-center"
                    style={{
                      fontSize: '2rem',
                      borderBottomColor: 'grey',
                      borderBottomWidth: 1,
                      borderRadius: 0,
                    }}
                  >
                    STANDARDISED TESTS
                  </p>{' '}
                  <div
                    style={{
                      border: '1px solid rgba(35, 52, 103, 1)',
                      width: 300,
                      opacity: '.25',
                      margin: 'auto auto 40px',
                    }}
                  />
                  <div className="row gy-3">
                    {tests.map((item, idx) => (
                      <div className="col-lg-6" key={idx}>
                        <div className="curriculum-info">
                          <Image
                            alt={item.alt}
                            src="/assets/check-inactive-blue.webp"
                            width={30}
                            height={30}
                            quality={100}
                          />{' '}
                          <h3 dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
