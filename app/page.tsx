import { Metadata } from "next";
import { Heart, CreditCard, Smartphone, ExternalLink, Shield, Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Donate | Note By Note AZ",
  description: "Support free music education for Arizona middle schoolers. Donate via PayPal, Zelle, or GoFundMe. All donations are tax-deductible.",
};

const donationMethods = [
  {
    icon: CreditCard,
    title: "PayPal",
    desc: "Fast, secure online donation. Credit/debit cards accepted.",
    link: "https://paypal.com",
    label: "Donate via PayPal",
    color: "bg-[#003087]",
    primary: true,
  },
  {
    icon: Smartphone,
    title: "Zelle",
    desc: "Send directly to our registered Zelle account.",
    link: "#zelle",
    label: "Get Zelle Info",
    color: "bg-[#6B1FA3]",
    primary: false,
  },
  {
    icon: Heart,
    title: "GoFundMe",
    desc: "Contribute to our active fundraising campaign.",
    link: "https://gofundme.com",
    label: "View Campaign",
    color: "bg-[#02A95C]",
    primary: false,
  },
];

const impacts = [
  { amount: "$10", impact: "Covers one set of practice materials for a student" },
  { amount: "$25", impact: "Funds 2 full lessons for a student" },
  { amount: "$50", impact: "Supports a student for an entire month" },
  { amount: "$100", impact: "Sponsors a student for a full semester" },
  { amount: "$500", impact: "Funds an entire cohort of 10 students for a month" },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-[#2B2B2B] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="section-tag">Support Our Mission</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Your generosity directly funds free music lessons for Arizona middle schoolers who would otherwise never get this opportunity.
          </p>
        </div>
      </section>

      {/* Donation Methods */}
      <SectionWrapper bg="cream">
        <div className="text-center mb-12">
          <span className="section-tag">Ways to Give</span>
          <div className="divider divider-center" />
          <h2 className="font-heading text-4xl font-bold text-[#2B2B2B]">Choose How to Donate</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {donationMethods.map((method, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-8 shadow-sm border text-center ${
                method.primary ? "border-[#C0392B] ring-2 ring-[#C0392B]/20" : "border-gray-100"
              }`}
            >
              {method.primary && (
                <div className="bg-[#C0392B] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#2B2B2B] text-2xl mb-2">{method.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{method.desc}</p>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={method.primary ? "btn-primary justify-center w-full" : "btn-outline justify-center w-full"}
              >
                {method.label} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Zelle Info */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-[#6B1FA3]/5 border border-[#6B1FA3]/20 rounded-xl text-center" id="zelle">
          <Smartphone className="w-8 h-8 text-[#6B1FA3] mx-auto mb-3" />
          <h4 className="font-heading font-bold text-[#2B2B2B] mb-2">Zelle Payment Info</h4>
          <p className="text-gray-500 text-sm mb-3">Send Zelle payments directly to:</p>
          <p className="font-mono font-bold text-[#2B2B2B] text-lg">donate@notebynoteaz.org</p>
          <p className="text-gray-400 text-xs mt-2">Please include "Donation" in the memo field.</p>
        </div>
      </SectionWrapper>

      {/* Impact */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <span className="section-tag">Your Impact</span>
          <div className="divider divider-center" />
          <h2 className="font-heading text-4xl font-bold text-[#2B2B2B]">Where Your Money Goes</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-5 bg-[#FAF8F5] rounded-xl border border-gray-100 hover:border-[#C0392B]/30 transition-colors group"
            >
              <div className="font-heading font-bold text-2xl text-[#C0392B] w-16 shrink-0 text-center">
                {item.amount}
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <p className="text-gray-600 text-sm">{item.impact}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Legal */}
      <SectionWrapper bg="charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[#C0392B]" />
            <Award className="w-6 h-6 text-[#C0392B]" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Your Donation is Tax-Deductible
          </h2>
          <p className="text-gray-300 mb-4">
            Note By Note AZ is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent permitted by law.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-5 py-3 mb-6">
            <Award className="w-4 h-4 text-[#C0392B]" />
            <span className="text-white text-sm font-medium">Federal Tax ID (EIN): XX-XXXXXXX</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Note By Note AZ is a 501(c)(3) tax-exempt nonprofit organization. Contributions are tax-deductible as allowed by law. No goods or services are provided in exchange for donations. Please consult your tax advisor regarding deductibility. Zelle and PayPal donations will receive digital receipts upon request.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
