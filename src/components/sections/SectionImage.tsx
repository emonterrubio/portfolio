import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  padding?: boolean;
  width?: string;
  height?: string;
}

export const SectionImage = ({ 
  src, 
  alt, 
  caption, 
  className = "", 
  padding = false,
  width,
  height 
}: SectionImageProps) => {
  const imageStyle: React.CSSProperties = {};
  if (width) imageStyle.width = width;
  if (height) imageStyle.height = height;
  
  return (
    <div className={`space-y-2 mt-6 ${className}`} style={width ? { width } : undefined}>
      <div className={`relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center ${padding ? 'p-6' : ''}`}>
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={imageStyle}
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-600 text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};
