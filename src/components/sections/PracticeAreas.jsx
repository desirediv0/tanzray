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
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80&auto=format&fit=crop",
    alt: "Matrimonial law representation",
  },
  {
    title: "Criminal Law",
    desc: "Comprehensive defense and prosecution representation in criminal matters.",
    href: "/criminal",
    icon: Scale,
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop",
    alt: "Criminal law courtroom",
  },
  {
    title: "Contract Law",
    desc: "Drafting, review, and dispute resolution for all types of contracts.",
    href: "/contract",
    icon: FileText,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
    alt: "Contract law documents",
  },
  {
    title: "Mediation Services",
    desc: "Professional mediation for amicable, cost-effective dispute resolution.",
    href: "/mediation",
    icon: Handshake,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop",
    alt: "Mediation and dispute resolution",
  },
  {
    title: "Intellectual Property",
    desc: "Protection and enforcement of trademarks, patents, and copyrights.",
    href: "/intellectual-property",
    icon: Lock,
    img: "https://img.freepik.com/free-photo/still-life-world-intellectual-property-day_23-2151325852.jpg?t=st=1772429202~exp=1772432802~hmac=2dbb3c105b9408c90277aead76eccb5d3697446d72e119545979bfa8f4263d08&w=1480",
    alt: "Intellectual property protection",
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
          {areas.map(({ title, desc, href, icon: Icon, img, alt }) => {
            const isClickable = title === "Contract Law" || title === "Intellectual Property";

            const card = (
              <PremiumCard 
                hoverable={isClickable}
                className={`h-full flex flex-col p-0 overflow-hidden ${!isClickable ? 'cursor-default border-[#E8E6E0] shadow-sm pointer-events-none' : 'group cursor-pointer'}`}
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={alt}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isClickable ? 'group-hover:scale-105' : ''}`}
                  />
                  {/* Gold overlay on hover */}
                  {isClickable && (
                    <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300" />
                  )}
                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm border border-[#D4AF37]/30 flex items-center justify-center shadow-md">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className={`text-base font-bold text-[#2C2C2C] mb-2 transition-colors duration-300 ${isClickable ? 'group-hover:text-[#D4AF37]' : ''}`}>
                    {title}
                  </h3>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed flex-1">{desc}</p>
                  
                  {isClickable && (
                    <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold text-sm mt-4">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  )}
                </div>
              </PremiumCard>
            );

            return isClickable ? (
              <Link key={href} href={href} className="block h-full no-underline">
                {card}
              </Link>
            ) : (
              <div key={title} className="block h-full">
                {card}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
