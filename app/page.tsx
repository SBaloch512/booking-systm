"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Users, ShieldCheck } from "lucide-react";
import { HeroScrollDemo } from "@/components/ui/demo";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full relative z-10">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-xs tracking-[0.35em] uppercase text-gold/70">
                Premium Grooming
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-light leading-none mb-6 animate-fade-up delay-100">
              <span className="block text-[clamp(3.5rem,9vw,5rem)] text-ivory tracking-tight">
                Book your
              </span>
              <span className="block text-[clamp(3.5rem,9vw,5rem)] text-gold tracking-tight">
                perfect cut.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-base md:text-lg font-light text-light-gray max-w-xl mb-10 animate-fade-up delay-200">
              Reserve your appointment online. Choose your service, pick a time, and we&apos;ll see you in the chair.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-300">
              <Link href="/booking" className="btn-primary flex items-center gap-2">
                <span>Book now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="btn-ghost text-sm">
                Log in
              </Link>
              <Link href="/signup" className="btn-ghost text-sm">
                Create account
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 mt-16 animate-fade-up delay-400 pt-10 border-t border-border-gray">
              {[
                { value: "500+", label: "Happy clients" },
                { value: "6+", label: "Years experience" },
                { value: "3", label: "Expert barbers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-light text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs tracking-[0.2em] text-light-gray uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section
        id="features"
        className="bg-charcoal/30 border-y border-border-gray py-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem
            icon={<CalendarDays className="w-5 h-5" />}
            title="Book online"
            description="Pick your service and time slot. Instant confirmation, no phone calls."
          />
          <FeatureItem
            icon={<Users className="w-5 h-5" />}
            title="Expert barbers"
            description="Skilled cuts, fades, and beard work. Premium products and a relaxed vibe."
          />
          <FeatureItem
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Simple & clear"
            description="Transparent pricing, easy rescheduling, and reminders so you never miss your slot."
          />
        </div>
      </section>

      {/* Scroll demo / product preview */}
      <section className="bg-obsidian py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <HeroScrollDemo />
        </div>
      </section>

      {/* Pricing Section - Service prices for customers */}
      <section
        id="pricing"
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-divider" />
              <span className="section-label">Services & pricing</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory leading-tight">
              Our services.
              <br />
              <span className="text-gold">Clear prices.</span>
            </h2>
          </div>
          <p className="font-body text-sm font-light text-light-gray max-w-sm leading-relaxed">
            Every service includes our full attention and premium products. Book online and pay at the shop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServicePriceCard name="Haircut" price="$35" duration="45 min" description="Precision cut, wash & style." />
          <ServicePriceCard name="Beard trim" price="$25" duration="30 min" description="Shape, trim & hot towel." highlighted />
          <ServicePriceCard name="Haircut + Beard" price="$55" duration="60 min" description="Full grooming package." />
          <ServicePriceCard name="Hair styling" price="$20" duration="20 min" description="Wash, product & finish." />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Book a service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-gold py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #0a0a0a 0, #0a0a0a 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-light text-obsidian mb-6 leading-tight">
            Ready for a
            <br />
            fresh cut?
          </h2>
          <p className="font-body text-xs md:text-sm text-obsidian/70 tracking-[0.25em] uppercase mb-10">
            Book your appointment online — quick and easy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-obsidian text-ivory font-body font-medium text-xs md:text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:bg-charcoal hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            >
              Book now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-3 border border-obsidian/40 text-obsidian font-body font-medium text-xs md:text-sm tracking-[0.15em] uppercase px-8 py-4 bg-gold/10 hover:bg-gold/20 transition-colors"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-charcoal/60 text-gold">
        {icon}
      </div>
      <div>
        <h3 className="font-body text-sm uppercase tracking-[0.25em] text-ivory mb-1">
          {title}
        </h3>
        <p className="font-body text-sm text-light-gray leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

type ServicePriceCardProps = {
  name: string;
  price: string;
  duration: string;
  description: string;
  highlighted?: boolean;
};

function ServicePriceCard({
  name,
  price,
  duration,
  description,
  highlighted,
}: ServicePriceCardProps) {
  return (
    <div
      className={`relative border bg-charcoal/40 border-border-gray p-6 flex flex-col gap-4 ${
        highlighted
          ? "border-gold/80 shadow-[0_0_40px_rgba(201,169,110,0.35)]"
          : "hover:border-gold/40 transition-colors"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-1 text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-obsidian">
          Popular
        </div>
      )}
      <div>
        <h3 className="font-display text-xl text-ivory mb-1">{name}</h3>
        <p className="font-body text-xs text-light-gray">{description}</p>
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-3xl text-gold">{price}</span>
        <span className="font-body text-xs text-light-gray uppercase tracking-[0.2em]">
          {duration}
        </span>
      </div>
      <Link
        href="/booking"
        className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-body tracking-[0.2em] uppercase ${
          highlighted
            ? "bg-gold text-obsidian border-gold hover:bg-gold-light"
            : "border-gold/40 text-ivory hover:bg-gold/10"
        } transition-colors`}
      >
        Book
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

