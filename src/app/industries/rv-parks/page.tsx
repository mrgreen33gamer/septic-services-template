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
    { icon: faUsers, title: "High-Volume Systems", description: "We understand dump stations, shared tanks, and peak-season load swings." },
    { icon: faClipboardCheck, title: "Minimal Downtime", description: "Work scheduled around occupancy so guests are not left without service." },
    { icon: faShieldHalved, title: "Documented Service", description: "Clear invoices and maintenance records for park operators and ownership groups." },
  ];
  const faq = [
    { question: "Can you maintain multiple tanks at one park?", answer: "Yes — multi-tank properties and dump station systems are a regular part of our commercial rural work." },
    { question: "Do you offer recurring pump schedules?", answer: "Yes. We set pumping and inspection intervals based on occupancy patterns." },
    { question: "Can you respond during peak season emergencies?", answer: "We prioritize park emergencies when backups threaten guest facilities. Call (254) 870-7070." },
    { question: "Do you help with system upgrades?", answer: "Yes — capacity upgrades, repairs, and replacement planning for aging park systems." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "RV Parks & Campgrounds" },
      ]} />
      <SectionIntro title="RV Parks & Campgrounds Septic Services" subtitle="High-use septic pumping, repair, and maintenance for RV parks and campgrounds across Central Texas." />
      <TrustBar headline="Trusted by Central Texas property owners since 2004" />
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for RV Parks & Campgrounds" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="RV Parks & Campgrounds FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Quote" cityName="Waco" slug="industries/rv-parks" spot="rv-parks-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Septic Service for RV Parks & Campgrounds?"
        subline="Flat-rate pricing. TCEQ-licensed. Clean Job Guarantee."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}