import { Lock } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function IntellectualProperty() {
    return (
        <PracticePageTemplate
            icon={Lock}
            title="Intellectual Property"
            subtitle="Protection and enforcement of trademarks, patents, copyrights, and designs."
            overview="In today's knowledge economy, protecting your intellectual property is crucial. We provide comprehensive IP services from registration to enforcement, helping you safeguard your valuable creations and innovations."
            services={[
                "Trademark registration and protection",
                "Patent filing and prosecution",
                "Copyright registration and enforcement",
                "Design registration",
                "IP infringement litigation",
                "IP portfolio management",
                "Licensing agreements",
                "IP due diligence",
            ]}
            expertise={[
                { title: "Trademarks", points: ["Trademark search & clearance", "Application filing", "Enforcement & litigation", "Renewal management"] },
                { title: "Patents", points: ["Patent search & filing", "Patent prosecution", "Infringement defense", "Opposition proceedings"] },
                { title: "Copyrights", points: ["Copyright registration", "Infringement claims", "License drafting", "DMCA matters"] },
                { title: "Designs", points: ["Design registration", "Protection & enforcement", "Design strategy", "Portfolio management"] },
            ]}
            process={[
                { step: "01", title: "Search & Clearance", desc: "Conduct thorough searches to ensure your IP is available and unique." },
                { step: "02", title: "Application Filing", desc: "Prepare and file comprehensive applications with authorities." },
                { step: "03", title: "Prosecution", desc: "Handle official examination and respond to office actions." },
                { step: "04", title: "Registration & Maintenance", desc: "Obtain registration and manage renewals and updates." },
            ]}
            whyUs={[
                { title: "Expert Knowledge", desc: "Deep expertise in all IP areas including patents, trademarks, copyrights, and designs." },
                { title: "Strategic Approach", desc: "We develop comprehensive IP strategies aligned with your business objectives." },
                { title: "Aggressive Enforcement", desc: "Skilled litigation support to protect your IP rights against infringers." },
                { title: "Cost Efficiency", desc: "Efficient processes and reasonable fees for IP registration and renewal." },
            ]}
            courts={[
                { court: "District Court, Delhi", desc: "IP infringement proceedings and enforcement actions at the trial court level.", bullets: ["Trademark infringement suits", "Copyright infringement claims", "Interim injunctions"] },
                { court: "High Court of Delhi", desc: "Delhi HC has exclusive original jurisdiction in IP matters — we represent clients in all IP suits.", bullets: ["Trademark & copyright suits", "Patent infringement claims", "Appeals and appeals from IPAB"] },
            ]}
            ctaHeading="Protect Your Intellectual Property"
            ctaSub="Let us help you safeguard your valuable innovations and creations through comprehensive IP protection."
        />
    );
}
