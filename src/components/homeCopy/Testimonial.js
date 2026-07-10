import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const testimonialData = getReviewsData("homeCopy");

export default function Testimonial() {
  return <ReviewsSection testimonials={testimonialData} />;
}
