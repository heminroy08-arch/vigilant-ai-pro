import { Link } from "@tanstack/react-router";
import { PROFILE, SITE_TAGLINE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold text-foreground">
            AI-Powered Crime Intelligence System
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{SITE_TAGLINE}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Project Lead: {PROFILE.name} · {PROFILE.location}
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/demo" className="text-muted-foreground hover:text-foreground">
                Secure Login
              </Link>
            </li>
            <li>
              <Link to="/demo" className="text-muted-foreground hover:text-foreground">
                Request Demo
              </Link>
            </li>
            <li>
              <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy &amp; Data Handling
              </Link>
            </li>
            <li>
              <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                Licensing &amp; Contracts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} AI Crime Intelligence Initiative · Restricted government use
      </div>
    </footer>
  );
}
