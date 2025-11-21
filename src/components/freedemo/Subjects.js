import React from "react";


const subjectRows = [
    ["English", "French", "Spanish"],
    ["Computer Science", "Economics", "Biology"],
    ["Chemistry", "Physics", "Maths"],
    ["Business Studies", "Accounting", "Psychology"],

];

export default function Subjects({ }) {
    return (
        <section
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section subjectSection"
            style={{ animationDelay: "0.2s" }}
        >
            <div className="container justify-content-center">
                <div className="subjectSectionInner">
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-repeat="true"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg4.png"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-repeat="true"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg5.png"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg4.png"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <div className="col-12 pe-5 subjectRight">
                        <div className="subjectBubblesGrid">
                            {subjectRows.map((row, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section subjectBubbleRow`}
                                    style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                                >
                                    {row.map((subj) => (
                                        <h3 key={subj} className="subjectBubble">
                                            {subj}
                                        </h3>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
