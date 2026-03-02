import { Gavel, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const courts = [
  {
    name: "District Court",
    detail: "Saket | Patiala House | Rohini | Dwarka",
    desc: "Comprehensive representation in district court proceedings across civil, matrimonial, and criminal matters.",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80&auto=format&fit=crop",
    alt: "District court building",
  },
  {
    name: "High Court of Delhi",
    detail: "Appellate | Writ | Revision Petitions",
    desc: "Specialised expertise in high court appellate matters, writs, and complex litigation requiring senior advocacy.",
    icon: Gavel,
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80&auto=format&fit=crop",
    alt: "High Court of Delhi",
  },
];

const stats = [
  { value: "500+", label: "Cases Handled" },
  { value: "95%",  label: "Client Satisfaction" },
  { value: "10+",  label: "Years Experience" },
];

export default function OurCourts() {
  return (
    <section className="py-12 md:py-14 bg-[#F9F8F6]">
      <Container>
        <SectionHeader
          eyebrow="Our Courts"
          heading="Court Representation"
          sub="Expert representation in District and High Court matters across Delhi — from routine proceedings to complex multi-party litigation."
        />

        {/* Court Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {courts.map(({ name, detail, desc, icon: Icon, img, alt }) => (
            <PremiumCard key={name} className="group p-0 overflow-hidden">
              {/* Court Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                {/* Icon badge on image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[#D4AF37]/30">
                  <Icon size={16} className="text-[#D4AF37]" />
                  <span className="text-xs font-bold text-[#2C2C2C]">{name}</span>
                </div>
              </div>
              {/* Card content */}
              <div className="p-5">
                <p className="text-xs text-[#D4AF37] font-semibold tracking-wide mb-2">{detail}</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
              </div>
            </PremiumCard>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-xl border border-[#E8E6E0] shadow-sm px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-0 md:divide-x md:divide-[#E8E6E0]">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-8 md:px-12">
                <p className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">{value}</p>
                <p className="text-sm text-[#5A5A5A] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
