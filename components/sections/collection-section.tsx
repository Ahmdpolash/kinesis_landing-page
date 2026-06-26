"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Induction Charging Stand",
    description: "Glassmorphic desktop pedestal with magnetic lock-in power",
    price: "$99",
    image: "/images/gallery-biometrics-ui.png",
  },
  {
    id: 2,
    name: "Biometric Pulse Sleeve",
    description: "Textured compression sleeve housing auxiliary sensors",
    price: "$49",
    image: "/images/gallery-wearer-cyber.png",
  },
  {
    id: 3,
    name: "Mag-Lock Chest Harness",
    description: "Carbon fiber sports mount for the Catalyst tracking node",
    price: "$149",
    image: "/images/product-catalyst.png",
  },
  {
    id: 4,
    name: "Reinforced Tension Straps",
    description: "Adjustable utility links with high-tensile clips",
    price: "$39",
    image: "/images/gallery-glow-forest.png",
  },
  {
    id: 5,
    name: "Wireless Travel Case",
    description:
      "Sleek protective casing with built-in emergency backup battery",
    price: "$89",
    image: "/images/product-aura.png",
  },
  {
    id: 6,
    name: "Bone-Conduction Collar",
    description: "High-fidelity audio neckpiece with sweat-resistant grips",
    price: "$179",
    image: "/images/gallery-harness-outdoor.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Essential Bio-Gear
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandator scrollbar-hide">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group flex-shrink-0 w-[75vw] snap-center"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
