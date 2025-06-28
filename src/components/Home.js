import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const courseData = [
    {
        number: '01.',
        title: 'IBDP',
        label: 'IB Diploma Programme',
        subtitle: 'INTERNATIONAL BACCALAUREATE',
        details: ['Total Courses: 7', '|', 'Online & In-Person'],
        img: '/images/course-bg1.jpg',
    },
    {
        number: '02.',
        title: 'IB',
        label: 'IB',
        subtitle: 'INTERNATIONAL BACCALAUREATE',
        details: ['Total Courses: 7', '|', 'Online & In-Person'],
        img: '/images/course-bg2.jpg',
    },
    {
        number: '03.',
        title: 'MYP',
        label: 'MYP',
        subtitle: 'MIDDLE YEARS PROGRAMME',
        details: ['Total Courses: 5', '|', 'Online & In-Person'],
        img: '/images/course-bg3.jpg',
    },
    {
        number: '04.',
        title: 'IGCSE',
        label: 'IGCSE',
        subtitle: 'INTERNATIONAL GCSE',
        details: ['Total Courses: 8', '|', 'Online & In-Person'],
        img: '/images/course-bg4.jpg',
    },
    {
        number: '05.',
        title: 'A-LEVELS',
        label: 'A-LEVELS',
        subtitle: 'ADVANCED LEVELS',
        details: ['Total Courses: 6', '|', 'Online & In-Person'],
        img: '/images/course-bg5.jpg',
    },
];

const testData = [
    {
        number: '01.',
        title: 'ACT',
        img: '/images/test-section1.jpg',
        label: 'ACT',
        details: ['Total Courses: 3', 'Online & In-Person'],
        btn: 'VIEW TUTORING COURSE',
    },
    {
        number: '02.',
        title: 'AP',
        img: '/images/test-section2.jpg',
        label: 'ADVANCED PLACEMENTS',
        details: ['Total Courses: 2', 'Online & In-Person'],
        btn: 'VIEW TUTORING COURSE',
    },
    {
        number: '03.',
        title: 'UCAT',
        img: '/images/test-section3.jpg',
        label: 'UCAT',
        details: ['Total Courses: 1', 'Online & In-Person'],
        btn: 'VIEW TUTORING COURSE',
    },
];

const subjectRows = [
    ['English', 'French'],
    ['Spanish', 'Computer', 'Economics'],
    ['Biology', 'Chemistry'],
    ['Physics', 'Maths', 'Accounting'],
    ['Business Studies'],
];

const alumniData = [
    {
        name: 'LOREM IPSUM DOLOR',
        img: '/images/alumni-slider1.png',
        logo: '/images/university_logo.png',
    },
    {
        name: 'LOREM IPSUM DOLOR',
        img: '/images/alumni-slider2.png',
        logo: '/images/university_logo.png',
    },
    {
        name: 'LOREM IPSUM DOLOR',
        img: '/images/alumni-slider3.png',
        logo: '/images/university_logo.png',
    },
];


const uspData = [
    {
        number: '01',
        icon: '/images/usp-icon1.png',
        title: 'EXPERIENCED TUTORS',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
    {
        number: '02',
        icon: '/images/usp-icon2.png',
        title: 'STRUCTURED LEARNING',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
    {
        number: '03',
        icon: '/images/usp-icon3.png',
        title: 'TAILORED COURSES',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
    {
        number: '04',
        icon: '/images/usp-icon4.png',
        title: 'FLEXIBLE SCHEDULING',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
    {
        number: '05',
        icon: '/images/usp-icon5.png',
        title: 'INTERACTIVE SESSIONS',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
    {
        number: '06',
        icon: '/images/usp-icon6.png',
        title: 'INDIVIDUAL SUPPORT',
        desc: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
    },
];


const trainers = [
    {
        name: 'NIKHIL PAWAR',
        img: '/images/trainer1.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'blue',
    },
    {
        name: 'PRAKSHI SHARMA',
        img: '/images/trainer2.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'green',
    },
    {
        name: 'NIKHIL PAWAR',
        img: '/images/trainer1.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'blue',
    },
    {
        name: 'PRAKSHI SHARMA',
        img: '/images/trainer2.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'green',
    },
    {
        name: 'NIKHIL PAWAR',
        img: '/images/trainer1.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'blue',
    },
    {
        name: 'PRAKSHI SHARMA',
        img: '/images/trainer2.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'green',
    },
    {
        name: 'NIKHIL PAWAR',
        img: '/images/trainer1.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'blue',
    },
    {
        name: 'PRAKSHI SHARMA',
        img: '/images/trainer2.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'green',
    },
    {
        name: 'NIKHIL PAWAR',
        img: '/images/trainer1.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'blue',
    },
    {
        name: 'PRAKSHI SHARMA',
        img: '/images/trainer2.png',
        subtitle: 'Lorem ipsum dolor sit',
        experience: '12+ YEARS',
        color: 'green',
    },
];

const testimonialData = [
    {
        type: 'video',
        img: '/images/testimonial1.jpg',
        video: true,
        name: 'Student Name',
    },
    {
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.',
        name: 'LOREM IPSUM',
        subtitle: 'Lorem ipsum dolor sit',
    },
    {
        type: 'video',
        img: '/images/testimonial2.jpg',
        video: true,
        name: 'Student Name',
    },
    {
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.',
        name: 'LOREM IPSUM',
        subtitle: 'Lorem ipsum dolor sit',
    },
    {
        type: 'video',
        img: '/images/testimonial2.jpg',
        video: true,
        name: 'Student Name',
    },
    {
        type: 'text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.',
        name: 'LOREM IPSUM',
        subtitle: 'Lorem ipsum dolor sit',
    }
];

const blogData = [
    {
        img: '/images/blogImage1.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        desc: 'Choosing us means partnering with experienced coaches who are...',
    },
    {
        img: '/images/blogImage2.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        desc: 'Choosing us means partnering with experienced coaches who are...',
    },
    {
        img: '/images/blogImage3.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        desc: 'Choosing us means partnering with experienced coaches who are...',
    },
];


const Home = () => {
    const [hovered, setHovered] = useState(1);
    const [active, setActive] = useState(1);
    const [activeIndex, setActiveIndex] = React.useState(1);

    return (
        <>
            {/* Banner Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroMain}>
                        <div className={styles.heroLeft}>
                            <h3 className="SubHeading">Welcome to Ignite</h3>
                            <h1 className={styles.heroTitle}>
                                Lorem ipsum dolor sit amet, <span className={styles.highlight}>consectetur</span> adipiscing
                            </h1>
                            <p className={styles.heroParagraph}>
                                <span>Lorem ipsum dolor sit amet</span>
                                Achieve academic excellence in IBDP, MYP, I/GCSE, A-Levels & AP with Ignite's expert tutors in Dubai.
                                Our curriculum-focused programs are designed to boost your grades and confidence!
                            </p>
                        </div>
                        <div className={styles.heroRight}>
                            <Image
                                src="/images/banner-image-right.png"
                                alt="Education Platform"
                                className={styles.heroImage}
                                width={500}
                                height={500}
                                quality={100}
                            />
                            <div className={styles.buttonGroup}>
                                <button type="button">Get A Free Demo <Image src="/images/right-arrow-skyblue.png" width={40} height={40} quality={100} /></button>
                                <button type="button">Explore Classes <Image src="/images/right-arrow-blue.png" width={40} height={40} quality={100} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Section  */}
            <section className={styles.courseSection}>
                <div className='container'>
                    <div className={styles.courseHeadings}>
                        <h3 className="SubHeading">TUTORING COURSES</h3>
                        <h1 className={styles.courseTitle}>
                            Lorem ipsum dolor sit amet, <span className={styles.highlight}>consectetur</span> adipiscing
                        </h1>
                        <p>Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.</p>
                    </div>
                    <div className={styles.courseInner}>
                        {courseData.map((card, idx) => {
                            const isActive = hovered === idx;
                            return (
                                <div
                                    key={idx}
                                    className={isActive ? styles.mainCard : styles.sideCard}
                                    onMouseEnter={() => setHovered(idx)}
                                    style={{ background: 'none' }}
                                >
                                    <span className={styles.cardNumber}>{card.number}</span>
                                    <span className={styles.cardTitle}>{card.title}</span>
                                    <div
                                        className={styles.cardBg}
                                        style={{ backgroundImage: `url('${card.img}')` }}
                                    />
                                    <div className={
                                        (isActive ? styles.mainCardContent : styles.sideCardContent) + ' ' + (isActive ? styles.activeOverlay : styles.inactiveOverlay)
                                    }>
                                        <div>
                                            <div className={styles.mainCardLabel}>{card.label}</div>
                                            <div className={styles.mainCardTitle}>{card.subtitle}</div>
                                        </div>
                                        <div className={styles.mainCardDetails}>
                                            {card.details.map((d, i) => (
                                                <span key={i}>{d}</span>
                                            ))}
                                        </div>
                                        <button className={styles.mainCardBtn}>
                                            VIEW COURSE  <Image src="/images/right-arrow-blue.png" width={40} height={40} quality={100} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Moving Banner Section */}
            <div className={styles.bannerScroll}>
                {/* <marquee behavior="scroll" direction="left" scrollamount="6">
                WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS
            </marquee> */}
                <span>
                    WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp; <span className={styles.dot}>●</span> &nbsp; WHERE GRADE IMPROVEMENT BEGINS
                </span>
            </div>


            {/* About US Section  */}
            <section className={styles.aboutSection}>
                <div className='container'>
                    <div className={styles.aboutSectionInner}>
                        <div className={styles.aboutLeft}>
                            <div className={styles.aboutImageWrap}>
                                <div>
                                    <img src="/images/rectangle-bg1.png" alt="Teacher" className={styles.rectangleBG} />
                                    <img src="/images/rectangle-bg2.png" alt="Teacher" className={styles.rectangleBG} />
                                    <img src="/images/rectangle-bg2.png" alt="Teacher" className={styles.rectangleBG} />
                                    <img src="/images/rectangle-bg2.png" alt="Teacher" className={styles.rectangleBG} />
                                </div>
                                <img src="/images/about-us.png" alt="Teacher" className={styles.aboutImage} />
                                <div className={styles.statCard + ' ' + styles.statCardYears}>
                                    <div className={styles.statBig}>11 YEARS +</div>
                                    <div className={styles.statSmall}>OF RICH TUTORING EXPERIENCE</div>
                                </div>
                                <div className={styles.statCard + ' ' + styles.statCardResources}>
                                    <div className={styles.statBig}>1000+</div>
                                    <div className={styles.statSmall}>RESOURCES THAT HELP YOU JOIN THE TOP 1%</div>
                                </div>
                                <div className={styles.verticalLabel}><span>4.9</span> GOOGLE REVIEWS</div>
                            </div>
                        </div>
                        <div className={styles.aboutRight}>
                            <div className={styles.aboutHeadingRow}>
                                <span className="SubHeading">ABOUT US</span>
                            </div>
                            <h2 className={styles.aboutTitle}>
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR <span className={styles.aboutHighlight}>ADIPISCING</span>
                            </h2>
                            <p className={styles.aboutDesc}>
                                Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
                            </p>
                            <div className={styles.aboutStatsRow}>
                                <div className={styles.aboutStatBlock}>
                                    <div className={styles.aboutStatBig}>2300+</div>
                                    <div className={styles.aboutStatLabel}>TRULY HAPPY STUDENTS FROM UAE</div>
                                </div>
                                <div className={styles.aboutStatBlock}>
                                    <div className={styles.aboutStatBig}>89%</div>
                                    <div className={styles.aboutStatLabel}>OF STUDENTS ACCEPTED TO TOP UNIVERSITIES</div>
                                </div>
                            </div>
                            <button className={styles.aboutBtn} type="button">GET A FREE DEMO <Image src="/images/right-arrow-blue.png" width={40} height={40} quality={100} /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Test Section  */}

            <section className={styles.testSection}>
                <div className={styles.testHeadings}>
                    <div className="SubHeading">STANDARDISED TESTS</div>
                    <h1 className={styles.testTitle}>
                        LOREM IPSUM DOLOR SIT AMET,<br />CONSECTETUR <span className={styles.highlight}>ADIPISCING</span>
                    </h1>
                </div>
                <div className={styles.testCardsRow}>
                    {testData.map((card, idx) => {
                        const isCardActive = active === idx;
                        return (
                            <div
                                key={idx}
                                className={styles.testCard}
                                onMouseEnter={() => setActive(idx)}
                            >
                                <div className={styles.cardImageArea + ' ' + (isCardActive ? styles.activeImageArea : '')} style={{ backgroundImage: `url('${card.img}')` }}>
                                    <div className={styles.imageOverlay}></div>
                                    <span className={styles.cardNumber}>{card.number}</span>
                                    <span className={styles.cardTitle}>{card.title}</span>
                                </div>
                                
                                <div className={styles.cardContentArea + ' ' + (isCardActive ? styles.showContent : styles.hideContent)}>
                                    <div className={styles.cardLabel}>{card.label}</div>
                                    <div className={styles.cardDetails}>
                                        {card.details && card.details.map((d, i) => (
                                            <p key={i}>{d}</p>
                                        ))}
                                    </div>
                                    <button className={styles.cardBtn} type="button">{card.btn} <Image src="/images/right-arrow-blue.png" width={40} height={40} quality={100} /></button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Subject Section */}

            <section className={styles.subjectSection}>
                <div className="container">
                    <div className={styles.subjectSectionInner}>
                        {/* Decorative rectangles */}
                        <img src="/images/rectangle-bg4.png" alt="bg-shape" className={styles.bgRect} />
                        <img src="/images/rectangle-bg5.png" alt="bg-shape" className={styles.bgRect} />
                        <img src="/images/rectangle-bg4.png" alt="bg-shape" className={styles.bgRect} />
                        {/* Left Side: Heading and Description */}
                        <div className={styles.subjectLeft}>
                            <span className="SubHeading">SUBJECT TUTORING</span>
                            <h1 className={styles.subjectTitle}>
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR <span className={styles.subjectHighlight}>ADIPISCING</span>
                            </h1>
                            <p className={styles.subjectDesc}>
                                Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                            </p>
                        </div>
                        {/* Right Side: Subject Bubbles in rows */}
                        <div className={styles.subjectRight}>
                            <div className={styles.subjectBubblesGrid}>
                                {subjectRows.map((row, rowIdx) => (
                                    <div className={styles.subjectBubbleRow} key={rowIdx}>
                                        {row.map((subj) => (
                                            <div
                                                key={subj}
                                                className={styles.subjectBubble}
                                            >
                                                {subj}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni Section */}

            <section className={styles.alumniSection}>
                <div className='container'>
                    <div className={styles.alumniSubSection}>
                        <h3 className="SubHeading">OUR ALUMNI IN TOP UNIVERSITIES</h3>
                        <h2 className={styles.alumniTitle} style={{ margin: '24px 0 0 0' }}>
                            LOREM IPSUM DOLOR SIT AMET, consectetur <span className={styles.alumniHighlight}> ADIPISCING</span>
                        </h2>
                    </div>
                    <div className={styles.alumniSwiper}>
                        {/* Custom Swiper navigation buttons inside the slider */}
                        <button className={`swiper-button-prev ${styles.customNavBtn}`}>
                            <img src="/images/right-arrow-blue.png" alt="Prev" style={{ transform: 'rotate(180deg)' }} width={32} height={32} />
                        </button>
                        <button className={`swiper-button-next ${styles.customNavBtn}`}>
                            <img src="/images/right-arrow-blue.png" alt="Next" width={32} height={32} />
                        </button>
                        <Swiper
                            modules={[Navigation, Pagination, EffectCoverflow]}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 120,
                                modifier: 2,
                                slideShadows: false,
                            }}
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={80}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className={styles.alumniSwiper}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                700: { slidesPerView: 2 },
                                1100: { slidesPerView: 3 },
                            }}
                        >
                            {alumniData.map((alumni, idx) => (
                                <SwiperSlide key={idx}>
                                    {({ isActive }) => (
                                        <div className={styles.alumniCard}>
                                            <div className={isActive ? `${styles.alumniBg} ${styles.activeBg}` : styles.alumniBg}></div>
                                            <div className={styles.alumniImageWrap}>
                                                <img src={alumni.img} alt={alumni.name} className={styles.alumniImage} />
                                                <div className={styles.alumniLogoBox}>
                                                    <img src={alumni.logo} alt="university logo" className={styles.alumniLogo} />
                                                </div>
                                            </div>
                                            <div className={isActive ? `${styles.alumniName} ${styles.activeName}` : styles.alumniName}>
                                                {alumni.name}
                                            </div>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>  

            {/* Our USPs */}

            <section className={styles.uspSection}>
                <div className={styles.uspLeft}>
                    <span className="SubHeading">OUR USP'S</span>
                    <h2 className={styles.uspTitle}>
                        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                    </h2>
                    <div className={styles.uspSubtitle}>LOREM IPSUM DOLOR SIT AMET</div>
                    <p className={styles.uspDesc}>
                        Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                        We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
                    </p>
                    <button className={styles.uspBtn} type="button">
                        KNOW MORE <Image src="/images/right-arrow-blue.png" width={40} height={40} quality={100} />
                    </button>

                </div>
                <div className={styles.uspGrid}>
                    {uspData.map((usp, i) => (
                        <div className={styles.uspItem} key={i}>
                            <div className={styles.uspNumber}>{usp.number}</div>
                            <div className={styles.uspIconCircle}>
                                <img src={usp.icon} alt="" className={styles.uspIcon} />
                            </div>
                            <div className={styles.uspItemTitle}>{usp.title}</div>
                            <div className={styles.uspItemDesc}>{usp.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

             {/* Trainers Section */}

            <section className={styles.trainersSection}>
                <div className='container'>
                    <div className={styles.trainersHeader}>
                        <span className="SubHeading">
                            OUR TRAINERS
                        </span>
                        <h2 className={styles.trainersTitle}>
                            LOREM IPSUM DOLOR SIT AMET,<br />CONSECTETUR <span className={styles.trainersHighlight}>ADIPISCING</span>
                        </h2>
                    </div>
                    <div className={styles.trainersGrid}>
                        {trainers.map((t, i) => (
                            <div className={styles.trainerCard} data-color={t.color} key={i}>
                                <div className={styles.trainerName}>{t.name}</div>
                                <div className={styles.trainerImgWrap}>
                                    <img src={t.img} alt={t.name} className={styles.trainerImg} />
                                </div>
                                <div className={styles.trainerSubtitle}>{t.subtitle}</div>
                                <div className={styles.trainerExp}>
                                    {t.experience}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles.trainersSeeMore}>SEE MORE</button>
                </div>
            </section>


            {/* Testimonial Section */}
            <section className={styles.testimonialSection}>
                <div className={styles.testimonialHeader}>
                    <span className="SubHeading">REVIEWS & TESTIMONIALS</span>
                </div>
                <div className={styles.testimonialBgBox}>
                    {/* Decorative rectangles */}
                    <img src="/images/rectangle-bg4.png" alt="bg-shape" className={styles.testimonialRect} />
                    <img src="/images/rectangle-bg4.png" alt="bg-shape" className={styles.testimonialRect} />
                    <img src="/images/rectangle-bg4.png" alt="bg-shape" className={styles.testimonialRect} />
                    <h2 className={styles.testimonialTitle}>
                        LOREM IPSUM DOLOR SIT AMET,<br />CONSECTETUR ADIPISCING
                    </h2>
                </div>
                <div className={styles.testimonialSliderWrap}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={4}
                        loop={true}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true, el: '.' + styles.testimonialPagination }}
                        className={styles.testimonialSwiper}
                    >
                        <button className={`swiper-button-prev`}>
                            <img src="/images/right-arrow-blue.png" alt="Prev" style={{ transform: 'rotate(180deg)' }} width={32} height={32} />
                        </button>
                        {testimonialData.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                {item.type === 'video' ? (
                                    <div className={styles.testimonialCard + ' ' + styles.testimonialCardVideo}>
                                        <img src={item.img} alt={item.name} className={styles.testimonialImg} />
                                        <div className={styles.testimonialPlayBtn}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="23"
                                                    fill="#0000008a"
                                                    stroke="#ffffff60"
                                                    stroke-width="2"
                                                />
                                                <polygon points="20,16 34,24 20,32" fill="#ffffff90" />
                                            </svg>

                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.testimonialCard + ' ' + styles.testimonialCardText}>
                                        <div className={styles.testimonialText}>{item.text}</div>
                                        <div className={styles.testimonialTextName}><b>{item.name}</b></div>
                                        <div className={styles.testimonialTextSubtitle}>{item.subtitle}</div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                        <button className={`swiper-button-next`}>
                            <img src="/images/right-arrow-blue.png" alt="Next" width={32} height={32} />
                        </button>
                    </Swiper>
                    <div className={styles.testimonialPagination}></div>
                </div>
            </section>


            {/* Blogs Section  */}

            <section className="container">
                <div className={styles.blogSection}>
                    <div className={styles.blogLeft}>
                        <div className={styles.blogHeadingRow}>
                            <span className="SubHeading">BLOGS</span>
                        </div>
                        <h2 className={styles.blogTitle}>
                            LOREM IPSUM DOLOR<br />SIT AMET, CONSECTETUR<br />ADIPISCING
                        </h2>
                        <div className={styles.blogSubtitle}>LOREM IPSUM DOLOR SIT AMET</div>
                        <button className={styles.blogAllBtn}>
                            VIEW ALL BLOGS
                            <img src="/images/right-arrow-skyblue.png" alt="arrow" width={24} height={24} />
                        </button>
                    </div>
                    <div className={styles.blogRight}>
                        {blogData.map((blog, i) => (
                            <div className={styles.blogCard} key={i}>
                                <img src={blog.img} alt="blog" className={styles.blogImg} />
                                <div className={styles.blogCardContent}>
                                    <div className={styles.blogCardTitle}>{blog.title}</div>
                                    <div className={styles.blogCardDesc}>{blog.desc}</div>
                                    <span className={styles.blogCardLine}></span>
                                    <button className={styles.blogReadMoreBtn}>
                                        READ MORE
                                        <span className={styles.blogReadMoreArrow}>
                                            <img src="/images/right-arrow-blue.png" alt="arrow" width={20} height={20} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
    