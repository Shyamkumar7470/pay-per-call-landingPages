# Pay-per-call landing pages (Next.js App Router + TS + Tailwind)
Run: `npm i && npm run dev` → /auto-insurance and /roofing. Edit `src/config/site.ts` (numbers, campaign IDs, GA, DNI script) and `src/content/*.ts` (copy).

## Pre-launch checklist
**Tracking** – [ ] Network-issued number (static or DNI) set; DNI script URL + class tested  [ ] Campaign ID/SubID/UTM params pass through (test `?subid=x&utm_source=y`)  [ ] `call_click` fires in GA/GTM  [ ] Test call appears in network dashboard with correct attribution  [ ] Mobile call-duration/qualification postback confirmed
**Compliance** – [ ] Network approved this page, copy and disclosures  [ ] Advertiser name/licensing text added only if supplied  [ ] Recording/consent language only if provider records  [ ] Privacy Policy + Terms pages exist (/privacy, /terms), cookie consent if you load analytics in regulated states  [ ] No guarantees of savings, eligibility, rates; no fake reviews/licenses/locations  [ ] Ad copy matches page claims  [ ] TCPA/state rules reviewed by counsel
**QA** – [ ] Sticky CTA visible on iOS/Android  [ ] tel: link dials  [ ] Lighthouse mobile ≥90, LCP <2.5s  [ ] Keyboard + screen reader pass, contrast AA  [ ] Licensed hero image added with width/height + alt  [ ] Number replaced everywhere (no "(000)" placeholder live)
