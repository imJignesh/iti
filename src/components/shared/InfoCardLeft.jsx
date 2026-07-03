"use client";
import Image from "next/image";

export default function InfoCardLeft({ title, subtitle = "Expert Help At Every IB Milestone", description, infoRow = [], buttons = [], altText = "IB Curriculum" }) {
    return (
        <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content v100">
            <h1 className="fw-bold text-white text-uppercase mb-3  hero-h1">
                {title.split(/\s*<br\s*\/?\s*>\s*/i).map((part, i, arr) => (
                    <span key={i}>
                        {part}
                        {i < arr.length - 1 && <br />}
                    </span>
                ))}
            </h1>
            <div className="divider"></div>

            <h2 className="text-white  fs-8 fs-md-10 hero-h2">
                {subtitle}
            </h2>

            <div
                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold  info-row"
                style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "100px",
                    maxWidth: "823px",
                    fontSize: "0.9rem",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                }}
            >
                {infoRow.map((item, idx) => (
                    <h3
                        key={idx}
                        className={`d-flex flex-column align-items-center text-center text-white info-col ${idx < infoRow.length - 1 ? 'info-col-' + (idx + 1) : ''}`}
                        style={{
                            borderRight: idx < infoRow.length - 1 ? "1px solid rgba(255, 255, 255, 0.3)" : "none",
                            margin: 0,
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            lineHeight: "inherit",
                        }}
                    >
                        <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                            <img
                                src={item.icon}
                                alt={item.iconAlt}
                                width="32"
                                height="45"
                                className="icon-img"
                                style={{ width: "auto", height: "auto", maxHeight: "45px", maxWidth: "32px" }}
                            />
                        </span>
                        {item.text.split(/\s*<br\s*\/?\s*>\s*/i).map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && <br />}
                            </span>
                        ))}
                    </h3>
                ))}
            </div>

            <p
                className=" text-white mb-4 pt-3 pt-md-4"
                style={{
                    maxWidth: "750px",
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                    fontWeight: "500",
                    opacity: "0.9",
                }}
            >
                {description}
            </p>

            <div className="d-flex gap-3 btnwraper ">
                {buttons.map((btn, idx) => (
                    <a key={idx} href={btn.href} style={{ textDecoration: "none" }}>
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
                                {btn.text}
                            </span>
                            <img
                                src="/assets/rar.webp"
                                alt={btn.ariaLabel}
                                className="custom-height"
                                width={35}
                                height={35}
                            />
                        </button>
                    </a>
                ))}
            </div>
        </div>
    );
}
