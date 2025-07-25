import React from "react";

const MovingBanner = () => {
    return (
        <div className="bannerScroll">
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.4s" }}
            >
                <b>
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp;
                    <span className="dot">●</span> &nbsp;
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp;
                    <span className="dot">●</span> &nbsp;
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp;
                    <span className="dot">●</span> &nbsp;
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp;
                    <span className="dot">●</span> &nbsp;
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp;
                    <span className="dot">●</span> &nbsp;
                    WHERE GRADE IMPROVEMENT BEGINS
                </b>
            </div>
        </div>
    );
};

export default MovingBanner;