import type { Content } from "@/components/LandingPage";

export const home: Content = {
  vertical: "home",
  headline: "Looking to Compare Homeowners Insurance Options?",
  sub: "Call to speak with a licensed insurance provider about coverage options for your property. Availability, policy terms, and premium estimates vary by state and property profile.",
  cta: "Call to Explore Home Insurance",
  services: [
    {
      t: "Dwelling & Structure Coverage",
      d: "Ask how dwelling limits are calculated based on local construction costs rather than real estate market values.",
    },
    {
      t: "Personal Property & Liability",
      d: "Learn about personal belongings protection, replacement cost endorsements, and personal liability limit options.",
    },
    {
      t: "Deductibles & Policy Discounts",
      d: "Inquire about bundled auto/home policies, protective device credits (smoke/security alarms), and deductible selections.",
    },
  ],
  steps: [
    "Tap the call button to connect with a participating licensed insurance provider or agency.",
    "Share basic property details (such as ZIP code, approximate square footage, home age, and current coverage).",
    "Review available coverage options and quote estimates directly with the agent. Calling creates zero obligation.",
  ],
  prepare: [
    "Property ZIP code and address",
    "Approximate square footage and year built",
    "Roof age and material (e.g., asphalt shingle, tile, metal)",
    "Current policy declarations page (if currently insured)",
  ],
  faqs: [
    {
      q: "How are homeowners insurance premium estimates calculated?",
      a: "Premiums depend on multiple underwriting factors, including property location, dwelling rebuild cost, roof age, claims history, credit-based insurance score (where permitted by state law), and selected deductibles.",
    },
    {
      q: "Does standard homeowners insurance cover flood or earthquake damage?",
      a: "Standard HO-3 and HO-5 homeowners policies generally exclude flood and earthquake damage. You can ask the licensed representative on the call about separate flood insurance (NFIP or private) or earthquake endorsements.",
    },
    {
      q: "Who will I speak to when I place a call?",
      a: "You will be connected to an independent, licensed insurance agency or provider participating in our advertising network, not to this website.",
    },
    {
      q: "Does calling obligate me to purchase a policy?",
      a: "No. Calling is 100% free with no obligation to purchase. You can ask questions and explore options at your own discretion.",
    },
  ],
  disclosures: [
    "This website is an independent advertising and marketing referral service. It is not an insurance company, agency, or broker and does not underwrite policies or issue binding coverage.",
    "Calls placed through this site are routed to participating licensed insurance advertisers who may compensate this website. Insurance products and availability vary by state and underwriting criteria. [Insert advertiser name, NPN/licensing details as required by your network.]",
    "Rates, discounts, and coverage terms are determined solely by participating carriers upon formal application. No guarantees of coverage or savings are made.",
  ],
};
