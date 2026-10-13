import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from '@/components/CustomImageWrapper';

const Footer = () => {
  const router = useRouter();

  const copyPages = [
    '/courses/ibdp-tutors-in-dubai-copy',
    '/british-curriculum-tutors-in-dubai-copy',
    '/courses/myp-tutors-in-dubai-copy',
    '/courses/igcse-tutors-in-dubai-copy',
    '/courses/a-level-tutors-in-dubai-copy',
    '/join-free-demo-class-copy'
  ];
  const isCopyPage = copyPages.includes(router.pathname);
  const phoneNumberObj = {
    href: isCopyPage ? 'tel:+971588589958' : 'tel:+971568357374',
    display: isCopyPage ? '+971 58 858 9958' : '+971568357374'
  };
  const emailObj = {
    href: isCopyPage ? 'mailto:connect@ignitetraininginstitute.com' : 'mailto:hello@ignitetraininginstitute.com',
    display: isCopyPage ? 'connect@ignitetraininginstitute.com' : 'hello@ignitetraininginstitute.com'
  };
  // --- START: Newsletter Integration ---
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          formType: 'NEWSLETTER',
          pageinfo: `URL: ${window.location.href} | Newsletter Subscription`
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Direct redirection without showing success message
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        }
      } else {
        setLoading(false);
        setStatus('error');
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setLoading(false);
      setStatus('error');
    }
  };
  // --- END: Newsletter Integration ---

  const isReportingRef = useRef(false);

  // --- Google Ads Click Conversion Tracking for "Call" Contact Link ---
  const handleCallClick = (e) => {
    if (isReportingRef.current) return;

    e.preventDefault();
    const url = phoneNumberObj.href;

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      isReportingRef.current = true;
      window.gtag('event', 'conversion', {
        'send_to': 'AW-844959495/LGsACP7qiP4bEIee9JID',
        'event_callback': function () {
          window.location.href = url;
          isReportingRef.current = false;
        }
      });

      // Fallback in case the callback doesn't fire
      setTimeout(() => {
        if (isReportingRef.current) {
          window.location.href = url;
          isReportingRef.current = false;
        }
      }, 500);
    } else {
      // If gtag isn't loaded, just perform the regular navigation
      window.location.href = url;
    }
  };


  return (
    <footer
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className="fade-in-section sp-container footerWrap"
      style={{ animationDelay: "0.2s" }}>
      <div
        className="fade-in-section footerTop"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        style={{ animationDelay: "0.1s" }}
      >
        <h3 className="footerTitle">
          REVOLUTIONIZING THE WAY STUDENTS LEARN
        </h3>
        <div className="footerMainRow">
          <div className="footerTop">
            <Image
              src="/images/footerImage.webp"
              data-scroll
              data-scroll-class="is-clipped"
              data-scroll-repeat="true"
              data-scroll-offset="-10%"
              alt="Footer"
              className="footerMainImg"
              width={452}
              height={250}
            />
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section footerTop"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="footerDesc">
              Stay updated with the latest study tips, exam strategies, & academic insights. Join our mailing list & fuel your journey to success.
            </div>
            <div className="socialmediafooter">
              <a href="https://www.facebook.com/ignitetraininginstitute" target="_blank">
                <img src="/images/fb-footer.webp" alt="ignite facebook" width={36} height={36} loading="lazy" decoding="async" />
              </a>
              <a href="https://www.instagram.com/ignitetraininginstitute/?hl=en" target="_blank">
                <img src="/images/insta-footer.webp" alt="ignite instagram" width={36} height={36} loading="lazy" decoding="async" />
              </a>
              <a href="https://www.linkedin.com/company/ignite-training-institute" target="_blank">
                <img src="/images/linkedin-footer.webp" alt="ignite linkedin" width={36} height={36} loading="lazy" decoding="async" />
              </a>
            </div>

            <div className="footerNewsletterWrap">
              <div className="footerNewsletterLabel">SUBSCRIBE TO OUR NEWSLETTER</div>
              <form className="footerNewsletterForm" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={loading ? "Subscribing..." : "Email"}
                  className="footerNewsletterInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="footerNewsletterBtn" type="submit" disabled={loading}>
                  <img src="/images/right-arrow-blue.webp" alt="Footer Arrow" width={28} height={28} loading="lazy" decoding="async" />
                </button>
              </form>
              {status === 'error' && <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '5px' }}>Something went wrong. Please try again.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="footerLinksRow">
        <div
          className="fade-in-section footerTop"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="footerLinksCol">
            <div className="footerLinksTitle">COURSES</div>
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
            <div className="footerLinksTitle">TESTS</div>
            <ul>
              <li><a href="/act-tutors-in-dubai">ACT Prep</a></li>
              <li><a href="/advanced-placements-tutors-in-dubai">Advanced Placements</a></li>
            </ul>
          </div>
        </div>

        <div
          className="fade-in-section footerTop"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="footerLinksCol">
            <div className="footerLinksTitle">SUBJECTS</div>
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

        <div
          className="fade-in-section footerTop"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="footerLinksCol">
            <div className="footerLinksTitle">ABOUT IGNITE</div>
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

      <div className="footerBottomRow">
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.7s" }}>
          <div className="footerAddressLabel">ADDRESS</div>
          <div className="footerAddress">1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai</div>
          <div className="footerAddress">Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates</div>
        </div>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.8s" }}>
          <div className="footerContactLabel">CONTACT</div>
          <div className="footerContact">
            <span><a href={phoneNumberObj.href} onClick={handleCallClick}>{phoneNumberObj.display}</a></span>
            <br />
            <span><a href={emailObj.href}>{emailObj.display}</a></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footerWrap {
          background: linear-gradient(to left, var(--lightgreen-color) 0%, #003E37 100%);
          border-radius: 32px;
          padding: 6rem 3rem 3rem 3rem;
          margin: 80px auto 24px auto;
          width: 90%;
          color: #fff;
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
        }

        .footerWrap .footerTop {
          width: 100%;
          text-align: center;
          padding: 0 20px;
        }

        .footerWrap .footerContactRow {
          margin-bottom: 18px;
        }

        .footerWrap .footerContactRow span {
          -webkit-text-fill-color: var(--white-color);
        }

        .footerWrap .footerContactRow span:before,
        .footerWrap .footerContactRow span:after {
          filter: contrast(0) brightness(2);
          height: 20px;
        }

        .footerWrap .footerTitle {
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 28px 0;
          letter-spacing: 1px;
        }

        .footerWrap .footerMainRow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          width: 90%;
          margin: 0 auto;
        }

        .footerWrap .footerImgCol {
          width: 50%;
        }

        .footerWrap :global(.footerMainImg) {
          width: 100%;
          height: 100%;
          max-height: 250px;
          object-fit: cover;
          border-radius: 24px;
          margin-bottom: 0;
        }

        .footerWrap .footerRightCol {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 18px;
        }

        .footerWrap .footerDesc {
          font-size: 18px;
          color: var(--white-color);
          margin-bottom: 10px;
          line-height: 1.5;
          text-align: left;
        }

        .footerWrap .footerNewsletterWrap {
          margin-top: 15px;
          width: 100%;
        }

        .footerWrap .footerNewsletterLabel {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
          text-align: left;
          letter-spacing: 1px;
        }

        .footerWrap .footerNewsletterForm {
          display: flex;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 300px;
          position: relative;
        }

        .footerWrap .footerNewsletterInput {
          width: 100%;
          padding: 12px 60px 12px 30px;
          border-radius: 40px;
          border: 1px solid #9fcfc9;
          font-size: 1.1rem;
          outline: none;
          background: transparent;
          color: #fff;
          transition: border 0.2s;
        }

        .footerWrap .footerNewsletterInput::placeholder {
          color: #eaf8ff;
          opacity: 0.7;
        }

        .footerWrap .footerNewsletterBtn {
          width: 30px;
          height: 30px;
          position: absolute;
          right: 10px;
          background-color: transparent;
          border: none;
          padding: 0;
        }

        .footerWrap .footerNewsletterBtn :global(img) {
          width: 100%;
          height: 100%;
          filter: contrast(2) grayscale(1);
          cursor: pointer;
        }

        .footerWrap .footerLinksRow {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          gap: 80px;
          margin: 36px 0 24px 0;
          width: 100%;
        }

        .footerWrap .footerLinksCol {
          min-width: 160px;
          text-align: center;
        }

        .footerWrap .footerLinksTitle {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .footerWrap .footerLinksCol :global(ul) {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footerWrap .footerLinksCol :global(li a::before) {
          content: "→";
          color: #FFF;
          margin-right: 10px;
          opacity: 1;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .footerWrap .footerLinksCol :global(li a:hover) {
          opacity: 1;
        }

        .footerWrap .footerLinksCol :global(li a:hover::before) {
          transform: translateX(5px) scale(1.2);
        }

        .footerWrap .footerLinksCol :global(li a) {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .footerWrap .footerLinksCol :global(li),
        .footerWrap .footerLinksCol :global(li a) {
          transition: transform 0.3s ease;
          font-size: 1rem;
          color: var(--white-color);
          opacity: 0.7;
          letter-spacing: 0.5px;
        }

        .footerWrap .footerBottomRow {
          margin-top: 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footerWrap .footerAddressLabel,
        .footerWrap .footerContactLabel {
          font-weight: 700;
          letter-spacing: 1px;
          margin: 8px 0;
        }

        .footerWrap .footerAddress,
        .footerWrap .footerContact,
        .footerWrap .footerContact :global(a) {
          font-size: 1rem;
          margin-bottom: 10px;
          opacity: 0.9;
          color: var(--white-color);
          opacity: 0.7;
        }

        .footerWrap .footerContact :global(a:hover) {
          opacity: 1;
        }

        .socialmediafooter {
          display: flex;
          gap: 15px;
          justify-content: flex-start;
          margin-top: 10px;
          flex-direction: row;
          flex-wrap: nowrap;
        }

        @media (max-width: 1199px) {
          .footerWrap {
            width: 95vw;
            padding: 20px;
          }
        }

        @media (max-width: 991px) {
          .footerMainRow,
          .footerLinksRow {
            gap: 24px;
            align-items: center;
          }

          .footerImgCol,
          .footerRightCol {
            max-width: 100%;
            min-width: 0;
            width: 100%;
          }

          .footerWrap .footerMainRow {
            gap: 30px;
          }

          .footerWrap .footerLinksRow {
            gap: 30px;
          }

          .footerWrap :global(.footerMainImg) {
            height: 120px;
            border-radius: 14px;
          }

          .footerWrap {
            padding: 30px 20px;
            border-radius: 18px;
          }

          .footerTitle {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 767px) {
          .footerWrap .footerLinksRow,
          .footerWrap .footerMainRow {
            flex-wrap: wrap;
            gap: 20px;
          }

          .footerWrap .footerLinksRow .footerTop {
            width: max-content;
          }

          .footerWrap :global(.footerMainImg) {
            width: 90%;
            max-height: 180px;
          }

          .footerWrap .footerDesc {
            display: block;
            text-align: center;
          }

          .footerWrap .footerNewsletterWrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .footerWrap .footerNewsletterLabel {
            text-align: center;
          }

          .footerWrap .footerNewsletterForm {
            max-width: 70%;
          }

          .footerWrap .footerNewsletterForm .footerNewsletterInput {
            padding: 10px 60px 10px 30px;
          }
        }

        @media (max-width: 600px) {
          .footerWrap .footerDesc {
            font-size: 15px;
          }

          .footerWrap .footerTitle {
            font-size: 1.5rem;
          }

          .footerWrap {
            margin-top: 80px;
            padding: 30px 10px;
          }

          .footerWrap .footerMainRow {
            width: 100%;
          }

          .footerWrap .footerTop {
            padding: 0;
          }

          .socialmediafooter {
            justify-content: center;
          }

          .footerWrap .footerLinksRow .footerTop {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
