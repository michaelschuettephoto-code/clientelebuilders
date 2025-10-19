import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PostImageProps {
  src: string | null | undefined;
  alt: string;
  variant: "card" | "hero";
  className?: string;
}

export function PostImage({ src, alt, variant, className }: PostImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const placeholderSrc = variant === "card" 
    ? "/placeholders/card-placeholder.jpg"
    : "/placeholders/hero-placeholder.jpg";

  const aspectRatio = variant === "card" ? 3 / 2 : 16 / 9;

  const imageSrc = !src || hasError ? placeholderSrc : src;

  return (
    <AspectRatio ratio={aspectRatio} className={cn("overflow-hidden", className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={imageSrc}
        alt={hasError || !src ? `${alt} - placeholder shown` : alt}
        aria-label={hasError || !src ? "image unavailable – placeholder shown" : undefined}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </AspectRatio>
  );
}
