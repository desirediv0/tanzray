"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";
import CTAButton from "@/components/ui/CTAButton";

const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9800000037", href: "tel:+919800000037", sub: "Available for consultations" },
    { icon: Mail, label: "Email", value: "advocate.mkaur@gmail.com", href: "mailto:advocate.mkaur@gmail.com", sub: "Response within 24 hours" },
    { icon: MapPin, label: "Address", value: "Flat No. 4, GF, PKT 4,\nSunview Apartment, Sector 11, Dwarka\nNew Delhi – 110075", href: null, sub: null },
];

const faqs = [
    { q: "What should I bring to my first consultation?", a: "Bring any relevant documents related to your legal matter, such as contracts, correspondence, court orders, or FIRs." },
    { q: "How much does a consultation cost?", a: "Initial consultations are offered at competitive rates. Contact us to discuss fees for your specific matter." },
    { q: "How long do cases typically take?", a: "Case duration varies depending on complexity and court schedules. We provide realistic timelines after analyzing your case." },
    { q: "Do you offer payment plans?", a: "Yes, we work with clients to establish payment arrangements based on their financial capabilities." },
    { q: "Will my information be kept confidential?", a: "Absolutely. All client communications and information are protected by attorney-client privilege and confidentiality." },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            {/* Page Header */}
            <section className="py-12 md:py-14 bg-[#F9F8F6] border-b-2 border-[#D4AF37]">
                <Container>
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-3">Reach Out</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-3">
                        Contact <span className="text-[#D4AF37]">TANZRAY LEGAL</span>
                    </h1>
                    <p className="text-base text-[#5A5A5A] max-w-2xl">
                        Get in touch with our legal team for expert consultation.
                    </p>
                </Container>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <SectionHeader eyebrow="Get In Touch" heading="Contact Information" />
                    <div className="grid sm:grid-cols-3 gap-6 mb-8">
                        {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
                            <PremiumCard key={label} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-xl bg-[#FAF9F7] border border-[#E8E6E0] flex items-center justify-center mb-4">
                                    <Icon size={22} className="text-[#D4AF37]" />
                                </div>
                                <h3 className="text-base font-bold text-[#2C2C2C] mb-2">{label}</h3>
                                {href ? (
                                    <a href={href} className="text-[#D4AF37] font-semibold text-sm hover:text-[#B8860B] transition-colors break-all">
                                        {value}
                                    </a>
                                ) : (
                                    <p className="text-[#2C2C2C] text-sm font-medium whitespace-pre-line">{value}</p>
                                )}
                                {sub && <p className="text-[#5A5A5A] text-xs mt-1">{sub}</p>}
                            </PremiumCard>
                        ))}
                    </div>

                    {/* Office Hours */}
                    <div className="bg-[#FAF9F7] border-2 border-[#D4AF37] rounded-xl p-6 md:p-8 text-center">
                        <div className="flex justify-center mb-3">
                            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                                <Clock size={22} className="text-[#D4AF37]" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#2C2C2C] mb-4">Office Hours</h3>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-sm mx-auto">
                            {[["Monday – Friday", "10:00 AM – 6:00 PM"], ["Saturday", "10:00 AM – 2:00 PM"]].map(([day, time]) => (
                                <div key={day}>
                                    <p className="text-[#2C2C2C] font-semibold text-sm">{day}</p>
                                    <p className="text-[#D4AF37] font-bold text-base">{time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact Form + Map */}
            <section className="py-12 md:py-14 bg-[#F9F8F6]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <SectionHeader eyebrow="Message Us" heading="Send a Message" align="left" />
                            {submitted && (
                                <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                                        <CheckCircle2 size={16} /> Thank you! Your message has been sent successfully.
                                    </p>
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {[
                                    { id: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                                    { id: "email", label: "Email Address *", type: "email", placeholder: "your.email@example.com" },
                                    { id: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXXXXXXX" },
                                    { id: "subject", label: "Subject *", type: "text", placeholder: "What is this about?" },
                                ].map(({ id, label, type, placeholder }) => (
                                    <div key={id}>
                                        <Label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#2C2C2C]">{label}</Label>
                                        <Input id={id} type={type} name={id} value={formData[id]} onChange={handleChange} required placeholder={placeholder} />
                                    </div>
                                ))}
                                <div>
                                    <Label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#2C2C2C]">Message *</Label>
                                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Please describe your legal matter..." />
                                </div>
                                <CTAButton size="lg" className="w-full justify-center">Send Message</CTAButton>
                            </form>
                        </div>

                        {/* Map + Practice Summary */}
                        <div>
                            <SectionHeader eyebrow="Location" heading="Location & Details" align="left" />
                            <div className="w-full h-64 bg-[#E8E6E0] rounded-xl mb-6 flex items-center justify-center border border-[#E8E6E0]">
                                <div className="text-center">
                                    <MapPin className="text-[#D4AF37] mx-auto mb-2" size={36} />
                                    <p className="text-[#5A5A5A] font-semibold text-sm">Dwarka, New Delhi</p>
                                </div>
                            </div>
                            <PremiumCard>
                                <h3 className="text-base font-bold text-[#D4AF37] mb-3">Practice Areas</h3>
                                <ul className="space-y-2">
                                    {["Matrimonial Law", "Criminal Law", "Contract Law", "Mediation Services", "Intellectual Property"].map((area) => (
                                        <li key={area} className="flex items-center gap-2.5">
                                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                                            <span className="text-[#2C2C2C] text-sm font-medium">{area}</span>
                                        </li>
                                    ))}
                                </ul>
                            </PremiumCard>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-14 bg-white">
                <Container size="md">
                    <SectionHeader eyebrow="Common Questions" heading="Frequently Asked Questions" />
                    <div className="space-y-4">
                        {faqs.map(({ q, a }) => (
                            <PremiumCard key={q}>
                                <h4 className="text-sm font-bold text-[#D4AF37] mb-2">{q}</h4>
                                <p className="text-[#5A5A5A] text-sm leading-relaxed">{a}</p>
                            </PremiumCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-12 md:py-14 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#3D3D3D]">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Expert Legal Representation?</h2>
                        <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
                            Don&apos;t wait. Contact us today to schedule your consultation and take the first step toward resolving your legal matter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="tel:+919800000037" size="lg" fullWidth><Phone size={18} />Call +91 9800000037</CTAButton>
                            <CTAButton href="mailto:advocate.mkaur@gmail.com" variant="dark-outline" size="lg" fullWidth><Mail size={18} />Email Now</CTAButton>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
