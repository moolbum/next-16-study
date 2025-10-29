import React from "react";

export type DialogProps = React.ComponentProps<"div"> & {
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
};
