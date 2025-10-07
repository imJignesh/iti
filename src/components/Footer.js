import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className={`fade-in-section sp-container ${styles.footerWrap}`}
      style={{ animationDelay: "0.2s" }}>
      <div
        className={`fade-in-section ${styles.footerTop}`}
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        style={{ animationDelay: "0.1s" }}
      >
        <div className={styles.footerContactRow}>
          <span className="SubHeading">CONTACT US</span>
        </div>
        <h2 className={styles.footerTitle}>
          REVOLUTIONIZING THE WAY STUDENTS LEARN
        </h2>
        <div className={styles.footerMainRow}>
          <div
            className={styles.footerTop}
          >
            <img
              src="/images/footerImage.jpg"
              data-scroll
              data-scroll-class="is-clipped"
              data-scroll-repeat="true"
              data-scroll-offset="-10%"
              alt="Footer"
              className={`${styles.footerMainImg}`}
            />
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"

            className={`fade-in-section ${styles.footerTop}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className={styles.footerDesc}>
              Stay updated with the latest study tips, exam strategies, & academic insights. Join our mailing list & fuel your journey to success.
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
        {/* Menu 1 */}
        <div
          key={0}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"

          className={`fade-in-section ${styles.footerTop}`}
          style={{ animationDelay: `${0.4 + 0 * 0.1}s` }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>COURSES</div>
            <ul>
              <li><a href="/ib-curriculum-tutors-in-dubai">IB Tutors</a></li>
              <ul>
                <li><a href="/courses/ibdp-tutors-in-dubai">IBDP Tutors In Dubai</a></li>
                <li><a href="/courses/myp-tutors-in-dubai">MYP Tutors In Dubai</a></li>
              </ul>
              <li><a href="/british-curriculum-tutors-in-dubai">British Curriculum Tutors</a></li>
              <ul>
                <li><a href="/courses/a-level-tutors-in-dubai">A Levels Tutors In Dubai</a></li>
                <li><a href="/courses/igcse-tutors-in-dubai">IGCSE Tutors In Dubai</a></li>
              </ul>
              <li><a href="/courses/homeschooling-tutors-in-dubai">Private Candidacy</a></li>
              <li><a href="/tutors-in-dubai">Tutors In Dubai</a></li>
              <li><a href="/tutors-in-jlt-dubai">Tutors In JLT Dubai</a></li>
              <li><a href="/private-tutors-in-dubai">Private Tutors In Dubai</a></li>
            </ul>
            <br />
            <div className={styles.footerLinksTitle}>TESTS</div>
            <ul>
              <li><a href="/act-tutors-in-dubai">ACT Prep</a></li>
              <li><a href="/advanced-placements-tutors-in-dubai">Advanced Placements</a></li>
            </ul>
          </div>
        </div>

        {/* Menu 2 */}
        <div
          key={1}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"

          className={`fade-in-section ${styles.footerTop}`}
          style={{ animationDelay: `${0.4 + 1 * 0.1}s` }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>SUBJECTS</div>
            <ul>
              <li><a href="/english-tutor-in-dubai">English Tutors In Dubai</a></li>
              <li><a href="/french-tutor-in-dubai">French Tutors In Dubai</a></li>
              <li><a href="/spanish-tutor-in-dubai">Spanish Tutors In Dubai</a></li>
              <li><a href="/computer-science-tutor-in-dubai">Computer Science Tutors In Dubai</a></li>
              <li><a href="/economics-tutor-in-dubai">Economics Tutors In Dubai</a></li>
              <li><a href="/biology-tutor-in-dubai">Biology Tutors In Dubai</a></li>
              <li><a href="/chemistry-tutor-in-dubai">Chemistry Tutors In Dubai</a></li>
              <li><a href="/physics-tutor-in-dubai">Physics Tutors In Dubai</a></li>
              <li><a href="/maths-tutor-in-dubai">Maths Tutors In Dubai</a></li>
              <li><a href="/business-studies-tutor-in-dubai">Business Studies Tutors In Dubai</a></li>
              <li><a href="/accounting-tutor-in-dubai">Accounting Tutors In Dubai</a></li>
              <li><a href="/psychology-tutor-in-dubai">Psychology Tutors In Dubai</a></li>
            </ul>
          </div>
        </div>

        {/* Menu 3 */}
        <div
          key={2}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"

          className={`fade-in-section ${styles.footerTop}`}
          style={{ animationDelay: `${0.4 + 2 * 0.1}s` }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>ABOUT IGNITE</div>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/courses">Our Courses</a></li>
              <li><a href="/join-free-demo-class">Free Demo Class</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/career">Career</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomRow}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.7s" }}
        >
          <div className={styles.footerAddressLabel}>ADDRESS</div>
          <div className={styles.footerAddress}>1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai</div>
          <div className={styles.footerAddress}>Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates</div>
        </div>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.8s" }}
        >
          <div className={styles.footerContactLabel}>CONTACT</div>
          <div className={styles.footerContact}>+00 97686 93485</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;