"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Menu, X } from "lucide-react";
import styles from "../app/page.module.css";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <a href="mailto:bibigracefoundation@gmail.com" className={styles.topBarItem}>
              <Mail size={14} /> bibigracefoundation@gmail.com
            </a>
            <a href="tel:+2347031487763" className={styles.topBarItem}>
              <Phone size={14} /> +234 703 148 7763
            </a>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.topBarItem}>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <rect width="6.67" height="14" fill="#008751" />
                <rect x="6.67" width="6.67" height="14" fill="#fff" />
                <rect x="13.33" width="6.67" height="14" fill="#008751" />
              </svg>
              Nigeria
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Bibi Grace Foundation"
              width={96}
              height={68}
              style={{ width: "auto", height: "auto" }}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>Bibi Grace Foundation</span>
          </Link>

          <ul className={styles.navLinks}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/programs">Programs</Link>
            </li>
            <li>
              <Link href="/impact">Impact</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Link href="/donate" className={styles.donateBtn}>
            Donate Now
          </Link>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" onClick={() => setMobileMenuOpen(false)}>
                Programs
              </Link>
            </li>
            <li>
              <Link href="/impact" onClick={() => setMobileMenuOpen(false)}>
                Impact
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className={styles.mobileDonateItem}>
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDonateLink}>
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
