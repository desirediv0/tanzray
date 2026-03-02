import Link from "next/link";
import { Phone, Mail, MapPin, Scale } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  { icon: Phone,  value: "+91 9800000037",        href: "tel:+919800000037" },
  { icon: Mail,   value: "advocate.mkaur@gmail.com", href: "mailto:advocate.mkaur@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: About Firm */}
          <div className="flex  flex-col items-start gap-2">
           <Link href="/" className="flex items-center gap-2">
           <Image src="/logo.png" alt="Logo" width={80} height={80} />
           </Link>
            <p className="text-[9px] text-[#5A5A5A] font-semibold tracking-[0.2em] uppercase mb-3">
              Navigate the Legal Mosaic
            </p>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Premium legal counsel for individuals and businesses across Delhi — District and High Court matters handled with expertise and integrity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#5A5A5A] hover:text-[#D4AF37] font-medium transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, value, href }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-start gap-3 text-[#5A5A5A] hover:text-[#D4AF37] transition-colors group"
                >
                  <Icon size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium break-all">{value}</span>
                </a>
              ))}
              <div className="flex items-start gap-3 text-[#5A5A5A]">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Flat No. 4, GF, PKT 4, Sunview Apartment,<br />
                  Sector 11, Dwarka, New Delhi – 110075
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#E8E6E0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8A8A]">
          <p>© {new Date().getFullYear()} TANZRAY LEGAL ATTORNEYS. All rights reserved.</p>
          <p className="italic">Navigate the Legal Mosaic</p>
        </div>
      </div>
    </footer>
  );
}
