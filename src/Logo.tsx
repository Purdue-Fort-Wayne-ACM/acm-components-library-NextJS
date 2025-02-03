import Image from "next/image";
import { cn } from "./lib/utils";// Ensure utility for class merging

interface CustomImageProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 50, height = 50, className }: CustomImageProps) {
  return (
    <Image
      src="/acmlogo_white.svg"
      width={width}
      height={height}
      alt="Custom Icon"
      className={cn("inline-block", className)}
    />
  );
}
