// Septic Hero C — Topographic contours + dashed property-lot service radius
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon, PinIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ServiceAreaMap({
  mapCenterLabel,
  mapPins,
  coverageLabel,
}: {
  mapCenterLabel: string;
  mapPins: Array<{ label: string; x: number; y: number }>;
  coverageLabel?: string;
}) {
  return (
    <div
      className={`${styles.mapCard} ${styles.topoMap}`}
      role="img"
      aria-label={`Service area map centered on ${mapCenterLabel}`}
    >
      <svg
        className={styles.mapSvg}
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="septicGlow" cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor="rgba(20, 184, 166, 0.12)" />
            <stop offset="60%" stopColor="rgba(13, 148, 136, 0.04)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        <rect width="400" height="320" fill="url(#septicGlow)" />

        {/* Topographic contour lines */}
        <g fill="none" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1.1">
          <ellipse cx="200" cy="160" rx="40" ry="28" />
          <ellipse cx="200" cy="160" rx="70" ry="48" />
          <ellipse cx="200" cy="160" rx="105" ry="72" />
          <ellipse cx="200" cy="160" rx="140" ry="96" />
          <ellipse cx="200" cy="160" rx="175" ry="118" />
        </g>
        <g fill="none" stroke="rgba(20, 184, 166, 0.18)" strokeWidth="1">
          <path d="M40 80 Q120 60 200 90 T360 70" />
          <path d="M30 200 Q140 170 220 210 T380 190" />
          <path d="M50 280 Q160 250 250 270 T390 260" />
          <path d="M20 130 Q100 150 180 120 T340 140" />
        </g>

        {/* Dashed property lots / parcels in service radius */}
        <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.15" strokeDasharray="5 4">
          <rect x="90" y="90" width="70" height="55" />
          <rect x="170" y="85" width="65" height="50" />
          <rect x="245" y="95" width="70" height="55" />
          <rect x="80" y="160" width="75" height="60" />
          <rect x="165" y="155" width="80" height="65" />
          <rect x="255" y="165" width="70" height="55" />
          <rect x="100" y="230" width="85" height="45" />
          <rect x="200" y="235" width="90" height="40" />
        </g>

        {/* Drainfield / tank glyphs on select lots */}
        <rect x="185" y="175" width="28" height="14" rx="2" fill="none" stroke="rgba(20, 184, 166, 0.55)" strokeWidth="1.25" />
        <line x1="185" y1="182" x2="213" y2="182" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="1" />
        <path d="M100 115 L120 115 M110 110 L110 120" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="1.2" />
        <path d="M270 125 L290 125 M280 120 L280 130" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="1.2" />

        {/* Service radius dashed ring */}
        <circle
          cx="200"
          cy="160"
          r="95"
          fill="none"
          stroke="rgba(20, 184, 166, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
      </svg>

      <div className={`${styles.rings} ${styles.tealRings}`} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
        <span className={`${styles.ring} ${styles.ring3}`} />
      </div>

      <div className={styles.centerPin}>
        <div className={`${styles.centerPinIcon} ${styles.tealHub}`}>
          <PinIcon size={20} />
        </div>
        <span className={styles.centerLabel}>{mapCenterLabel}</span>
      </div>

      {mapPins.map((pin) => (
        <div
          key={`${pin.label}-${pin.x}-${pin.y}`}
          className={styles.satPin}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className={`${styles.satDot} ${styles.tealDot}`} />
          <span className={styles.satLabel}>{pin.label}</span>
        </div>
      ))}

      {coverageLabel && (
        <div className={`${styles.coverageBadge} ${styles.tealBadge}`}>
          <span className={`${styles.coverageDot} ${styles.tealDot}`} />
          {coverageLabel}
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Septic Pros — Since 2004";
  const headlineLines = ['Systems Flowing.', 'Jobs Done Clean.'];
  const headlineAccent = 'ClearFlow Septic.';
  const subheadline =
    'Pumping · Install · Repair · Aerobic Systems. Flat-rate pricing. Same-day service. Clean Job Guarantee · Emergency pump-out available. Serving Waco and Central Texas with TCEQ-licensed installers.';
  const primaryCta = { label: 'Call (254) 870-7070', href: 'tel:+12548707070' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Same-Day Service',
    'Emergency Pump-Out',
    'TCEQ-Licensed',
    '15+ Yrs Local',
    'Clean Job Guarantee',
  ];
  const mapCenterLabel = 'Service HQ';
  const mapPins = [
    { label: 'Waco', x: 42, y: 48 },
    { label: 'Temple', x: 68, y: 62 },
    { label: 'Killeen', x: 58, y: 72 },
  ];
  const coverageLabel = 'Central Texas coverage';

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <ServiceAreaMap
            mapCenterLabel={mapCenterLabel}
            mapPins={mapPins}
            coverageLabel={coverageLabel}
          />
        </motion.div>
      </div>
    </section>
  );
}
