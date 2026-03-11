"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scale } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { name: "Home",    href: "/" },
  { name: "About",   href: "/about" },
  { name: "Contact", href: "/contact" },
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

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/40"
          : "bg-white border-b border-[#D4AF37]/20"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2">
        <div className="flex items-center h-20">

          {/* ── LEFT: Logo ── */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </Link>

          {/* ── CENTER: Desktop Nav ── */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${isActive(link.href)
                    ? "text-[#D4AF37]"
                    : "text-[#5A5A5A] hover:text-[#D4AF37] hover:bg-[#FAF9F7]"
                  }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* ── RIGHT: CTA Button ── */}
          <div className="hidden md:flex flex-shrink-0 items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#B8860B] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* ── MOBILE: Hamburger ── */}
          <div className="flex md:hidden flex-1 justify-end">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation"
                  className="p-2 rounded-lg hover:bg-[#FAF9F7] text-[#2C2C2C] transition-colors"
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-[340px] p-0 bg-white border-l border-[#E8E6E0] z-[100]"
              >
                <div className="flex flex-col h-full bg-white">
                  {/* Sheet Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E6E0] bg-white">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                      <Scale size={20} className="text-[#D4AF37]" />
                      <span className="font-bold text-[#2C2C2C] text-base">
                        <span className="text-[#D4AF37]">TANZRAY</span> LEGAL
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <button className="p-2 rounded-lg text-[#5A5A5A] hover:bg-[#FAF9F7] hover:text-[#2C2C2C] transition-colors">
                        <X size={20} />
                      </button>
                    </SheetClose>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex-1 px-4 py-6 space-y-1 bg-white">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-3 px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive(link.href)
                            ? "text-[#D4AF37] bg-[#FAF9F7] border border-[#D4AF37]/30"
                            : "text-[#2C2C2C] hover:text-[#D4AF37] hover:bg-[#FAF9F7]"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {isActive(link.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                        )}
                        {link.name}
                      </Link>
                    ))}
                  </nav>

                  {/* CTA Full-Width */}
                  <div className="px-4 py-5 border-t border-[#E8E6E0] bg-white">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-4 bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold rounded-xl transition-all duration-300 text-base shadow-md"
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
      </div>
    </nav>
  );
}
