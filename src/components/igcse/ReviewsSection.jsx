import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("igcse");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} title="IGNITE TRAINING INSTITUTE: IGCSE TUTORS IN DUBAI" />;
}
