"use client";

import Image from "next/image";
import { Reveal } from "@/components/stagger-reveal";
import { ParallaxImage } from "@/components/parallax-image";

const quotes = [
  {
    text: "The Catalyst harness transformed my training regimen. Real-time biometric feedback pushed my limits beyond what I thought possible.",
    author: "Dr. Maya Chen",
    role: "Professional Endurance Athlete",
  },
  {
    text: "Kinesis biowearables merge medical-grade telemetry with intuitive physical haptics — engineered for performers who require real-time physiology data in extreme environments.",
    author: "KINESIS Research Team",
    role: "Biomechanics Division",
  },
];

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background overflow-hidden">
      {/* Large Text Statement with Character Reveal */}
      <Reveal>
        <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
          <blockquote className="mx-auto max-w-5xl">
            <p className="text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
              &ldquo;{quotes[1].text}&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <span className="text-sm font-medium text-foreground">{quotes[1].author}</span>
                <span className="mx-2 text-muted-foreground">&mdash;</span>
                <span className="text-sm text-muted-foreground">{quotes[1].role}</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </Reveal>

      {/* Testimonial Card */}
      <Reveal delay={0.15}>
        <div className="mx-auto max-w-5xl px-6 pb-16 md:px-12 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-secondary/50 to-background p-8 md:p-12">
            {/* Glow dot */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <blockquote>
              <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                &ldquo;{quotes[0].text}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="text-sm font-medium text-foreground">{quotes[0].author}</span>
                  <span className="mx-2 text-muted-foreground">&mdash;</span>
                  <span className="text-sm text-muted-foreground">{quotes[0].role}</span>
                </cite>
              </footer>
            </blockquote>
            {/* Rating dots */}
            <div className="mt-6 flex gap-1.5">
              {[1,2,3,4,5].map((star) => (
                <span key={star} className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* About Image with Parallax */}
      <div className="relative aspect-video w-full md:aspect-21/9">
        <ParallaxImage
          src="/images/about-background.png"
          alt="Research server lab environment"
          speed={0.2}
          className="h-full w-full"
        />
        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-transparent to-background/60" />
        
        {/* Overlay text on image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 lg:px-20">
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Our R&D lab processes over 2.4 terabytes of biometric data daily, 
              refining the intersection of human physiology and machine intelligence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
