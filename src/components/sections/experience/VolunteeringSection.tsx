import Image from "next/image";
import type { Volunteer } from "@/data/experience";

interface VolunteeringSectionProps {
  volunteering: Volunteer[];
  columns?: 2 | 3;
}

export const VolunteeringSection = ({ volunteering, columns = 2 }: VolunteeringSectionProps) => {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-black mb-6 pb-2 font-heading">Volunteering</h2>
      
      <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
        {volunteering.map((vol, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            {/* Organization Logo */}
            <div className="flex items-center gap-4 mb-4">
              {vol.logo ? (
                <Image 
                  src={vol.logo} 
                  alt={`${vol.organization} logo`}
                  width={vol.logoSize || 44}
                  height={vol.logoSize || 44}
                  className="rounded object-contain"
                  style={{ width: vol.logoSize || 44, height: vol.logoSize || 44 }}
                />
              ) : (
                <div 
                  className="bg-gray-300 rounded"
                  style={{ width: vol.logoSize || 44, height: vol.logoSize || 44 }}
                ></div>
              )}
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900">{vol.organization}</p>
              </div>
            </div>
            
            {/* Volunteer Details */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">{vol.role}</h3>
              <p className="text-sm text-gray-500 mb-3">{vol.period}</p>
              <p className="text-sm text-gray-700">{vol.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

