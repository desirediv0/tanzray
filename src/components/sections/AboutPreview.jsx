import Link from "next/link";
import { ArrowRight, Award, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import PremiumCard from "@/components/ui/PremiumCard";

const highlights = [
  { icon: Award,    label: "Bar Council Registered" },
  { icon: Award,    label: "District & High Court Member" },
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
              {[
                "Registered with District Court, Delhi",
                "Registered with High Court of Delhi",
                "15+ years of professional practice",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4AF37] shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#2C2C2C] text-sm font-medium">{item}</span>
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

          {/* Image Card Column */}
          <div className="relative group">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#E8E6E0] group-hover:border-[#D4AF37] transition-colors duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&auto=format&fit=crop"
                alt="Advocate Manjeet Kaur - Legal Counsel"
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
              {/* Name tag overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg">Advocate Manjeet Kaur</p>
                <p className="text-[#D4AF37] font-semibold text-sm">Senior Legal Counsel</p>
                <div className="w-10 h-0.5 bg-[#D4AF37] mt-2 rounded-full" />
                <p className="text-white/70 text-xs mt-1.5">District & High Court of Delhi</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl border border-[#E8E6E0] px-5 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#D4AF37]">15+</p>
              <p className="text-xs text-[#5A5A5A] font-medium">Years of Practice</p>
            </div>

            {/* Floating gold accent */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37]/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
