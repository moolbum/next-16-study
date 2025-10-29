"use client";

import { Checkbox as CheckboxComponent } from "@/components/ui/checkbox";
import { CheckboxProps } from "./Checkbox.type";

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return <CheckboxComponent {...props}>{children}</CheckboxComponent>;
};
