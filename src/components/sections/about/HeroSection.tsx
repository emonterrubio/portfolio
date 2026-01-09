import { InlineBoldText } from "../InlineBoldText";

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  // Split description by double newlines to create paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim().length > 0);
  
  return (
    <section className="mb-12 space-y-4">
      <h1 className="text-[40px] font-regular text-black leading-tight font-heading">{title}</h1>
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

