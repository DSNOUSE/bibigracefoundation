import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Programs | Bibi Grace Foundation",
  description: "Discover the key programs run by Bibi Grace Foundation.",
};

const programs = [
  {
    title: "Education Support",
    category: "Education",
    description:
      "School fee support, mentorship, and intervention for children who are at risk of dropping out.",
  },
  {
    title: "Menstrual Hygiene Program",
    category: "Health",
    description:
      "Access to sanitary products, awareness sessions, and confidence-building support for girls.",
  },
  {
    title: "Learning Materials Distribution",
    category: "Education",
    description:
      "Books, stationery, bags, and essential learning tools provided to students in need.",
  },
  {
    title: "Community Outreach",
    category: "Advocacy",
    description:
      "Family engagement and local outreach focused on child welfare, retention in school, and empowerment.",
  },
];

export default function ProgramsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Programs</p>
            <h1 className={styles.title}>Programs That Create Real Change</h1>
            <p className={styles.subtitle}>
              Our initiatives focus on education access, health, and community empowerment to help
              children and youths thrive.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Current Program Areas</h2>
          <div className={styles.grid}>
            {programs.map((program) => (
              <article className={styles.card} key={program.title}>
                <p className={styles.meta}>{program.category}</p>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className={styles.ctaRow}>
                  <Link href="/donate" className={styles.ctaPrimary}>Donate to This Program</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
