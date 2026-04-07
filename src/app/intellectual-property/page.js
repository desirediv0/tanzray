import { FaShieldAlt, FaTrademark, FaDraftingCompass, FaCopyright, FaGlobeAmericas } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function IntellectualProperty() {
    return (
        <PracticePageTemplate
            icon={HiOutlineLockClosed}
            title="Intellectual Property"
            subtitle="Strategic protection, registration, and aggressive enforcement of your intangible business assets."
            overview="In the modern digital economy, Intellectual Property (IP) is your most valuable asset. At Tanzray, we provide a holistic shield for your innovations, branding, and creative works, ensuring your competitive edge is legally fortified and professionally managed from registration to global enforcement."
            categories={[
                {
                    title: "Patents & Innovations",
                    icon: FaShieldAlt,
                    desc: "Inventions are the cornerstone of industrial progress. At Tanzray, we secure technical solutions that offer new ways of doing things or solve technical problems. A patent is a strategic business asset granting you exclusive rights for typically 20 years. Our process starts with a comprehensive patentability search to ensure your innovation is truly novel and non-obvious. We assist in drafting precise specifications, navigating complex filing requirements under the Indian Patents Act, and managing international filings via the PCT. From responding to First Examination Reports to representing you in pre-grant and post-grant oppositions, we ensure your technical IP is fortified against competition. Whether you are an individual inventor or a tech corporation, we provide the legal expertise to enforce and monetize your inventions through strategic licensing."
                },
                {
                    title: "Trademarks & Branding",
                    icon: FaTrademark,
                    desc: "Your brand is your identity. A trademark identifies your products or services from others, and protecting it is vital to prevent brand dilution. Tanzray offers complete trademark services, starting with rigorous searches to ensure your mark is distinctive and not similar to existing ones. We manage the entire lifecycle, including filing applications, attending hearings, and managing renewals. Should disputes arise, our expert litigators represent you in 'passing off' actions and infringement suits to secure interim injunctions. We help you build a robust IP portfolio that enhances your company's goodwill and valuation, ensuring your brand remains exclusive and protected in both domestic and international markets."
                },
                {
                    title: "Industrial Designs",
                    icon: FaDraftingCompass,
                    desc: "Visual aesthetics serve as a powerful differentiator. Protecting the unique shape, pattern, or ornamentation of your products is essential to prevent competitors from profiting off your creative effort. Under the Designs Act, 2000, registration provides exclusive rights to apply a design to any article of manufacture. Our firm specializes in identifying design elements eligible for protection—those that are new, original, and not disclosed to the public. We assist in preparing high-quality representations and filing applications with the Patent Office. Design protection is often the first line of defense against copycat products in sectors like fashion and electronics. We offer enforcement actions to stop unauthorized use and strategic advice to maintain your distinct market presence."
                },
                {
                    title: "Copyright Protection",
                    icon: FaCopyright,
                    desc: "Copyright law protects original works of authorship, including literary, artistic works, and computer software. While copyright exists upon creation, formal registration provides significant legal advantages for enforcement and damages. Tanzray provides guidance on securing rights across diverse creative domains, from cinematic films to complex software source code. Our counsel covers economic rights for reproduction and moral rights for paternity and integrity. We negotiate licensing agreements, manage royalty structures, and handle assignments to ensure proper monetization. In the event of digital piracy, we act swiftly with cease-and-desist notices and interim injunctions. We help creators navigate fair use and ownership, ensuring their original output is fully shielded under the Copyright Act."
                },
                {
                    title: "Domain Names & Digital IP",
                    icon: FaGlobeAmericas,
                    desc: "In the digital age, your domain name is a critical extension of your trademark. Protecting your online identity from cybersquatting is essential for maintaining customer trust. Domain disputes often involve bad faith registrations by third parties identical to your trademarks. At Tanzray, we specialize in internet law and domain name recovery. We represent clients in UDRP and INDRP proceedings to transfer infringing domains back to their owners. Our services include digital IP audits and strategic advice on securing defensive domain portfolios. We handle the intersection of trademark law and internet governance, ensuring your digital footprint is legally secure. Whether facing a cybersquatter or URL conflict, we provide the intelligence required to protect your presence globally."
                }
            ]}
            services={[
                "Global Trademark & Patent Searches",
                "IP Portfolio Strategic Management",
                "Technology & Software Licensing",
                "Infringement Litigation & Defense",
                "IP Due Diligence for Mergers",
                "Anti-Counterfeiting Strategies",
                "Commercial IP Agreements",
                "Design Strategy & Filing",
                "Copyright Compliance Audits",
                "Internet Law & Domain Disputes",
            ]}
            expertise={[
                {
                    title: "IP Strategy",
                    points: [
                        "Commercialization of technical IP",
                        "Registration strategy for global markets",
                        "Portfolio risk assessment",
                        "Competitive landscape analysis"
                    ]
                },
                {
                    title: "IP Enforcement",
                    points: [
                        "Cease and desist actions",
                        "Interim injunction proceedings",
                        "Customs enforcement and monitoring",
                        "Digital DMCA enforcement"
                    ]
                },
            ]}
            process={[
                { step: "01", title: "Audit & Analysis", desc: "Evaluating your existing IP assets and identifying gaps in protection." },
                { step: "02", title: "Strategic Filing", desc: "Executing precise registration processes with Indian and international registries." },
                { step: "03", title: "Active Prosecution", desc: "Handling examinations, office actions, and opposition proceedings." },
                { step: "04", title: "Asset Maintenance", desc: "Ongoing monitoring, renewal management, and dynamic enforcement actions." },
            ]}
            whyUs={[
                { title: "Technical Expertise", desc: "Our team combines deep legal knowledge with technical understanding of patents and software code." },
                { title: "Global Reach", desc: "We handle IP registrations and enforcement across multiple jurisdictions and international treaties." },
                { title: "Aggressive Protect", desc: "We don't just register; we actively defend your rights against infringers and counterfeiters." },
                { title: "Business Aligned", desc: "Our IP strategies are tailored to support your ultimate business growth and market valuation." },
            ]}
            courts={[
                { court: "High Court of Delhi", desc: "The primary venue for major IP suits in India — we represent clients in high-stakes infringement litigation.", bullets: ["Specialist IP Division representation", "Appeals against Registrar orders", "Commercial suit management"] },
                { court: "Controller General (CGPDTM)", desc: "Representing clients before the specialized offices for Patents, Designs, and Trademarks.", bullets: ["Post-grant oppositions", "Hearing representations", "Rectification proceedings"] },
            ]}
            ctaHeading="Shield Your Innovations"
            ctaSub="Don't leave your most valuable assets exposed. Contact our IP experts for a comprehensive protection strategy."
        />
    );
}
