"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import { faHandshake, faShieldHalved, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A rural homeowner, RV park manager, and ranch operator all work differently. Before we quote, we learn access, usage, and downtime constraints.",
    },
    {
      icon: faShieldHalved,
      title: "TCEQ-Licensed, Bonded & Insured",
      description: "Based in Waco, TX with TCEQ-licensed installers and full insurance — the documentation property managers and owners expect.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Pump, Repair & Install — One Vendor",
      description: "Whether you need emergency pump-outs, field repair, or a full install — we handle it under one roof.",
    },
  ];

  const faq = [
    {
      question: "What types of organizations does ClearFlow Septic work with?",
      answer: "We serve rural residential properties, RV parks and campgrounds, and agriculture & ranches — in addition to standard residential septic service.",
    },
    {
      question: "Do you build a custom proposal for each property type?",
      answer: "Yes. Every proposal accounts for access, usage patterns, and scheduling needs — not a one-size residential quote.",
    },
    {
      question: "Do you serve properties outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-building or multi-tank properties?",
      answer: "Yes — we build phased pricing and scheduling with a single dedicated point of contact.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Rural residential, RV parks, and agricultural properties trust ClearFlow for pumping, installs, repair, and inspections."
      />
      <TrustBar headline="14,000+ systems serviced — homes, parks, and ranches" />
      <div className={styles.section}>
        <SectionIndustriesServed />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose ClearFlow" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Service FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Commercial or Rural Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need Septic Service for Your Property?"
        subline="Flat-rate pricing. TCEQ-licensed. Clean Job Guarantee."
        primaryText="Call (254) 870-7070"
        primaryLink="tel:+12548707070"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
    </main>
  );
}