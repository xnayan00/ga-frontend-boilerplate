import type { ReactNode } from "react";

export interface ButtonGroupItem {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface ButtonGroupProps {
  items: ButtonGroupItem[];
  defaultValue?: string | string[];
  onSelectionChange?: (selected: string | string[]) => void;
  variant?: "default" | "icon";
  multiple?: boolean;
  mandatory?: boolean;
  className?: string;
}
