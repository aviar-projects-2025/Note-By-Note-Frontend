import { Metadata } from "next";
import { CheckCircle, ExternalLink, Music, AlertCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Sign Up | Note By Note AZ",
  description: "Sign up for free music lessons with Note By Note AZ. Open to all Arizona middle school students in grades 5-8.",
};

const steps = [
  { step: "01", title: "Fill Out the Form", desc: "Complete our simple student registration form below. It takes about 5 minutes." },
  { step: "02", title: "Get Matched", desc: "Our team will match you with a qualified tutor based on instrument, schedule, and location." },
  { step: "03", title: "Start Learning", desc: "Your tutor will reach out to schedule your first free lesson. No cost, ever." },
];

export default function SignUpPage() {
  return (
    <>
      <section className="bg-[#2B2B2B] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="section-tag">Get Started</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Sign Up for Free Lessons
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Open to all Arizona middle school students in grades 5-8. No experience required. Always 100% free.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag">Who Can Apply</span>
            <div className="divider" />
            <h2 className="font-heading text-3xl font-bold text-[#2B2B2B] mb-6">
              Eligibility Requirements
            </h2>
            <ul className="space-y-4">
              {[
                "Currently enrolled in grades 5-8",
                "Residing in Arizona",
                "Interest in learning an instrument (any level)",
                "Parent or guardian consent",
                "Commitment to attend scheduled lessons",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C0392B] mt-0.5 shrink-0" />
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 bg-[#FAF8F5] border border-gray-200 rounded-xl">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2B2B2B] mb-1">Instruments We Offer</p>
                  <p className="text-gray-500 text-sm">
                    Guitar, Piano, Violin, Ukulele, Drums, Flute, and more depending on tutor availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-tag">How It Works</span>
            <div className="divider" />
            <h2 className="font-heading text-3xl font-bold text-[#2B2B2B] mb-6">
              3 Simple Steps
            </h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-[#C0392B] text-white rounded-xl flex items-center justify-center font-heading font-bold text-lg shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#2B2B2B] text-lg mb-1">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Forms */}
      <SectionWrapper bg="cream">
        <div className="text-center mb-12">
          <span className="section-tag">Registration</span>
          <div className="divider divider-center" />
          <h2 className="font-heading text-4xl font-bold text-[#2B2B2B]">
            Complete Your Sign-Up
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#C0392B]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Music className="w-8 h-8 text-[#C0392B]" />
            </div>
            <h3 className="font-heading font-bold text-[#2B2B2B] text-2xl mb-3">
              Student Sign-Up
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              Register your child for free one-on-one music lessons. Includes instrument preference, availability, and contact info.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center w-full"
            >
              Open Sign-Up Form <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-gray-400 text-xs mt-3">Opens Google Form in a new tab</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <AlertCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-heading font-bold text-[#2B2B2B] text-2xl mb-3">
              Tutor Absence Report
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              For registered tutors only. Use this form to report a scheduled lesson absence with advance notice.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center w-full"
            >
              Absence Report Form <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-gray-400 text-xs mt-3">For tutors only · Opens Google Form</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
