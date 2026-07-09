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
    { icon: faSearch, title: "Thorough Inspection", description: "Tank, baffles, levels, and accessible field indicators documented." },
    { icon: faFileContract, title: "Written Report", description: "Findings in plain English for buyers, agents, or family." },
    { icon: faCheckCircle, title: "Maintenance Plans", description: "Scheduled pumping and checkups prevent emergencies." },
    { icon: faShieldHalved, title: "Repair Path If Needed", description: "Flat-rate options if problems are found — no pressure." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Real Estate Ready", description: "Clear reports that support closings without last-minute chaos." },
    { icon: faWrench, title: "Prevent Costly Failures", description: "Routine service extends system life and protects fields." },
    { icon: faShieldHalved, title: "One Local Partner", description: "Inspection, pumping, repair, and install under one company." },
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
    { question: "Do I need a septic inspection to sell my home?", answer: "Many lenders and buyers require one. A pro inspection reduces closing surprises." },
    { question: "What does a maintenance plan include?", answer: "Scheduled pumping intervals, system checks, and priority scheduling." },
    { question: "How long does an inspection take?", answer: "Most residential inspections complete in under two hours." },
    { question: "Will you pump during the inspection?", answer: "Pumping may be recommended for a full evaluation and is quoted separately if needed." },
    { question: "Can you inspect aerobic systems?", answer: "Yes — ATU components and disposal areas as accessible." },
    { question: "Do maintenance plans lock me in?", answer: "We offer straightforward plans without gimmicks. Ask about options when you call." },
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
        { label: "Inspections & Maintenance" },
      ]} />
      <SectionIntro title="Inspections & Maintenance in Waco, TX" subtitle="Septic inspections for real estate and preventative maintenance plans for Waco and Central Texas systems." />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Inspections & Maintenance" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/inspections" title="Inspections & Maintenance Across Central Texas" />
      </div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Inspections & Maintenance FAQs" />
      </div>
      <CTABanner headline="Need an Inspection or Maintenance Plan?" subline="Real estate inspections and preventative service. Flat-rate. TCEQ-licensed." primaryText="Call Us Now" primaryLink="tel:+12548707070" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Inspections & Maintenance" cityName="Waco" slug="services/inspections" spot="inspections-page-form" formVariant={2} />
      </div>
    </main>
  );
}