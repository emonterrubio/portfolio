import { InlineBoldText } from "./InlineBoldText";

interface ExampleBoxProps {
  title: string;
  items: string[];
  conclusion?: string;
  className?: string;
}

export const ExampleBox = ({
  title,
  items,
  conclusion,
  className = "",
}: ExampleBoxProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <p className="text-base text-black">
        <InlineBoldText text={title} />
      </p>
      <ul className="list-disc list-inside space-y-0 ml-4">
        {items.map((item, index) => (
          <li key={index} className="text-base text-black">
            <InlineBoldText text={item} />
          </li>
        ))}
      </ul>
      {conclusion && (
        <p className="text-base text-black italic">
          <InlineBoldText text={conclusion} />
        </p>
      )}
    </div>
  );
};

