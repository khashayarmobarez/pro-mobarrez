import Link from "next/link";
// import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              {/* <Logo className="w-12 h-12 transition-transform group-hover:scale-105" fill="var(--accent-color)" /> */}
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  MOBARREZ
                </span>
                <span className="text-xs font-medium tracking-wider text-accent">
                  PRO
                </span>
              </div>
            </Link>
            <p className="text-sm text-foreground/60 max-w-xs">
              Elite engineering squad delivering precision solutions since 2025.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  About Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  The Team
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="https://mobarrez.com"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Mobarrez Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* For Talent Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Talent</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/join"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Join Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/join#requirements"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Requirements
                </Link>
              </li>
              <li>
                <Link
                  href="/join#benefits"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="https://mobarrez.com"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Start Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* For Clients Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hire"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Hire the Squad
                </Link>
              </li>
              <li>
                <Link
                  href="/hire#pricing"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/hire#process"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Mobarrez Pro. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              Terms
            </Link>
            <div className="flex items-center gap-4">
              {/* Social Links - Add your actual links */}
              <a
                href="https://linkedin.com/company/mobarrez-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/mobarrez_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}