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
    { icon: faSearch, title: "ATU-Specific Expertise", description: "Pumps, aerators, and controls serviced by experienced techs." },
    { icon: faFileContract, title: "Maintenance and Chlorination", description: "Scheduled service keeps you in compliance." },
    { icon: faCheckCircle, title: "Repair or Replace Components", description: "Alarms, compressors, pumps, and spray heads fixed with clear pricing." },
    { icon: faShieldHalved, title: "Install When Required", description: "Full ATU installs for properties that need advanced treatment." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Compliance-Focused Service", description: "Documented maintenance for local expectations." },
    { icon: faWrench, title: "All Major ATU Brands", description: "Common aerobic brands across McLennan and Bell counties." },
    { icon: faShieldHalved, title: "Emergency Response", description: "Alarms and spray failures prioritized." },
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
    { question: "How often should an aerobic system be serviced?", answer: "Most ATUs need professional maintenance several times per year." },
    { question: "Why is my aerobic alarm going off?", answer: "Common causes include pump failure, high water, compressor issues, or power problems." },
    { question: "Do you refill chlorinators?", answer: "Yes. Chlorine tablets and chlorinator service are part of regular maintenance." },
    { question: "Can you convert conventional to aerobic?", answer: "When soil or regulations require it, yes." },
    { question: "Do you install spray fields?", answer: "Yes — spray irrigation components are part of many ATU installs." },
    { question: "Are aerobic systems more expensive to maintain?", answer: "They typically need more frequent service than conventional systems." },
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
        { label: "Aerobic Systems" },
      ]} />
      <SectionIntro title="Aerobic Systems in Waco, TX" subtitle="Aerobic treatment unit installation, service, chlorination, and maintenance for Central Texas properties." />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Aerobic Systems" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ClearFlow First" />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/aerobic-systems" title="Aerobic Systems Across Central Texas" />
      </div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Aerobic Systems FAQs" />
      </div>
      <CTABanner headline="Aerobic System Needs Service?" subline="Maintenance, repair, and new ATU installs. TCEQ-licensed." primaryText="Call Us Now" primaryLink="tel:+12548707070" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Aerobic Systems" cityName="Waco" slug="services/aerobic-systems" spot="aerobic-systems-page-form" formVariant={2} />
      </div>
    </main>
  );
}