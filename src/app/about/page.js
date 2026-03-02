import Link from "next/link";
import { CheckCircle2, Award, Briefcase, Users, Gavel, Scale, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";
import CTAButton from "@/components/ui/CTAButton";

const credentials = [
    { icon: Award, title: "Court Member", desc: "Registered member of District Court and High Court of Delhi" },
    { icon: Briefcase, title: "Years of Experience", desc: "Extensive practice across multiple legal disciplines" },
    { icon: CheckCircle2, title: "Ethical Practice", desc: "Committed to professional excellence and ethical standards" },
    { icon: Users, title: "Client Success", desc: "Trusted by numerous satisfied clients across Delhi" },
];

const expertiseAreas = [
    { title: "Matrimonial Law", points: ["Marriage dissolution", "Custody matters", "Property settlements", "Alimony & maintenance"] },
    { title: "Criminal Law", points: ["Defense representation", "Bail proceedings", "Prosecution support", "Appellate matters"] },
    { title: "Contract Law", points: ["Contract drafting", "Agreement review", "Dispute resolution", "Breach proceedings"] },
    { title: "Mediation & ADR", points: ["Amicable settlements", "Dispute mediation", "Negotiation", "Out-of-court solutions"] },
    { title: "Intellectual Property", points: ["Trademark protection", "Patent matters", "Copyright protection", "IP enforcement"] },
    { title: "General Legal Services", points: ["Legal consultation", "Document preparation", "Legal writing", "Professional guidance"] },
];

export default function About() {
    return (
        <>
            {/* ── 1. Page Banner ── */}
            <section className="relative h-64 md:h-80 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80&auto=format&fit=crop"
                    alt="Tanzray Legal — About the Firm"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/85 via-[#2C2C2C]/70 to-[#2C2C2C]/50" />
                <div className="relative z-10 h-full flex items-end">
                    <Container>
                        <div className="pb-8">
                            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-2">The Firm</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                About <span className="text-[#D4AF37]">TANZRAY LEGAL</span>
                            </h1>
                            <div className="w-12 h-1 bg-[#D4AF37] rounded-full" />
                        </div>
                    </Container>
                </div>
            </section>

            {/* ── 2. About the Firm — 2-column ── */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left: Professional Image */}
                        <div className="relative group">
                            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[#E8E6E0] group-hover:border-[#D4AF37] transition-colors duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=700&q=80&auto=format&fit=crop"
                                    alt="Advocate Manjeet Kaur"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent rounded-xl" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white font-bold text-lg">Advocate Manjeet Kaur</p>
                                    <p className="text-[#D4AF37] font-semibold text-sm">Senior Legal Counsel</p>
                                    <div className="w-8 h-0.5 bg-[#D4AF37] mt-2 mb-1.5 rounded-full" />
                                    <p className="text-white/70 text-xs">District & High Court of Delhi</p>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl border border-[#E8E6E0] px-5 py-4 text-center z-10">
                                <p className="text-2xl font-extrabold text-[#D4AF37]">15+</p>
                                <p className="text-xs text-[#5A5A5A] font-medium">Years Practice</p>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-3">About the Advocate</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5">
                                Advocate <span className="text-[#D4AF37]">Manjeet Kaur</span>
                            </h2>
                            <p className="text-[#5A5A5A] text-sm md:text-base mb-4 leading-relaxed">
                                Advocate Manjeet Kaur is a dedicated legal professional with extensive experience in matrimonial law, criminal law, contract law, mediation, and intellectual property rights.
                            </p>
                            <p className="text-[#5A5A5A] text-sm md:text-base mb-6 leading-relaxed">
                                With a commitment to excellence and client satisfaction, she has successfully handled numerous cases in District and High Court of Delhi, earning the trust of clients across various sectors.
                            </p>
                            <ul className="space-y-3 mb-7">
                                {["Registered with District Court, Delhi", "Registered with High Court of Delhi", "15+ years of professional legal practice"].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="text-[#2C2C2C] text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <CTAButton href="/contact" size="md">Book a Consultation</CTAButton>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 3. Credentials ── */}
            <section className="py-12 md:py-14 bg-[#F9F8F6]">
                <Container>
                    <SectionHeader eyebrow="Our Record" heading={<>Credentials & <span className="text-[#D4AF37]">Qualifications</span></>} />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {credentials.map(({ icon: Icon, title, desc }) => (
                            <PremiumCard key={title} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4">
                                    <Icon size={22} className="text-[#D4AF37]" />
                                </div>
                                <h3 className="text-sm font-bold text-[#2C2C2C] mb-1.5">{title}</h3>
                                <p className="text-[#5A5A5A] text-xs leading-relaxed">{desc}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 4. Mission & Vision ── */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <SectionHeader eyebrow="Our Purpose" heading={<>Mission & <span className="text-[#D4AF37]">Vision</span></>} />
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Our Mission", icon: Scale, text: "To provide ethical, professional, and accessible legal services that protect the rights and interests of our clients. We are committed to delivering excellent legal counsel and representation in all matters we undertake." },
                            { title: "Our Vision", icon: BookOpen, text: "To be recognized as a premier legal practice in Delhi, known for our integrity, expertise, and unwavering commitment to client success. We strive to navigate the legal mosaic with precision and care." },
                        ].map(({ title, icon: Icon, text }) => (
                            <PremiumCard key={title}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                                        <Icon size={20} className="text-[#D4AF37]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#D4AF37]">{title}</h3>
                                </div>
                                <p className="text-[#5A5A5A] leading-relaxed text-sm">{text}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 5. Court Membership ── */}
            <section className="py-12 md:py-14 bg-[#F9F8F6]">
                <Container>
                    <SectionHeader eyebrow="Jurisdiction" heading={<>Court <span className="text-[#D4AF37]">Membership</span></>} sub="Registered advocate with extensive experience across Delhi's court system." />
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { court: "District Court, Delhi", detail: "Saket | Patiala House | Rohini | Dwarka", desc: "Representing clients in civil, matrimonial, and criminal proceedings at the district court level across all Delhi benches.", icon: Gavel, img: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80&auto=format&fit=crop" },
                            { court: "High Court of Delhi", detail: "Appellate | Writ | Revision", desc: "Specialised expertise in appellate matters, writ petitions, and complex high-value litigation requiring senior advocacy and legal precision.", icon: Scale, img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80&auto=format&fit=crop" },
                        ].map(({ court, detail, desc, icon: Icon, img }) => (
                            <PremiumCard key={court} className="group p-0 overflow-hidden">
                                <div className="relative h-44 overflow-hidden">
                                    <img src={img} alt={court} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/65 via-transparent to-transparent" />
                                    <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                                        <Icon size={14} className="text-[#D4AF37]" />
                                        <span className="text-xs font-bold text-[#2C2C2C]">{court}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-[#D4AF37] font-semibold tracking-wide mb-2">{detail}</p>
                                    <p className="text-[#5A5A5A] text-sm leading-relaxed">{desc}</p>
                                </div>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 6. Expertise Areas ── */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <SectionHeader eyebrow="Disciplines" heading={<>Areas of <span className="text-[#D4AF37]">Expertise</span></>} sub="Comprehensive legal practice across multiple disciplines." />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {expertiseAreas.map(({ title, points }) => (
                            <PremiumCard key={title}>
                                <h3 className="text-sm font-bold text-[#D4AF37] mb-3">{title}</h3>
                                <ul className="space-y-1.5">
                                    {points.map((p) => (
                                        <li key={p} className="flex items-start gap-2">
                                            <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                            <span className="text-[#5A5A5A] text-xs">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 7. CTA ── */}
            <section className="py-12 md:py-14 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#3D3D3D]">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
                        <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
                            Contact us for a professional consultation and let&apos;s discuss how we can assist with your legal needs.
                        </p>
                        <CTAButton href="/contact" size="lg">Schedule Consultation</CTAButton>
                    </div>
                </Container>
            </section>
        </>
    );
}
