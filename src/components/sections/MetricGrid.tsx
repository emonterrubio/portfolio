import React from "react";
import { MetricCard } from "./MetricCard";

interface MetricGridProps {
  metrics: Array<{ value: string; label: string | string[] }>;
  columns?: 2 | 3 | 4 | 5;
}

export const MetricGrid = ({ metrics, columns = 5 }: MetricGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 mt-2`}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} value={metric.value} label={metric.label} />
      ))}
    </div>
  );
};
