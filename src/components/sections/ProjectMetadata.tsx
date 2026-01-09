import Image from "next/image";

interface ProjectMetadataProps {
  logo?: string;
  role: string;
  duration?: string;
  platform?: string;
  tools?: string;
}

export const ProjectMetadata = ({
  logo,
  role,
  duration,
  platform,
  tools,
}: ProjectMetadataProps) => {
  return (
    <div className="w-full py-6 px-6  bg-white border border-gray-200 rounded-md">
      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 relative overflow-hidden">
            {logo ? (
              <Image
                src={logo}
                alt="Company logo"
                width={48}
                height={48}
                className="object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-blue-600" />
            )}
          </div>
        </div>
        
        {/* Metadata Container */}
        <div className="flex-1 flex flex-col gap-4 md:gap-0">
          {/* Top Row: Role, Duration, Platform (3 columns on mobile, 4 on desktop) */}
          <div className="grid grid-cols-3 sm:flex sm:flex-row gap-4 sm:gap-10">
            <div className="flex flex-col gap-0">
              <div className="text-black text-lg md:text-xl font-semibold font-heading">
                Role
              </div>
              <div className="text-black text-base md:text-base font-normal">
                {role}
              </div>
            </div>
            {duration && (
              <div className="flex flex-col gap-0">
                <div className="text-black text-lg md:text-xl font-semibold font-heading">
                  Duration
                </div>
                <div className="text-black text-sm sm:text-base font-normal">
                  {duration}
                </div>
              </div>
            )}
            {platform && (
              <div className="flex flex-col gap-0">
                <div className="text-black text-lg md:text-xl font-semibold font-heading">
                  Platform
                </div>
                <div className="text-black text-sm sm:text-base font-normal">
                  {platform}
                </div>
              </div>
            )}
            {tools && (
              <div className="hidden md:flex flex-col gap-0">
                <div className="text-black text-lg md:text-xl font-semibold font-heading">
                  Tools
                </div>
                <div className="text-black text-sm sm:text-base font-normal">
                  {tools}
                </div>
              </div>
            )}
          </div>
          
          {/* Tools Row (Mobile only - full width below) */}
          {tools && (
            <div className="flex md:hidden flex-col gap-0">
              <div className="text-black text-lg sm:text-xl font-semibold font-heading">
                Tools
              </div>
              <div className="text-black text-sm sm:text-base font-normal">
                {tools}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

