import { InlineBoldText } from "../InlineBoldText";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  avatar?: string;
}

export const HeroSection = ({ title, description, avatar }: HeroSectionProps) => {
  // Split description by double newlines to create paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim().length > 0);
  
  return (
    <section className="mb-12 space-y-4">
      <h1 className="text-[40px] font-regular text-black leading-tight font-heading">{title}</h1>
      {avatar && (
        <div className="flex my-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt="Profile avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        </div>
      )}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            <InlineBoldText text={paragraph.trim()} />
          </p>
        ))}
      </div>
    </section>
  );
};

