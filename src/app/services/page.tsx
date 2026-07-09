// ClearFlow Septic — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTruck, faHouseChimney, faWater, faWrench, faSeedling, faClipboardCheck,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faTruck,          title: "Septic Pumping",              body: "Scheduled and emergency tank pump-outs with thorough cleaning. We leave lids secured and the site clean.", link: "/services/septic-pumping" },
    { icon: faHouseChimney,   title: "New Septic Install",          body: "Conventional and engineered septic design and installation for new construction and full replacements.", link: "/services/septic-install" },
    { icon: faWater,          title: "Aerobic Systems",             body: "ATU install, service, chlorination, and maintenance so your aerobic system stays compliant and running.", link: "/services/aerobic-systems" },
    { icon: faWrench,         title: "Septic Repair",               body: "Tank leaks, baffles, pumps, alarms, and distribution issues fixed with flat-rate written quotes.", link: "/services/septic-repair" },
    { icon: faSeedling,       title: "Drain Field Repair",          body: "Saturated or failing drain fields restored or replaced with solutions sized for your soil and usage.", link: "/services/drain-field" },
    { icon: faClipboardCheck, title: "Inspections & Maintenance",   body: "Real estate inspections and preventative maintenance plans to catch issues before backups.", link: "/services/inspections" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we open a lid or break ground. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "TCEQ-Licensed Installers", description: "Every tech is TCEQ-licensed, bonded, and insured. No unlicensed freelancers on your property." },
    { icon: faUsers,          title: "Locally Owned Since 2004", description: "Founded in Waco by Wade Harmon. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Assess On-Site", description: "A TCEQ-licensed tech inspects the system and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Clean, Guaranteed", description: "Quality workmanship, Clean Job Guarantee, emergency pump-out support.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 14000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 22,    label: "Years of local septic experience",    suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does septic service cost in Waco?", answer: "Pump-outs typically range from $350–$650 depending on tank size and access. Repairs and installs vary by scope. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on aerobic systems?", answer: "Yes — install, maintenance, chlorination, alarms, pumps, and spray components for common ATU brands." },
    { question: "What does your maintenance plan include?", answer: "Scheduled pumping intervals, system checks, priority scheduling, and aerobic service visits when applicable." },
    { question: "Do you offer emergency pump-outs?", answer: "Yes — emergency pump-out is available across Waco and Central Texas. Call (254) 870-7070 anytime." },
    { question: "Are you TCEQ-licensed and insured?", answer: "Yes — ClearFlow Septic is TCEQ-licensed, bonded, and insured." },
    { question: "Do you offer a guarantee?", answer: "Yes — Clean Job Guarantee on every job plus 24-month workmanship coverage on our work." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Septic Services for Waco & Central Texas"
        subtitle="Pumping, new installs, aerobic systems, repair, drain fields, and inspections — done clean, priced upfront, backed by a Clean Job Guarantee."
      />

      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose ClearFlow" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Septic Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Septic Service Today?"
        subline="Same-day pump-outs available. Flat-rate pricing. Clean Job Guarantee · Emergency pump-out available."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
