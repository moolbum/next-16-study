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
        const {
          value: itemValue,
          label,
          labelProps,
          disabled,
          ...radioProps
        } = item;
        const isDisabled = disabled === true;
        const uniqueId = `${groupId}-${itemValue}`;
        return (
          <div key={itemValue} className="flex items-center gap-2">
            <RadioGroupItem
              {...radioProps}
              value={itemValue}
              id={uniqueId}
              disabled={isDisabled}
            />
            <Label
              htmlFor={uniqueId}
              {...labelProps}
              className={cn(
                !isDisabled && "cursor-pointer",
                labelProps?.className
              )}
            >
              {label}
            </Label>
          </div>
        );
      })}
    </RadioGroupComponent>
  );
};
