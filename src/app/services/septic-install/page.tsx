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
    { icon: faSearch, title: "Site Evaluation First", description: "Soil, setbacks, usage, and requirements reviewed before design." },
    { icon: faFileContract, title: "Clear Scope and Flat-Rate Quote", description: "Written proposal covering tank, field, materials, and labor." },
    { icon: faCheckCircle, title: "Professional Install", description: "Excavation, tank set, piping, and field construction to code." },
    { icon: faShieldHalved, title: "Final Docs and Walkthrough", description: "Documentation and care instructions for your new system." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "New Construction and Replacements", description: "Full installs for new builds and complete system replacements." },
    { icon: faWrench, title: "Engineered Options Available", description: "Conventional, low-pressure, and aerobic solutions." },
    { icon: faShieldHalved, title: "TCEQ-Licensed Installers", description: "Permitting support and licensed install work." },
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
    { question: "How long does a new septic install take?", answer: "Most residential installs complete in a few days once permits and materials are ready." },
    { question: "Do you handle permits?", answer: "We help with local permitting and install to TCEQ standards." },
    { question: "Can you replace a failing system?", answer: "Yes — full system replacements including tank and drain field." },
    { question: "What system type do I need?", answer: "It depends on soil, lot size, and occupancy. We recommend after site evaluation." },
    { question: "Do you install for mobile homes and cabins?", answer: "Yes when site and code requirements allow." },
    { question: "Is financing available?", answer: "Ask about payment options when you request a quote." },
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
        { label: "New Septic Install" },
      ]} />
      <SectionIntro title="New Septic Install in Waco, TX" subtitle="New conventional and engineered septic system design and installation for Central Texas. TCEQ-licensed installers." />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for New Septic Install" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/septic-install" title="New Septic Install Across Central Texas" />
      </div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="New Septic Install FAQs" />
      </div>
      <CTABanner headline="Planning a New Septic System?" subline="TCEQ-licensed installs. Flat-rate proposals. Clean Job Guarantee." primaryText="Call Us Now" primaryLink="tel:+12548707070" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule New Septic Install" cityName="Waco" slug="services/septic-install" spot="septic-install-page-form" formVariant={2} />
      </div>
    </main>
  );
}