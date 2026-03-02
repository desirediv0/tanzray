"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Scale } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Matrimonial", href: "/matrimonial" },
  { name: "Criminal", href: "/criminal" },
  { name: "Contract", href: "/contract" },
  { name: "Mediation", href: "/mediation" },
  { name: "IP Rights", href: "/intellectual-property" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > lastScrollY.current && currentY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30"
          : "bg-white/80 backdrop-blur-sm border-b border-[#D4AF37]/20"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2">
              <Scale size={24} className="text-[#D4AF37]" />
              <div>
                <div className="text-xl font-bold leading-tight">
                  <span className="text-[#D4AF37]">TANZRAY</span>
                  <span className="text-[#2C2C2C]"> LEGAL</span>
                </div>
                <p className="text-[10px] text-[#5A5A5A] font-semibold tracking-widest uppercase">
                  Navigate the Legal Mosaic
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive(link.href)
                    ? "text-[#D4AF37]"
                    : "text-[#5A5A5A] hover:text-[#D4AF37] hover:bg-[#FAF9F7]"
                  }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#D4AF37] font-medium rounded-lg hover:bg-[#FAF9F7] transition-all duration-300">
                Services
                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-2xl border border-[#E8E6E0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="py-1.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-[#5A5A5A] hover:bg-[#FAF9F7] hover:text-[#D4AF37] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B8860B] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Sheet Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation"
                className="md:hidden p-2 rounded-lg hover:bg-[#FAF9F7] text-[#2C2C2C] transition-colors"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Sheet Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E6E0]">
                  <div className="flex items-center gap-2">
                    <Scale size={20} className="text-[#D4AF37]" />
                    <span className="font-bold text-[#2C2C2C]">
                      <span className="text-[#D4AF37]">TANZRAY</span> LEGAL
                    </span>
                  </div>
                  <SheetClose asChild>
                    <button className="p-1.5 rounded-md text-[#5A5A5A] hover:bg-[#FAF9F7] hover:text-[#2C2C2C]">
                      <X size={20} />
                    </button>
                  </SheetClose>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[#D4AF37] bg-[#FAF9F7]"
                          : "text-[#2C2C2C] hover:text-[#D4AF37] hover:bg-[#FAF9F7]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-4 border-t border-[#E8E6E0] mt-4">
                    <p className="px-4 text-xs uppercase tracking-widest text-[#5A5A5A] font-semibold mb-2">
                      Practice Areas
                    </p>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-[#5A5A5A] hover:text-[#D4AF37] hover:bg-[#FAF9F7] rounded-lg transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Sheet Footer CTA */}
                <div className="px-5 py-5 border-t border-[#E8E6E0]">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 bg-[#D4AF37] hover:bg-[#B8860B] text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
