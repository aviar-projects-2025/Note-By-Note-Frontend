import { Metadata } from "next";
import Link from "next/link";
import { Monitor, Calendar, Globe, ArrowRight, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "New Initiative | Note By Note AZ",
  description: "Learn about our upcoming online music lesson platform — bringing free music education to students across Arizona and beyond.",
};

const features = [
  {
    icon: Monitor,
    title: "Virtual One-on-One Sessions",
    desc: "Live, face-to-face lessons via video platform — same personal experience, no commute required.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    desc: "Book lessons at times that work for students and tutors, with automated reminders and calendar sync.",
  },
  {
    icon: Globe,
    title: "Statewide Access",
    desc: "No geographic limits. Any Arizona middle schooler with an internet connection can participate.",
  },
];

export default function NewInitiativePage() {
  return (
    <>
      <section className="bg-[#2B2B2B] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C0392B]/5" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C0392B]/20 border border-[#C0392B]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#C0392B] rounded-full animate-pulse" />
            <span className="text-[#C0392B] text-sm font-semibold">Coming Soon — Phase 2</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Online Lessons Initiative
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            We are building Arizona's first free online music education platform for middle schoolers. Be the first to know when we launch.
          </p>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-tag">The Vision</span>
          <div className="divider divider-center" />
          <h2 className="font-heading text-4xl font-bold text-[#2B2B2B] mb-6">
            Music Without Boundaries
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our in-person program has transformed hundreds of lives — but geography still limits us. Many Arizona students live far from our tutors. Our online platform will eliminate that barrier entirely, reaching students in rural communities, students with transportation challenges, and any Arizona middle schooler who needs us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-[#FAF8F5] rounded-xl border border-gray-100">
              <div className="w-14 h-14 bg-[#C0392B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#2B2B2B] text-xl mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Interest CTA */}
      <SectionWrapper bg="charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Be First to Know
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Sign up to receive updates on our online lesson platform launch, early access opportunities, and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="btn-primary">
              Register Interest <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Online Interest Form <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Phase 2 is currently in planning. No portal or login functionality is available yet.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
