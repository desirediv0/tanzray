import { Users, Gavel, Clock, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const reasons = [
  {
    title: "Expert Advocates",
    desc: "Advocate Manjeet Kaur & Associates brings years of focused legal experience and a proven track record across multiple disciplines.",
    icon: Users,
  },
  {
    title: "Court Representation",
    desc: "Registered members of District and High Court of Delhi with extensive courtroom experience and procedural depth.",
    icon: Gavel,
  },
  {
    title: "Timely Solutions",
    desc: "Efficient case management with prompt action at every stage — we respect your deadlines and keep you fully informed.",
    icon: Clock,
  },
  {
    title: "Client Focused",
    desc: "Personalised attention and transparent, honest communication throughout every step of your legal journey.",
    icon: CheckCircle2,
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
          {reasons.map(({ title, desc, icon: Icon }) => (
            <PremiumCard key={title} variant="horizontal">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#FAF9F7] border border-[#E8E6E0]">
                <Icon size={22} className="text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-1.5">{title}</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
              </div>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
