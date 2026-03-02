

const SectionHeading = ({ label, title, description, center = true }) => (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
        {label && (
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">{label}</span>
        )}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold-gradient mt-2 mb-4">{title}</h2>
        <div className={`gold-line w-16 mb-4 ${center ? "mx-auto" : ""}`} />
        {description && (
            <p className="text-muted-foreground max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}">{description}</p>
        )}
    </div>
);

export default SectionHeading;
