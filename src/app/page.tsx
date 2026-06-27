import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ArrowUpRight,
  Sparkles,
  HandHeart,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
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
      <SiteHeader />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroCarousel}>
          <div className={styles.heroSlide}>
            <Image
              src="/landing.jpg"
              alt=""
              fill
              priority
            />
          </div>
          <div className={styles.heroSlide}>
            <Image
              src="/landingBibiGraceFoundation.jpg"
              alt=""
              fill
              priority
            />
          </div>
          <div className={styles.heroSlide}>
            <Image
              src="/children.jpg"
              alt=""
              fill
              priority
            />
          </div>
        </div>
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
                <div className={`${styles.cardImage} ${program.title === "Menstrual Hygiene" || program.title === "Learning Materials" ? styles.cardImageAdjusted : ""}`} style={{ backgroundImage: `url(${program.image})` }}>
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

      <SiteFooter />
    </div>
  );
}
