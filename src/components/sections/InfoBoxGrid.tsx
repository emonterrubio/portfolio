import React from "react";
import { InfoBox } from "./InfoBox";

interface InfoBoxGridProps {
  boxes: Array<{
    title: string;
    items: string[];
    variant?: "default" | "blue" | "gray";
  }>;
  columns?: 1 | 2 | 3;
}

export const InfoBoxGrid = ({ boxes, columns = 2 }: InfoBoxGridProps) => {
  // Responsive grid: 1 column on mobile, scales to specified columns on large screens
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-x-4 gap-y-4`}>
      {boxes.map((box, index) => (
        <InfoBox
          key={index}
          title={box.title}
          items={box.items}
          variant={box.variant}
        />
      ))}
    </div>
  );
};
