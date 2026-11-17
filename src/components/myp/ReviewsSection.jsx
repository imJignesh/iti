import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const reviewsData = getReviewsData("myp");

export default function Testimonial() {
  return <ReviewsSection testimonials={reviewsData} title="IGNITE TRAINING INSTITUTE: MYP TUTORS IN DUBAI" />;
}
