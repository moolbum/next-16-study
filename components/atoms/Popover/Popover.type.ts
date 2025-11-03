import React from "react";
import { Popover as PopoverComponent } from "@/components/ui/popover";

export type PopoverProps = React.ComponentProps<typeof PopoverComponent> & {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
};
