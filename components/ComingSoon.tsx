"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Petal {
  id: number;
  emoji: string;
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
  swayDuration: string;
}

// ── Constants ────────────────────────────────────────────────────────────────

// Launch target: 6 months from publication baseline
const LAUNCH_DATE = new Date("2026-01-01T00:00:00Z");

const PETAL_EMOJIS = ["🌸", "🌺", "🌹", "🪷", "💐", "🌼"];
const MAX_PETALS = 18;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/bibigracefoundation", icon: "f" },
  { label: "Instagram", href: "https://www.instagram.com/bibigracefoundation", icon: "📸" },
  { label: "Twitter / X", href: "https://twitter.com/bibigraceNG", icon: "𝕏" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bibigracefoundation", icon: "in" },
  { label: "Email us", href: "mailto:info@bibigracefoundation.org", icon: "✉" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

let petalCounter = 0;

function createPetal(): Petal {
  return {
    id: petalCounter++,
    emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
    left: `${Math.random() * 100}%`,
    fontSize: `${0.9 + Math.random() * 1.2}rem`,
    animationDuration: `${6 + Math.random() * 8}s`,
    animationDelay: `${Math.random() * 2}s`,
    swayDuration: `${3 + Math.random() * 4}s`,
  };
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(LAUNCH_DATE));
  const [petals, setPetals] = useState<Petal[]>([]);
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<"idle" | "error" | "submitting" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const prefersReducedMotion = useRef(false);

  // ── Check prefers-reduced-motion ──
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
  }, []);

  // ── Countdown ──
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(LAUNCH_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ── Petals ──
  const addPetal = useCallback(() => {
    if (prefersReducedMotion.current) return;
    setPetals((prev) => {
      if (prev.length >= MAX_PETALS) return prev;
      return [...prev, createPetal()];
    });
  }, []);

  const removePetal = useCallback((id: number) => {
    setPetals((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    // Seed initial petals
    setPetals(Array.from({ length: 8 }, () => createPetal()));

    const interval = setInterval(addPetal, 1800);
    return () => clearInterval(interval);
  }, [addPetal]);

  // ── Email form ──
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (formState === "error") {
      setFormState("idle");
      setErrorMsg("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setFormState("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setFormState("submitting");
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 900));
    setFormState("success");
  }

  // ── Render ──
  return (
    <div className="page-wrapper">
      {/* Floating Petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          aria-hidden="true"
          style={{
            left: petal.left,
            fontSize: petal.fontSize,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
          onAnimationEnd={() => removePetal(petal.id)}
        >
          {petal.emoji}
        </span>
      ))}

      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="logo-text">
            <span className="logo-icon" aria-hidden="true">🌸</span>
            Bibi Grace Foundation
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <main className="hero" id="main-content">
        <div className="container">
          <div className="hero-card">
            <span className="badge">🌺 A New Chapter Begins</span>

            <p className="hero-eyebrow">We are</p>
            <h1 className="hero-title">
              Coming
              <span className="highlight">Soon</span>
            </h1>

            <p className="hero-description">
              Bibi Grace Foundation is preparing to launch something beautiful — a
              platform dedicated to providing quality education, materials, and
              financial support to children and youths, helping them become
              self-reliant and empowered.
            </p>

            {/* Countdown */}
            <section aria-label="Countdown to launch">
              <div className="countdown" role="timer" aria-live="polite" aria-atomic="true">
                <div className="countdown-unit">
                  <span className="countdown-value" aria-label={`${timeLeft.days} days`}>
                    {pad(timeLeft.days)}
                  </span>
                  <span className="countdown-label">Days</span>
                </div>

                <span className="countdown-separator" aria-hidden="true">:</span>

                <div className="countdown-unit">
                  <span className="countdown-value" aria-label={`${timeLeft.hours} hours`}>
                    {pad(timeLeft.hours)}
                  </span>
                  <span className="countdown-label">Hours</span>
                </div>

                <span className="countdown-separator" aria-hidden="true">:</span>

                <div className="countdown-unit">
                  <span className="countdown-value" aria-label={`${timeLeft.minutes} minutes`}>
                    {pad(timeLeft.minutes)}
                  </span>
                  <span className="countdown-label">Mins</span>
                </div>

                <span className="countdown-separator" aria-hidden="true">:</span>

                <div className="countdown-unit">
                  <span className="countdown-value" aria-label={`${timeLeft.seconds} seconds`}>
                    {pad(timeLeft.seconds)}
                  </span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="divider" aria-hidden="true">
              <span className="divider-icon">🌸</span>
            </div>

            {/* Email Notify */}
            <section className="notify-section" aria-labelledby="notify-heading">
              <h2 className="notify-title" id="notify-heading">
                Be the first to know when we launch
              </h2>

              {formState === "success" ? (
                <div className="success-state" role="status">
                  <span className="success-icon" aria-hidden="true">🎉</span>
                  <p className="success-title">You&apos;re on the list!</p>
                  <p className="success-text">
                    Thank you for your interest. We&apos;ll notify you the moment we
                    go live.
                  </p>
                </div>
              ) : (
                <form
                  className="email-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Email notification signup"
                >
                  <div className="email-input-wrapper">
                    <label htmlFor="notify-email" className="sr-only">
                      Your email address
                    </label>
                    <input
                      id="notify-email"
                      type="email"
                      className={`email-input${formState === "error" ? " error" : ""}`}
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      autoComplete="email"
                      aria-describedby="form-feedback"
                      aria-invalid={formState === "error"}
                      disabled={formState === "submitting"}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? "Sending…" : "Notify Me"}
                  </button>
                </form>
              )}

              {formState === "error" && (
                <p
                  id="form-feedback"
                  className="form-feedback form-error"
                  role="alert"
                >
                  {errorMsg}
                </p>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p className="social-heading">Follow Our Journey</p>
          <nav className="social-links" aria-label="Social media links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                aria-label={link.label}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </nav>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Bibi Grace Foundation. All rights
            reserved.
            <br />
            Registered Non-Profit Organisation.
          </p>
        </div>
      </footer>
    </div>
  );
}
