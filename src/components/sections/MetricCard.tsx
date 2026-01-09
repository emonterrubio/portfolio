interface MetricCardProps {
  value: string;
  label: string | string[];
}

export const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className="flex flex-col items-left py-4 px-5 bg-white border border-gray-200 rounded-lg">
      <div className="text-3xl font-bold text-blue-600">{value}</div>
      {Array.isArray(label) ? (
        <ul className="text-base/5 text-gray-700 space-y-1">
          {label.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-base/5 text-gray-700">{label}</div>
      )}
    </div>
  );
};

