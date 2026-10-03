"use client";
import { tracking, Vertical } from "@/config/site";
import { toTel, trackCallClick } from "@/lib/tracking";

export default function CallButton({
  vertical,
  label,
  placement,
  className = "",
}: {
  vertical: Vertical;
  label: string;
  placement: string;
  className?: string;
}) {
  const phone = tracking.phones[vertical];
  const displayPhone = phone || tracking.placeholderDisplay;

  return (
    <a
      href={toTel(phone)}
      onClick={() => trackCallClick(vertical, placement)}
      className={`group relative inline-flex min-h-[54px] items-center justify-center gap-3.5 rounded-xl bg-signal px-6 py-3 text-ink font-bold shadow-glow hover:bg-signal-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer ${className}`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink/10 text-ink group-hover:scale-110 transition-transform">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.3.55 3.4a1 1 0 01-.25 1z" />
        </svg>
      </div>
      <div className="flex flex-col items-start text-left leading-tight">
        <span className="text-sm font-extrabold uppercase tracking-wide opacity-95">{label}</span>
        <span className={`${tracking.dniClass} text-lg font-black tracking-tight`}>
          {displayPhone}
        </span>
      </div>
    </a>
  );
}

