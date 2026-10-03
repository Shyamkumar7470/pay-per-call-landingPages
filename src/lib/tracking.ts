import { tracking, Vertical } from "@/config/site";
export const toTel = (p: string) => (p ? `tel:${p.replace(/[^+\d]/g, "")}` : "#");
export function readParams(): Record<string, string> {
  const q = new URLSearchParams(window.location.search); const out: Record<string, string> = {};
  [...tracking.subIdParams, ...tracking.utmParams].forEach(k => { const v = q.get(k); if (v) out[k] = v; });
  try { if (Object.keys(out).length) sessionStorage.setItem("ppc_params", JSON.stringify(out));
        else { const s = sessionStorage.getItem("ppc_params"); if (s) return JSON.parse(s); } } catch {}
  return out;
}
export function trackCallClick(v: Vertical, placement: string) {
  const payload = { vertical: v, placement, campaign_id: tracking.campaignIds[v], ...readParams() };
  const w = window as any;
  if (typeof w.gtag === "function") w.gtag("event", "call_click", payload);
  (w.dataLayer = w.dataLayer || []).push({ event: "call_click", ...payload });
}
