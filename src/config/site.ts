// Site configuration for Pay-Per-Call, Technical SEO & Tracking
// ALL placeholder values must be replaced with verified business & network details.

export type Vertical = "auto" | "roofing" | "home";

export const siteConfig = {
  domain: "https://www.yourdomain.com", // [PLACEHOLDER: Replace with verified live domain without trailing slash]
  siteName: "DirectChoice Quotes",
  operator: "Your Legal Business LLC [PLACEHOLDER]",
  businessAddress: "123 Commercial Ave, Suite 200, Dover, DE 19901 [PLACEHOLDER]",
  contactEmail: "compliance@yourdomain.com [PLACEHOLDER]",
  contactPhoneDisplay: "(800) 555-0199 [PLACEHOLDER]",
  
  // Verification tokens for Search Engines
  verification: {
    google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
    bing: "REPLACE_WITH_BING_VERIFICATION_CODE",
  },

  // Pay-per-call advertiser routing & tracking
  tracking: {
    phones: {
      auto: "", // E.164 static fallback, e.g. "+18005550191"
      roofing: "",
      home: "", // E.164 static fallback for Homeowners Insurance, e.g. "+18005550193"
    } as Record<Vertical, string>,
    placeholderDisplay: "(800) 555-0199",
    dniScriptUrl: "", // Dynamic number insertion script URL issued by network
    dniClass: "dni-number", // Swap class name for DNI
    campaignIds: {
      auto: "REPLACE_CAMPAIGN_ID_AUTO",
      roofing: "REPLACE_CAMPAIGN_ID_ROOFING",
      home: "REPLACE_CAMPAIGN_ID_HOME",
    } as Record<Vertical, string>,
    subIdParams: ["subid", "sub1", "sub2", "sub3", "clickid", "aff_sub"],
    utmParams: ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
    gaId: "", // Google Analytics 4 ID e.g. G-XXXXXXXXXX
    hours: "Monday - Friday, 9:00 AM - 8:00 PM EST [PLACEHOLDER - Confirm with advertiser]",
  },
};

// Backwards compatibility export for existing components
export const tracking = {
  phones: siteConfig.tracking.phones,
  placeholderDisplay: siteConfig.tracking.placeholderDisplay,
  dniScriptUrl: siteConfig.tracking.dniScriptUrl,
  dniClass: siteConfig.tracking.dniClass,
  campaignIds: siteConfig.tracking.campaignIds,
  subIdParams: siteConfig.tracking.subIdParams,
  utmParams: siteConfig.tracking.utmParams,
  gaId: siteConfig.tracking.gaId,
  siteName: siteConfig.siteName,
  operator: siteConfig.operator,
  hours: siteConfig.tracking.hours,
};
