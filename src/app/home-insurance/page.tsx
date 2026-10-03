import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { home } from "@/content/home";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Homeowners Insurance Options | Call to Explore Coverage",
  description: "Connect with licensed insurance specialists over the phone to explore homeowners insurance options, dwelling limits, and policy terms.",
  alternates: {
    canonical: `${siteConfig.domain}/home-insurance`,
  },
  openGraph: {
    title: "Homeowners Insurance Options | Call to Explore Coverage",
    description: "Connect with licensed insurance specialists over the phone to explore homeowners insurance options, dwelling limits, and policy terms.",
    url: `${siteConfig.domain}/home-insurance`,
    type: "website",
  },
};

export default function HomeInsurancePage() {
  return <LandingPage c={home} />;
}
