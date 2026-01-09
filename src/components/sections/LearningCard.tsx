import React from "react";
import { InlineBoldText } from "./InlineBoldText";

interface LearningCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const LearningCard = ({ title, description, icon }: LearningCardProps) => {
  return (
    <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-lg">
      {icon && (
        <div className="flex-shrink-0 w-8 h-8 text-blue-500">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h5 className="text-base font-semibold text-gray-900 mb-2">
          <InlineBoldText text={title} />
        </h5>
        <p className="text-gray-700">
          <InlineBoldText text={description} />
        </p>
      </div>
    </div>
  );
};
