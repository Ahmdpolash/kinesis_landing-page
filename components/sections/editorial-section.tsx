"use client";

import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/stagger-reveal";

const specs = [
  { label: "Weight Range", value: "12g - 280g", numeric: false },
  { label: "Battery Life", value: "7 Days +", numeric: false },
  { label: "Latency", value: "< 2ms", numeric: false },
  { label: "Sensor Nodes", value: "18", numeric: true, numValue: 18, suffix: "" },
];

const stats = [
  { end: 50000, suffix: "+", label: "Active Users" },
  { end: 128, suffix: "", label: "Countries Reached" },
  { end: 99, suffix: ".9%", label: "Uptime Reliability", decimals: 1 },
  { end: 12, suffix: "g", label: "Lightest Device" },
];

export function EditorialSection() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Tech Stats Grid */}
      <Reveal>
        <div className="grid grid-cols-2 gap-16 px-6 py-24 md:grid-cols-4 md:px-12 md:py-32 lg:px-20 lg:py-40">
          {stats.map((stat) => (
            <CountUp
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals || 0}
            />
          ))}
        </div>
      </Reveal>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec, idx) => (
          <div
            key={spec.label}
            className="group border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {spec.label}
            </p>
            {spec.numeric ? (
              <CountUp
                end={spec.numValue!}
                suffix={spec.suffix || ""}
                className="inline-block"
              />
            ) : (
              <p className="font-medium text-foreground text-4xl md:text-5xl tabular-nums">
                {spec.value}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Full-width Video with gradient overlay */}
      <div className="relative aspect-video w-full md:aspect-21/9">
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-transparent to-background/20 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcdafadc-cb7e-4cb7-9cbf-edcbaf2360a5_1-cNBCz5fomcLRmm1cTXSBOKCq10VP91.mp4"
        />
      </div>
    </section>
  );
}
