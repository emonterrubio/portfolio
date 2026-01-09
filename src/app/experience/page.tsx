import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
// import { AboutSection } from "@/components/sections/experience/AboutSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { experienceData } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-8">

        {/* <AboutSection paragraphs={experienceData.about} /> */}
        <ExperienceSection experiences={experienceData.experience} />

        {/* Back to top button */}
        <div className="mt-12 flex justify-center">
          <BackToTop />
        </div>
      </main>
      <Footer />
    </div>
  );
}

