import { useEffect, useRef } from 'react';
import styles from "../styles/ibdp.module.css";
import Image from 'next/image';

const IBDP = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // Locomotive Scroll setup
    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    return (
        <>
            <div ref={scrollRef} data-scroll-container>
                <section className={styles.ibdpBanner} data-scroll-section>
                    <div className="">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${styles.leftContent}`}
                                    style={{ animationDelay: "0.1s" }}
                                >
                                    <Image
                                        src="/images/ibdb-hero-bg.png"
                                        width={1000}
                                        height={800}
                                        quality={100}
                                        className={styles.ibdpImage}
                                    />
                                    <div className={styles.contentInner}>
                                        <h1 className={styles.mainHeading}>
                                            IBDP TUTORS IN DUBAI, UAE FOR CURRICULUM EXCELLENCE
                                        </h1>
                                        <p className={styles.subHeading}>
                                            LOREM IPSUM DOLOR SIT AMET
                                        </p>

                                        <div className={styles.featureCards}>
                                            <div className={styles.featureCardInner}>
                                                <Image
                                                    src="/images/banner-icon1.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={styles.cardImage}
                                                />
                                                <p className={styles.featureText}>Grade 8 to 12 Support</p>
                                            </div>
                                            <div className={styles.featureCardInner}>
                                                <Image
                                                    src="/images/banner-icon2.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={styles.cardImage}
                                                />
                                                <p className={styles.featureText}>Online & In-Person</p>
                                            </div>
                                            <div className={styles.featureCardInner}>
                                                <Image
                                                    src="/images/banner-icon2.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={styles.cardImage}
                                                />
                                                <p className={styles.featureText}>Dubai (DIFC, JLT)</p>
                                            </div>
                                        </div>

                                        <p className={styles.descriptionText}>
                                            We provide comprehensive academic support through our customized IB curriculum courses, giving students access to high-end learning with experienced and certified IB tutors across various IB subjects.
                                        </p>
                                    </div>

                                    <div className={styles.ctaButtons}>
                                        <button className={styles.ctaButton}>
                                            IBDP TUTORS
                                            <Image
                                                src="/images/right-arrow-skyblue.png"
                                                width={40}
                                                height={40}
                                                quality={100}
                                            />
                                        </button>
                                        <button className={styles.ctaButton}>
                                            MYP TUTORS
                                            <Image
                                                src="/images/right-arrow-skyblue.png"
                                                width={40}
                                                height={40}
                                                quality={100}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${styles.formContainer}`}
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    <h3 className={styles.formHeading}>
                                        GET A FREE DEMO CLASS + FREE STUDY RESOURCES
                                    </h3>

                                    <form>
                                        <input
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="NAME"
                                        />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className={styles.formInput}
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className={styles.formInput}
                                                    placeholder="PH.NO"
                                                />
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="SCHOOL"
                                        />

                                        <textarea
                                            className={styles.formTextarea}
                                            placeholder="DROP A MESSAGE"
                                        ></textarea>

                                        <button type="submit" className={styles.submitButton}>
                                            SUBMIT
                                            <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IBDP;
