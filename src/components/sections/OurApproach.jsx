import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const steps = [
  {
    step: "01",
    title: "Understand",
    desc: "In-depth case analysis and understanding of your objectives, concerns, and legal position.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Crafting a tailored legal strategy designed to achieve the best possible outcome.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Professional implementation with clear communication and regular progress updates.",
  },
  {
    step: "04",
    title: "Resolve",
    desc: "Achieve resolution that protects your interests and secures a positive outcome.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-12 md:py-14 bg-white">
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          heading="Our Approach"
          sub="We combine deep legal expertise with personalised attention to deliver exceptional, consistent results for every client."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item) => (
            <PremiumCard key={item.step} className="text-center group">
              <p className="text-4xl font-extrabold text-[#D4AF37]/25 mb-2 group-hover:text-[#D4AF37]/50 transition-colors duration-300">
                {item.step}
              </p>
              <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto mb-3 rounded-full" />
              <h3 className="text-base font-bold text-[#2C2C2C] mb-2">{item.title}</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">{item.desc}</p>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
