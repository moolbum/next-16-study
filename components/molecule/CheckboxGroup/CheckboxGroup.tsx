"use client";

import { useId } from "react";
import { Label, Checkbox } from "@/components/atoms";
import { CheckboxGroupProps } from "./CheckboxGroup.type";
import { cn } from "@/lib/utils";

export const CheckboxGroup = ({
  options,
  direction = "horizontal",
  className,
  value = [],
  onValueChange,
  ...props
}: CheckboxGroupProps) => {
  const groupId = useId();

  const handleCheckedChange = (itemValue: string, checked: boolean) => {
    if (!onValueChange) return;

    const currentValue = value || [];
    if (checked) {
      // 체크박스가 선택되면 배열에 추가
      onValueChange([...currentValue, itemValue]);
    } else {
      // 체크박스가 해제되면 배열에서 제거
      onValueChange(currentValue.filter((v) => v !== itemValue));
    }
  };

  return (
    <div
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
          ...checkboxProps
        } = item;
        const isChecked = (value || []).includes(itemValue);
        const isDisabled = disabled === true;
        const uniqueId = `${groupId}-${itemValue}`;

        return (
          <div key={itemValue} className="flex items-center gap-2">
            <Checkbox
              {...checkboxProps}
              id={uniqueId}
              checked={isChecked}
              disabled={isDisabled}
              onCheckedChange={(checked) =>
                handleCheckedChange(itemValue, checked === true)
              }
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
    </div>
  );
};
