import Image from "next/image";

interface ImageGridItem {
  src: string;
  alt: string;
  title: string;
  showSaveButton?: boolean;
}

interface ImageGridProps {
  items: ImageGridItem[];
  columns?: 2 | 3 | 4;
}

export const ImageGrid = ({ items, columns = 2 }: ImageGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold text-black">{item.title}</h4>
            {item.showSaveButton && (
              <button className="px-4 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                Save
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

