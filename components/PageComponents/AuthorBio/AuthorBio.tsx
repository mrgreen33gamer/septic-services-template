// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wade Harmon",
  jobTitle: "Owner & Lead Septic Specialist",
  worksFor: {
    "@type": "Organization",
    name: "ClearFlow Septic",
    url: "https://www.clearflowseptic.com",
  },
  url: "https://www.clearflowseptic.com/about",
  sameAs: [
    "https://www.facebook.com/clearflowseptic",
    "https://www.clearflowseptic.com",
  ],
  knowsAbout: [
    "Septic Pumping",
    "Septic Installation",
    "Aerobic Systems",
    "Drain Field Repair",
    "Septic Inspections",
    "Central Texas Septic Service",
  ],
  description:
    "Owner of ClearFlow Septic in Waco, TX. 20+ years serving Central Texas homes, ranches, and parks. TCEQ-licensed · Clean Job Guarantee.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/home/welcome/hero-main.jpg",
  imageAlt = "Wade Harmon - Owner of ClearFlow Septic",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="About the owner">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={160}
            height={160}
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <span className={styles.eyebrow}>Meet the Owner</span>
          <h2 className={styles.name}>Wade Harmon</h2>
          <p className={styles.role}>Owner & Lead Septic Specialist · ClearFlow Septic</p>
          <p className={styles.bio}>
            Wade founded ClearFlow Septic in {cityName} in 2004 with a simple standard:
            honest diagnosis, flat-rate pricing, and a clean job every time. Two decades later,
            that still guides every pump-out, install, and repair across Central Texas.
          </p>
          <a
            href="tel:+12548707070"
            className={styles.link}
            onClick={() => trackEvent({
              eventType: 'phone_click',
              elementLabel: 'AuthorBio Call',
              section: 'AuthorBio',
            })}
          >
            Call (254) 870-7070
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
