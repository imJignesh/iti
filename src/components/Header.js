import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShow(true);
            } else if (window.scrollY < lastScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${show ? styles.headerAnimated : styles.headerHidden}`}>
            <div className={styles.header_left_content}>
                <div className={styles.logo}>
                    <Image src="/images/logo.svg" width={200} height={80} quality={100} />
                </div>
                <nav className={styles.nav}>
                    <div className={styles.megaMenuWrapper}>
                        <a href="#" className={styles.link}>Lorem</a>
                        <div className={styles.megaMenu}>
                            <div className={styles.megaMenuContent}>
                                <div className={styles.megaMenuLeft}>
                                    <h3><span>01</span> International baccalaureate</h3>
                                    <h3><span>02</span> British curriculum</h3>
                                    <h3><span>03</span> Homeschooling</h3>
                                </div>
                                <div className={styles.megaMenuRight}>
                                    <div className={styles.megaMenuBox}>
                                        <img src="/images/header-menu1.png" alt="Box 1" />
                                        <h4>IBDP</h4>
                                    </div>
                                    <div className={styles.megaMenuBox}>
                                        <img src="/images/header-menu2.png" alt="Box 2" />
                                        <h4>MYP</h4>
                                    </div>
                                    <div className={styles.megaMenuBox}>
                                        <img src="/images/header-menu3.png" alt="Box 3" />
                                        <h4>A LEVELS</h4>
                                    </div>
                                    <div className={styles.megaMenuBox}>
                                        <img src="/images/header-menu4.png" alt="Box 4" />
                                        <h4>I/GCSE</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className={styles.link}>Ipsum</a>
                    <a href="#" className={styles.link}>Lorem</a>
                    <a href="#" className={styles.link}>Ipsum</a>
                </nav>
            </div>
            <div className={styles.header_right_content}>
                <button>
                    <Image src="/images/mobile.png" width={25} height={25} quality={100} />
                    Call
                </button>
                <button>
                    <Image src="/images/whatsapp.png" width={25} height={25} quality={100} />
                    Whatsapp
                </button>
            </div>
        </header>
    );
};

export default Header;  