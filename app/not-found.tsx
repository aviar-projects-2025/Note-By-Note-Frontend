import Link from "next/link";
import { Music, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2B2B2B] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-6">
          <Music className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-heading text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Looks like this page hit a wrong note. Let us take you back to something familiar.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
