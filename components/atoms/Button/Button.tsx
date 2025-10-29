"use client";
import { Button as ButtonComponent } from "@/components/ui/button";
import { ButtonProps } from "./Button.type";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
