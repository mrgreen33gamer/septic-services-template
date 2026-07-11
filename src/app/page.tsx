// ClearFlow Septic — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faTruck, faHouseChimney, faWater, faWrench, faSeedling, faClipboardCheck,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faTruck,
      title: "Septic Pumping",
      body: "Scheduled and emergency septic tank pump-outs with thorough cleaning and inspection. We leave lids secured and the job site clean.",
      link: "/services/septic-pumping",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHouseChimney,
      title: "New Septic Install",
      body: "Conventional and engineered septic system design and installation for new construction and full replacements across Central Texas.",
      link: "/services/septic-install",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faWater,
      title: "Aerobic Systems",
      body: "Aerobic treatment unit install, service, chlorination, and maintenance so your ATU stays in compliance and running right.",
      link: "/services/aerobic-systems",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faWrench,
      title: "Septic Repair",
      body: "Tank leaks, baffles, pumps, alarms, and distribution issues diagnosed and fixed with flat-rate written quotes.",
      link: "/services/septic-repair",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faSeedling,
      title: "Drain Field Repair",
      body: "Saturated, clogged, or failing drain fields restored or replaced with solutions sized for your soil and usage.",
      link: "/services/drain-field",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faClipboardCheck,
      title: "Inspections & Maintenance",
      body: "Real estate inspections, maintenance contracts, and preventative service to catch small issues before backups.",
      link: "/services/inspections",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 14000, label: "Systems serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 22,    label: "Years of local septic experience",      suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we open a lid or break ground. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "TCEQ-Licensed Installers",
      description: "Every installer is TCEQ-licensed, bonded, and insured. No unlicensed freelancers on your property.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2004",
      description: "We're not a franchise. ClearFlow Septic was founded in Waco by Wade Harmon. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess On-Site",
      description: "A TCEQ-licensed tech inspects the system, explains the issue in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Clean, Guaranteed",
      description: "Quality workmanship, Clean Job Guarantee, and emergency pump-out support when you need it most.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Driveways protected, lids secured, spoil hauled when required. Your property left better than we found it.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "TCEQ Standards & Compliance",
      description: "Installs and repairs completed to TCEQ requirements with documentation you can hand to inspectors or buyers.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and properties.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full septic service for Bell County homes, parks, and ranches.",       badge: "" },
  ];

  const faq = [
    {
      question: "How often should I pump my septic tank in Central Texas?",
      answer: "Most households need pumping every 3–5 years depending on tank size, occupancy, and water use. Heavy use or garbage disposals may need more frequent service. We can recommend a schedule after inspecting your system.",
    },
    {
      question: "Do you offer emergency septic pump-outs?",
      answer: "Yes — emergency pump-out is available for backups and overflowing tanks across Waco and Central Texas. Call (254) 870-7070 anytime.",
    },
    {
      question: "Are you TCEQ-licensed?",
      answer: "Yes. ClearFlow Septic installers are TCEQ-licensed, bonded, and insured for residential and commercial septic work.",
    },
    {
      question: "What is the Clean Job Guarantee?",
      answer: "We leave every job site clean — lids secured, access clear, and property protected. Workmanship is backed for 24 months; if our work fails, we make it right.",
    },
    {
      question: "Do you install aerobic systems?",
      answer: "Yes — full ATU installation, service, chlorination, and maintenance for properties that require aerobic treatment.",
    },
    {
      question: "Can you inspect a septic system for a home sale?",
      answer: "Yes. We provide real estate septic inspections with clear written findings for buyers, sellers, and agents across Central Texas.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="14,000+ Central Texas systems serviced by ClearFlow Septic" />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Septic Services for Waco & Central Texas"
          subheading="From emergency pump-outs to new installs and aerobic systems — ClearFlow handles it all, priced upfront."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose ClearFlow" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="Septic Problems Fixed Right."
        subline="Pumping, inspections, repairs, and installs for rural Central Texas systems — honest findings, clean work."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Schedule Pump-Out"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Serving Waco & Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Septic Service FAQs" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="home-form" formVariant={2} />
      </div>
    </main>
  );
}
