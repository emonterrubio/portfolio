import { InlineBoldText } from "./InlineBoldText";

interface CalloutBoxProps {
  question?: string;
  answer: string;
  icon?: React.ReactNode;
  className?: string;
  withBackground?: boolean;
}

export const CalloutBox = ({
  question,
  answer,
  icon,
  className = "",
  withBackground = false,
}: CalloutBoxProps) => {
  const backgroundClasses = withBackground
    ? "p-4 bg-white border border-gray-200 rounded-lg"
    : "";
  
  return (
    <div className={`flex items-start items-center gap-3 px-6 py-4 ${backgroundClasses} ${className}`}>
      {icon && <div className="flex-shrink-0 text-blue-600">{icon}</div>}
      <p className="text-base text-black">
        {question && <span className="font-semibold">{question} </span>}
        <InlineBoldText text={answer} />
      </p>
    </div>
  );
};

