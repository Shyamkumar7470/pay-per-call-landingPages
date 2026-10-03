import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage"; import { auto } from "@/content/auto";
export const metadata: Metadata = { title: "Auto Insurance Options | Call to Explore", description: "Call to ask a participating provider about auto insurance options. Independent referral service." };
export default function Page(){ return <LandingPage c={auto} />; }
