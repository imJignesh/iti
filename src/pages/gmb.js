import Head from "next/head";
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

const gmbReviews = getReviewsData("homeCopy");

const gmbFaqs = [
  {
    question: "Where is the Ignite centre in JLT?",
    answer: "We are in Tiffany Tower, Level 11, Cluster W, Jumeirah Lakes Towers, Dubai.",
  },
  {
    question: "What are your opening hours?",
    answer: "The JLT centre is open every day from 9 am to 9 pm, according to our Google profile.",
  },
  {
    question: "Do you offer one-to-one and group classes?",
    answer: "Yes. You can choose one-to-one tutoring or a small group, at the centre or online.",
  },
  {
    question: "Which curricula do you cover?",
    answer: "IB Diploma and MYP, IGCSE and GCSE, A-Levels, AP, ACT and homeschooling support.",
  },
  {
    question: "How do I book a demo class?",
    answer: "Use the form below, message us on WhatsApp at +971 56 835 7374, or call the centre.",
  },
  {
    question: "How much do private tutors in JLT charge?",
    answer: "Fees depend on the subject, level and format. Send us your requirement and we will quote you.",
  },
];

export default function GmbLandingPage() {
  return (
    <>
      <Head>
        <title>Ignite Training Institute</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="gmbLandingPage innerpage page-content-padding" aria-label="GMB landing page">
        <GmbHero />
        <GmbWhatWeTeach />
        <GmbHowItWorks />
        <LazySection>
          <section data-scroll-section>
            <GmbTutors />
          </section>
        </LazySection>
        <LazySection>
          <section className="gmbResultsSection" data-scroll-section>
            <GmbResults />
          </section>
        </LazySection>
        <LazySection>
          <section className="gmbReviewsSection" data-scroll-section>
            <ReviewsSection testimonials={gmbReviews} />
          </section>
        </LazySection>
        <LazySection>
          <section className="gmbInsideCentreSection" data-scroll-section>
            <GmbInsideCentre />
          </section>
        </LazySection>
        <LazySection>
          <section className="gmbFindUsSection" data-scroll-section>
            <GmbFindUs />
          </section>
        </LazySection>
        <LazySection>
          <section className="gmbFaqSection" data-scroll-section>
            <FaqSection
              subHeading="FAQs"
              title={'Questions about tutoring at our <highlight>JLT centre</highlight>'}
              description="Everything families need to know about visiting the centre and starting tuition."
              faqData={gmbFaqs}
            />
          </section>
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
