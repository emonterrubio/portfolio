import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-black mb-4 font-heading">Project Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 transition-colors underline"
        >
          ← Back to Projects
        </Link>
      </main>
      <Footer />
    </div>
  );
}

