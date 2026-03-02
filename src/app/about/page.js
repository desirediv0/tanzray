import Link from "next/link";
import { CheckCircle2, Award, Users, Briefcase, Gavel } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";
import CTAButton from "@/components/ui/CTAButton";

const credentials = [
    { title: "Court Member", desc: "Registered member of District Court and High Court of Delhi", icon: Award },
    { title: "Experience", desc: "Years of dedicated practice in multiple legal disciplines", icon: Briefcase },
    { title: "Professional Practice", desc: "Committed to professional excellence and ethical standards", icon: CheckCircle2 },
    { title: "Client Success", desc: "Trusted by numerous satisfied clients across Delhi", icon: Users },
];

const expertiseAreas = [
    { title: "Matrimonial Law", points: ["Marriage dissolution", "Custody matters", "Property settlements", "Alimony & maintenance"] },
    { title: "Criminal Law", points: ["Defense representation", "Criminal prosecution", "Bail proceedings", "Appellate matters"] },
    { title: "Contract Law", points: ["Contract drafting", "Agreement review", "Dispute resolution", "Breach proceedings"] },
    { title: "Mediation & ADR", points: ["Amicable settlements", "Dispute mediation", "Negotiation services", "Out-of-court solutions"] },
    { title: "Intellectual Property", points: ["Trademark protection", "Patent matters", "Copyright protection", "IP enforcement"] },
    { title: "General Legal Services", points: ["Legal consultation", "Document preparation", "Legal writing", "Professional guidance"] },
];

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="py-12 md:py-14 bg-[#F9F8F6] border-b-2 border-[#D4AF37]">
                <Container>
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-3">The Firm</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-3">
                        About <span className="text-[#D4AF37]">TANZRAY LEGAL</span>
                    </h1>
                    <p className="text-base text-[#5A5A5A] max-w-2xl">
                        Professional legal services with dedication, integrity, and results.
                    </p>
                </Container>
            </section>

            {/* Advocate Profile */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5">
                                Advocate <span className="text-[#D4AF37]">Manjeet Kaur</span>
                            </h2>
                            <p className="text-[#5A5A5A] text-sm md:text-base mb-4 leading-relaxed">
                                Advocate Manjeet Kaur is a dedicated legal professional with extensive experience in matrimonial law, criminal law, contract law, mediation, and intellectual property rights.
                            </p>
                            <p className="text-[#5A5A5A] text-sm md:text-base mb-6 leading-relaxed">
                                With a commitment to excellence and client satisfaction, she has successfully handled numerous cases in District and High Court of Delhi, earning the trust of clients across various sectors.
                            </p>
                            <ul className="space-y-3">
                                {["Registered with District Court, Delhi", "Registered with High Court of Delhi", "15+ years of professional practice"].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#D4AF37] shrink-0" size={18} />
                                        <span className="text-[#2C2C2C] text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <PremiumCard className="flex flex-col items-center justify-center text-center py-12">
                            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 flex items-center justify-center mb-5">
                                <Gavel size={34} className="text-[#D4AF37]" />
                            </div>
                            <p className="text-xl font-bold text-[#2C2C2C] mb-1">Advocate Manjeet Kaur</p>
                            <p className="text-[#D4AF37] font-semibold text-sm mb-3">Legal Expert & Counsel</p>
                            <p className="text-xs text-[#5A5A5A]">District & High Court of Delhi</p>
                        </PremiumCard>
                    </div>
                </Container>
            </section>

            {/* Credentials */}
            <section className="py-12 md:py-14 bg-[#F9F8F6]">
                <Container>
                    <SectionHeader eyebrow="Our Record" heading={<>Credentials & <span className="text-[#D4AF37]">Qualifications</span></>} />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {credentials.map(({ title, desc, icon: Icon }) => (
                            <PremiumCard key={title} className="text-center flex flex-col items-center">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4">
                                    <Icon size={22} className="text-[#D4AF37]" />
                                </div>
                                <h3 className="text-base font-bold text-[#2C2C2C] mb-1.5">{title}</h3>
                                <p className="text-[#5A5A5A] text-sm">{desc}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Expertise Areas */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <SectionHeader
                        eyebrow="Disciplines"
                        heading={<>Areas of <span className="text-[#D4AF37]">Expertise</span></>}
                        sub="Comprehensive legal practice across multiple disciplines."
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        {expertiseAreas.map(({ title, points }) => (
                            <PremiumCard key={title}>
                                <h3 className="text-base font-bold text-[#D4AF37] mb-3">{title}</h3>
                                <ul className="space-y-2">
                                    {points.map((p) => (
                                        <li key={p} className="flex items-start gap-3">
                                            <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                            <span className="text-[#5A5A5A] text-sm">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 md:py-14 bg-[#F9F8F6]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Our Mission", text: "To provide ethical, professional, and accessible legal services that protect the rights and interests of our clients. We are committed to delivering excellent legal counsel and representation in all matters we undertake." },
                            { title: "Our Vision", text: "To be recognized as a premier legal practice in Delhi, known for our integrity, expertise, and unwavering commitment to client success. We strive to navigate the legal mosaic with precision and care." },
                        ].map(({ title, text }) => (
                            <PremiumCard key={title}>
                                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">{title}</h3>
                                <p className="text-[#5A5A5A] leading-relaxed text-sm md:text-base">{text}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-14 bg-white">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Ready to Work With Us?</h2>
                        <p className="text-[#5A5A5A] text-base mb-8 max-w-xl mx-auto">
                            Contact us for a professional consultation and let&apos;s discuss how we can assist with your legal needs.
                        </p>
                        <CTAButton href="/contact" size="lg">Schedule Consultation</CTAButton>
                    </div>
                </Container>
            </section>
        </>
    );
}
