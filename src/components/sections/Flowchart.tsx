interface FlowchartStage {
  label: string;
  action: string;
}

interface FlowchartProps {
  stages: FlowchartStage[];
  title?: string;
  className?: string;
}

export const Flowchart = ({ stages, title, className = "" }: FlowchartProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && <p className="text-base text-black mb-4">{title}</p>}
      <div className="w-4/5 flex items-center gap-2 p-6 rounded-lg bg-gray-100 shadow-sm">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-left text-left flex-1">
              <div className="text-sm font-bold text-gray-500 uppercase">
                {stage.label}
              </div>
              <div className="text-xl font-bold text-black leading-tight">
                {stage.action}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="mx-4 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

