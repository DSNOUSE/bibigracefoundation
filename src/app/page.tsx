import styles from "./page.module.css";

const programs = [
  {
    title: "Education Support",
    description:
      "We provide school fee assistance and targeted financial support for children and youth in and out of school.",
  },
  {
    title: "Learning Materials",
    description:
      "We distribute books, writing materials, and essential learning tools that help students thrive in class.",
  },
  {
    title: "Self-Reliance Initiatives",
    description:
      "We champion innovative schemes that equip young people with confidence and practical skills for independent futures.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Bibi Grace Foundation</p>
        <h1>Expanding access to quality education and opportunity.</h1>
        <p>
          Bibi Grace Foundation is a registered non profit organisation that
          provides quality education, learning materials, and financial support
          to children and youths in and out of school.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Our Focus Areas</h2>
          <div className={styles.cardGrid}>
            {programs.map((program) => (
              <article className={styles.card} key={program.title}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>How You Can Help</h2>
          <p>
            Partner with us to sponsor a learner, donate educational materials,
            or support programs that empower children and youth to become
            self-reliant.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Bibi Grace Foundation</p>
      </footer>
    </div>
  );
}
