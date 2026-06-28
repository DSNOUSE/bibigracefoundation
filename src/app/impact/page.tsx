import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Impact | Bibi Grace Foundation",
  description: "See the measurable impact of Bibi Grace Foundation across communities.",
};

export default function ImpactPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Impact</p>
            <h1 className={styles.title}>Measuring Progress, One Child at a Time</h1>
            <p className={styles.subtitle}>
              We track outcomes to ensure every intervention creates practical and lasting value.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Impact Snapshot</h2>
          <div className={styles.statGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>20+</span>
              <span className={styles.statLabel}>Communities Reached</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Programs Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>250+</span>
              <span className={styles.statLabel}>Children Supported</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>1000+</span>
              <span className={styles.statLabel}>Learning Materials Shared</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h2 className={styles.sectionTitle}>What This Means</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>More Children in School</h3>
              <p>Families receive timely support that keeps learners enrolled and engaged.</p>
            </article>
            <article className={styles.card}>
              <h3>Improved Confidence for Girls</h3>
              <p>Menstrual hygiene support helps girls attend school with confidence and consistency.</p>
            </article>
            <article className={styles.card}>
              <h3>Stronger Community Ownership</h3>
              <p>Outreach activities help communities participate in lasting child-focused solutions.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
