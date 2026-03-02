import Link from "next/link";
import { ArrowRight, Gavel, Award, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import PremiumCard from "@/components/ui/PremiumCard";

const highlights = [
  { icon: Award,    label: "Bar Council Registered" },
  { icon: Gavel,    label: "District & High Court Member" },
  { icon: BookOpen, label: "Multi-Discipline Practice" },
];

export default function AboutFirm() {
  return (
    <section className="py-12 md:py-14 bg-[#F9F8F6]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-3">
              About the Firm
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5 leading-tight">
              Meet{" "}
              <span className="text-[#D4AF37]">Advocate Manjeet Kaur</span>
              <br />& Associates
            </h2>
            <p className="text-[#5A5A5A] text-sm md:text-base mb-4 leading-relaxed">
              With extensive experience across multiple practice areas, Advocate Manjeet Kaur &
              Associates provides comprehensive legal solutions tailored to your specific needs.
            </p>
            <p className="text-[#5A5A5A] text-sm md:text-base mb-6 leading-relaxed">
              Serving clients across Delhi with expertise in matrimonial disputes, criminal defense,
              contract law, mediation, and intellectual property protection.
            </p>

            <ul className="space-y-3 mb-7">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D4AF37]/10 shrink-0">
                    <Icon size={15} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-[#2C2C2C] text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#B8860B] transition-colors group"
            >
              View Full Profile
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Profile Card Column */}
          <PremiumCard className="flex flex-col items-center justify-center text-center py-12 hover:shadow-xl hover:border-[#D4AF37]">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 flex items-center justify-center mb-5">
              <Gavel size={34} className="text-[#D4AF37]" />
            </div>
            <p className="text-xl font-bold text-[#2C2C2C] mb-1">Advocate Manjeet Kaur</p>
            <p className="text-[#D4AF37] font-semibold text-sm mb-4">Senior Legal Counsel</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mb-4 rounded-full" />
            <p className="text-[#5A5A5A] text-xs max-w-xs leading-relaxed">
              Member — District Court & High Court of Delhi
            </p>
          </PremiumCard>
        </div>
      </Container>
    </section>
  );
}
