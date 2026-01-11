"use client";

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
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Section Functions
function AboutMeSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <HeroSection 
        title={aboutData.hero.title}
        description={aboutData.hero.description}
        avatar={aboutData.hero.avatar}
      />
    </motion.div>
  );
}

function SelectedImpactSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <ContentSection 
        title={aboutData.selectedImpact.title}
        columns={aboutData.selectedImpact.columns}
        numColumns={aboutData.selectedImpact.numColumns}
        renderAsList={true}
        bgColor={aboutData.selectedImpact.bgColor}
        textColor={aboutData.selectedImpact.textColor}
      />
    </motion.div>
  );
}

function SkillsSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <ContentSection 
        title={aboutData.skills.title}
        columns={aboutData.skills.columns}
        numColumns={aboutData.skills.numColumns}
        renderAsList={true}
        bgColor={aboutData.skills.bgColor}
        textColor={aboutData.skills.textColor}
      />
    </motion.div>
  );
}

function EducationSectionComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <EducationSection 
        education={experienceData.education} 
        columns={experienceData.educationColumns} 
      />
    </motion.div>
  );
}

function CertificationsSectionComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <CertificationsSection 
        certifications={experienceData.certifications} 
        columns={experienceData.certificationsColumns} 
      />
    </motion.div>
  );
}

function VolunteeringSectionComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <VolunteeringSection 
        volunteering={experienceData.volunteering} 
        columns={experienceData.volunteeringColumns} 
      />
    </motion.div>
  );
}

function ParagraphSection() {
  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        <InlineBoldText text={aboutData.paragraph.content} />
      </p>
    </motion.section>
  );
}

function TextSection({ content }: { content: string }) {
  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        <InlineBoldText text={content} />
      </p>
    </motion.section>
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

