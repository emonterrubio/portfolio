import Image from "next/image";
import { InlineBoldText } from "../InlineBoldText";
import type { Experience } from "@/data/experience";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-[40px] font-semibold text-black mb-6 pb-2 font-heading">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="flex gap-4">
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
              <div className="space-y-6 border-l-2 border-gray-200 pl-4">
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
          </div>
        ))}
      </div>
    </section>
  );
};

