import { InlineBoldText } from "./InlineBoldText";

interface DesignApproachCalloutProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const DesignApproachCallout = ({
  text,
  icon,
  className = "",
}: DesignApproachCalloutProps) => {
  return (
    <div className={`flex items-start gap-3 p-4 bg-gray-100 rounded-lg ${className}`}>
      {icon && <div className="flex-shrink-0 text-blue-600">{icon}</div>}
      <p className="text-base text-black">
        <InlineBoldText text={text} />
      </p>
    </div>
  );
};
