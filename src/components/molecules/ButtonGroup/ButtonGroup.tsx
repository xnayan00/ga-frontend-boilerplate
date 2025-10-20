import { useEffect, useState } from "react";
import type { ButtonGroupItem, ButtonGroupProps } from "./ButtonGroupTypes";
import { cn } from "@/lib/utils";

export default function ButtonGroup({
  items,
  defaultValue,
  onSelectionChange,
  variant = "default",
  multiple = false,
  mandatory = false,
  className,
}: ButtonGroupProps) {
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(
    defaultValue ?? (multiple ? [] : undefined)
  );

  useEffect(() => {
    if (mandatory && items.length > 0) {
      if (multiple) {
        if (!Array.isArray(internalValue) || internalValue.length === 0) {
          setInternalValue([items[0].value]);
        }
      } else if (internalValue === undefined) {
        setInternalValue(items[0].value);
      }
    }
  }, [items, mandatory, multiple, internalValue]);

  const handleSelect = (item: ButtonGroupItem) => {
    let newValue: string | string[] | undefined;

    if (multiple) {
      const currentValues = (internalValue as string[]) || [];
      if (currentValues.includes(item.value)) {
        newValue = currentValues.filter((v) => v !== item.value);
        if (mandatory && newValue.length === 0) {
          newValue = internalValue; // Prevent unselecting the last item if mandatory
        }
      } else {
        newValue = [...currentValues, item.value];
      }
    } else {
      if (mandatory && internalValue === item.value) {
        newValue = internalValue; // Prevent unselecting if mandatory
      } else {
        newValue = internalValue === item.value ? undefined : item.value;
      }
    }

    setInternalValue(newValue);
    if (onSelectionChange) {
      onSelectionChange(newValue || (multiple ? [] : ""));
    }
  };

  const isSelected = (item: ButtonGroupItem) => {
    if (multiple && Array.isArray(internalValue)) {
      return internalValue.includes(item.value);
    }
    return internalValue === item.value;
  };

  return (
    <div className={cn("flex items-center gap-2 rounded-md bg-dark p-1", className)}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleSelect(item)}
          className={cn(
            "flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
            {
              "bg-dark-400 text-dark-100": isSelected(item),
              "bg-transparent text-dark-300 hover:bg-dark-400/50": !isSelected(item),
              "h-10 w-10": variant === "icon",
            }
          )}
        >
          {variant === "icon" && item.icon}
          {variant === "default" && <span>{item.label}</span>}
        </button>
      ))}
    </div>
  );
}
