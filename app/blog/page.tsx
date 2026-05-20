import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Blog | Note By Note AZ",
  description: "Stories, updates, and reflections from the Note By Note AZ community.",
};

const posts = [
  {
    slug: "spring-2024-recap",
    title: "Spring 2024 Season Recap: Our Biggest Quarter Yet",
    excerpt: "This spring we hit a major milestone — 200 students served since our founding. Here is what made this quarter so special, from new tutors to student showcases.",
    date: "April 15, 2024",
    category: "Updates",
    readTime: "4 min read",
  },
  {
    slug: "tutor-spotlight-priya",
    title: "Tutor Spotlight: How Priya Found Her Calling",
    excerpt: "Priya started as a student herself. Now she is one of our most dedicated tutors. We sat down to chat about what drives her, what she has learned, and what music means to her.",
    date: "March 22, 2024",
    category: "Community",
    readTime: "3 min read",
  },
  {
    slug: "why-music-matters",
    title: "Why Music Education Matters More Than Ever for Middle Schoolers",
    excerpt: "Research shows music education improves academic performance, emotional regulation, and social skills. Here is why we believe every 5th-8th grader should have access.",
    date: "February 10, 2024",
    category: "Education",
    readTime: "6 min read",
  },
  {
    slug: "new-initiative-preview",
    title: "Sneak Peek: Our Online Lessons Initiative",
    excerpt: "We are building the future of music access in Arizona. Here is an early look at our planned online lesson platform and what it means for students statewide.",
    date: "January 5, 2024",
    category: "Announcements",
    readTime: "5 min read",
  },
];

const categories = ["All", "Updates", "Community", "Education", "Announcements"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#2B2B2B] pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="section-tag">Our Blog</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-2 mb-6">
            Stories & Updates
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            News, spotlights, and reflections from the Note By Note AZ community.
          </p>
        </div>
      </section>

      <SectionWrapper bg="cream">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                cat === "All"
                  ? "bg-[#C0392B] text-white border-[#C0392B]"
                  : "bg-white text-[#2B2B2B] border-gray-200 hover:border-[#C0392B] hover:text-[#C0392B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-[#2B2B2B] to-[#C0392B]/40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl font-heading font-bold text-white">
                  ♩
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C0392B] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-heading font-bold text-[#2B2B2B] text-xl mb-3 group-hover:text-[#C0392B] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#C0392B] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            More posts coming soon. Check back regularly for updates!
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
