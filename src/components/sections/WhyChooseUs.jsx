import { Users, Gavel, Clock, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const reasons = [
  {
    title: "Expert Advocates",
    desc: "Advocate Manjeet Kaur & Associates brings years of focused legal experience and a proven track record across multiple disciplines.",
    icon: Users,
    img: "https://img.freepik.com/free-photo/ceo-company_1098-21107.jpg?t=st=1772429057~exp=1772432657~hmac=ac541027efb0d6a5e7da38e86e5ff18808f1a16039f51cfa2e51816ba3d6eda1&w=1480",
    alt: "Expert legal advocates",
  },
  {
    title: "Court Representation",
    desc: "Registered members of District and High Court of Delhi with extensive courtroom experience and procedural depth.",
    icon: Gavel,
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80&auto=format&fit=crop",
    alt: "Court representation",
  },
  {
    title: "Timely Solutions",
    desc: "Efficient case management with prompt action at every stage — we respect your deadlines and keep you fully informed.",
    icon: Clock,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80&auto=format&fit=crop",
    alt: "Timely legal solutions",
  },
  {
    title: "Client Focused",
    desc: "Personalised attention and transparent, honest communication throughout every step of your legal journey.",
    icon: CheckCircle2,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&auto=format&fit=crop",
    alt: "Client focused service",
  },
];

export default function WhyUs() {
  return (
    <section className="py-12 md:py-14 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Why Us"
          heading="Why Choose Us?"
          sub="Experience the difference of professional, dedicated legal representation that puts your interests first."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map(({ title, desc, icon: Icon, img, alt }) => (
            <PremiumCard key={title} className="group p-0 overflow-hidden flex flex-col sm:flex-row">
              {/* Image on left */}
              <div className="relative w-full sm:w-36 h-36 sm:h-auto shrink-0 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/20 sm:bg-gradient-to-b sm:from-transparent sm:to-[#1a1a1a]/20" />
                {/* Icon badge */}
                <div className="absolute bottom-2 left-2 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow border border-[#D4AF37]/20">
                  <Icon size={16} className="text-[#D4AF37]" />
                </div>
              </div>
              {/* Text content */}
              <div className="flex-1 p-5">
                <h3 className="text-base font-bold text-[#2C2C2C] mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
              </div>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
