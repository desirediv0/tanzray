import HeroCarousel from "@/components/HeroCarousel";
import TrustBadges from "@/components/sections/BadgesSection";
import AboutFirm from "@/components/sections/AboutPreview";
import HowWeWork from "@/components/sections/OurApproach";
import WhatWeDo from "@/components/sections/PracticeAreas";
import WhyUs from "@/components/sections/WhyChooseUs";
import OurCourts from "@/components/sections/CourtRepresentation";
import GetInTouch from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      {/* Hero carousel — intentionally left unchanged per requirements */}
      <HeroCarousel />
      <TrustBadges />
      <AboutFirm />
      <HowWeWork />
      <WhatWeDo />
      <WhyUs />
      <OurCourts />
      <GetInTouch />
    </>
  );
}
