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
  },
  {
    name: "High Court of Delhi",
    detail: "Appellate | Writ | Revision Petitions",
    desc: "Specialised expertise in high court appellate matters, writs, and complex litigation requiring senior advocacy.",
    icon: Gavel,
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
          {courts.map(({ name, detail, desc, icon: Icon }) => (
            <PremiumCard key={name} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-0.5">{name}</h3>
                  <p className="text-xs text-[#D4AF37] font-semibold tracking-wide">{detail}</p>
                </div>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
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
