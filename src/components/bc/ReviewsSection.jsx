import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("bc");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} />;
}
