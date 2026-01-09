import NextImage, { ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";

interface ImageProps extends Omit<NextImageProps, "fill"> {
  containerClassName?: string;
  useFill?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ containerClassName = "", useFill = false, className = "", ...props }, ref) => {
    if (useFill) {
      return (
        <div className={`relative ${containerClassName}`}>
          <NextImage
            {...props}
            fill
            className={className}
            ref={ref}
          />
        </div>
      );
    }

    return (
      <NextImage
        {...props}
        className={className}
        ref={ref}
      />
    );
  }
);

Image.displayName = "Image";

