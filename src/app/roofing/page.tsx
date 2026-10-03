import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage"; import { roofing } from "@/content/roofing";
export const metadata: Metadata = { title: "Roofing Project Help | Call to Discuss", description: "Call to discuss a roof repair or replacement with a participating provider. Independent referral service." };
export default function Page(){ return <LandingPage c={roofing} />; }
