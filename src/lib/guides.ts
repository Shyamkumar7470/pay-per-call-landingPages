export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  heading: string;
  contentHtml: string;
}

export interface GuideAuthor {
  name: string;
  role: string;
  bio: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  vertical: "home" | "auto" | "roofing";
  categoryName: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: GuideAuthor;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedGuideSlugs: string[];
}

export const sampleAuthor: GuideAuthor = {
  name: "Marcus Vance, CPCU [PLACEHOLDER - Verify Contributor Name]",
  role: "Senior Insurance & Property Risk Analyst",
  bio: "Marcus has over 14 years of experience in property-casualty underwriting, risk assessment, and consumer insurance education. He specializes in breaking down complex insurance contracts for homeowners.",
};

export const guides: Guide[] = [
  {
    slug: "how-much-home-insurance-do-i-need",
    title: "How Much Homeowners Insurance Do I Need? (Complete Limits & Coverage Guide)",
    metaTitle: "How Much Homeowners Insurance Do I Need? Coverage Guide (2026)",
    metaDescription: "Learn how to accurately calculate dwelling coverage, personal property, and liability limits for your home without overpaying or being underinsured.",
    summary: "Determining how much homeowners insurance you need requires evaluating four primary coverage buckets: Dwelling (Coverage A), Other Structures (Coverage B), Personal Property (Coverage C), and Personal Liability (Coverage E). This guide explains how to calculate rebuild costs rather than market values.",
    vertical: "home",
    categoryName: "Homeowners Insurance Coverage",
    readTime: "7 min read",
    publishedDate: "2026-01-15",
    updatedDate: "2026-03-28",
    author: sampleAuthor,
    sections: [
      {
        id: "market-value-vs-rebuild-cost",
        heading: "1. Dwelling Coverage (Coverage A): Why Market Value is the Wrong Metric",
        contentHtml: `
          <p>One of the most frequent misconceptions property owners have is assuming their homeowners insurance dwelling limit should equal the purchase price or real estate market value of their property. In insurance underwriting, <strong>market value includes land value, neighborhood desirability, and school district premiums</strong>—none of which burn down in a fire or blow away in a windstorm.</p>
          <p>Instead, your dwelling limit should reflect the <em>estimated reconstruction cost</em>: the exact dollar amount required to rebuild your home from the ground up at current local labor, material, and code-compliance rates [CITE NEEDED: NAIC Construction Cost Guide].</p>
          <div class="my-6 p-4 rounded-xl bg-sand/40 border-l-4 border-signal">
            <h4 class="font-bold text-ink mb-1">Standard Formula for Estimated Rebuild Cost:</h4>
            <p class="text-sm text-ink-muted">Total Square Footage × Local Building Cost Per Square Foot = Baseline Dwelling Minimum. Special features like custom cabinetry, slate roofs, and historic moldings increase this baseline.</p>
          </div>
          <p>To guard against sharp spikes in building supplies following catastrophic weather events, consider asking participating providers about <strong>Extended Replacement Cost (typically 125% to 150%)</strong> or <strong>Guaranteed Replacement Cost</strong> endorsements.</p>
        `,
      },
      {
        id: "personal-property-calculation",
        heading: "2. Personal Property Coverage (Coverage C): Conducting a Home Inventory",
        contentHtml: `
          <p>Coverage C protects your belongings—furniture, electronics, appliances, clothing, tools, and sports gear—regardless of whether they are damaged inside your house or stolen while you are traveling.</p>
          <p>By default, standard HO-3 policies set Personal Property limits between <strong>50% and 70% of your Dwelling Coverage (Coverage A)</strong>. For instance, if your dwelling limit is $400,000, your belongings coverage will automatically default to $200,000 to $280,000.</p>
          <p>However, if you own high-value items such as fine jewelry, luxury watches, firearms, or fine art, standard policies enforce sub-limits (often capped at $1,500 to $2,500 per category for theft). For valuable items, consider discussing scheduled personal property endorsements with a licensed representative.</p>
        `,
      },
      {
        id: "personal-liability-limits",
        heading: "3. Personal Liability (Coverage E): Protecting Your Assets",
        contentHtml: `
          <p>Personal liability coverage shields your household if someone is injured on your property (such as a slip-and-fall on an icy walkway or a swimming pool mishap) or if you accidentally cause property damage to someone else's premises.</p>
          <p>While standard policies frequently default to a minimum of $100,000 in liability protection, industry risk professionals generally recommend raising this to at least <strong>$300,000 or $500,000</strong>. The annual premium difference between $100,000 and $500,000 is often minimal (typically $20 to $50 per year [CITE NEEDED: Insurance Information Institute]).</p>
          <p>If your total liquid net worth, retirement savings, and equity exceed $500,000, speak to an agent about a standalone Personal Umbrella Policy (PUP) providing an additional $1M to $5M in excess liability protection.</p>
        `,
      },
      {
        id: "deductible-selection-strategy",
        heading: "4. Choosing the Right Deductible Structure",
        contentHtml: `
          <p>Your deductible is the out-of-pocket amount you are responsible for paying before insurance proceeds are disbursed. Homeowners insurance deductibles usually fall into two categories:</p>
          <ul class="list-disc pl-6 space-y-2 my-3">
            <li><strong>Fixed Flat Dollar Deductibles:</strong> Standard amounts such as $1,000, $1,500, or $2,500 per covered loss.</li>
            <li><strong>Percentage-Based Deductibles:</strong> Common in coastal or hail-prone states for Named Storms, Hurricanes, or Wind/Hail (e.g., 1%, 2%, or 5% of Coverage A). On a $400,000 dwelling limit, a 2% hurricane deductible equals an $8,000 out-of-pocket cost.</li>
          </ul>
          <p>Selecting a higher flat deductible (such as $2,000 instead of $500) will lower your annual premium, but make sure you have dedicated emergency savings available to satisfy that deductible if disaster strikes.</p>
        `,
      },
    ],
    faqs: [
      {
        question: "Does my homeowners insurance cover the land value of my home?",
        answer: "No. Land cannot be destroyed by covered perils like fire, tornadoes, or windstorms. Dwelling insurance covers only the structures built upon the land.",
      },
      {
        question: "How often should I review my home insurance coverage limits?",
        answer: "You should review your policy annually, or immediately after completing home remodeling projects (like a kitchen remodel, finished basement, or new roof addition).",
      },
      {
        question: "What is the 80% Coinsurance Rule in home insurance?",
        answer: "Most home insurance contracts require your dwelling coverage to equal at least 80% of the full replacement cost of your home. If coverage falls below 80%, the insurer may only pay a proportional fraction of partial damage claims.",
      },
    ],
    relatedGuideSlugs: ["ho3-vs-ho5-homeowners-insurance", "replacement-cost-vs-actual-cash-value-home-insurance"],
  },
  {
    slug: "ho3-vs-ho5-homeowners-insurance",
    title: "HO-3 vs. HO-5 Homeowners Insurance Policies: Key Differences Explained",
    metaTitle: "HO-3 vs HO-5 Home Insurance: Coverage Differences (2026)",
    metaDescription: "Compare HO-3 (Special Form) vs HO-5 (Comprehensive Form) home insurance policies. Understand named perils vs open perils and which policy suits your home.",
    summary: "HO-3 is the most common homeowners policy in the US, providing open perils protection for your structure and named perils for personal property. HO-5 provides open perils coverage for both structure and contents. Here is how they compare.",
    vertical: "home",
    categoryName: "Policy Comparisons",
    readTime: "6 min read",
    publishedDate: "2026-02-04",
    updatedDate: "2026-03-30",
    author: sampleAuthor,
    sections: [
      {
        id: "named-vs-open-perils",
        heading: "1. Core Distinction: Named Perils vs. Open Perils",
        contentHtml: `
          <p>To understand the difference between HO-3 and HO-5 policies, you must first understand how perils (causes of loss) are defined in insurance contracts:</p>
          <ul class="list-disc pl-6 space-y-2 my-3">
            <li><strong>Named Perils:</strong> The policy covers damage <em>only</em> if caused by a specific peril explicitly listed in the contract (e.g., Fire, Lightning, Windstorm, Hail, Theft, Vandalism, Frozen Plumbing). If a cause is not on the list, it is not covered.</li>
            <li><strong>Open Perils (All-Risk):</strong> The policy covers <em>all</em> causes of loss, unless the peril is explicitly listed under policy exclusions (such as Flood, Earth Movement, Wear and Tear, Pest Infestation, or Nuclear Hazard).</li>
          </ul>
        `,
      },
      {
        id: "ho3-breakdown",
        heading: "2. The HO-3 Policy (Special Form)",
        contentHtml: `
          <p>The <strong>HO-3 Special Form</strong> is the standard policy purchased by approximately 80% of single-family homeowners in the United States [CITE NEEDED: Insurance Information Institute].</p>
          <p>Under an HO-3 policy:</p>
          <ul class="list-disc pl-6 space-y-2 my-3">
            <li><strong>Dwelling (Structure):</strong> Covered on an <em>Open Perils</em> basis.</li>
            <li><strong>Personal Property (Belongings):</strong> Covered on a <em>16 Named Perils</em> basis.</li>
            <li><strong>Burden of Proof:</strong> If your furniture is damaged, you as the policyholder must prove that the damage was caused by one of the 16 named perils.</li>
          </ul>
        `,
      },
      {
        id: "ho5-breakdown",
        heading: "3. The HO-5 Policy (Comprehensive Form)",
        contentHtml: `
          <p>The <strong>HO-5 Comprehensive Form</strong> is the highest tier of coverage available for single-family homes, frequently designed for newer constructions or high-value homes.</p>
          <p>Under an HO-5 policy:</p>
          <ul class="list-disc pl-6 space-y-2 my-3">
            <li><strong>Dwelling (Structure):</strong> Covered on an <em>Open Perils</em> basis.</li>
            <li><strong>Personal Property (Belongings):</strong> Covered on an <em>Open Perils</em> basis.</li>
            <li><strong>Burden of Proof:</strong> In a personal property claim, the insurer must prove that an explicit exclusion applies to deny the claim.</li>
            <li><strong>Higher Sub-Limits:</strong> HO-5 contracts typically include higher limits for jewelry, silverware, and electronics theft out of the box.</li>
          </ul>
        `,
      },
      {
        id: "comparison-table",
        heading: "4. Summary Comparison: HO-3 vs. HO-5",
        contentHtml: `
          <div class="overflow-x-auto my-6">
            <table class="w-full text-left text-sm border border-sand">
              <thead class="bg-sand/40 font-bold text-ink">
                <tr>
                  <th class="p-3 border border-sand">Feature</th>
                  <th class="p-3 border border-sand">HO-3 (Special)</th>
                  <th class="p-3 border border-sand">HO-5 (Comprehensive)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-sand">
                <tr>
                  <td class="p-3 font-semibold">Dwelling Protection</td>
                  <td class="p-3">Open Perils</td>
                  <td class="p-3">Open Perils</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold">Belongings Protection</td>
                  <td class="p-3">16 Named Perils</td>
                  <td class="p-3">Open Perils</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold">Loss Settlement on Contents</td>
                  <td class="p-3">Actual Cash Value (unless endorsed)</td>
                  <td class="p-3">Replacement Cost (standard)</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold">Average Cost Difference</td>
                  <td class="p-3">Standard baseline</td>
                  <td class="p-3">Approx. 5% - 15% higher premium [CITE NEEDED]</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
    ],
    faqs: [
      {
        question: "Can I add open perils contents coverage to an HO-3 policy?",
        answer: "Yes. Many carriers offer an endorsement (often called HO-15 or Special Personal Property Endorsement) that upgrades your HO-3 belongings coverage to an open perils basis.",
      },
      {
        question: "Does an HO-5 policy cover flooding or earthquakes?",
        answer: "No. Even open perils policies like HO-5 specifically exclude floods, sewer backups, and earthquakes unless supplemental policies or endorsements are added.",
      },
    ],
    relatedGuideSlugs: ["how-much-home-insurance-do-i-need", "replacement-cost-vs-actual-cash-value-home-insurance"],
  },
  {
    slug: "replacement-cost-vs-actual-cash-value-home-insurance",
    title: "Replacement Cost vs. Actual Cash Value (ACV) in Home Insurance",
    metaTitle: "Replacement Cost vs Actual Cash Value (ACV) Home Insurance",
    metaDescription: "Understand the critical difference between Replacement Cost Value (RCV) and Actual Cash Value (ACV) in property claims and how depreciation impacts payouts.",
    summary: "When filing a homeowners insurance claim, how your damages are reimbursed depends heavily on whether your contract uses Replacement Cost Value (RCV) or Actual Cash Value (ACV). Discover why ACV can leave you with significant out-of-pocket costs.",
    vertical: "home",
    categoryName: "Claims & Settlement Rules",
    readTime: "6 min read",
    publishedDate: "2026-02-18",
    updatedDate: "2026-03-29",
    author: sampleAuthor,
    sections: [
      {
        id: "definitions-and-formulas",
        heading: "1. Defining RCV and ACV Reimbursement",
        contentHtml: `
          <p>The method your insurance carrier uses to value damaged property determines the size of your settlement check after a deductible is subtracted:</p>
          <div class="grid sm:grid-cols-2 gap-4 my-6">
            <div class="p-5 rounded-xl border border-sand bg-paper-card shadow-sm">
              <h4 class="font-bold text-ink text-base mb-1.5">Replacement Cost Value (RCV)</h4>
              <p class="text-xs text-ink-muted leading-relaxed">The cost to repair or replace the damaged item with a brand new, comparable item of like kind and quality at current retail prices, <strong>with zero deduction for depreciation</strong>.</p>
            </div>
            <div class="p-5 rounded-xl border border-sand bg-paper-card shadow-sm">
              <h4 class="font-bold text-ink text-base mb-1.5">Actual Cash Value (ACV)</h4>
              <p class="text-xs text-ink-muted leading-relaxed">Replacement cost minus depreciation (age, physical wear and tear, and obsolescence). Formula: <strong>ACV = Current Replacement Cost - Depreciation</strong>.</p>
            </div>
          </div>
        `,
      },
      {
        id: "real-world-claim-example",
        heading: "2. Real-World Claim Example: A 10-Year-Old Roof",
        contentHtml: `
          <p>Consider a scenario where a severe hailstorm totals an asphalt shingle roof with an original 20-year lifespan that is currently 10 years old (50% depreciated). A full replacement estimate from a licensed contractor is $16,000, and your policy deductible is $1,000:</p>
          <ul class="list-disc pl-6 space-y-2.5 my-4">
            <li><strong>Under Replacement Cost (RCV):</strong> The insurer calculates $16,000 replacement cost minus your $1,000 deductible. The total insurance payout is <strong>$15,000</strong>.</li>
            <li><strong>Under Actual Cash Value (ACV):</strong> The insurer deducts 50% depreciation ($8,000) from the $16,000 value, leaving an ACV base of $8,000. After subtracting the $1,000 deductible, the insurance payout is only <strong>$7,000</strong>. You must pay $9,000 out-of-pocket to install the new roof.</li>
          </ul>
        `,
      },
      {
        id: "roof-acv-schedules",
        heading: "3. The Rise of Roof Depreciation Schedules",
        contentHtml: `
          <p>In recent years, due to rising storm claims, many insurance carriers in wind/hail-prone regions have moved from full RCV roof coverage to <strong>Roof Payment Schedules</strong> or ACV endorsements once a roof exceeds 10 to 15 years of age [CITE NEEDED: Insurance Department Advisories].</p>
          <p>When shopping for homeowners insurance, always confirm with the representative whether your roof is covered on a full Replacement Cost basis or if an Actual Cash Value depreciation schedule applies.</p>
        `,
      },
    ],
    faqs: [
      {
        question: "Is Personal Property normally covered by Replacement Cost or ACV?",
        answer: "In a standard HO-3 policy, belongings are defaulted to Actual Cash Value. However, you can add a Personal Property Replacement Cost Loss Settlement endorsement for a modest annual fee.",
      },
      {
        question: "What is recoverable depreciation in insurance claims?",
        answer: "If you have an RCV policy, the insurer initially pays the ACV amount upfront. Once you submit proof that the repairs or replacements have been completed, they release the withheld depreciation (recoverable depreciation) to you.",
      },
    ],
    relatedGuideSlugs: ["how-much-home-insurance-do-i-need", "ho3-vs-ho5-homeowners-insurance"],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuidesByVertical(vertical: "home" | "auto" | "roofing"): Guide[] {
  return guides.filter(g => g.vertical === vertical);
}
