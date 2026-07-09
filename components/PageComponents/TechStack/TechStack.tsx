'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Systems & Components We Service',
    items: [
      { name: 'Conventional Tanks', type: 'brand', icon: '💧' },
      { name: 'Aerobic ATUs',       type: 'brand', icon: '💧' },
      { name: 'Effluent Pumps',     type: 'brand', icon: '💧' },
      { name: 'Chlorinators',       type: 'brand', icon: '💧' },
      { name: 'Drain Fields',       type: 'brand', icon: '💧' },
      { name: 'Spray Systems',      type: 'brand', icon: '💧' },
      { name: 'Alarms & Controls',  type: 'brand', icon: '💧' },
      { name: 'Distribution Boxes', type: 'brand', icon: '💧' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'TCEQ-Licensed Installers', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',         type: 'cert', icon: '✓' },
      { name: 'Clean Job Guarantee',      type: 'cert', icon: '✓' },
      { name: 'Emergency Pump-Out',       type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Septic Pumping',     type: 'tool', icon: '🔧' },
      { name: 'New Installs',       type: 'tool', icon: '🔧' },
      { name: 'Aerobic Service',    type: 'tool', icon: '🔧' },
      { name: 'Repairs',            type: 'tool', icon: '🔧' },
      { name: 'Drain Fields',       type: 'tool', icon: '🔧' },
      { name: 'Inspections',        type: 'tool', icon: '🔧' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Licensed Work, Clean Results',
  subtitle = 'We pump, install, repair, and maintain septic systems across Central Texas — TCEQ-licensed crews, no shortcuts on code or site care.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
