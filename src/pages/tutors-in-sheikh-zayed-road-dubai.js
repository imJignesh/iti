import SEO from "@/components/SEO";
import GmbHero from "@/components/gmb/GmbHero";
import GmbWhatWeTeach from "@/components/gmb/GmbWhatWeTeach";
import GmbHowItWorks from "@/components/gmb/GmbHowItWorks";
import GmbTutors from "@/components/gmb/GmbTutors";
import LazySection from "@/components/LazySection";
import GmbResults from "@/components/gmb/GmbResults";
import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";
import GmbInsideCentre from "@/components/gmb/GmbInsideCentre";
import GmbFindUs from "@/components/gmb/GmbFindUs";
import FaqSection from "@/components/shared/FaqSection";
import GmbFormSection from "@/components/gmb/GmbFormSection";
import JsonLd from "@/components/JsonLd";

const gmbReviews = getReviewsData("homeCopy");

const gmbFaqs = [
  {
    question: "Where is your tuition centre in Sheikh Zayed Road, Dubai?",
    answer: "Our tuition centre is at Al Moosa Tower 1, Office 1503, on Sheikh Zayed Road. It is a short walk from Emirates Towers Metro and close to DIFC, Trade Centre and Business Bay. See the map on this page for directions.",
  },
  {
    question: "Is there a tuition centre near Emirates Towers?",
    answer: "Yes. We offer tuition near Emirates Towers, with lessons in person at Al Moosa Tower or online. Students from DIFC, Trade Centre and Business Bay can reach us easily by Metro or car.",
  },
  {
    question: "Which curricula do your tutors in Sheikh Zayed Road, Dubai teach?",
    answer: "Our tutors in Sheikh Zayed Road, Dubai teach IGCSE, A Level, IBDP, IB MYP, AP and more. Choose your curriculum and subject to see the tutors, topics and exam preparation for each.",
  },
  {
    question: "How much does tutoring cost in Dubai?",
    answer: "Fees depend on the curriculum, subject, year group and whether lessons are 1:1 or in a small group. Book a free demo class and we will share a clear fee for your child’s needs, with no obligation.",
  },
  {
    question: "Do you offer a free demo class?",
    answer: "Yes. Every student can start with a free demo class, in person at our tutoring centre in Al Moosa Tower or online. Tell us the curriculum, subject and year, and we will confirm a slot.",
  },
  {
    question: "Can my child study online instead of coming to the centre?",
    answer: "Yes. All subjects are available online as well as at our local tutoring centre, with the same tutors and the same progress tracking.",
  },
  {
    question: "How do I find a good tuition centre in Dubai?",
    answer: "Look for tutors who teach your exact board and subject, a level check to find gaps, small groups or 1:1 teaching, and regular progress updates. Our tuition centre on Sheikh Zayed Road offers all of these, and we are rated 4.9 from 96 Google reviews.",
  },
  {
    question: "How do you track my child’s progress?",
    answer: "Parents receive regular feedback, and we compare mock results against the target grade set after the level check. This shows clearly where your child is improving and what to work on next.",
  },
];

const pageUrl = "https://ignitetraininginstitute.com/tutors-in-sheikh-zayed-road-dubai";

const gmbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Tuition Centre in Sheikh Zayed Road Dubai | Ignite",
      description: "Ignite Training Institute is a tuition centre in Sheikh Zayed Road, Dubai, at Al Moosa Tower 1, Office 1503, near Emirates Towers Metro. Our tutors in Sheikh Zayed Road, Dubai teach IB Diploma, IB MYP, IGCSE, A Level, AP and ACT, and support homeschooled students and private candidates, one-to-one or in small groups, in person at the centre or online. Students from DIFC, Trade Centre and Business Bay can find tuition near Emirates Towers by Metro or car. Every student starts with a free demo class and a level check, then follows a clear study plan with regular feedback and mock results compared against a target grade.",
      isPartOf: { "@id": "https://ignitetraininginstitute.com/#website" },
      about: { "@id": "https://ignitetraininginstitute.com/#localbusiness-szr" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      inLanguage: "en",
      mainEntity: { "@id": "https://ignitetraininginstitute.com/#localbusiness-szr" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ignitetraininginstitute.com/" },
        { "@type": "ListItem", position: 2, name: "Tuition Centre in Sheikh Zayed Road", item: pageUrl },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Tuition and tutoring in Sheikh Zayed Road, Dubai",
      description: "Our tutoring centre in Al Moosa Tower offers tutoring in Sheikh Zayed Road, Dubai for students following IB, IGCSE, A Level, AP and ACT courses. Lessons run one-to-one or in small groups, in person at Al Moosa Tower 1, Office 1503, close to Emirates Towers Metro, or online with the same tutors and the same progress tracking. Parents book a free demo class, tell us the curriculum, subject and year, and meet a tutor who teaches their exact board. A level check finds gaps and sets a realistic target grade, and regular feedback and mock results show how the student is improving.",
      url: pageUrl,
      serviceType: "Tutoring",
      provider: { "@id": "https://ignitetraininginstitute.com/#localbusiness-szr" },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Sheikh Zayed Road" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: gmbFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function GmbLandingPage() {
  return (
    <>
      <SEO
        title="Tuition Centre in Sheikh Zayed Road Dubai | Ignite"
        description="Tuition centre in Sheikh Zayed Road, Dubai, near Emirates Towers Metro. IB, IGCSE, A-Level and AP tutors, online or in person. Book a free demo class."
        url={pageUrl}
      />
      <JsonLd schema={gmbSchema} />

      <main className="gmbLandingPage innerpage page-content-padding" aria-label="GMB landing page">
        <GmbHero />
        <GmbWhatWeTeach />
        <GmbHowItWorks />
        <LazySection>
          <div data-scroll-section>
            <GmbTutors />
          </div>
        </LazySection>
        <LazySection>
          <div className="gmbResultsSection" data-scroll-section>
            <GmbResults />
          </div>
        </LazySection>
        <LazySection>
          <div className="gmbReviewsSection" data-scroll-section>
            <ReviewsSection testimonials={gmbReviews} />
          </div>
        </LazySection>
        <LazySection>
          <div className="gmbInsideCentreSection" data-scroll-section>
            <GmbInsideCentre />
          </div>
        </LazySection>
        <LazySection>
          <div className="gmbFindUsSection" data-scroll-section>
            <GmbFindUs />
          </div>
        </LazySection>
        <LazySection>
          <section className="gmbFaqSection" data-scroll-section>
            <FaqSection
              subHeading="FAQs"
              title={'Common Questions About Our Tutors in <highlight>Sheikh Zayed Road, Dubai</highlight>'}
              description="Got questions about tuition near Emirates Towers? Read quick answers on location, fees, free demo classes and curricula before you book."
              faqData={gmbFaqs}
            />
          </section>
        </LazySection>
        <LazySection>
          <GmbFormSection />
        </LazySection>
      </main>

      <style jsx>{`
        .gmbLandingPage {
          min-height: 60vh;
        }
      `}</style>

      <style jsx global>{`
        .gmbLandingPage .trainersSection .fade-in-section,
        .gmbLandingPage .gmbResultsSection .fade-in-section,
        .gmbLandingPage .gmbReviewsSection .fade-in-section,
        .gmbLandingPage .gmbInsideCentreSection .fade-in-section,
        .gmbLandingPage .gmbFindUsSection .fade-in-section,
        .gmbLandingPage .gmbFaqSection .fade-in-section {
          opacity: 1;
          visibility: visible;
          transform: none;
        }
      `}</style>
    </>
  );
}
