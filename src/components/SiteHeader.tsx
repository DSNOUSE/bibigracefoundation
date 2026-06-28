"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Menu, X, Heart, Users, Mail as MailIcon, Share2, ChevronRight, Sparkles } from "lucide-react";
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
          <div className={styles.mobileMenuOverlay} onClick={() => setMobileMenuOpen(false)} />
          <div className={styles.mobileMenuContent}>
            {/* Impact Stat Banner */}
            <div className={styles.mobileImpactBanner}>
              <Sparkles size={20} className={styles.mobileImpactIcon} />
              <div>
                <span className={styles.mobileImpactNumber}>250+</span>
                <span className={styles.mobileImpactText}>Children Supported</span>
              </div>
            </div>

            {/* Primary Navigation */}
            <nav className={styles.mobileNavSection}>
              <h3 className={styles.mobileNavTitle}>Navigate</h3>
              <ul className={styles.mobileNavPrimary}>
                <li>
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={styles.mobileNavLink}>
                    About <ChevronRight size={18} className={styles.mobileNavArrow} />
                  </Link>
                </li>
                <li>
                  <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className={styles.mobileNavLink}>
                    Programs <ChevronRight size={18} className={styles.mobileNavArrow} />
                  </Link>
                </li>
                <li>
                  <Link href="/impact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileNavLink}>
                    Impact <ChevronRight size={18} className={styles.mobileNavArrow} />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileNavLink}>
                    Contact <ChevronRight size={18} className={styles.mobileNavArrow} />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Quick Actions */}
            <div className={styles.mobileQuickActions}>
              <h3 className={styles.mobileNavTitle}>Quick Actions</h3>
              <div className={styles.mobileActionGrid}>
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)} className={styles.mobileActionCard}>
                  <Heart size={24} className={styles.mobileActionIcon} />
                  <span>Quick Donate</span>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileActionCard}>
                  <Users size={24} className={styles.mobileActionIcon} />
                  <span>Volunteer</span>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileActionCard}>
                  <MailIcon size={24} className={styles.mobileActionIcon} />
                  <span>Newsletter</span>
                </Link>
                <button className={styles.mobileActionCard} onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Bibi Grace Foundation', url: window.location.href });
                  }
                }}>
                  <Share2 size={24} className={styles.mobileActionIcon} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Secondary Links */}
            <nav className={styles.mobileNavSection}>
              <h3 className={styles.mobileNavTitle}>More</h3>
              <ul className={styles.mobileNavSecondary}>
                <li>
                  <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className={styles.mobileSecondaryLink}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/impact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileSecondaryLink}>
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={styles.mobileSecondaryLink}>
                    Partners
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Media */}
            <div className={styles.mobileSocials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
