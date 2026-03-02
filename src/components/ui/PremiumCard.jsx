/**
 * PremiumCard — reusable card with gold hover accent.
 *
 * Props:
 *  @param {React.ReactNode} children
 *  @param {string}  [className]   - extra Tailwind classes
 *  @param {"default"|"center"|"horizontal"} [variant="default"]
 *  @param {boolean} [hoverable=true]  - enable hover lift & shadow
 */
export default function PremiumCard({
  children,
  className = "",
  variant = "default",
  hoverable = true,
}) {
  const base =
    "bg-white rounded-lg border border-[#E8E6E0] shadow-md p-5 md:p-6 transition-all duration-300";
  const hover = hoverable
    ? "hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-0.5"
    : "";
  const variantClass =
    variant === "center"
      ? "flex flex-col items-center text-center"
      : variant === "horizontal"
      ? "flex gap-4 items-start"
      : "";

  return (
    <div className={`${base} ${hover} ${variantClass} ${className}`}>
      {children}
    </div>
  );
}
