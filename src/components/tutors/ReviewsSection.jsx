import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("tutors");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} />;
}
