/**
 * Container — consistent max-width wrapper used across all sections.
 * @param {React.ReactNode} children
 * @param {"sm"|"md"|"lg"|"xl"|"2xl"|"full"} [size="xl"] - max-width preset
 * @param {string} [className] - additional classes
 */
export default function Container({ children, size = "xl", className = "" }) {
  const sizeMap = {
    sm:   "max-w-3xl",
    md:   "max-w-4xl",
    lg:   "max-w-5xl",
    xl:   "max-w-7xl",
    "2xl":"max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div className={`${sizeMap[size]} mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
