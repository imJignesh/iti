"use client";

export default function InfoCardLeft() {
    return (
        <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content v100">
            <h1
                className="fw-bold text-white text-uppercase mb-3 hero-h1"
            >
                Ace Your 2026 Final Exams With Ignite’s Structured Test Series
            </h1>
            <div className="divider"
                style={{}}></div>

            <h2
                className="text-white fs-8 fs-md-10 hero-h2"
            >
                IGCSE, A-Levels & IBDP | 12th March To 30th June 2026
            </h2>

            <div
                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold info-row"
                style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "100px",
                    maxWidth: "823px",
                    fontSize: "0.9rem",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                }}
            >
                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col info-col-1"
                    style={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <img
                            src="/assets/medal.webp"
                            alt="Grade Support"
                            width="32"
                            height="45"
                            className="icon-img"
                            style={{ width: "auto", height: "auto", maxHeight: "45px", maxWidth: "32px" }}
                        />
                    </span>
                    Curriculum <br />Specific Papers
                </h3>

                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col info-col-2"
                    style={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <img
                            src="/assets/person.webp"
                            alt="Learning Mode"
                            width="30"
                            height="45"
                            className="icon-img icon-img-2"
                            style={{ width: "auto", height: "auto", maxHeight: "45px", maxWidth: "30px" }}
                        />
                    </span>
                    Online <br /> & In-Person
                </h3>

                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col"
                    style={{
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <img
                            src="/assets/location.webp"
                            alt="Location"
                            width="32"
                            height="42"
                            className="icon-img icon-img-3"
                            style={{ width: "auto", height: "auto", maxHeight: "42px", maxWidth: "32px" }}
                        />
                    </span>

                    Dubai <br /> (DIFC, JLT)

                </h3>

            </div>

            <p
                className="text-white mb-4 pt-3 pt-md-4"
                style={{
                    maxWidth: "750px",
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                    fontWeight: "500",
                    opacity: "0.9",
                }}
            >
                Prepare smarter for your final exams through real exam simulations, detailed performance analysis, & competitive ranking to maximize your final scores.
            </p>

            <div className="d-flex gap-3 btnwraper">
                <a
                    href="/join-free-demo-class/"
                    style={{ textDecoration: "none" }}
                >
                    <button
                        className="btn cust-text btng fw-bold text-uppercase d-flex justify-content-between align-items-center shadow left-btn"
                        style={{
                            background: "linear-gradient(to right, #A3CAF5, #E7F6FF)",
                            color: "#273972",
                            borderRadius: "40px",
                            fontSize: "1rem",
                            padding: "10px 15px",
                            boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
                            minWidth: "auto",
                            gap: "20px",
                        }}
                    >
                        <span style={{ letterSpacing: "0px" }}>
                            Reserve Your Test Slots Now
                        </span>
                        <img
                            src="/assets/rar.webp"
                            alt="CTA"
                            className="custom-height"
                            width={35}
                            height={35}
                        />
                    </button>
                </a>
            </div>
        </div>
    );
}
