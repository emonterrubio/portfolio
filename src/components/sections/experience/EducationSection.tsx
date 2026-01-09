import Image from "next/image";
import type { Education } from "@/data/experience";

interface EducationSectionProps {
  education: Education[];
  columns?: 2 | 3;
}

export const EducationSection = ({ education, columns = 2 }: EducationSectionProps) => {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-black mb-6 pb-2 font-heading">Education</h2>
      
      <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
        {education.map((edu, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            {/* Institution Logo */}
            <div className="flex items-center gap-4 mb-4">
              {edu.logo ? (
                <Image 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`}
                  width={edu.logoSize || 44}
                  height={edu.logoSize || 44}
                  className="rounded object-contain"
                  style={{ width: edu.logoSize || 44, height: edu.logoSize || 44 }}
                />
              ) : (
                <div 
                  className="bg-gray-300 rounded"
                  style={{ width: edu.logoSize || 44, height: edu.logoSize || 44 }}
                ></div>
              )}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{edu.institution}</p>
                {edu.description && (
                  <p className="text-sm text-gray-500">{edu.description}</p>
                )}
              </div>
            </div>
            
            {/* Education Details */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">{edu.degree}</h3>
              <p className="text-sm text-gray-500">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

