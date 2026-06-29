"use client";

import Link from "next/link";
import { Marquee, MarqueeItem } from "@/components/marquee";

const footerLinks = {
  explore: [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Accessories", href: "#accessories" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  service: [
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Warranty", href: "#" },
  ],
};

const marqueeWords = [
  "Biometric Integration", "✦", "Neural Sync", "✦", "Haptic Feedback", "✦",
  "Real-Time Telemetry", "✦", "Aerospace Grade", "✦", "Sub-Zero Rated", "✦",
  "Kinetic Power", "✦", "Titanium Shell", "✦",
];

export function FooterSection() {
  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Marquee Section */}
      <div className="border-t border-border py-8 overflow-hidden">
        <Marquee speed={25} pauseOnHover={false}>
          {marqueeWords.map((word, i) => (
            <MarqueeItem key={i}>
              <span className={`text-sm font-medium uppercase tracking-[0.2em] ${
                word === "✦" ? "text-muted-foreground/40" : "text-muted-foreground"
              }`}>
                {word}
              </span>
            </MarqueeItem>
          ))}
        </Marquee>
      </div>

      {/* Newsletter CTA */}
      <div className="border-t border-border px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Stay ahead of the signal.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Receive early access to new drops, firmware updates, and bio-hacking research.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-border bg-secondary px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring transition-all duration-300"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-foreground">
              KINESIS
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Aerospace-grade haptic harnesses and biometric tracking rings for high-performance lifestyles.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 KINESIS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
