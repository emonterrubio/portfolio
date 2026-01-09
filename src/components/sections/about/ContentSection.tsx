import { InlineBoldText } from "../InlineBoldText";

interface ContentSectionProps {
  title?: string;
  content?: string[];
  columns?: string[][];
  numColumns?: 1 | 2 | 3;
  renderAsList?: boolean;
  renderAsCards?: boolean;
  showTitle?: boolean;
  bgColor?: string;
  textColor?: string;
}

export const ContentSection = ({ 
  title, 
  content, 
  columns, 
  numColumns = 2, 
  renderAsList = false,
  renderAsCards = false,
  showTitle = true,
  bgColor = "bg-gray-200",
  textColor = "text-black"
}: ContentSectionProps) => {
  // If renderAsList is true, render as a bullet list with explicit columns
  if (renderAsList && columns) {
    // Determine grid columns based on numColumns
    const gridColsMap = {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3'
    };
    const gridCols = gridColsMap[numColumns];
    
    // Flatten all items for card rendering
    const allItems = columns.flat();
    
    return (
      <section className={`w-screen relative left-1/2 -translate-x-1/2 ${bgColor} py-12 mb-12`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
          {/* Title always at the top as a header */}
          {showTitle && title && (
            <h2 className={`text-3xl font-semibold ${textColor} font-heading mb-4`}>{title}</h2>
          )}
          
          {/* Render as cards */}
          {renderAsCards ? (
            <div className={`grid grid-cols-1 ${gridCols} gap-2`}>
              {allItems.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <p className={`text-lg ${textColor} leading-relaxed`}>
                    <InlineBoldText text={item} />
                  </p>
                </div>
              ))}
            </div>
          ) : (
            /* Render as bullet list */
            <div className={`grid grid-cols-1 ${gridCols} gap-x-8 items-start`}>
              {/* On mobile, flatten all items into a single list; on desktop, show columns */}
              <ul className="list-disc list-inside space-y-2 md:hidden">
                {allItems.map((item, itemIndex) => (
                  <li key={itemIndex} className={`text-lg ${textColor} leading-relaxed`}>
                    <InlineBoldText text={item} />
                  </li>
                ))}
              </ul>
              {/* Desktop: Render each column explicitly */}
              {columns.map((columnItems, columnIndex) => (
                <ul key={columnIndex} className="hidden md:block list-disc list-inside space-y-2">
                  {columnItems.map((item, itemIndex) => (
                    <li key={itemIndex} className={`text-lg ${textColor} leading-relaxed`}>
                      <InlineBoldText text={item} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
  
  // Flatten content array and split by \n\n to handle paragraph breaks
  if (!content) {
    return null;
  }
  
  const paragraphs = content
    .flatMap(item => item.split('\n\n'))
    .map(p => p.trim())
    .filter(p => p.length > 0);
  
  return (
    <section className="mb-12">
      {showTitle && title && (
        <h2 className="text-2xl font-semibold text-black mb-4 pb-2 font-heading">{title}</h2>
      )}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            <InlineBoldText text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
};

