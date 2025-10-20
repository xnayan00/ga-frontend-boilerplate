import { useState } from "react";
import type { AvatarProps } from "./AvatarType";

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-base",
  xl: "h-24 w-24 text-xl",
};

function Avatar({ src, alt, size = "md", fallback, className = "" }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  function handleImageError(): void {
    setImageError(true);
  }

  function getInitials(name: string): string {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  const shouldShowFallback = !src || imageError;
  const displayFallback = fallback || getInitials(alt);

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary font-semibold text-primary-foreground transition-all duration-300 hover:shadow-elegant ${sizeClasses[size]} ${className}`}
    >
      {shouldShowFallback ? (
        <span>{displayFallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default Avatar;
