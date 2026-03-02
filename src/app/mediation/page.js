import { Handshake } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function Mediation() {
    return (
        <PracticePageTemplate
            icon={Handshake}
            title="Mediation Services"
            subtitle="Professional mediation for amicable, cost-effective dispute resolution."
            overview="Mediation offers a constructive alternative to adversarial litigation. Our experienced mediators facilitate communication between parties to reach mutually acceptable solutions that preserve relationships and resolve disputes efficiently."
            services={[
                "Faster resolution than litigation",
                "Cost-effective dispute resolution",
                "Maintained relationships and goodwill",
                "Confidential and private proceedings",
                "Greater control over outcomes",
                "Flexible solutions customized to parties",
                "Reduced emotional stress",
                "Enforceable binding agreements",
            ]}
            expertise={[
                { title: "Family & Matrimonial", points: ["Divorce settlements", "Custody disputes", "Inheritance disputes", "Separation agreements"] },
                { title: "Commercial Disputes", points: ["Contract disputes", "Partnership dissolution", "Business conflicts", "Financial disputes"] },
                { title: "Employment Disputes", points: ["Workplace conflicts", "Labour disputes", "Termination disputes", "Salary negotiations"] },
                { title: "Property Disputes", points: ["Real estate conflicts", "Neighbour disputes", "Landlord-tenant issues", "Community conflicts"] },
            ]}
            process={[
                { step: "01", title: "Initial Meeting", desc: "Mediator meets with each party separately to understand their position." },
                { step: "02", title: "Joint Session", desc: "Parties meet together with mediator to discuss core issues." },
                { step: "03", title: "Negotiation", desc: "Mediator facilitates constructive communication and exploring options." },
                { step: "04", title: "Settlement", desc: "Formalise mutually agreed resolution in a binding written agreement." },
            ]}
            whyUs={[
                { title: "Cost Effective", desc: "Significantly lower costs compared to litigation with court fees and prolonged legal battles." },
                { title: "Time Efficient", desc: "Resolve disputes in weeks or months rather than years of court proceedings." },
                { title: "Control & Flexibility", desc: "Parties control the process and outcomes rather than having a judge decide." },
                { title: "Confidential Process", desc: "Private proceedings protect sensitive information unlike public court trials." },
            ]}
            courts={[
                { court: "Court-Referred Mediation", desc: "We handle mediations referred by District and High Courts of Delhi as part of Lok Adalat and ADR programs.", bullets: ["Pre-litigation mediation", "Court-annexed mediation", "Lok Adalat settlements"] },
                { court: "Private Mediation", desc: "Voluntary mediation services outside the formal court system, customised to your timeline and needs.", bullets: ["Commercial dispute mediation", "Family mediation", "Workplace conflict resolution"] },
            ]}
            ctaHeading="Interested in Resolving Your Dispute Amicably?"
            ctaSub="Contact us to explore mediation as a constructive, cost-effective solution to your conflict."
        />
    );
}
