"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, CalendarCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PremiumCard from "@/components/ui/PremiumCard";
import CTAButton from "@/components/ui/CTAButton";

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
            {/* ── 1. Banner ── */}
            <section className="relative h-56 md:h-72 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop"
                    alt="Contact Tanzray Legal"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/85 via-[#2C2C2C]/70 to-[#2C2C2C]/40" />
                <div className="relative z-10 h-full flex items-end">
                    <Container>
                        <div className="pb-8">
                            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-2">Reach Out</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Contact <span className="text-[#D4AF37]">TANZRAY LEGAL</span>
                            </h1>
                            <div className="w-12 h-1 bg-[#D4AF37] rounded-full" />
                        </div>
                    </Container>
                </div>
            </section>

            {/* ── 2. Form + Contact Details — 2-col ── */}
            <section className="py-12 md:py-14 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* LEFT: Contact Form */}
                        <div>
                            <SectionHeader eyebrow="Message Us" heading="Send a Message" align="left" />

                            {submitted && (
                                <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                                    <p className="text-green-700 font-semibold text-sm">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <Label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Full Name *</Label>
                                    <Input
                                        id="name" type="text" name="name" value={formData.name}
                                        onChange={handleChange} required placeholder="Your full name"
                                        className="border-[#E8E6E0] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <Label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Email Address *</Label>
                                    <Input
                                        id="email" type="email" name="email" value={formData.email}
                                        onChange={handleChange} required placeholder="your.email@example.com"
                                        className="border-[#E8E6E0] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                                {/* Phone */}
                                <div>
                                    <Label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Phone Number *</Label>
                                    <Input
                                        id="phone" type="tel" name="phone" value={formData.phone}
                                        onChange={handleChange} required placeholder="+91 XXXXXXXXXX"
                                        className="border-[#E8E6E0] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                                {/* Subject */}
                                <div>
                                    <Label htmlFor="subject" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Subject *</Label>
                                    <Input
                                        id="subject" type="text" name="subject" value={formData.subject}
                                        onChange={handleChange} required placeholder="How can we help?"
                                        className="border-[#E8E6E0] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                                {/* Message */}
                                <div>
                                    <Label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Message *</Label>
                                    <Textarea
                                        id="message" name="message" value={formData.message}
                                        onChange={handleChange} required rows={5}
                                        placeholder="Please describe your legal matter..."
                                        className="border-[#E8E6E0] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 resize-none"
                                    />
                                </div>
                                {/* Submit */}
                                <CTAButton size="lg" className="w-full justify-center">
                                    <CalendarCheck size={18} />
                                    Send Message
                                </CTAButton>
                            </form>
                        </div>

                        {/* RIGHT: Contact Details */}
                        <div>
                            <SectionHeader eyebrow="Get In Touch" heading="Contact Details" align="left" />

                            <div className="space-y-4 mb-8">
                                {/* Phone */}
                                <PremiumCard variant="horizontal">
                                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                        <Phone size={20} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-widest mb-1">Phone</p>
                                        <a href="tel:+919800000037" className="text-[#D4AF37] font-bold hover:text-[#B8860B] transition-colors text-base">
                                            +91 9800000037
                                        </a>
                                        <p className="text-xs text-[#5A5A5A] mt-0.5">Available for consultations</p>
                                    </div>
                                </PremiumCard>

                                {/* Email */}
                                <PremiumCard variant="horizontal">
                                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                        <Mail size={20} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-widest mb-1">Email</p>
                                        <a href="mailto:advocate.mkaur@gmail.com" className="text-[#D4AF37] font-bold hover:text-[#B8860B] transition-colors text-sm break-all">
                                            advocate.mkaur@gmail.com
                                        </a>
                                        <p className="text-xs text-[#5A5A5A] mt-0.5">Response within 24 hours</p>
                                    </div>
                                </PremiumCard>

                                {/* Address */}
                                <PremiumCard variant="horizontal">
                                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-widest mb-1">Address</p>
                                        <p className="text-[#2C2C2C] text-sm font-medium leading-relaxed">
                                            Flat No. 4, GF, PKT 4, Sunview Apartment,<br />
                                            Sector 11, Dwarka, New Delhi – 110075
                                        </p>
                                    </div>
                                </PremiumCard>

                                {/* Office Hours */}
                                <PremiumCard variant="horizontal">
                                    <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                        <Clock size={20} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-widest mb-1">Office Hours</p>
                                        <p className="text-[#2C2C2C] text-sm font-medium">Mon – Fri: 10:00 AM – 6:00 PM</p>
                                        <p className="text-[#2C2C2C] text-sm font-medium">Saturday: 10:00 AM – 2:00 PM</p>
                                    </div>
                                </PremiumCard>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 3. Google Map Placeholder ── */}
            <section className="py-0">
                <div className="w-full h-72 bg-[#E8E6E0] flex items-center justify-center relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=60&auto=format&fit=crop"
                        alt="Office location map"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="relative z-10 text-center">
                        <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-3 shadow-xl">
                            <MapPin size={28} className="text-white" />
                        </div>
                        <p className="font-bold text-[#2C2C2C] text-lg">Tanzray Legal Attorneys</p>
                        <p className="text-[#5A5A5A] text-sm mt-1">Dwarka, Sector 11, New Delhi – 110075</p>
                        <a
                            href="https://maps.app.goo.gl/uCZVCbsxq8f1EfK66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-[#D4AF37] font-semibold text-sm hover:text-[#B8860B] transition-colors"
                        >
                            Open in Google Maps →
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 4. CTA Strip ── */}
            <section className="py-12 md:py-14 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#3D3D3D]">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Expert Legal Representation?</h2>
                        <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
                            Don&apos;t wait. Contact us today to take the first step toward resolving your legal matter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="tel:+919800000037" size="lg" fullWidth>
                                <Phone size={18} /> Call +91 9800000037
                            </CTAButton>
                            <CTAButton href="mailto:advocate.mkaur@gmail.com" variant="dark-outline" size="lg" fullWidth>
                                <Mail size={18} /> Email Now
                            </CTAButton>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
