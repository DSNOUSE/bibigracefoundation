"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./donate.module.css";

export default function DonateCampaign() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.page}>
      <section className={styles.split}>
        <div className={styles.panelLeft}>
          <span className={styles.alertTag}>CHILD EDUCATION: HUMANITARIAN RESPONSE</span>

          <h1 className={styles.title}>Help children stay in school, donate to Bibi Grace Foundation now</h1>

          <p className={styles.subtitle}>
            Your donation supports school fees, learning materials, menstrual hygiene supplies, and
            outreach for children and youths in vulnerable communities.
          </p>

          {!submitted ? (
            <form className={styles.donorForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Enter your phone number"
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Continue to Donate
              </button>
            </form>
          ) : (
            <div className={styles.accountInfo}>
              <h2 className={styles.accountTitle}>Thank you for your interest in donating!</h2>
              <p className={styles.accountDesc}>
                Please make your donation to the following account:
              </p>
              <div className={styles.accountNumberBox}>
                <p className={styles.accountNumber}>2041404487</p>
                <p className={styles.accountBank}>First Bank Nigeria</p>
              </div>
              <p className={styles.accountNote}>
                Account Name: <strong>Bibi Grace Foundation</strong>
              </p>
            </div>
          )}
        </div>

        <div className={styles.panelRight}>
          <Image
            src="/children.jpg"
            alt="Child beneficiary of Bibi Grace Foundation support"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            className={styles.heroImage}
          />
        </div>
      </section>
    </main>
  );
}
