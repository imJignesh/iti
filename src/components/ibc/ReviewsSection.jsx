import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("ibc");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} />;
}
