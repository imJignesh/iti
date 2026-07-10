import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("ap");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} />;
}
