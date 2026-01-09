import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-8">
        <Hero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
