"use client";

import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import { faShieldHalved, faUsers, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const whyFeatures = [
    { icon: faUsers, title: "Acreage Experience", description: "Long driveways, multiple tanks, and private wells are normal for us — not special cases." },
    { icon: faClipboardCheck, title: "Reliable Scheduling", description: "We plan routes through rural routes so you are not left waiting all day." },
    { icon: faShieldHalved, title: "Full System Care", description: "Pumping, repair, field work, and new installs under one local partner." },
  ];
  const faq = [
    { question: "Do you service properties outside city limits?", answer: "Yes — rural residential is a core part of our work across McLennan and Bell counties." },
    { question: "Is there a trip charge for rural addresses?", answer: "Most addresses within our regular service area have no extra trip charge. Call to confirm your location." },
    { question: "Can you handle larger tanks on acreage?", answer: "Yes — multi-compartment and larger residential tanks are within our scope." },
    { question: "Do you install for new rural builds?", answer: "Yes. We design and install systems for new construction on acreage lots." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Rural Residential" },
      ]} />
      <SectionIntro title="Rural Residential Septic Services" subtitle="Septic pumping, installs, repair, and inspections for rural homes, acreage properties, and country living across Central Texas." />
      <TrustBar headline="Trusted by Central Texas property owners since 2004" />
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Rural Residential" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Rural Residential FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Quote" cityName="Waco" slug="industries/rural-residential" spot="rural-residential-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Septic Service for Rural Residential?"
        subline="Flat-rate pricing. TCEQ-licensed. Clean Job Guarantee."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}