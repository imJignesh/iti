import Script from "next/script";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const ThankYouGmb = ({ headerHeight }) => {
  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Ignite Training Institute, JLT",
    url: "https://ignitetraininginstitute.com/gmb",
    logo: "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
    description: "Ignite Training Institute provides personalised tutoring at its JLT centre in Dubai.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tiffany Tower, Level 11, Cluster W, Jumeirah Lakes Towers",
      addressLocality: "Dubai",
      addressCountry: "United Arab Emirates",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971561890917",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  };

  return (
    <>
      <SEO
        title="Thank You | Ignite Training Institute JLT"
        description="Thank you for requesting a free demo at Ignite Training Institute's JLT centre. Our academic team will contact you shortly."
      />
      <Script
        id="google-conversion-tracking-gmb"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-844959495/6OBkCIqSlP4bEIee9JID'});`,
        }}
      />
      <JsonLd schema={educationalOrganizationSchema} />

      <div className="innerpage" style={{ paddingTop: `${headerHeight}px` }}>
        <section></section>
        <section data-scroll-section>
          <div className="container">
            <div className="achievementsHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ "--reveal-delay": "0.1s" }}
              >
                <h1 className="courseTitle">Thank you for booking a free demo at our JLT centre.</h1>
                <h3 className="courseTitle">Our academic team will contact you within 24 hours to confirm the right tutor and a suitable demo slot.</h3>
                <h3 className="courseTitle">For anything urgent, please call or WhatsApp us.</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThankYouGmb;
