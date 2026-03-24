import React from "react";
import Link from "next/link";
import styles from "@/styles/home-copy/TestSeriesBanner.module.css";

const TestSeriesBanner = () => {
    return (
        <section className={styles.testSeriesBanner} data-scroll-section>
            <div className="container">
                <a href="/test-series" className={styles.bannerLink}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/images/test-series-m.webp" />
                        <img
                            src="/images/test-series-d.webp"
                            alt="Test Series"
                            className={styles.bannerImage}
                            loading="lazy"
                        />
                    </picture>
                </a>
            </div>
        </section>
    );
};

export default TestSeriesBanner;
