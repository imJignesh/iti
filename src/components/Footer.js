import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "@/components/CustomImageWrapper";

const locations = [
  {
    name: "Ignite Training Institute",
    area: "Sheikh Zayed Road",
    address: "1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ignite+Training+Institute%2C+Al+Moosa+Tower+1%2C+Sheikh+Zayed+Road%2C+Dubai&destination_place_id=ChIJs57i-LhDXz4R3ADMkpobs0Q",
    reviewsUrl: "https://www.google.com/maps/place/?q=place_id%3AChIJs57i-LhDXz4R3ADMkpobs0Q",
    writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJs57i-LhDXz4R3ADMkpobs0Q",
  },
  {
    name: "Ignite Training Institute, JLT",
    area: "Jumeirah Lake Towers",
    address: "Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers, Dubai, United Arab Emirates",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ignite+Training+Institute+-+Tutors+In+JLT+Dubai%2C+Tiffany+Tower%2C+Cluster+W%2C+Dubai&destination_place_id=ChIJyXrTXsptXz4Rd6QlegZ6lkk",
    reviewsUrl: "https://www.google.com/maps/place/?q=place_id%3AChIJyXrTXsptXz4Rd6QlegZ6lkk",
    writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJyXrTXsptXz4Rd6QlegZ6lkk",
  },
];

const footerColumns = [
  { title: "Courses", links: [
    ["A Level Tutors in Dubai", "/courses/a-level-tutors-in-dubai"],
    ["IGCSE Tutors in Dubai", "/courses/igcse-tutors-in-dubai"],
    ["IBDP Tutors in Dubai", "/courses/ibdp-tutors-in-dubai"],
    ["MYP Tutors in Dubai", "/courses/myp-tutors-in-dubai"],
    ["British Curriculum Tutors", "/british-curriculum-tutors-in-dubai"],
    ["IB Tutors", "/ib-curriculum-tutors-in-dubai"],
    ["Homeschooling / Private Candidacy", "/courses/homeschooling-tutors-in-dubai"],
  ]},
  { title: "Tests", links: [
    ["ACT Prep", "/act-tutors-in-dubai"],
    ["Advanced Placements (AP)", "/advanced-placements-tutors-in-dubai"],
  ]},
  { title: "Subjects", links: [
    ["Maths Tutors", "/maths-tutor-in-dubai"],
    ["Physics Tutors", "/physics-tutor-in-dubai"],
    ["Chemistry Tutors", "/chemistry-tutor-in-dubai"],
    ["Biology Tutors", "/biology-tutor-in-dubai"],
    ["Economics Tutors", "/economics-tutor-in-dubai"],
    ["Business Studies Tutors", "/business-studies-tutor-in-dubai"],
  ]},
  { title: "More Subjects", links: [
    ["Accounting Tutors", "/accounting-tutor-in-dubai"],
    ["Computer Science Tutors", "/computer-science-tutor-in-dubai"],
    ["Psychology Tutors", "/psychology-tutor-in-dubai"],
    ["English Tutors", "/english-tutor-in-dubai"],
    ["French Tutors", "/french-tutor-in-dubai"],
    ["Spanish Tutors", "/spanish-tutor-in-dubai"],
  ]},
  { title: "About Ignite", links: [
    ["About Us", "/about-us"], ["Our Team", "/our-team"],
    ["Free Demo Class", "/join-free-demo-class"], ["Blog", "/blog"],
    ["Contact Us", "/contact-us"], ["Career", "/career"],
  ]},
];

export default function Footer() {
  const router = useRouter();
  const copyPages = ["/courses/ibdp-tutors-in-dubai-copy", "/british-curriculum-tutors-in-dubai-copy", "/courses/myp-tutors-in-dubai-copy", "/courses/igcse-tutors-in-dubai-copy", "/courses/a-level-tutors-in-dubai-copy", "/join-free-demo-class-copy"];
  const isCopyPage = copyPages.includes(router.pathname);
  const phoneNumberObj = { href: isCopyPage ? "tel:+971588589958" : "tel:+971568357374", display: isCopyPage ? "+971 58 858 9958" : "+971 56 835 7374" };
  const emailObj = { href: isCopyPage ? "mailto:connect@ignitetraininginstitute.com" : "mailto:hello@ignitetraininginstitute.com", display: isCopyPage ? "connect@ignitetraininginstitute.com" : "hello@ignitetraininginstitute.com" };
  const whatsappNumber = isCopyPage ? "971588589958" : "971568357374";
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const isReportingRef = useRef(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/submit-form", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, formType: "NEWSLETTER", pageinfo: `URL: ${window.location.href} | Newsletter Subscription` }) });
      const result = await response.json();
      if (response.ok && result.success && result.redirectUrl) window.location.href = result.redirectUrl;
      else { setLoading(false); setStatus("error"); }
    } catch (error) { console.error("Newsletter error:", error); setLoading(false); setStatus("error"); }
  };

  const handleCallClick = (event) => {
    if (isReportingRef.current) return;
    event.preventDefault();
    const url = phoneNumberObj.href;
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      isReportingRef.current = true;
      window.gtag("event", "conversion", { send_to: "AW-844959495/LGsACP7qiP4bEIee9JID", event_callback: () => { window.location.href = url; isReportingRef.current = false; } });
      setTimeout(() => { if (isReportingRef.current) { window.location.href = url; isReportingRef.current = false; } }, 500);
    } else window.location.href = url;
  };

  return (
    <footer className="siteFooter">
      <section className="newsletterSection">
        <div className="newsletterInner">
          <p className="SubHeading newsletterEyebrow">Revolutionizing The Way Students Learn</p>
          <h2 className="testTitle newsletterTitle">Subscribe To Our <span className="highlight">Newsletter</span></h2>
          <p className="newsletterCopy">Study tips, exam strategies and academic insights, straight to your inbox.</p>
          <form className="newsletterForm" onSubmit={handleSubmit}>
            <label className="srOnly" htmlFor="footer-newsletter-email">Email address</label>
            <input id="footer-newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} required />
            <button type="submit" disabled={loading}><span>{loading ? "Subscribing" : "Subscribe"}</span><img className="footerButtonArrow" src="/images/right-arrow-skyblue.webp" alt="" width="30" height="30" aria-hidden="true" /></button>
          </form>
          {status === "error" && <p className="newsletterError">Something went wrong. Please try again.</p>}
        </div>
      </section>

      <section className="footerBody">
        <div className="footerContainer">
          <div className="footerIntroGrid">
            <div className="brandColumn">
              <a href="/" className="footerLogo" aria-label="Ignite Training Institute home"><Image src="/images/logo.webp" alt="Ignite Training Institute" width={150} height={62} /></a>
              <p>Online and in-person tutoring in Dubai for IB, IGCSE, A Level, AP, ACT and homeschooling students.</p>
              <a className="googleRating" href={locations[0].reviewsUrl} target="_blank" rel="noreferrer"><span className="stars" aria-label="5 stars">★★★★★</span><strong>4.9</strong><span>on Google</span></a>
              <div className="socialLinks" aria-label="Social media links">
                <a href="https://www.facebook.com/ignitetraininginstitute" target="_blank" rel="noreferrer" aria-label="Facebook"><img src="/images/fb-footer.webp" alt="" width="36" height="36" /></a>
                <a href="https://www.linkedin.com/company/ignite-training-institute" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/images/linkedin-footer.webp" alt="" width="36" height="36" /></a>
                <a href="https://www.instagram.com/ignitetraininginstitute/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/images/insta-footer.webp" alt="" width="36" height="36" /></a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="/images/whatsapp-footer.webp" alt="" width="36" height="36" /></a>
              </div>
            </div>

            <div className="locationsColumn">
              <h3>Find Us On Google</h3>
              <div className="locationCards">
                {locations.map((location) => <article className="locationCard" key={location.area}>
                  <h4>{location.name}</h4><p className="locationArea">{location.area}</p><address>{location.address}</address>
                  <div className="locationActions"><a href={location.directionsUrl} target="_blank" rel="noreferrer">Get directions</a><a href={location.reviewsUrl} target="_blank" rel="noreferrer">Read Google reviews</a><a href={location.writeReviewUrl} target="_blank" rel="noreferrer">Write a review</a></div>
                </article>)}
              </div>
            </div>

            <div className="contactColumn">
              <h3>Contact</h3>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg>
                  <a href={phoneNumberObj.href} onClick={handleCallClick}>{phoneNumberObj.display}</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6z"></path></svg>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp us</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>
                  <a href={emailObj.href}>{emailObj.display}</a>
                </li>
              </ul>
              <a className="demoButton" href="/join-free-demo-class"><span>Book A Free Demo</span><img className="footerButtonArrow" src="/images/right-arrow-blue.webp" alt="" width="30" height="30" aria-hidden="true" /></a>
            </div>
          </div>

          <nav className="footerNav" aria-label="Footer navigation">
            {footerColumns.map((column) => <div className="footerNavColumn" key={column.title}><h3>{column.title}</h3><ul>{column.links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>)}
          </nav>
          <div className="footerLegal"><p>© Ignite Training Institute. All rights reserved.</p><div><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div></div>
        </div>
      </section>

      <style jsx>{`
        .siteFooter{margin-top:80px}.newsletterSection{background:linear-gradient(135deg,#eef9ff 0%,#dceffc 100%);padding:74px 20px 78px}.newsletterInner{margin:0 auto;max-width:900px;text-align:center}.newsletterEyebrow{margin:0}.newsletterTitle{max-width:100%}.newsletterCopy{color:#3f5178;font-size:1rem;margin:17px 0 24px}.newsletterForm{display:flex;gap:10px;justify-content:center;margin:0 auto;max-width:590px}.newsletterForm input{background:#fff;border:1px solid #8fc4ff;border-radius:999px;color:#233467;flex:1;font-size:.95rem;min-width:0;outline:none;padding:15px 20px}.newsletterForm input:focus{border-color:#3f88ba;box-shadow:0 0 0 3px rgba(63,136,186,.12)}.newsletterForm button{align-items:center;align-self:center;background:linear-gradient(90deg,#161664,#3f88ba);border:0;border-radius:40px;color:#fff;cursor:pointer;display:flex;font-size:1rem;font-weight:700;gap:20px;height:50px;justify-content:space-between;letter-spacing:normal;padding:10px 10px 10px 15px;text-transform:uppercase}.newsletterForm button:disabled{cursor:wait;opacity:.75}.footerButtonArrow{display:block;flex:0 0 30px;height:30px;object-fit:contain;width:30px}.newsletterError{color:#b42318;font-size:.85rem;margin:12px 0 0}.srOnly{clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}
        .footerBody{background:linear-gradient(to left,var(--lightgreen-color) 0%,#003e37 100%);color:#fff;padding:60px 20px 20px}.footerContainer{margin:0 auto;width:90%}.footerIntroGrid{display:grid;gap:48px;grid-template-columns:minmax(220px,.9fr) minmax(410px,1.5fr) minmax(240px,.9fr)}.footerLogo{background:#fff;border-radius:12px;display:inline-flex;padding:6px 10px}.footerLogo :global(img){height:auto;width:128px}.brandColumn>p{color:rgba(255,255,255,.78);font-size:.92rem;line-height:1.6;margin:18px 0;max-width:330px}.googleRating{align-items:center;color:#fff;display:flex;font-size:.9rem;gap:8px;text-decoration:none}.stars{color:#ffc21a;letter-spacing:2px}.socialLinks{align-items:center;display:flex;gap:12px;margin-top:20px}.socialLinks a{display:inline-flex;line-height:0;transition:opacity .2s ease,transform .2s ease}.socialLinks a:hover{opacity:.85;transform:translateY(-2px)}.socialLinks img{display:block;height:36px;object-fit:contain;width:36px}.locationsColumn>h3,.contactColumn>h3,.footerNavColumn h3{color:#fff;font-size:.82rem;font-weight:700;letter-spacing:.2em;margin:0 0 16px;text-transform:uppercase}.locationCards{display:grid;gap:14px}.locationCard{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.28);border-radius:18px;padding:20px}.locationCard h4{color:#fff;font-size:1rem;font-weight:700;margin:0 0 8px}.locationArea{color:#a6eac7;font-size:.72rem;font-weight:700;letter-spacing:.12em;margin:0 0 12px;text-transform:uppercase}.locationCard address{color:rgba(255,255,255,.76);font-size:.86rem;font-style:normal;line-height:1.55;margin:0}.locationActions{display:flex;flex-wrap:wrap;gap:12px 18px;margin-top:12px}.locationActions a{border-bottom:1px solid rgba(255,255,255,.48);color:#fff;font-size:.82rem;font-weight:600;padding-bottom:3px;text-decoration:none}.contactColumn ul,.footerNavColumn ul{list-style:none;margin:0;padding:0}.contactColumn li{align-items:flex-start;color:rgba(255,255,255,.78);display:flex;font-size:.88rem;gap:10px;margin-bottom:13px}.contactColumn li svg{flex:0 0 14px;margin-top:2px}.contactColumn a{color:inherit;overflow-wrap:anywhere;text-decoration:none}.demoButton{align-items:center;background:linear-gradient(90deg,#d9efff,#bcdfff);border-radius:40px;color:#161664!important;display:inline-flex;font-size:1rem;font-weight:700;gap:20px;justify-content:space-between;letter-spacing:normal;margin-top:8px;padding:10px 10px 10px 15px;text-transform:uppercase}
        .footerNav{border-top:1px solid rgba(255,255,255,.2);display:grid;gap:30px;grid-template-columns:1.1fr .9fr 1fr 1.1fr 1fr;margin-top:48px;padding:38px 0 32px}.footerNavColumn li{margin-bottom:10px}.footerNavColumn a{color:rgba(255,255,255,.76);font-size:.88rem;line-height:1.45;text-decoration:none;transition:color .2s ease}.footerNavColumn a:hover,.contactColumn a:hover,.locationActions a:hover{color:#a6eac7}.footerLegal{align-items:center;border-top:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.62);display:flex;font-size:.8rem;justify-content:space-between;padding:20px 0 0}.footerLegal p{margin:0}.footerLegal div{display:flex;gap:24px}.footerLegal a{color:inherit;text-decoration:none}
        @media(min-width:1800px){.footerIntroGrid{gap:30px;grid-template-columns:minmax(0,1fr) minmax(0,2fr) minmax(0,1fr)}.brandColumn{justify-self:start}.locationsColumn{width:100%}.locationCards{gap:30px;grid-template-columns:repeat(2,minmax(0,1fr))}.contactColumn{justify-self:end;min-width:300px}.footerNavColumn{justify-self:center;width:max-content}.footerNavColumn:first-child{justify-self:start}.footerNavColumn:last-child{justify-self:end}}
        @media(max-width:1050px){.footerIntroGrid{grid-template-columns:1fr 1.5fr}.contactColumn{grid-column:1/-1}.contactColumn ul{display:flex;flex-wrap:wrap;gap:10px 24px}.footerNav{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:767px){.siteFooter{margin-top:60px}.siteFooter .newsletterSection{padding:52px 20px 56px!important}.newsletterInner{max-width:100%;width:100%}.newsletterTitle{margin-left:auto;margin-right:auto;max-width:340px}.newsletterCopy{font-size:.92rem;line-height:1.55;margin:14px auto 22px;max-width:350px}.newsletterForm{flex-direction:column;max-width:100%;width:100%}.newsletterForm input{box-sizing:border-box;width:100%}.newsletterForm button{font-size:1rem;gap:15px;height:50px;justify-content:space-between;margin:0 auto;padding:10px 10px 10px 15px;width:215px}.newsletterForm .footerButtonArrow{flex-basis:30px;height:30px;width:30px}.footerBody{padding:46px 20px 20px}.footerIntroGrid{grid-template-columns:1fr}.contactColumn{grid-column:auto}.contactColumn ul{display:block}.footerNav{grid-template-columns:repeat(2,1fr)}.footerLegal{align-items:flex-start;flex-direction:column;gap:14px}}
        @media(max-width:480px){.footerNav{grid-template-columns:1fr}.locationCard{padding:18px 16px}.locationActions{align-items:flex-start;flex-direction:column}.footerLegal div{flex-direction:column;gap:8px}}
      `}</style>
    </footer>
  );
}
