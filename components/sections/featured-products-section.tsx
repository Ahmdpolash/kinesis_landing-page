"use client";

import { FadeImage } from "@/components/fade-image";
import { TiltCard } from "@/components/tilt-card";
import { StaggerReveal } from "@/components/stagger-reveal";

const features = [
  {
    title: "Biometric Neural Sync",
    description: "Innovation",
    image: "/images/gallery-biometrics-ui.png",
  },
  {
    title: "Aerospace Titanium Shell",
    description: "Performance",
    image: "/images/product-aura.png",
  },
  {
    title: "Sub-Zero Thermo-Control",
    description: "Durability",
    image: "/images/product-catalyst.png",
  },
  {
    title: "Encrypted GPS Telemetry",
    description: "Navigation",
    image: "/images/gallery-harness-outdoor.png",
  },
  {
    title: "Haptic Guidance Beacons",
    description: "Interface",
    image: "/images/gallery-wearer-cyber.png",
  },
  {
    title: "Kinetic Self-Power Grid",
    description: "Power",
    image: "/images/gallery-glow-forest.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Engineered for Synaptic Sync.
          <br />
          Designed for Physiology.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Six core technologies powering next-gen bio-integration
        </p>
      </div>

      {/* Features Grid */}
      <StaggerReveal
        className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20"
        baseDelay={0.06}
        threshold={0.05}
      >
        {features.map((feature) => (
          <TiltCard
            key={feature.title}
            className="group rounded-2xl"
            maxTilt={6}
            scale={1.02}
            glare={true}
          >
            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold transition-colors duration-300">
                {feature.title}
              </h3>
              {/* Animated underline on hover */}
              <div className="mt-2 h-px w-0 bg-foreground/30 transition-all duration-500 group-hover:w-full" />
            </div>
          </TiltCard>
        ))}
      </StaggerReveal>
    </section>
  );
}
