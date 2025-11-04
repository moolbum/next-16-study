"use client";

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
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupComponent
      {...props}
      className={cn(
        "flex flex-col gap-3",
        direction === "horizontal" ? "flex-row" : "flex-col",
        props?.className || ""
      )}
    >
      {options.map((item) => (
        <div key={item.value} className="flex items-center gap-2">
          <RadioGroupItem {...item} value={item.value} id={item.value} />
          <Label htmlFor={item.value} {...item.labelProps}>
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroupComponent>
  );
};
