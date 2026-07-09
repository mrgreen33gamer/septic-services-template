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
    { icon: faUsers, title: "Ranch Property Savvy", description: "We work around livestock, equipment access, and multi-building layouts." },
    { icon: faClipboardCheck, title: "Durable Fixes", description: "Repairs and installs built for real-world ranch use, not just subdivision homes." },
    { icon: faShieldHalved, title: "One Call for Multiple Sites", description: "Coordinate pumping and repairs across housing on the same ranch." },
  ];
  const faq = [
    { question: "Do you service ranch employee housing?", answer: "Yes — single and multi-unit rural housing septic systems." },
    { question: "Can you work around livestock and equipment?", answer: "Yes. Tell us about access and we plan the job accordingly." },
    { question: "Do you install systems for new barn apartments or cabins?", answer: "When code allows, yes. Site evaluation comes first." },
    { question: "Are agricultural properties outside your area?", answer: "Most Central Texas ranch addresses within about 60 miles of Waco are covered." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Agriculture & Ranches" },
      ]} />
      <SectionIntro title="Agriculture & Ranches Septic Services" subtitle="Septic service for ranch houses, ag housing, and rural agricultural properties throughout Central Texas." />
      <TrustBar headline="Trusted by Central Texas property owners since 2004" />
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Agriculture & Ranches" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Agriculture & Ranches FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Quote" cityName="Waco" slug="industries/agriculture" spot="agriculture-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Septic Service for Agriculture & Ranches?"
        subline="Flat-rate pricing. TCEQ-licensed. Clean Job Guarantee."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}