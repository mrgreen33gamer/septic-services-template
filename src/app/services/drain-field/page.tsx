"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTruck, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faHouseChimney, faWater, faWrench, faTrophy, faChartLine, faSeedling, faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const expectations = [
    { icon: faSearch, title: "Field Diagnosis", description: "Saturation, biomat, distribution, and usage evaluated first." },
    { icon: faFileContract, title: "Honest Options", description: "Restorative options when viable; full replacement when spent." },
    { icon: faCheckCircle, title: "Proper Design for Soil", description: "New fields sized and placed for your soil and setbacks." },
    { icon: faShieldHalved, title: "Clean Site Finish", description: "Grade restored as practical and debris hauled." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Stop Recurring Backups", description: "A failing field will not be fixed by pumping alone." },
    { icon: faWrench, title: "Protect Property Value", description: "A working drain field is critical for sales and daily use." },
    { icon: faShieldHalved, title: "Experienced Local Crews", description: "We know Central Texas soils and common failure modes." },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online — often same-day scheduling.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "We explain findings in plain English before quoting.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. Zero pressure.", icon: faFileContract },
    { number: 4, title: "Done Clean", description: "Quality workmanship and Clean Job Guarantee.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 14000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 22, label: "Years serving Waco-area property owners", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest dispatch.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway properties.", badge: "" },
    { town: "Bellmead", benefit: "On our regular route.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage available.", badge: "" },
    { town: "Temple", benefit: "Bell County service coverage.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "Always written", others: "Hourly + estimate only" },
    { feature: "Clean Job Guarantee", us: "Every job", others: "Rare or none" },
    { feature: "TCEQ-licensed installers", us: "All techs", others: "Not always" },
    { feature: "Emergency pump-out available", us: "Prioritized", others: "Limited hours" },
    { feature: "Local Waco company since 2004", us: "Owner-operated", others: "Call-center franchise" },
  ];
  const faq = [
    { question: "How do I know my drain field is failing?", answer: "Standing water, sewage odors outdoors, slow drains after pumping, or lush green strips over laterals." },
    { question: "Can a drain field be repaired without full replacement?", answer: "Sometimes. Many fully failed fields need replacement." },
    { question: "Does pumping fix a bad drain field?", answer: "Pumping helps the tank but does not restore a failed field." },
    { question: "How long does field replacement take?", answer: "Typically several days depending on size, weather, and permitting." },
    { question: "Can I build over a drain field?", answer: "No — keep the area clear of buildings, driveways, and heavy equipment." },
    { question: "Do you handle aerobic spray field issues?", answer: "Yes — spray heads and related ATU disposal components." },
  ];
  const crossServices = [
    { icon: faTruck, title: "Septic Pumping", body: "Scheduled and emergency pump-outs done clean.", link: "/services/septic-pumping" },
    { icon: faHouseChimney, title: "New Septic Install", body: "Conventional and engineered installs.", link: "/services/septic-install" },
    { icon: faWater, title: "Aerobic Systems", body: "ATU install, service, and maintenance.", link: "/services/aerobic-systems" },
    { icon: faWrench, title: "Septic Repair", body: "Pumps, baffles, tanks, and distribution fixes.", link: "/services/septic-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Drain Field Repair" },
      ]} />
      <SectionIntro title="Drain Field Repair in Waco, TX" subtitle="Drain field repair and replacement for saturated, clogged, or failing septic fields in Central Texas." />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Drain Field Repair" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/drain-field" title="Drain Field Repair Across Central Texas" />
      </div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Drain Field Repair FAQs" />
      </div>
      <CTABanner headline="Drain Field Problems?" subline="Diagnosis, repair, and replacement. Flat-rate proposals. TCEQ-licensed." primaryText="Call Us Now" primaryLink="tel:+12548707070" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Drain Field Repair" cityName="Waco" slug="services/drain-field" spot="drain-field-page-form" formVariant={2} />
      </div>
    </main>
  );
}