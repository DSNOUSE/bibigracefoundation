import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "About | Bibi Grace Foundation",
  description: "Learn about Bibi Grace Foundation, our mission, values, and community commitment.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>About Us</p>
            <h1 className={styles.title}>Compassion, Dignity, and Long-Term Support</h1>
            <p className={styles.subtitle}>
              Bibi Grace Foundation is a registered nonprofit organisation dedicated to helping
              children and youths in and out of school access education, materials, and practical
              support that improves everyday life.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.text}>
            We exist to reduce barriers to learning and wellbeing by providing targeted support for
            children and young people in underserved communities. We work with families,
            volunteers, and local stakeholders to make sure support is consistent and measurable.
          </p>
          <div className={styles.imageWrap}>
            <Image src="/village-children.jpg" alt="Children supported by the foundation" width={1400} height={700} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Every Child Matters</h3>
              <p>We treat every child with dignity and prioritize equal access to opportunities.</p>
            </article>
            <article className={styles.card}>
              <h3>Community-Driven Action</h3>
              <p>We collaborate with communities to build practical and sustainable solutions.</p>
            </article>
            <article className={styles.card}>
              <h3>Transparency and Accountability</h3>
              <p>We communicate impact clearly and manage resources responsibly.</p>
            </article>
          </div>
          <div className={styles.ctaRow}>
            <Link href="/programs" className={styles.ctaPrimary}>Explore Our Programs</Link>
            <Link href="/donate" className={styles.ctaSecondary}>Support Our Work</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
