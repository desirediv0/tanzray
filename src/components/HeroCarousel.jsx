"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop",
    title: "Navigate Your",
    highlight: "Legal Mosaic",
    subtitle:
      "Premium legal services from Advocate Manjeet Kaur & Associates — trusted counsel for every challenge.",
  },
  {
    bg: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=1920&auto=format&fit=crop",
    title: "Your Rights,",
    highlight: "Our Mission",
    subtitle:
      "Experienced high court advocacy in Delhi with dedication, discretion, and results.",
  },
  {
    bg: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1920&auto=format&fit=crop",
    title: "Trusted Representation",
    highlight: "Since Day One",
    subtitle:
      "Personalised legal strategies for complex personal and commercial matters.",
  },
];

const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false });

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);

  return (
    <section className="relative w-full h-[85vh] min-h-[520px] overflow-hidden bg-[#1a1a1a]">
      {/* Embla Viewport */}
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative flex-[0_0_100%] h-full"
              style={{ minWidth: "100%" }}
            >
              {/* Background Image */}
              <img
                src={slide.bg}
                alt={`Slide ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div key={selectedIndex} className="animate-fade-in">
            {/* Eyebrow Label */}
            <p className="text-md md:text-lg tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-4 opacity-90">
              Tanzray Legal Attorneys
            </p>
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              {slides[selectedIndex].title}{" "}
              <span className="text-[#D4AF37]">{slides[selectedIndex].highlight}</span>
            </h1>
            {/* Gold Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mb-6 rounded-full" />
            {/* Subtitle */}
            <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
              {slides[selectedIndex].subtitle}
            </p>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8860B] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/80 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold rounded-lg transition-all duration-300 text-sm md:text-base w-full sm:w-auto justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Arrow Buttons */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/20 text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === selectedIndex
                ? "w-8 bg-[#D4AF37]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
