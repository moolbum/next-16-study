"use client";

import { Input as InputComponent } from "@/components/ui/input";
import { InputProps } from "./Input.type";

export const Input = ({ ...props }: InputProps) => {
  return <InputComponent {...props} />;
};
