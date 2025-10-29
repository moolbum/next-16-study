import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & React.ComponentProps<"button">;
