interface ProjectSectionProps {
  title: string;
  subheader?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const ProjectSection = ({
  title,
  subheader,
  children,
  className = "",
  contentClassName = "",
}: ProjectSectionProps) => {
  return (
    <section className={`space-y-2 ${className}`}>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-blue-600 font-heading">{title}</h2>
        {subheader && (
          <h3 className="text-4xl font-bold text-black pb-2 font-heading">{subheader}</h3>
        )}
      </div>
      <div className={`text-base text-black leading-normal space-y-6 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};

