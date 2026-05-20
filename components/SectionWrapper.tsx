import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "cream" | "charcoal" | "light";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  const bgMap = {
    white: "bg-white",
    cream: "bg-[#FAF8F5]",
    charcoal: "bg-charcoal text-white",
    light: "bg-gray-50",
  };

  return (
    <section id={id} className={`section-padding ${bgMap[bg]} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
