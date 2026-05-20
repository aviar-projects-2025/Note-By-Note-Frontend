import { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Award, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Who We Are | Note By Note AZ",
  description: "Learn about Note By Note AZ — our story, leadership, and the impact we are making in Arizona music education.",
};

const leaders = [
  {
    name: "Alex Rivera",
    role: "President & Co-Founder",
    bio: "A senior at ASU studying Music Education, Alex founded Note By Note AZ in 2020 after witnessing the lack of accessible music resources for middle schoolers in her community.",
    initials: "AR",
  },
  {
    name: "Jordan Kim",
    role: "Vice President",
    bio: "Jordan manages tutor recruitment and student matching. A piano student since age 5, Jordan believes every child deserves the same opportunity to grow through music.",
    initials: "JK",
  },
  {
    name: "Sam Patel",
    role: "Director of Operations",
    bio: "Sam handles logistics, scheduling, and partnerships. With a background in nonprofit management, Sam ensures every student-tutor relationship flourishes.",
    initials: "SP",
  },
];

const impacts = [
  { number: "200+", label: "Students Served Since 2020" },
  { number: "50+", label: "Active Volunteer Tutors" },
  { number: "15+", label: "Schools Partnered" },
  { number: "1,000+", label: "Free Lessons Delivered" },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#2B2B2B] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="section-tag">About Us</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Who We Are
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A passionate team of student leaders committed to making music education free and accessible for every Arizona child.
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">Our Story</span>
            <div className="divider" />
            <h2 className="font-heading text-4xl font-bold text-[#2B2B2B] mb-6">
              Born from a Simple Belief
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Note By Note AZ was founded in 2020 by a group of Arizona students who
              noticed a gap: talented middle schoolers who wanted to learn music but
              couldn't afford private lessons. Private instruction can cost $50–$100
              per hour — far out of reach for many families.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started with 5 tutors and 8 students. Today, we serve 200+ students
              across multiple Arizona schools, powered entirely by volunteer tutors
              who believe in what we're building.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Everything we do — every lesson, every resource, every smile — is free.
              Because music shouldn't have a price tag.
            </p>
            <Link href="/sign-up" className="btn-primary">
              Join Our Program <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-[#FAF8F5] rounded-2xl p-10 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {impacts.map((item, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="font-heading text-4xl font-bold text-[#C0392B] mb-1">
                      {item.number}
                    </div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C0392B]/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2B2B2B]/5 rounded-xl -z-10" />
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper bg="cream">
        <div className="text-center mb-14">
          <span className="section-tag">Leadership</span>
          <div className="divider divider-center" />
          <h2 className="font-heading text-4xl font-bold text-[#2B2B2B]">
            Meet Our Team
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Student leaders driving change in Arizona music education, one lesson at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">
                  {leader.initials}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#2B2B2B] text-xl mb-1">
                {leader.name}
              </h3>
              <p className="text-[#C0392B] text-sm font-semibold mb-4">{leader.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="charcoal">
        <div className="text-center mb-14">
          <span className="text-[#C0392B] text-xs font-bold tracking-widest uppercase">
            What Drives Us
          </span>
          <div className="divider divider-center bg-[#C0392B]" style={{backgroundColor: '#C0392B'}} />
          <h2 className="font-heading text-4xl font-bold text-white">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Compassion", desc: "We serve with empathy, meeting every student where they are in their musical journey." },
            { icon: Users, title: "Community", desc: "Music is communal. We build relationships between students, tutors, and families." },
            { icon: Award, title: "Excellence", desc: "Free doesn't mean low quality. We hold our tutors and curriculum to the highest standard." },
          ].map((val, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-14 h-14 bg-[#C0392B]/20 border border-[#C0392B]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-7 h-7 text-[#C0392B]" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
