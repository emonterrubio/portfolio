import Image from "next/image";
import type { Certification } from "@/data/experience";

interface CertificationsSectionProps {
  certifications: Certification[];
  columns?: 2 | 3;
}

export const CertificationsSection = ({ certifications, columns = 2 }: CertificationsSectionProps) => {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-black mb-6 pb-2 font-heading">Licenses & Certifications</h2>
      
      <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            {/* Organization Logo */}
            <div className="flex items-center gap-4 mb-4">
              {cert.logo ? (
                <Image 
                  src={cert.logo} 
                  alt={`${cert.organization} logo`}
                  width={cert.logoSize || 44}
                  height={cert.logoSize || 44}
                  className="rounded object-contain"
                  style={{ width: cert.logoSize || 44, height: cert.logoSize || 44 }}
                />
              ) : (
                <div 
                  className="bg-gray-300 rounded"
                  style={{ width: cert.logoSize || 44, height: cert.logoSize || 44 }}
                ></div>
              )}
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900">{cert.organization}</p>
                {cert.description && (
                  <p className="text-xs text-gray-500">{cert.description}</p>
                )}
              </div>
            </div>
            
            {/* Certification Details */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{cert.issued}</p>
              {cert.credentialId && (
                <p className="text-xs text-gray-400">Credential ID: {cert.credentialId}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

