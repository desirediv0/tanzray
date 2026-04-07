import { FileCheck } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function Contract() {
    return (
        <PracticePageTemplate
            icon={FileCheck}
            title="Contracts & Legal Vetting"
            subtitle="Expert drafting, critical vetting, and strategic advisory to safeguard your business interests from unforeseen losses."
            overview="A legal contract is the heart and soul of any business transaction. Beyond a mere document, it is a strategic shield that defines responsibilities, creates enforceable obligations, and establishes clear monetary safeguards. At Tanzray, we deploy deep legal intelligence to ensure every agreement is professionally sealed, protecting your business rights and remedies in both present and future contexts."
            services={[
                "Service & Supply Agreements",
                "Technology & Licensing Contracts",
                "Franchisee & Agency Agreements",
                "Confidentiality & Non-Disclosure (NDA)",
                "Joint Venture & Collaboration Deeds",
                "Procurement & Vendor Management",
                "Tri-Partite & Multi-Party Contracts",
                "Marketing & Job Work Agreements",
                "Legal Vetting & Compliance Audit",
                "Dispute Resolution & Arbitration Clauses",
            ]}
            expertise={[
                { 
                    title: "Legal Vetting as Insurance", 
                    points: [
                        "Diligence of clauses and responsibilities",
                        "Defining monetary security and legal remedies",
                        "Anomaly detection in literal wordings",
                        "Ongoing monitoring for legal changes",
                        "Preventing 'Copy-Paste' suicidal risks"
                    ] 
                },
                { 
                    title: "Strategic Agreement Design", 
                    points: [
                        "Clarity, simplicity, and futuristic vision",
                        "Concise and enforceable definitions",
                        "Straight and small-sentence structures",
                        "Custom-tailored business transactions",
                        "Protection of ultimate business motives"
                    ] 
                },
                { 
                    title: "Commercial Safeguards", 
                    points: [
                        "Risk identification in trade practices",
                        "In-built arbitration for litigation-free trade",
                        "Scope, liability, and indemnity reviews",
                        "Dynamic clause adjustments for renegotiations",
                        "International and domestic compliance"
                    ] 
                },
            ]}
            process={[
                { step: "01", title: "Requirement Audit", desc: "Understanding the nature of supply, transaction depth, and business intent." },
                { step: "02", title: "Intelligent Drafting", desc: "Crafting bespoke agreements with precise legal definitions and futuristic options." },
                { step: "03", title: "Critical Vetting", desc: "Careful examination of every clause to ensure safeguards are properly sealed." },
                { step: "04", title: "Execution & Oversight", desc: "Finalizing documentation with a focus on enforceability and ongoing compliance." },
            ]}
            whyUs={[
                { title: "Business Insurance", desc: "We view legal vetting as a form of insurance, saving your business from potential litigation and financial loss." },
                { title: "Expert Intelligence", desc: "Move beyond stereotype templates; our experts draft contracts with specific focus on your unique scope and liabilities." },
                { title: "Outcome Focused", desc: "Every word is analyzed literals and expression-wise to eliminate ambiguity and prevent confusion during execution." },
                { title: "Trusted Advice", desc: "Our advice helps you enter contracts with well-informed decisions, supported by vast legal experience and due diligence." },
            ]}
            ctaHeading="Secure Your Business Today"
            ctaSub="Don't rely on generic templates. Get a professionally drafted and vetted agreement tailored to your business needs."
        />
    );
}
