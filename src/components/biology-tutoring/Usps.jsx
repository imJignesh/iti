import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("biology-tutoring");

export default function BiologyTutorsUsps() {
  return <Usps config={uspData} />;
                >
    KNOW MORE ABOUT IGNITE{ " " }
  <Image
    src="/images/right-arrow-blue.webp"
    width={40}
    height={40}
    quality={100}
    alt="right arrow"
  />
                </a >
              </div >
            </div >
    <div className="col-lg-7">
      <div className={styles.uspRight}>
        {uspDataRows.map((row, index) => (
          // Apply local module class
          <div key={index} className={styles.uspSlide}>
            {row.map((usp, i) => (
              // Apply local module class
              <div key={i} className={`fade-in-section ${styles.uspItem}`}
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat>
                <div className={styles.uspNumber}>{usp.number}</div>
                <div className={styles.uspIconCircle}>
                  <img
                    src={usp.icon}
                    alt={usp.title}
                    className={styles.uspIcon}
                    width={usp.width}
                    height={usp.height}
                  />
                </div>
                <div className={styles.uspContent}>
                  <h3 className={styles.uspItemTitle}>{usp.title}</h3>
                  <div className={styles.uspItemDesc}>{usp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
          </div >
        </div >
      </div >
    </>
  );
}