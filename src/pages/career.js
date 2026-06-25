import CareersBanner from '@/components/career/Banner';
import CareerForm from '@/components/career/CareerForm';
import IgniteCareerCard from '@/components/career/IgniteCareerCard';
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
// 1. ACCEPT the headerHeight prop
const act = ({ headerHeight }) => {

  return (
    <>
      <SEO title="Career - Ignite Training Institute l Tutor Jobs In Dubai"
        url="https://ignitetraininginstitute.com/career"
        description="Join Ignite’s team of expert tutors in Dubai. Explore tutoring jobs, growth opportunities & benefits while helping students achieve academic success" />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}

      <div className='overflow-hidden innerpage page-content-padding'>
        <section data-scroll-section>
          <CareersBanner />
        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteCareerCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <CareerForm />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default act;