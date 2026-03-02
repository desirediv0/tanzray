import { Phone, CalendarCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

export default function GetInTouch() {
  return (
    <section className="py-12 md:py-14 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#3D3D3D] relative overflow-hidden">
      {/* Decorative gold blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="md">
        <div className="relative z-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Need Legal Guidance?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mb-6 rounded-full" />
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Contact us today for a professional consultation. Let us help you navigate your legal
            challenges with expert advice and dedicated representation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="gold" size="lg" fullWidth>
              <CalendarCheck size={18} />
              Schedule Consultation
            </CTAButton>
            <CTAButton href="tel:+919800000037" variant="dark-outline" size="lg" fullWidth>
              <Phone size={18} />
              Call +91 9800000037
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
