import Link from "next/link";

/**
 * CTAButton — reusable button / link component.
 *
 * @param {string}   href          - if set, renders as <Link>. Otherwise <button>
 * @param {"gold"|"outline"|"dark-outline"} [variant="gold"]
 * @param {"sm"|"md"|"lg"} [size="md"]
 * @param {boolean}  [fullWidth]   - w-full on mobile, auto on sm+
 * @param {React.ReactNode} children
 * @param {string}   [className]
 * @param {function} [onClick]     - only used when rendering as <button>
 */
export default function CTAButton({
  href,
  variant = "gold",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  onClick,
  ...rest
}) {
  const sizeMap = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base",
  };

  const variantMap = {
    gold:
      "bg-[#D4AF37] hover:bg-[#B8860B] text-white border border-[#D4AF37] hover:border-[#B8860B] shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#FAF9F7]",
    "dark-outline":
      "bg-transparent border-2 border-white/60 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]",
  };

  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${sizeMap[size]} ${variantMap[variant]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base} {...rest}>
      {children}
    </button>
  );
}
