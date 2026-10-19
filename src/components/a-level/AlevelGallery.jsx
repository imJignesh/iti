import { useEffect, useState } from "react";

// Replace these image paths with the final centre/classroom photographs when supplied.
// Keeping the full set here means the five-image preview and lightbox stay in sync.
const galleryImages = [
  { src: "/assets/aboutbanner.webp", alt: "Students learning at Ignite Training Institute" },
  { src: "/assets/subject-tutoring.webp", alt: "Focused A-Level tutoring session" },
  { src: "/assets/tutors.webp", alt: "Ignite tutors supporting students" },
  { src: "/assets/banner.webp", alt: "Students studying together at Ignite" },
  { src: "/assets/alevel_bg_main.webp", alt: "A-Level students in a guided lesson" },
  { src: "/assets/aboutbanner.webp", alt: "Students learning together at Ignite" },
  { src: "/assets/subject-tutoring.webp", alt: "One-to-one A-Level tutoring at Ignite" },
  { src: "/assets/tutors.webp", alt: "Expert tutors at Ignite Training Institute" },
  { src: "/assets/banner.webp", alt: "Collaborative learning at Ignite" },
  { src: "/assets/alevel_bg_main.webp", alt: "Guided A-Level study session" },
  { src: "/assets/aboutbanner.webp", alt: "Students working together in class" },
  { src: "/assets/subject-tutoring.webp", alt: "Personalised subject tutoring" },
  { src: "/assets/tutors.webp", alt: "Ignite teaching team" },
  { src: "/assets/banner.webp", alt: "Students studying at the centre" },
  { src: "/assets/alevel_bg_main.webp", alt: "Focused A-Level classroom learning" },
  { src: "/assets/aboutbanner.webp", alt: "A-Level students learning at Ignite" },
  { src: "/assets/subject-tutoring.webp", alt: "Individual academic support" },
  { src: "/assets/tutors.webp", alt: "Experienced Ignite tutors" },
  { src: "/assets/banner.webp", alt: "Active student learning" },
  { src: "/assets/alevel_bg_main.webp", alt: "A-Level lesson at Ignite" },
];

export default function AlevelGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const isOpen = activeIndex !== null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="aLevelGallery" aria-labelledby="a-level-gallery-title">
      <div className="container">
        <div className="galleryHeader text-center">
          <h2 className="SubHeading testSubheading">LIFE AT IGNITE</h2>
          <h3 id="a-level-gallery-title" className="testTitle">
            A Look Inside Our <span className="highlight">A-Level Classes</span>
          </h3>
          <p>
            Explore the focused lessons, guided practice and collaborative learning
            that help our A-Level students grow in confidence.
          </p>
        </div>

        <div className="galleryGrid">
          {galleryImages.slice(0, 5).map((image, index) => (
            <div
              className={`galleryItem galleryItem${index + 1}`}
              key={image.src}
            >
              <button
                className="photoButton"
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photo ${index + 1} of ${galleryImages.length}: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
              {index === 4 && !showAll && (
                <button
                  className="viewAll"
                  type="button"
                  onClick={() => setShowAll(true)}
                  aria-expanded={showAll}
                  aria-controls="a-level-full-gallery"
                >
                  <strong>+{galleryImages.length - 5}</strong>
                  <span>View all photos</span>
                </button>
              )}
              {index === 2 && !showAll && (
                <button
                  className="viewAll tabletViewAll"
                  type="button"
                  onClick={() => setShowAll(true)}
                  aria-expanded={showAll}
                  aria-controls="a-level-full-gallery"
                >
                  <strong>+{galleryImages.length - 3}</strong>
                  <span>View all photos</span>
                </button>
              )}
            </div>
          ))}
        </div>

        <div
          id="a-level-full-gallery"
          className={`expandedGallery ${showAll ? "expandedGalleryOpen" : ""}`}
          aria-hidden={!showAll}
        >
          <div className="expandedGrid">
            {galleryImages.slice(5).map((image, index) => {
              const imageIndex = index + 5;
              return (
                <button
                  className="expandedPhoto"
                  key={`${image.src}-${imageIndex}`}
                  type="button"
                  onClick={() => setActiveIndex(imageIndex)}
                  aria-label={`Open photo ${imageIndex + 1} of ${galleryImages.length}: ${image.alt}`}
                  tabIndex={showAll ? 0 : -1}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              );
            })}
          </div>
          <button
            className="showLess"
            type="button"
            onClick={() => setShowAll(false)}
            tabIndex={showAll ? 0 : -1}
          >
            Show fewer photos
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="A-Level photo gallery">
          <button className="lightboxBackdrop" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery" />
          <div className="lightboxContent">
            <button className="closeButton" type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery">×</button>
            <button className="navButton previousButton" type="button" onClick={showPrevious} aria-label="Previous photo">‹</button>
            <figure>
              <img src={galleryImages[activeIndex].src} alt={galleryImages[activeIndex].alt} />
              <figcaption>
                <span>{galleryImages[activeIndex].alt}</span>
                <span>{activeIndex + 1} / {galleryImages.length}</span>
              </figcaption>
            </figure>
            <button className="navButton nextButton" type="button" onClick={showNext} aria-label="Next photo">›</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .aLevelGallery {
          background: #f8fbff;
          padding: 80px 0;
        }

        .galleryHeader {
          margin: 0 auto 44px;
          max-width: 900px;
        }

        .galleryHeader :global(.testTitle) {
          margin-bottom: 18px;
        }

        .galleryHeader p {
          color: #4d5568;
          font-size: 1.08rem;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 760px;
        }

        .galleryGrid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .galleryItem {
          background: #161664;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }

        .galleryItem1 {
          grid-column: span 2;
          grid-row: 1 / 3;
        }

        .galleryItem:not(.galleryItem1) {
          aspect-ratio: 4 / 3;
        }

        .photoButton {
          background: transparent;
          border: 0;
          cursor: pointer;
          display: block;
          height: 100%;
          padding: 0;
          width: 100%;
        }

        .photoButton img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
          width: 100%;
        }

        .photoButton:hover img,
        .photoButton:focus-visible img {
          transform: scale(1.035);
        }

        .photoButton:focus-visible,
        .expandedPhoto:focus-visible {
          outline: 4px solid #00a491;
          outline-offset: -4px;
        }

        .viewAll {
          align-items: center;
          background: rgba(22, 22, 100, 0.76);
          color: #fff;
          display: flex;
          flex-direction: column;
          font-size: 0.92rem;
          inset: 0;
          justify-content: center;
          letter-spacing: 0.03em;
          position: absolute;
          text-transform: uppercase;
          border: 0;
          cursor: pointer;
          width: 100%;
        }

        .viewAll strong {
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 8px;
        }

        .tabletViewAll {
          display: none;
        }

        .expandedGallery {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
          transition: max-height 0.7s ease, opacity 0.35s ease, margin-top 0.45s ease;
        }

        .expandedGalleryOpen {
          margin-top: 14px;
          max-height: 3000px;
          opacity: 1;
          pointer-events: auto;
        }

        .expandedGrid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .expandedPhoto {
          background: #161664;
          border: 0;
          border-radius: 16px;
          cursor: pointer;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          padding: 0;
        }

        .expandedPhoto img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
          width: 100%;
        }

        .expandedPhoto:hover img,
        .expandedPhoto:focus-visible img {
          transform: scale(1.035);
        }

        .showLess {
          background: transparent;
          border: 1px solid #161664;
          border-radius: 30px;
          color: #161664;
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin: 24px auto 0;
          padding: 11px 22px;
          text-transform: uppercase;
        }

        .lightbox {
          align-items: center;
          display: flex;
          inset: 0;
          justify-content: center;
          padding: 28px;
          position: fixed;
          z-index: 10000;
        }

        .lightboxBackdrop {
          background: rgba(7, 11, 39, 0.94);
          border: 0;
          inset: 0;
          position: absolute;
        }

        .lightboxContent {
          align-items: center;
          display: flex;
          justify-content: center;
          max-height: 92vh;
          max-width: 1180px;
          position: relative;
          width: 100%;
          z-index: 1;
        }

        figure {
          margin: 0;
          max-width: min(960px, calc(100vw - 190px));
          width: 100%;
        }

        figure img {
          border-radius: 18px;
          display: block;
          height: min(72vh, 720px);
          object-fit: contain;
          width: 100%;
        }

        figcaption {
          color: #fff;
          display: flex;
          font-size: 0.95rem;
          gap: 20px;
          justify-content: space-between;
          margin-top: 14px;
        }

        .closeButton,
        .navButton {
          align-items: center;
          background: #fff;
          border: 0;
          border-radius: 50%;
          color: #161664;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        .closeButton {
          font-size: 2rem;
          height: 46px;
          line-height: 1;
          position: absolute;
          right: 0;
          top: -12px;
          width: 46px;
          z-index: 2;
        }

        .navButton {
          flex: 0 0 50px;
          font-size: 2.5rem;
          height: 50px;
          margin: 0 18px;
          padding-bottom: 5px;
          width: 50px;
        }

        @media (max-width: 991px) {
          .galleryGrid {
            gap: 14px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .galleryItem4,
          .galleryItem5 {
            display: none;
          }

          .galleryItem3 .viewAll {
            display: flex;
          }

          .tabletViewAll {
            display: flex;
          }

          .expandedGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .aLevelGallery {
            padding: 60px 0;
          }

          .galleryHeader {
            margin-bottom: 28px;
          }

          .galleryHeader :global(.testTitle) {
            margin-bottom: 14px;
          }

          .galleryHeader p {
            font-size: 0.96rem;
            line-height: 1.55;
            padding: 0 8px;
          }

          .galleryGrid {
            display: flex;
            gap: 12px;
            margin-right: calc(var(--bs-gutter-x, 1.5rem) * -0.5);
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }

          .galleryItem,
          .galleryItem4,
          .galleryItem5 {
            aspect-ratio: 4 / 3;
            display: block;
            flex: 0 0 78vw;
            height: auto;
            scroll-snap-align: start;
          }


          .tabletViewAll {
            display: none;
          }

          .expandedGalleryOpen {
            margin-top: 12px;
          }

          .expandedGrid {
            gap: 12px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .expandedPhoto {
            border-radius: 12px;
          }

          .galleryItem:not(:first-child) {
            flex-basis: 68vw;
          }

          .lightbox {
            padding: 16px;
          }

          .lightboxContent {
            padding-top: 54px;
          }

          figure {
            max-width: 100%;
          }

          figure img {
            height: 68vh;
          }

          figcaption {
            font-size: 0.78rem;
          }

          .closeButton {
            height: 42px;
            right: 0;
            top: 0;
            width: 42px;
          }

          .navButton {
            background: rgba(255, 255, 255, 0.9);
            height: 42px;
            margin: 0;
            position: absolute;
            top: 48%;
            width: 42px;
            z-index: 2;
          }

          .previousButton { left: 8px; }
          .nextButton { right: 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .photoButton img,
          .expandedPhoto img,
          .expandedGallery { transition: none; }
        }
      `}</style>
    </section>
  );
}
