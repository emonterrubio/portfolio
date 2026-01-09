import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { HeroSection } from "@/components/sections/about/HeroSection";
import { ContentSection } from "@/components/sections/about/ContentSection";
import { EducationSection } from "@/components/sections/experience/EducationSection";
import { CertificationsSection } from "@/components/sections/experience/CertificationsSection";
import { VolunteeringSection } from "@/components/sections/experience/VolunteeringSection";
import { InlineBoldText } from "@/components/sections/InlineBoldText";
import { aboutData } from "@/data/about";
import { experienceData } from "@/data/experience";

// Section Functions
function AboutMeSection() {
  return (
    <HeroSection 
      title={aboutData.hero.title}
      description={aboutData.hero.description}
    />
  );
}

function SelectedImpactSection() {
  return (
    <ContentSection 
      title={aboutData.selectedImpact.title}
      columns={aboutData.selectedImpact.columns}
      numColumns={aboutData.selectedImpact.numColumns}
      renderAsList={true}
      bgColor={aboutData.selectedImpact.bgColor}
      textColor={aboutData.selectedImpact.textColor}
    />
  );
}

function SkillsSection() {
  return (
    <ContentSection 
      title={aboutData.skills.title}
      columns={aboutData.skills.columns}
      numColumns={aboutData.skills.numColumns}
      renderAsList={true}
      bgColor={aboutData.skills.bgColor}
      textColor={aboutData.skills.textColor}
    />
  );
}

function EducationSectionComponent() {
  return (
    <EducationSection 
      education={experienceData.education} 
      columns={experienceData.educationColumns} 
    />
  );
}

function CertificationsSectionComponent() {
  return (
    <CertificationsSection 
      certifications={experienceData.certifications} 
      columns={experienceData.certificationsColumns} 
    />
  );
}

function VolunteeringSectionComponent() {
  return (
    <VolunteeringSection 
      volunteering={experienceData.volunteering} 
      columns={experienceData.volunteeringColumns} 
    />
  );
}

function ParagraphSection() {
  return (
    <section className="mb-12">
      <p className="text-lg text-gray-700 leading-relaxed">
        <InlineBoldText text={aboutData.paragraph.content} />
      </p>
    </section>
  );
}

function TextSection({ content }: { content: string }) {
  return (
    <section className="mb-12">
      <p className="text-lg text-gray-700 leading-relaxed">
        <InlineBoldText text={content} />
      </p>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-8">
        {aboutData.pageSections.map((section, index) => {
          switch (section.type) {
            case 'aboutMe':
              return <AboutMeSection key={index} />;
            case 'selectedImpact':
              return <SelectedImpactSection key={index} />;
            case 'paragraph':
              return <ParagraphSection key={index} />;
            case 'skills':
              return <SkillsSection key={index} />;
            case 'education':
              return <EducationSectionComponent key={index} />;
            case 'certifications':
              return <CertificationsSectionComponent key={index} />;
            case 'volunteering':
              return <VolunteeringSectionComponent key={index} />;
            case 'text':
              return <TextSection key={index} content={section.content || ''} />;
            default:
              return null;
          }
        })}
        
        {/* Back to top button */}
        <div className="mt-12 flex justify-center">
          <BackToTop />
        </div>
      </main>
      <Footer />
    </div>
  );
}

