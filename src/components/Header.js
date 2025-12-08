import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = ({ setHeaderHeight }) => {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname;
    const headerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) setNavOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);


    const isLinkActive = (href, parentPaths = []) => {
        const pathsToCheck = [href, ...parentPaths];
        return pathsToCheck.some(path => currentPath.startsWith(path));
    };

    return (
        <div className={styles.headerWrapper}>
            <header ref={headerRef} className={`${styles.header}`}>
                <div className={`d-flex w-100 m-0 ${styles.header_left_content}`}>
                    <div className={`col-auto ${styles.logo}`}>
                        <a href='/'><Image
                            src="/images/logo.svg"
                            width={200}
                            height={80}
                            quality={100}
                            alt='Ignited Training Institute'
                            priority
                        /></a>
                    </div>
                    {/* Nav links: hidden on mobile/tablet unless toggled, always visible on lg+ */}
                    <nav
                        className={`col ${styles.nav} ${navOpen ? 'd-flex flex-column position-absolute top-100 start-0 w-100 bg-white  p-4 px-5 z-3' : 'd-none'} d-lg-flex flex-lg-row position-lg-static w-lg-auto bg-lg-none shadow-lg-none p-lg-0 z-lg-auto`}
                        style={navOpen ? { left: 0 } : {}}
                    >
                        <a className={`${styles.link} ${isLinkActive('/') ? styles.activeLink : ''}`} href="/">Home</a>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/ib-curriculum-tutors-in-dubai') || isLinkActive('/courses/ibdp-tutors-in-dubai') || isLinkActive('/courses/myp-tutors-in-dubai') || isLinkActive('/british-curriculum-tutors-in-dubai') || isLinkActive('/courses/a-level-tutors-in-dubai') || isLinkActive('/courses/igcse-tutors-in-dubai') || isLinkActive('/courses/homeschooling-tutors-in-dubai') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >
                                high school courses
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuLeft}>
                                        {/* Updated to /courses/ as per 'Our Courses' link and general category */}
                                        <h3><span>01</span> <a href='/ib-curriculum-tutors-in-dubai'>International baccalaureate<div><img src="/images/btn-arrow.png" /></div></a></h3>
                                        <a href='/courses/ibdp-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/ibdp-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/header-menu1.png" alt="IBDP" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>IBDP</h4>
                                        </a>
                                        <a href='/courses/myp-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/myp-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/header-menu2.png" alt="MYP" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>MYP</h4>
                                        </a>

                                    </div>
                                    <div className={styles.megaMenuLeft}>
                                        <h3><span>02</span> <a href='/british-curriculum-tutors-in-dubai'>British curriculum<div><img src="/images/btn-arrow.png" /></div></a></h3>
                                        <a href='/courses/a-level-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/a-level-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/header-menu3.png" alt="A-LEVELS" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>A LEVELS</h4>
                                        </a>
                                        <a href='/courses/igcse-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/igcse-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/header-menu4.png" alt="I/GCSE" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>I/GCSE</h4>
                                        </a>
                                    </div>
                                    <div className={styles.megaMenuLeft}>
                                        <h3><span>03</span><a href='/courses/homeschooling-tutors-in-dubai'> Homeschooling<div><img src="/images/btn-arrow.png" /></div></a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/act-tutors-in-dubai') || isLinkActive('/advanced-placements-tutors-in-dubai') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >

                                standardised tests
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuRight}>
                                        <a href='/act-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/act-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-act.png" alt="ACT" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>ACT</h4>
                                        </a>
                                        <a href='/advanced-placements-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/advanced-placements-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-ap.png" alt="AP" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>AP</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/join-free-demo-class" className={`${styles.link} ${isLinkActive('/join-free-demo-class') ? styles.activeLink : ''}`}>

                            get a free demo
                        </a>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/about-us') || isLinkActive('/blog') || isLinkActive('/our-team') || isLinkActive('/contact-us') || isLinkActive('/career') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >
                                about
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuRight}>
                                        <a href='/blog' className={`${styles.megaMenuBox} ${isLinkActive('/blog') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-blog.png" alt="Blog" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>Blog</h4>
                                        </a>
                                        <a href='/our-team' className={`${styles.megaMenuBox} ${isLinkActive('/our-team') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-team.png" alt="Our Team" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>Our Team</h4>
                                        </a>
                                        <a href='/about-us' className={`${styles.megaMenuBox} ${isLinkActive('/about-us') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-about.png" alt="About Us" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>About Us</h4>
                                        </a>
                                        <a href='/contact-us' className={`${styles.megaMenuBox} ${isLinkActive('/contact-us') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-contact.png" alt="Contact Us" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>Contact Us</h4>
                                        </a>
                                        <a href='/career' className={`${styles.megaMenuBox} ${isLinkActive('/career') ? styles.activeLink : ''}`}>
                                            <img src="/images/menu-career.png" alt="Career" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                            <h4>Career</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={`d-flex justify-content-end m-0 ${styles.header_right_content}`}>
                    <div className="col-auto p-0  d-sm-block">
                        <button>
                            <Image src="/images/mobile.png" width={25} height={25} quality={100} alt="Call" />
                            Call
                        </button>
                    </div>
                    <div className="col-auto p-0  d-sm-block">
                        <button>
                            <Image src="/images/whatsapp.png" width={25} height={25} quality={100} alt='Whatsapp' />
                            Whatsapp
                        </button>
                    </div>
                    {/* Hamburger toggle button for mobile/tablet */}
                    <button
                        className={`d-lg-none ${styles.toggleButton}`}
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setNavOpen((open) => !open)}
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        <Image src="/images/hamburger.png" width={35} height={35} quality={100} alt='Hamburger' />
                    </button>
                </div>

            </header>
        </div>
    );
};

export default Header;