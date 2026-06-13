import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Contact | Bibi Grace Foundation",
  description: "Get in touch with Bibi Grace Foundation for partnerships, volunteering, and support.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Contact</p>
            <h1 className={styles.title}>Partner With Us or Reach Out Today</h1>
            <p className={styles.subtitle}>
              Whether you want to volunteer, collaborate, or support our mission, we would love to
              hear from you.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Phone</h3>
              <p>+234 703 148 7763</p>
            </article>
            <article className={styles.card}>
              <h3>Email</h3>
              <p>bibigracefoundation@gmail.com</p>
            </article>
            <article className={styles.card}>
              <h3>Location</h3>
              <p>Ado Ekiti, Nigeria</p>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <p className={styles.text}>
            Use this form to share your message and we will follow up as soon as possible.
          </p>
          <form className={styles.form}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <select name="interest" defaultValue="">
              <option value="" disabled>Select Purpose</option>
              <option value="volunteer">Volunteer</option>
              <option value="partnership">Partnership</option>
              <option value="donation">Donation Support</option>
              <option value="general">General Enquiry</option>
            </select>
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
