/**
 * SectionHeader — reusable section heading with optional eyebrow label and gold divider.
 *
 * @param {string} eyebrow   - small label above the heading (optional)
 * @param {string} heading   - main heading text; wrap key word with <span> for gold highlight
 * @param {string} [sub]     - subtitle / description beneath the heading
 * @param {"left"|"center"} [align="center"]  - horizontal alignment
 */
export default function SectionHeader({
  eyebrow,
  heading,
  sub,
  align = "center",
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-12`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] leading-tight">
        {heading}
      </h2>
      <div
        className={`mt-3 h-1 w-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {sub && (
        <p
          className={`mt-4 text-[#5A5A5A] text-sm md:text-base leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
