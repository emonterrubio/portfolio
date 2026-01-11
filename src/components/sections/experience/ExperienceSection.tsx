"use client";

import Image from "next/image";
import { InlineBoldText } from "../InlineBoldText";
import type { Experience } from "@/data/experience";
import { motion } from "framer-motion";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const experienceVariants = {
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

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <motion.section 
      className="mb-12"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.h2 
        className="text-[40px] font-semibold text-black mb-6 pb-2 font-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h2>
      
      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <motion.div 
            key={expIndex} 
            className="flex flex-col md:flex-row gap-4"
            variants={experienceVariants}
          >
            {/* Company Logo */}
            <div className="flex-shrink-0">
              {exp.logo ? (
                <Image 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  width={exp.logoSize || 44}
                  height={exp.logoSize || 44}
                  className="rounded object-contain"
                  style={{ width: exp.logoSize || 44, height: exp.logoSize || 44 }}
                />
              ) : (
                <div 
                  className="bg-gray-300 rounded"
                  style={{ width: exp.logoSize || 44, height: exp.logoSize || 44 }}
                ></div>
              )}
            </div>
            
            {/* Company and Positions */}
            <div className="flex-1">
              {/* Company Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black">{exp.company}</h3>
                <p className="text-base text-black">{exp.companyPeriod}</p>
                {exp.location && (
                  <p className="text-base text-gray-800">{exp.location}</p>
                )}
              </div>
              
              {/* Positions within the company */}
              <div className="space-y-6 md:border-l-2 md:border-gray-200 md:pl-4">
                {exp.positions.map((position, posIndex) => (
                  <div key={posIndex}>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-black">{position.title}</h4>
                      <p className="text-base text-gray-800">{position.period}</p>
                    </div>
                    
                    <div className="space-y-2 text-base text-black">
                      {position.description.map((item, descIndex) => (
                        <p key={descIndex}>
                          <InlineBoldText text={item} />
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

