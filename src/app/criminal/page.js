import { Shield } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function Criminal() {
    return (
        <PracticePageTemplate
            icon={Shield}
            title="Criminal Law"
            subtitle="Comprehensive defense and prosecution representation in criminal matters."
            overview="Criminal charges can be serious and life-altering. Our experienced criminal law advocates provide vigorous defense and prosecution representation, protecting your rights at every stage of the process."
            services={[
                "Criminal defense representation",
                "Bail and interim relief applications",
                "Chargesheet and FIR defense",
                "Criminal prosecution support",
                "Appellate criminal matters",
                "White-collar crime defense",
                "Cybercrime and digital offenses",
                "Sexual assault and major crimes",
            ]}
            expertise={[
                { title: "Pre-Trial Matters", points: ["FIR filing and opposition", "Anticipatory bail", "Regular bail applications", "Custody hearings"] },
                { title: "Trial Defense", points: ["Witness examination", "Cross-examination strategy", "Evidence challenges", "Legal arguments"] },
                { title: "Appellate Practice", points: ["Appeal filing", "Conviction challenges", "Sentence reduction", "Revision petitions"] },
                { title: "Special Criminal Areas", points: ["IPC offenses", "Special Acts violations", "White-collar crimes", "Cybercrime defense"] },
            ]}
            process={[
                { step: "01", title: "Immediate Action", desc: "Rapid response to secure your rights and provide interim relief." },
                { step: "02", title: "Investigation", desc: "Thorough case analysis and evidence gathering." },
                { step: "03", title: "Strategic Defense", desc: "Develop comprehensive defense strategy and court pleadings." },
                { step: "04", title: "Court Representation", desc: "Vigorous advocacy and cross-examination throughout trial." },
            ]}
            whyUs={[
                { title: "Aggressive Defense", desc: "We mount vigorous defense strategies to protect your rights and challenge prosecution evidence." },
                { title: "Extensive Experience", desc: "Decades of criminal law experience handling cases from police stations to high courts." },
                { title: "Bail Expertise", desc: "Successful track record in securing bail and interim relief in serious criminal charges." },
                { title: "Evidence Mastery", desc: "Deep understanding of criminal procedure and evidence law to challenge prosecution." },
            ]}
            courts={[
                { court: "District Court, Delhi", desc: "Comprehensive criminal defense and prosecution at trial court level, including bail applications.", bullets: ["Bail applications and hearings", "Complete trial representation", "Cross-examination of witnesses"] },
                { court: "High Court of Delhi", desc: "Specialised appellate and revision practice in criminal matters, challenging convictions.", bullets: ["Criminal appeals and revisions", "Anticipatory bail petitions", "Sentence reduction appeals"] },
            ]}
            ctaHeading="Need Experienced Criminal Defense?"
            ctaSub="Don't face criminal charges alone. Contact us immediately for expert legal representation."
        />
    );
}
