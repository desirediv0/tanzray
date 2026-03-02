import { Heart } from "lucide-react";
import PracticePageTemplate from "@/components/PracticePageLayout";

export default function Matrimonial() {
    return (
        <PracticePageTemplate
            icon={Heart}
            title="Matrimonial Law"
            subtitle="Expert guidance in marriage dissolution, custody matters, and property settlements."
            overview="We understand that matrimonial matters are deeply personal. Our experienced advocates provide compassionate yet assertive representation in all aspects of family law, ensuring your rights are protected throughout the process."
            services={[
                "Marriage dissolution and divorce proceedings",
                "Custody and guardianship matters",
                "Property division and settlement",
                "Alimony and maintenance claims",
                "Dowry-related disputes",
                "Spousal abuse and domestic violence cases",
                "Separation agreements",
                "Matrimonial property protection",
            ]}
            expertise={[]}
            process={[
                { step: "01", title: "Initial Consultation", desc: "Understand your situation and objectives in a confidential setting." },
                { step: "02", title: "Strategy Development", desc: "Create a comprehensive legal strategy tailored to your case." },
                { step: "03", title: "Legal Proceedings", desc: "Expert representation in court or out-of-court negotiations." },
                { step: "04", title: "Resolution", desc: "Achieve favourable settlement or court decree." },
            ]}
            whyUs={[
                { title: "Sensitive & Compassionate", desc: "We approach each matrimonial case with empathy, professionalism, and deep understanding of emotional complexity." },
                { title: "Experienced Advocates", desc: "Years of experience handling complex matrimonial disputes in District and High Court of Delhi." },
                { title: "Protective Representation", desc: "We fiercely protect your rights and interests, whether negotiating settlements or litigating in court." },
                { title: "Transparent Communication", desc: "Regular updates and clear communication throughout proceedings to keep you fully informed." },
            ]}
            courts={[
                { court: "District Court, Delhi", desc: "Experienced representation in matrimonial matters including filing petitions, defending claims, and negotiating settlements.", bullets: ["Divorce petitions and proceedings", "Custody and guardianship cases", "Maintenance and alimony claims"] },
                { court: "High Court of Delhi", desc: "Specialised appellate practice in matrimonial law, challenging unfavourable orders and presenting complex arguments.", bullets: ["Appeals and revisions", "Interim relief applications", "Complex matrimonial disputes"] },
            ]}
            ctaHeading="Need Expert Matrimonial Law Guidance?"
            ctaSub="Schedule a confidential consultation with our experienced advocates."
        />
    );
}
