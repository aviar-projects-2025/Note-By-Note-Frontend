import { Metadata } from "next";
import { Mail, ExternalLink, FolderOpen } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Media & Contact | Note By Note AZ",
  description: "Get in touch with Note By Note AZ, access our media resources, and connect with us on social media.",
};

export default function MediaContactPage() {
  return (
    <>
      <section className="bg-[#2B2B2B] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="section-tag">Connect With Us</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Media & Contact
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Reach out, follow our journey, or access our media resources.
          </p>
        </div>
      </section>

      <SectionWrapper bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Mail,
              title: "Email Us",
              desc: "Questions, partnerships, or press inquiries",
              link: "mailto:contact@notebynoteaz.org",
              label: "contact@notebynoteaz.org",
              color: "bg-[#C0392B]",
            },
            {
              icon: ExternalLink,
              title: "Instagram",
              desc: "Follow our day-to-day journey",
              link: "https://instagram.com/notebynoteaz",
              label: "@notebynoteaz",
              color: "bg-[#E1306C]",
            },
            {
              icon: ExternalLink,
              title: "GoFundMe",
              desc: "Support our fundraising campaign",
              link: "https://gofundme.com",
              label: "View Campaign",
              color: "bg-[#02A95C]",
            },
            {
              icon: FolderOpen,
              title: "Media Drive",
              desc: "Logos, photos, press materials",
              link: "https://drive.google.com",
              label: "Access Drive",
              color: "bg-[#1A73E8]",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group text-center block"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-[#2B2B2B] text-lg mb-1">{item.title}</h3>
              <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
              <p className="text-[#C0392B] font-semibold text-sm">{item.label}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <span className="section-tag">Send a Message</span>
            <div className="divider divider-center" />
            <h2 className="font-heading text-3xl font-bold text-[#2B2B2B]">Get In Touch</h2>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#2B2B2B] mb-2">First Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors" placeholder="Your first name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2B2B2B] mb-2">Last Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors" placeholder="Your last name" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2B2B2B] mb-2">Email</label>
              <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2B2B2B] mb-2">Subject</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors bg-white">
                <option>General Inquiry</option>
                <option>Press / Media</option>
                <option>Partnership Opportunity</option>
                <option>Volunteer Interest</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#2B2B2B] mb-2">Message</label>
              <textarea rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0392B] transition-colors resize-none" placeholder="Tell us how we can help..." />
            </div>
            <button className="btn-primary w-full justify-center">
              Send Message
            </button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
