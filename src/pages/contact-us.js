import ContactBanner from "@/components/contact/Banner";


// 1. Accept the headerHeight prop
const Contact = ({ headerHeight }) => {
    // 2. REMOVED: All local Locomotive Scroll state/initialization:
    // const scrollRef = useRef(null);
    // const scrollInstanceRef = useRef(null);
    // REMOVED: The useEffect hook that initialized Locomotive Scroll.

    return (
        <>
            {/* 3. Apply the headerHeight as paddingTop to fix the sticky header issue.
                Removed ref={scrollRef} and data-scroll-container as the global provider manages scrolling. */}
            <div style={{ paddingTop: `${headerHeight}px` }}>
                <section data-scroll-section>
                    <ContactBanner />
                </section>

                <section class="highlight-banners" data-scroll-section>
                    <div class="banner green-banner">
                        <span class="text-normal">WANNA EXCEL</span>
                        <span class="text-bold">ACADEMICALLY?</span>
                    </div>

                    <div class="banner blue-banner">
                        <span class="text-normal">LOOKING FOR BEST TUTORS</span>
                        <span class="text-bold">TO LEARN?</span>
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
                <section class="contact-container" data-scroll-section>

                    <div class="contact-grid">
                        <div class="contact-card green">
                            <img src="/images/email.png" alt="Email Icon" />
                            <h3>EMAIL US</h3>
                            <p>Email us now for expert tutoring and tailored growth solutions.</p>
                            <a href="mailto:hello@ignitetraininginstitute.com">hello@ignitetraininginstitute.com</a>
                        </div>

                        <div class="contact-card green">
                            <img src="/images/call.png" alt="Phone Icon" />
                            <h3>CALL US</h3>
                            <p>Call us today for personalised tutoring and transformative growth.</p>
                            <a href="tel:+971568357374">+971 56835 7374</a>
                        </div>
                    </div>


                    <div class="contact-visit blue">
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.729996117684!2d55.144951987411794!3d25.07713897929576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dca5ed37ac9%3A0x49967a067a25a477!2sIgnite%20Training%20Institute%20-%20Tutors%20In%20JLT%20Dubai!5e0!3m2!1sen!2sin!4v1756382145335!5m2!1sen!2sin"
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