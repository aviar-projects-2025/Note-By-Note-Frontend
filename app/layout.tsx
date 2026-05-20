import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Note By Note AZ | Free Music Education for Arizona Youth",
  description:
    "Note By Note AZ is a student-run nonprofit providing free one-on-one music instruction to middle school students in Arizona. Sign up, donate, or learn more about our impact.",
  keywords:
    "music education, nonprofit, Arizona, free music lessons, middle school, youth programs",
  openGraph: {
    title: "Note By Note AZ | Free Music Education for Arizona Youth",
    description:
      "Student-run nonprofit providing free one-on-one music instruction to middle school students in Arizona.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
