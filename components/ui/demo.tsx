"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-24">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-sm md:text-base font-body tracking-[0.35em] uppercase text-gold/60 mb-4">
              Live product preview
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-light text-ivory leading-tight">
              See your booking experience
              <br />
              <span className="text-gold md:text-6xl font-normal mt-1 leading-none">
                come to life on scroll.
              </span>
            </h3>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80"
          alt="Dashboard preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

