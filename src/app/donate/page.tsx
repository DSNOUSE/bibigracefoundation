import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import DonateCampaign from "./donate-campaign";

export const metadata: Metadata = {
  title: "Donate | Bibi Grace Foundation",
  description: "Support children and youth through your donation to Bibi Grace Foundation.",
};

export default function DonatePage() {
  return (
    <div>
      <SiteHeader />
      <DonateCampaign />
      <SiteFooter />
    </div>
  );
}
