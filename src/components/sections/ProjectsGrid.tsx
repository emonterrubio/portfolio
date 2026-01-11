"use client";

import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "ea-omni-shopping",
    title: "EA Omni Shopping",
    role: "Design Lead",
    achievement: "Achieved 80% employee satisfaction with the new procurement experience",
    year: "2025",
    company: "Electronic Arts",
    imageSrc: "/images/ea-omni-shopping.png",
    imageAlt: "EA Omni Shopping project",
  },
  {
    slug: "ea-iris-data-insights",
    title: "EA Iris Data Insights",
    role: "Design Lead",
    achievement: "Improved data-driven insights for critical functions by 30%",
    year: "2023",
    company: "Electronic Arts",
    imageSrc: "/images/ea-iris-hero.png",
    imageAlt: "EA Iris Data Insights project",
  },
  {
    slug: "ea-player-support",
    title: "EA Player Support",
    role: "Design Lead",
    achievement: "Reduced player support friction and issue resolution times by 25%",
    year: "2022",
    company: "Electronic Arts",
    imageSrc: "/images/ea-player-support.jpg",
    imageAlt: "EA Player Support project",
  },
  {
    slug: "google-one-benefits",
    title: "Google One Benefits",
    role: "Design Lead",
    achievement: "Increased engagement rate with new cards and grouped categories by 10%",
    year: "2021",
    company: "Google",
    imageSrc: "/images/google-one-benefits.jpg",
    imageAlt: "Google One Benefits project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
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

export const ProjectsGrid = () => {
  return (
    <motion.section 
      className="w-full max-w-6xl mx-auto py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

