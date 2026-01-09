import { InlineBoldText } from "../InlineBoldText";

interface AboutSectionProps {
  paragraphs: string[];
}

export const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  return (
    <section className="space-y-6 mb-12">
      <h2 className="text-2xl font-semibold text-black mb-4 pb-2 font-heading">About</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base text-gray-700 leading-relaxed">
          <InlineBoldText text={paragraph} />
        </p>
      ))}
    </section>
  );
};

