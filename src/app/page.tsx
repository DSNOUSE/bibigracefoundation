import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ArrowUpRight,
  Phone,
  Mail,
  Sparkles,
  HandHeart,
} from "lucide-react";
import styles from "./page.module.css";

const programs = [
  {
    title: "Education Support",
    category: "Education",
    image: "/program-education.jpg",
    description:
      "We provide school fee assistance and targeted financial support for children and youth in and out of school.",
    raised: 8500,
    goal: 10000,
    percent: 75,
  },
  {
    title: "Menstrual Hygiene",
    category: "Health",
    image: "/program-health.jpg",
    description:
      "Restoring confidence in the girl child through hygiene education, sanitary supplies, and community outreach programs.",
    raised: 6500,
    goal: 10000,
    percent: 65,
  },
  {
    title: "Learning Materials",
    category: "Education",
    image: "/program-materials.jpg",
    description:
      "We distribute books, writing materials, bags, shoes, and essential learning tools that help students thrive.",
    raised: 8500,
    goal: 10000,
    percent: 85,
  },
];

const stats = [
  { value: "250+", label: "Children Supported" },
  { value: "15+", label: "Programs Delivered" },
  { value: "5+", label: "Communities Reached" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Top Bar */}
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
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><rect width="6.67" height="14" fill="#008751"/><rect x="6.67" width="6.67" height="14" fill="#fff"/><rect x="13.33" width="6.67" height="14" fill="#008751"/></svg>
              Nigeria
            </div>
            <div className={styles.topBarSocials}>
              <a href="https://www.facebook.com/Bibigracefoundation/" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/bibigrace_foundation" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://x.com/BGF_NGO" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/bibigracefoundationinc/" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Bibi Grace Foundation" width={48} height={34} style={{ width: "auto", height: "auto" }} className={styles.logoImg} />
            <span className={styles.logoText}>Bibi Grace Foundation</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/impact">Impact</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <Link href="/donate" className={styles.donateBtn}>
            Donate Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <Image
          src="/landing.jpg"
          alt=""
          fill
          priority
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}><Sparkles size={16} /> Every Child Matters</p>
          <h1>
            Helping Each Other Make{" "}
            <span className={styles.highlight}>Better</span> Today
          </h1>
          <p className={styles.heroDesc}>
            Join our mission to provide consistent support to children and youth
            through education, empowerment, and community development. Every
            contribution, no matter the size, helps us sustain long-term impact.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/programs" className={styles.ctaPrimary}>
              Discover More <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Get Involved <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* About / Mission Section */}
        <section className={styles.about} id="about">
          <div className={styles.aboutImages}>
            <div className={styles.aboutImgMain} />
            <div className={styles.aboutImgSecondary} />
            <div className={styles.statsCard}>
              <span className={styles.statsValue}>250+</span>
              <span className={styles.statsLabel}>Children We Support</span>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <p className={styles.kicker}><Sparkles size={16} /> About Our Mission</p>
            <h2>
              Helping Each Other Can Make{" "}
              <span className={styles.highlight}>World</span> Better
            </h2>
            <p className={styles.aboutDesc}>
              Bibi Grace Foundation is a registered nonprofit organisation that
              provides quality education, learning materials, and financial
              support to children and youths in and out of school.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}><BookOpen size={28} /></div>
                <div>
                  <h4>Education Support</h4>
                  <p>Providing school fees, learning materials, and mentorship for children in need.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}><HandHeart size={28} /></div>
                <div>
                  <h4>Community Outreach</h4>
                  <p>Raising awareness about children&apos;s welfare and empowering communities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section divider */}
        <div className={styles.sectionDivider}>
          <Image src="/banner-one-shape.png" alt="" width={1920} height={100} className={styles.dividerImg} />
        </div>

        {/* Programs / Causes Section */}
        <section className={styles.programs} id="programs">
          <p className={styles.kicker}><Sparkles size={16} /> Our Programs</p>
          <h2>
            Be The Reason for Someone&apos;s{" "}
            <span className={styles.highlight}>Smile</span>
          </h2>
          <div className={styles.cardGrid}>
            {programs.map((program) => (
              <article className={styles.card} key={program.title}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${program.image})` }}>
                  <span className={styles.cardBadge}>{program.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className={styles.progressSection}>
                    <div className={styles.progressHeader}>
                      <span>Donations</span>
                      <span>{program.percent}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${program.percent}%` }}
                      />
                    </div>
                    <div className={styles.progressFooter}>
                      <span>Raised: <strong>₦{program.raised.toLocaleString()}</strong></span>
                      <span>Goal: <strong>₦{program.goal.toLocaleString()}</strong></span>
                    </div>
                  </div>
                  <Link href="/donate" className={styles.cardBtn}>
                    Donate Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner} id="donate">
          <div className={styles.ctaBannerOverlay} />
          <div className={styles.ctaBannerContent}>
            <p className={styles.kicker}><Sparkles size={16} /> Support Our Cause</p>
            <h2>Children Need Your Help By Donating Today</h2>
            <div className={styles.heroCtas}>
              <Link href="/programs" className={styles.ctaPrimary}>
                Discover More <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Get Involved <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className={styles.impact} id="impact">
          <p className={styles.kicker}><Sparkles size={16} /> Our Impact</p>
          <h2>Making A Difference Together</h2>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image src="/logo.png" alt="Bibi Grace Foundation" width={60} height={42} style={{ width: "auto", height: "auto" }} className={styles.logoImg} />
            <p>Bibi Grace Foundation — Every Child Matters</p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/Bibigracefoundation/" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/bibigrace_foundation" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://x.com/BGF_NGO" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/bibigracefoundationinc/" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <Link href="/about">About Us</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <p>Ado Ekiti, Nigeria</p>
            <p>07031487763</p>
            <p>bibigracefoundation@gmail.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Bibi Grace Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
