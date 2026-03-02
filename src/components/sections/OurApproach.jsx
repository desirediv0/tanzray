import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";

const steps = [
  {
    step: "01",
    title: "Understand",
    desc: "In-depth case analysis and understanding of your objectives, concerns, and legal position.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80&auto=format&fit=crop",
    alt: "Consultation meeting",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Crafting a tailored legal strategy designed to achieve the best possible outcome.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80&auto=format&fit=crop",
    alt: "Legal strategy planning",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Professional implementation with clear communication and regular progress updates.",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&q=80&auto=format&fit=crop",
    alt: "Court execution",
  },
  {
    step: "04",
    title: "Resolve",
    desc: "Achieve resolution that protects your interests and secures a positive outcome.",
    img: "https://img.freepik.com/free-photo/indian-business-man-suit-with-golden-bitcoin-modern-office_231208-2598.jpg?t=st=1772429288~exp=1772432888~hmac=62d46f3504908b12b239da7004bb1628a1f5ba97f595d06d1e01b3a22757f54d&w=1480",
    alt: "Resolution and success",
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
            <PremiumCard key={item.step} className="group p-0 overflow-hidden">
              {/* Step Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
                {/* Step number on image */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#D4AF37] flex items-center justify-center shadow-md">
                  <span className="text-white font-extrabold text-sm">{item.step}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 text-center">
                <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto mb-3 rounded-full" />
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-[#5A5A5A] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
