import type { IconProps } from "./IconTypes";

const iconSizes = {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "80px",
};

export default function Icon({ name, color, size }: IconProps) {
  return (
    <i
      className={`fi fi-rs-${name} flex items-center justify-center text-${color} text-[${iconSizes[size]}]`}
    />
  );
}
