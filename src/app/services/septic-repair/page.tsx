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
    { icon: faSearch, title: "Accurate Diagnosis", description: "We find the real problem before recommending a fix." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Price before repair starts. No hourly surprises." },
    { icon: faCheckCircle, title: "Quality Parts and Workmanship", description: "Pumps, floats, baffles, and lids repaired or replaced properly." },
    { icon: faShieldHalved, title: "Clean Job Guarantee", description: "Site cleaned up and workmanship backed." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Fast Response", description: "Slow drains and backups get prioritized." },
    { icon: faWrench, title: "Repair First When Smart", description: "We repair when it makes sense and tell you honestly when replacement is wiser." },
    { icon: faShieldHalved, title: "TCEQ-Licensed Techs", description: "Licensed, bonded, insured — every time." },
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
    { question: "What are signs I need septic repair?", answer: "Slow drains, sewage odors, wet spots over the field, gurgling toilets, or aerobic alarms." },
    { question: "Can you repair a cracked tank?", answer: "Some cracks and lid issues can be repaired; severe failure may need replacement." },
    { question: "Do you repair effluent pumps?", answer: "Yes — pump and float replacements are common same-visit repairs." },
    { question: "Is repair cheaper than a new system?", answer: "Often yes when the field and tank are otherwise sound." },
    { question: "Will you pump the tank as part of repair?", answer: "If needed for access or diagnosis, we include pumping in the quote." },
    { question: "Do you work on older systems?", answer: "Yes — conventional and aerobic systems of all ages." },
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
        { label: "Septic Repair" },
      ]} />
      <SectionIntro title="Septic Repair in Waco, TX" subtitle="Septic tank, pump, baffle, and distribution repairs across Waco and Central Texas. Flat-rate quotes." />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Septic Repair" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/septic-repair" title="Septic Repair Across Central Texas" />
      </div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Septic Repair FAQs" />
      </div>
      <CTABanner headline="Septic Acting Up? We Fix It." subline="Same-day diagnostics available. Flat-rate pricing. Clean Job Guarantee." primaryText="Call Us Now" primaryLink="tel:+12548707070" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Septic Repair" cityName="Waco" slug="services/septic-repair" spot="septic-repair-page-form" formVariant={2} />
      </div>
    </main>
  );
}