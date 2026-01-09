interface InlineBoldTextProps {
  text: string;
}

export const InlineBoldText = ({ text }: InlineBoldTextProps) => {
  // Parse **text** syntax and convert to bold (inline version without paragraph wrapping)
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          // Remove the ** markers and make it bold
          const boldText = part.slice(2, -2);
          return (
            <strong key={index} className="font-semibold">
              {boldText}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};
