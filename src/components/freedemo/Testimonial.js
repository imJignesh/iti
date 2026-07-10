import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const testimonialData = getReviewsData("freedemo");

export default function Testimonial() {
  return <ReviewsSection testimonials={testimonialData} />;
}
