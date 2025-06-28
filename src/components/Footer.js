import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerWrap}>
        <div className={styles.footerTop}>
          <div className={styles.footerContactRow}>
            <span className="SubHeading">CONTACT US</span>
          </div>
          <h2 className={styles.footerTitle}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
          </h2>
          <div className={styles.footerMainRow}>
            <div className={styles.footerImgCol}>
                      <img src="/images/footerImage.jpg" alt="Footer" className={styles.footerMainImg} />
            </div>
            <div className={styles.footerRightCol}>
              <div className={styles.footerDesc}>
                Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
              </div>
              <div className={styles.footerNewsletterWrap}>
                <div className={styles.footerNewsletterLabel}>SUBSCRIBE TO OUR NEWSLETTER</div>
                <form className={styles.footerNewsletterForm} onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="Email" className={styles.footerNewsletterInput} />
                  <button className={styles.footerNewsletterBtn} type="submit">
                    <img src="/images/right-arrow-blue.png" alt="Subscribe" width={28} height={28} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLinksRow}>
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>LOREM</div>
            <ul>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor Sit</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum Dolor Sit</li>
            </ul>
          </div>
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>LOREM</div>
            <ul>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor Sit</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum Dolor Sit</li>
            </ul>
          </div>
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>LOREM</div>
            <ul>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor Sit</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum Dolor Sit</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottomRow}>
          <div className={styles.footerAddressLabel}>ADDRESS</div>
          <div className={styles.footerAddress}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
          <div className={styles.footerContactLabel}>CONTACT</div>
          <div className={styles.footerContact}>+00 97686 93485</div>
        </div>
    </footer>
  );
};

export default Footer; 