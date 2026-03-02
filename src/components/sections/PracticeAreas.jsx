import Link from "next/link";
import { ArrowRight, Heart, Scale, FileText, Handshake, Lock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const areas = [
  {
    title: "Matrimonial Law",
    desc: "Expert guidance in marriage dissolution, custody matters, and property settlements.",
    href: "/matrimonial",
    icon: Heart,
  },
  {
    title: "Criminal Law",
    desc: "Comprehensive defense and prosecution representation in criminal matters.",
    href: "/criminal",
    icon: Scale,
  },
  {
    title: "Contract Law",
    desc: "Drafting, review, and dispute resolution for all types of contracts.",
    href: "/contract",
    icon: FileText,
  },
  {
    title: "Mediation Services",
    desc: "Professional mediation for amicable, cost-effective dispute resolution.",
    href: "/mediation",
    icon: Handshake,
  },
  {
    title: "Intellectual Property",
    desc: "Protection and enforcement of trademarks, patents, and copyrights.",
    href: "/intellectual-property",
    icon: Lock,
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-12 md:py-14 bg-[#F9F8F6]">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          heading="Practice Areas"
          sub="Comprehensive legal services across a range of specialised practice areas — all under one roof."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ title, desc, href, icon: Icon }) => (
            <Link key={href} href={href} className="group block">
              <PremiumCard className="h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold text-sm mt-4">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </PremiumCard>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
