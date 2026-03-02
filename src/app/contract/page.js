import { FileText } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function Contract() {
    return (
        <PracticePageTemplate
            icon={FileText}
            title="Contract Law"
            subtitle="Drafting, review, and dispute resolution for all types of contracts."
            overview="Clear and enforceable contracts are crucial for any business relationship. We provide expert assistance in drafting, reviewing, and enforcing contracts that protect your interests and minimise legal risk."
            services={[
                "Contract drafting and negotiation",
                "Agreement review and analysis",
                "Terms & conditions formulation",
                "Dispute resolution and mediation",
                "Breach of contract litigation",
                "Commercial agreement enforcement",
                "Purchase and sale agreements",
                "Service contract management",
            ]}
            expertise={[
                { title: "Commercial Contracts", points: ["Buy-sell agreements", "Supply contracts", "Distribution agreements", "Commercial arrangements"] },
                { title: "Employment Agreements", points: ["Employment contracts", "Non-compete clauses", "Confidentiality agreements", "Service agreements"] },
                { title: "Real Estate Contracts", points: ["Property sale agreements", "Lease contracts", "Transaction documentation", "Title verification"] },
                { title: "Partnership Agreements", points: ["Partnership deeds", "Joint venture agreements", "Collaboration contracts", "Loan & credit agreements"] },
            ]}
            process={[
                { step: "01", title: "Requirement Analysis", desc: "Understand your business needs and contract objectives." },
                { step: "02", title: "Drafting / Review", desc: "Create or review contracts with clear terms and protections." },
                { step: "03", title: "Negotiation", desc: "Negotiate favourable terms with the other party." },
                { step: "04", title: "Execution", desc: "Finalise and execute the agreement with proper documentation." },
            ]}
            whyUs={[
                { title: "Legally Sound", desc: "All contracts are drafted to comply with applicable laws and protect your interests." },
                { title: "Risk Mitigation", desc: "We identify and mitigate potential risks through careful contract structuring." },
                { title: "Business-Focused", desc: "We understand business realities and draft practical, enforceable agreements." },
                { title: "Dispute Ready", desc: "Should disputes arise, we represent you aggressively in negotiations or court." },
            ]}
            courts={[
                { court: "District Court, Delhi", desc: "Representation in contract dispute proceedings, enforcement actions, and breach litigation.", bullets: ["Contract enforcement matters", "Breach of contract trials", "Interim injunctions"] },
                { court: "High Court of Delhi", desc: "Appellate and writ jurisdiction for complex commercial contract disputes.", bullets: ["Commercial appeals", "Arbitration proceedings", "Enforcement of foreign awards"] },
            ]}
            ctaHeading="Need Expert Contract Services?"
            ctaSub="Let us help you draft, review, or enforce your contracts with confidence."
        />
    );
}
