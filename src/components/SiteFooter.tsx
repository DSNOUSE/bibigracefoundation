import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Image
            src="/logo.png"
            alt="Bibi Grace Foundation"
            width={60}
            height={42}
            style={{ width: "auto", height: "auto" }}
            className={styles.logoImg}
          />
          <p>Bibi Grace Foundation - Every Child Matters</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <Link href="/about">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/donate">Donate</Link>
        </div>

        <div className={styles.footerContact}>
          <h4>Contact Us</h4>
          <p>Ado Ekiti, Nigeria</p>
          <p>+234 703 148 7763</p>
          <p>bibigracefoundation@gmail.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Bibi Grace Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
