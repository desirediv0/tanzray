

import { CheckCircle2, Gavel } from "lucide-react";
import Container    from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard  from "@/components/ui/PremiumCard";
import CTAButton    from "@/components/ui/CTAButton";

export default function PracticePageTemplate({
  icon: HeaderIcon,
  title,
  subtitle,
  overview,
  services,
  expertise,
  process,
  whyUs,
  courts,
  categories,
  ctaHeading,
  ctaSub,
}) {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="py-12 md:py-14 bg-gradient-to-r from-[#F9F8F6] to-white border-b-2 border-[#D4AF37]">
        <Container>
          <div className="flex items-center gap-4 mb-4">
            {HeaderIcon && (
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                <HeaderIcon size={28} className="text-[#D4AF37]" />
              </div>
            )}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-1">Practice Area</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">{title}</h1>
            </div>
          </div>
          <p className="text-base text-[#5A5A5A] max-w-2xl">{subtitle}</p>
        </Container>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-12 md:py-14 bg-white">
        <Container>
          <SectionHeader eyebrow="Our Services" heading={`Our ${title} Services`} align="left" />
          <p className="text-[#5A5A5A] text-sm md:text-base mb-8 max-w-3xl leading-relaxed">{overview}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-4 border-b border-[#E8E6E0] last:border-0">
                <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#2C2C2C] text-sm">{service}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Categories Grid (Optional rich cards) ── */}
      {categories?.length > 0 && (
        <section className="py-12 md:py-14 bg-[#F9F8F6]">
          <Container>
            <SectionHeader eyebrow="Portfolios" heading={`${title} Categories`} />
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {categories.map(({ title: cTitle, desc, icon: CategoryIcon }) => (
                <PremiumCard key={cTitle} variant="center" className="flex flex-col items-center !p-12 group shadow-sm hover:shadow-xl transition-all duration-500 border-[#E8E6E0] hover:border-[#D4AF37]/50 rounded-3xl">
                  {CategoryIcon && (
                    <div className="w-24 h-24 rounded-3xl bg-[#D4AF37]/5 flex items-center justify-center mb-10 group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                      <CategoryIcon size={48} className="text-[#D4AF37]" strokeWidth={1} />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">{cTitle}</h3>
                  <p className="text-[#5A5A5A] text-sm md:text-base leading-relaxed text-center">
                    {desc}
                  </p>
                </PremiumCard>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Expertise Grid (if provided) ── */}
      {expertise?.length > 0 && (
        <section className="py-12 md:py-14 bg-[#F9F8F6]">
          <Container>
            <SectionHeader eyebrow="Expertise" heading={`${title} Expertise`} />
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map(({ title: aTitle, points }) => (
                <PremiumCard key={aTitle}>
                  <h3 className="text-base font-bold text-[#D4AF37] mb-3">{aTitle}</h3>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-[#5A5A5A] text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </PremiumCard>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Process ── */}
      <section className={`py-12 md:py-14 ${expertise?.length > 0 ? "bg-white" : "bg-[#F9F8F6]"}`}>
        <Container>
          <SectionHeader eyebrow="How We Work" heading="Our Process" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ step, title: pTitle, desc }) => (
              <PremiumCard key={step} className="text-center group">
                <p className="text-4xl font-extrabold text-[#D4AF37]/25 mb-2 group-hover:text-[#D4AF37]/50 transition-colors duration-300">{step}</p>
                <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto mb-3 rounded-full" />
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-1.5">{pTitle}</h3>
                <p className="text-[#5A5A5A] text-xs leading-relaxed">{desc}</p>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={`py-12 md:py-14 ${expertise?.length > 0 ? "bg-[#F9F8F6]" : "bg-white"}`}>
        <Container>
          <SectionHeader eyebrow="Why Us" heading={`Why Choose Us for ${title}?`} align="left" />
          <div className="grid md:grid-cols-2 gap-6">
            {whyUs.map(({ title: wTitle, desc }) => (
              <PremiumCard key={wTitle}>
                <h3 className="text-base font-bold text-[#D4AF37] mb-2">{wTitle}</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
              </PremiumCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Court Representation ── */}
      {courts?.length > 0 && (
      <section className={`py-12 md:py-14 ${expertise?.length > 0 ? "bg-white" : "bg-[#F9F8F6]"}`}>
        <Container>
          <SectionHeader eyebrow="Representation" heading="Court Representation" />
          <div className="grid md:grid-cols-2 gap-6">
            {courts?.map(({ court, detail, desc, bullets, icon: CourtIcon = Gavel }) => (
              <PremiumCard key={court}>
                <div className="flex items-center gap-3 mb-3">
                  <CourtIcon size={20} className="text-[#D4AF37] shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-[#2C2C2C]">{court}</h3>
                    {detail && <p className="text-xs text-[#D4AF37] font-semibold">{detail}</p>}
                  </div>
                </div>
                <p className="text-[#5A5A5A] text-sm mb-3 leading-relaxed">{desc}</p>
                {bullets?.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-[#5A5A5A]">
                    {bullets.map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                )}
              </PremiumCard>
            ))}
          </div>
        </Container>
      </section>
      )}

      {/* ── CTA ── */}
      <section className="py-12 md:py-14 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#3D3D3D]">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ctaHeading}</h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">{ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" size="lg" fullWidth>Book Consultation</CTAButton>
              <CTAButton href="tel:+919800000037" variant="dark-outline" size="lg" fullWidth>
                Call +91 9800000037
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
