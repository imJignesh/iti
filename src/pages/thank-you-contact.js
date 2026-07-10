import Script from "next/script";
// 1. Import the reusable JsonLd component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";


// 1. ACCEPT the headerHeight prop
const About = ({ headerHeight }) => {

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


  return (
    <>
      <SEO title="About Ignite Training Institute: Expert Tutors In Dubai"
        description="Learn about Ignite Training Institute, Dubai's leading tutoring center for IB, IGCSE, A-Levels, & AP. Our experienced tutors and proven methodology ensure academic success." />
      {/* Event snippet for Sign-up - new website main form conversion page */}
      <Script
        id="google-conversion-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-844959495/6OBkCIqSlP4bEIee9JID'});`,
        }}
      />
      {/* 2. RENDER the JsonLd component and pass the schema data */}
      <JsonLd schema={educationalOrganizationSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        className=" innerpage"
        style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
      >
        <section></section>
        <section data-scroll-section>

          <div className="container">
            <div className="achievementsHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 class="courseTitle">Thank you for filling out the contact form. Our team will get in touch with you within 24 hours.</h3>
                <h3 class="courseTitle">For any urgency, please feel free to Call / WhatsApp us.</h3>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;