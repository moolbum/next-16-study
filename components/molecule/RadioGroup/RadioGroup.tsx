"use client";

import { useId } from "react";
import { Label } from "@/components/atoms";
import {
  RadioGroup as RadioGroupComponent,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { RadioGroupProps } from "./RadioGroup.type";
import { cn } from "@/lib/utils";

export const RadioGroup = ({
  options,
  direction = "horizontal",
  className,
  ...props
}: RadioGroupProps) => {
  const groupId = useId();

  return (
    <RadioGroupComponent
      {...props}
      className={cn(
        "flex flex-col gap-3",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
    >
      {options.map((item) => {
        const uniqueId = `${groupId}-${item.value}`;
        return (
          <div key={item.value} className="flex items-center gap-2">
            <RadioGroupItem {...item} value={item.value} id={uniqueId} />
            <Label htmlFor={uniqueId} {...item.labelProps}>
              {item.label}
            </Label>
          </div>
        );
      })}
    </RadioGroupComponent>
  );
};
