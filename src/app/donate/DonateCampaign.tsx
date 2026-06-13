"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./donate.module.css";

type DonationMode = "monthly" | "one-time";

const monthlyAmounts = [10000, 20000, 50000];
const oneTimeAmounts = [5000, 10000, 25000];

function formatNaira(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DonateCampaign() {
  const [mode, setMode] = useState<DonationMode>("monthly");
  const options = useMemo(() => (mode === "monthly" ? monthlyAmounts : oneTimeAmounts), [mode]);
  const [selected, setSelected] = useState<number>(options[1]);

  const activeAmount = options.includes(selected) ? selected : options[1];

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

          <div className={styles.widget}>
            <div className={styles.modeSwitch} role="tablist" aria-label="Donation mode">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "monthly"}
                className={mode === "monthly" ? styles.modeActive : styles.modeBtn}
                onClick={() => {
                  setMode("monthly");
                  setSelected(monthlyAmounts[1]);
                }}
              >
                Per month
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "one-time"}
                className={mode === "one-time" ? styles.modeActive : styles.modeBtn}
                onClick={() => {
                  setMode("one-time");
                  setSelected(oneTimeAmounts[1]);
                }}
              >
                Now
              </button>
            </div>

            <div className={styles.widgetBody}>
              <p className={styles.question}>How much would you like to donate?</p>

              <div className={styles.amountGrid}>
                {options.map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    className={amount === activeAmount ? styles.amountActive : styles.amountBtn}
                    onClick={() => setSelected(amount)}
                  >
                    {formatNaira(amount)}
                  </button>
                ))}
                <button type="button" className={styles.amountBtn}>
                  Other
                </button>
              </div>

              <div className={styles.paymentRow}>
                <button type="button" className={styles.cardBtn}>
                  CARD
                </button>
                <button type="button" className={styles.paypalBtn}>
                  PayPal
                </button>
              </div>
            </div>
          </div>
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
