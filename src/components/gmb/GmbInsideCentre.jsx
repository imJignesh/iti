import CourseGallery from "@/components/shared/CourseGallery";
import { getCourseGalleryData } from "@/data/coursePageSectionsConfig";

// Same photos and layout as the homepage gallery, with this page's own heading and neutral alt text.
const ALT_TEXT = {
  "classroom-team": "Ignite tutors beside a classroom smart board",
  "jlt-reception": "Reception desk at Ignite Training Institute",
  "ignite-team-group": "Ignite Training Institute team",
};

const home = getCourseGalleryData("home");

const CONFIG = {
  ...home,
  id: "szr-gallery",
  subHeading: "Inside the Centre",
  titlePrefix: "A look at our",
  titleHighlight: "Sheikh Zayed Road learning space",
  description:
    "Our tutoring centre in Al Moosa Tower offers calm, purpose-built spaces for focused learning and individual attention.",
  dialogLabel: "Sheikh Zayed Road centre photo gallery",
  images: home.images.map((image) => {
    const name = image.src.split("/").pop().replace(".webp", "");
    return ALT_TEXT[name] ? { ...image, alt: ALT_TEXT[name] } : image;
  }),
};

export default function GmbInsideCentre() {
  return <CourseGallery config={CONFIG} />;
}
