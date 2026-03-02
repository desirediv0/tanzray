import Container from "@/components/ui/Container";

const badges = [
  { label: "District & High Court", sub: "Registered Member" },
  { label: "10+ Years",             sub: "Legal Excellence" },
  { label: "Delhi High Court",      sub: "Trusted Counsel" },
  { label: "5 Practice Areas",      sub: "Comprehensive Services" },
];

export default function TrustBadges() {
  return (
    <section className="py-5 bg-white border-b border-[#E8E6E0]">
      <Container>
        <div className="flex flex-wrap justify-center items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center">
              <div className="text-center px-6 sm:px-10 py-3">
                <p className="text-lg md:text-2xl font-bold text-[#D4AF37] leading-tight">
                  {badge.label}
                </p>
                <p className="text-xs md:text-sm text-[#5A5A5A] mt-0.5">{badge.sub}</p>
              </div>
              {idx < badges.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-[#E8E6E0]" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
