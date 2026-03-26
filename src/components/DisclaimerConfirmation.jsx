"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "tanzray_disclaimer_seen_in_session_v1";

export default function DisclaimerConfirmation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    const alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === "true";
    setShouldShow(!alreadySeen);
  }, [pathname]);

  useEffect(() => {
    if (!mounted) return;

    const prevOverflow = document.body.style.overflow;
    if (shouldShow) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted, shouldShow]);

  const onAgree = () => {
    window.sessionStorage.setItem(SESSION_KEY, "true");
    setShouldShow(false);
  };

  const onDecline = () => {
    window.sessionStorage.setItem(SESSION_KEY, "true");
    setShouldShow(false);
  };

  if (!mounted || !shouldShow) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Disclaimer & Confirmation"
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-3xl bg-white border border-[#E8E6E0] rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-5 bg-[#FAF9F7] border-b border-[#E8E6E0]">
          <h2 className="text-xl font-semibold text-[#2C2C2C]">
            Disclaimer & Confirmation
          </h2>
        </div>

        <div className="px-6 py-6 overflow-y-auto max-h-[70vh]">
          <p className="text-sm leading-relaxed text-[#5A5A5A]">
            In compliance with the rules of the Bar Council of India, this
            website of TANZRAY LEGAL ATTORNEYS&apos; is meant solely for general
            information purposes, and we are not permitted to solicit work and
            advertise. By clicking on the &quot;I AGREE&quot; button below, you acknowledge
            the following:
          </p>

          <ul className="mt-3 text-sm leading-relaxed text-[#5A5A5A] list-disc pl-5 space-y-2">
            <li>
              there has been no advertisement, personal communication,
              solicitation, invitation or inducement of any sort whatsoever from
              us or any of our members to solicit any work through this website;
            </li>
            <li>
              you wish to gain more information about us for your own information
              and use;
            </li>
            <li>
              the information about us is provided to you on your specific request
              and any information obtained or materials downloaded from this
              website is completely at your own volition and any transmission,
              receipt or use of this site does not create any lawyer-client
              relationship; and that
            </li>
            <li>
              The content of this website is also the Intellectual Property of the
              Firm.
            </li>
            <li>
              we are not liable for any consequence of any action taken by you
              relying on the material / information provided on this website.
            </li>
            <li>
              All downloadable content on this website is on an &quot;as is&quot; basis
              without warranties of any kind, either express or implied,
              including, without limitation, warranties of title or merchantability
              or acceptability for a particular purpose and/or correctness of
              contents.
            </li>
            <li>
              The Firm does not endorse, and is not responsible for, any
              third-party content that may be accessed through this website.
            </li>
            <li>
              If you have any legal issues, you, in all cases, must seek
              independent legal advice.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
            We use cookies to enhance your experience. By continuing to visit this
            website you agree to our use of cookies.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
            By clicking on &apos;I AGREE&apos; below, the website visitor acknowledges that the
            information provided in is meant only for his/her understanding of the
            Firm and its activities, and has understood the disclaimer above.
          </p>
        </div>

        <div className="px-6 py-5 border-t border-[#E8E6E0] bg-white flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onAgree}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#B8860B] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            I AGREE
          </button>
          <button
            type="button"
            onClick={onDecline}
            className="px-6 py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#F5F0E8] text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer"
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>
  );
}

