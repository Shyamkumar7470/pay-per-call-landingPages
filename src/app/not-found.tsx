import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper text-ink px-5">
      <div className="max-w-md text-center">
        <span className="font-display text-6xl font-extrabold text-pine block mb-2">404</span>
        <h1 className="font-display text-2xl font-bold text-ink mb-3">Page Not Found</h1>
        <p className="text-sm text-ink-muted mb-6">
          The page you are looking for might have been removed or does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-pine px-6 py-3 text-sm font-bold text-paper hover:bg-pine-light transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
