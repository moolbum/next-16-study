"use client";

import { Input as InputComponent } from "@/components/ui/input";
import { InputProps } from "./Input.type";

export const Input = ({
  placeholder = "placeholder",
  ...props
}: InputProps) => {
  return <InputComponent placeholder={placeholder} {...props} />;
};
