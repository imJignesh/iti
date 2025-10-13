import React from "react";
// Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/contact/Banner";


// 1. Accept the headerHeight prop
const Contact = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 JSON-LD SCHEMA DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const educationalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/",
        "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
        "description": "Ignite Training Institute offers expert tutoring in Dubai for IB, IGCSE, A-Levels, AP, SAT, ACT, MYP, and homeschooling programs. With qualified tutors and personalized learning, Ignite supports students in achieving academic success.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1",
            "addressLocality": "Dubai",
            "addressCountry": "United Arab Emirates"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971588589958",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.instagram.com/ignitetraininginstitute/",
            "https://ae.linkedin.com/company/ignite-training-institute",
            "https://www.facebook.com/ignitetraininginstitute"
        ]
    };

    // 2. The Locomotive Scroll refs and useEffect are correctly REMOVED 
    //    as the component is using a global scroll provider (implied).

    return (
        <>
            {/* 👇 SCHEMA INJECTION: Use the reusable component here */}
            <JsonLd schema={educationalOrganizationSchema} />

            {/* 3. Apply the headerHeight as paddingTop to fix the sticky header issue. */}
            <div style={{ paddingTop: `${headerHeight}px` }}>
                <section data-scroll-section>
                    <ContactBanner />
                </section>

                <section className="highlight-banners" data-scroll-section>
                    <div className="banner green-banner">
                        <span className="text-normal">WANNA EXCEL</span>
                        <span className="text-bold">ACADEMICALLY?</span>
                    </div>

                    <div className="banner blue-banner">
                        <span className="text-normal">LOOKING FOR BEST TUTORS</span>
                        <span className="text-bold">TO LEARN?</span>
                    </div>
                </section>
                <section className="contact-form" data-scroll-section>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label>NAME</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>EMAIL</label>
                                <input type="email" placeholder="" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>CONTACT</label>
                                <div className="phone-input">
                                    <span className="flag">🇦🇪</span>
                                    <input type="tel" placeholder="+971" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>GRADE</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>SCHOOL</label>
                            <input type="text" placeholder="" />
                        </div>

                        <div className="form-group full-width">
                            <label>MESSAGE (OPTIONAL)</label>
                            <textarea rows="3"></textarea>
                        </div>

                        <div className="form-group full-width">
                            <label>TESTS / COURSES</label>
                            <select>
                                <option value="">Select</option>
                                <option>SAT</option>
                                <option>IELTS</option>
                                <option>TOEFL</option>
                            </select>
                        </div>

                        <div className="form-group full-width">
                            <label>COURSES</label>
                            <select>
                                <option value="">Select</option>
                                <option>Math</option>
                                <option>Science</option>
                                <option>English</option>
                            </select>
                        </div>

                        <div className="form-group full-width">
                            <label>YOU HEARD ABOUT US THROUGH?</label>
                            <select>
                                <option value="">Select</option>
                                <option>Friends</option>
                                <option>Social Media</option>
                                <option>Google Search</option>
                            </select>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                SUBMIT <span className="arrow"><img src="/images/right-arrow-skyblue.png" alt="arrow" /></span>
                            </button>
                        </div>
                    </form>
                </section>
                <section className="contact-container" data-scroll-section>

                    <div className="contact-grid">
                        <div className="contact-card green">
                            <img src="/images/email.png" alt="Email Icon" />
                            <h3>EMAIL US</h3>
                            <p>Email us now for expert tutoring and tailored growth solutions.</p>
                            <a href="mailto:hello@ignitetraininginstitute.com">hello@ignitetraininginstitute.com</a>
                        </div>

                        <div className="contact-card green">
                            <img src="/images/call.png" alt="Phone Icon" />
                            <h3>CALL US</h3>
                            <p>Call us today for personalised tutoring and transformative growth.</p>
                            <a href="tel:+971568357374">+971 56835 7374</a>
                        </div>
                    </div>


                    <div className="contact-visit blue">
                        <img src="/images/location-map.png" alt="Location Icon" />
                        <h3>VISIT US</h3>
                        <p>Visit us for personalized coaching and guidance toward lasting success!</p>
                        <address>
                            1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai <br /><br />
                            Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates
                        </address>

                    </div>
                </section>
                <section className="map" data-scroll-section>
                    <iframe
                        // NOTE: Changed to a safe, valid Google Maps URL format for embedding if necessary
                        src="https://maps.google.com/maps?q=Al%20Moosa%20Tower%201,%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </div >
        </>
    );
};

export default Contact;