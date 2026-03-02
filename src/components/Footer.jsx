import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    const practiceAreas = [
        { label: 'Matrimonial', href: '/matrimonial' },
        { label: 'Criminal Law', href: '/criminal' },
        { label: 'Contracts', href: '/contract' },
        { label: 'Mediation', href: '/mediation' },
        { label: 'Intellectual Property', href: '/intellectual-property' },
    ];

    return (
        <footer className="bg-[#F9F8F6] border-t-2 border-[#D4AF37] mt-16 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Brand Section */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold">
                                <span className="text-[#D4AF37]">TANZRAY</span>
                                <span className="text-[#2C2C2C]"> LEGAL</span>
                            </h3>
                            <p className="text-xs text-[#5A5A5A] font-semibold mt-1">Navigate the Legal Mosaic</p>
                        </div>
                        <p className="text-sm text-[#5A5A5A] leading-relaxed">
                            Premium legal counsel for individuals and businesses across Delhi and High Court matters.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold  text-lg mb-6 text-[#D4AF37]">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#5A5A5A] hover:text-[#D4AF37] font-medium transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="font-bold  text-lg mb-6 text-[#D4AF37]">Practice Areas</h4>
                        <ul className="space-y-3">
                            {practiceAreas.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#5A5A5A] hover:text-[#D4AF37] font-medium transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="font-bold  text-lg mb-6 text-[#D4AF37]">Contact</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+919800000037"
                                className="flex items-start gap-3 text-[#5A5A5A] hover:text-[#D4AF37] transition-colors group"
                            >
                                <Phone size={18} className="text-[#D4AF37] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">+91 9800000037</span>
                            </a>
                            <a
                                href="mailto:advocate.mkaur@gmail.com"
                                className="flex items-start gap-3 text-[#5A5A5A] hover:text-[#D4AF37] transition-colors group"
                            >
                                <Mail size={18} className="text-[#D4AF37] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="font-medium break-all">advocate.mkaur@gmail.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-[#5A5A5A]">
                                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                                <div className="text-sm">
                                    <p className="font-medium">Flat No. 4, GF, PKT 4,</p>
                                    <p>Sunview Apartment, Sector 11,</p>
                                    <p>Dwarka, New Delhi – 110075</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="gold-divider my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5A5A5A]">
                    <p>© {new Date().getFullYear()} TANZRAY LEGAL ATTORNEYS. All rights reserved.</p>
                    <p className="italic text-[#8A8A8A]">Navigate the Legal Mosaic</p>
                </div>
            </div>
        </footer>
    );
}
