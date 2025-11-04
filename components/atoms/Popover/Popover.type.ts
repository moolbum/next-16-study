import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type PopoverProps = React.ComponentProps<typeof Popover> & {
  trigger?: React.ReactNode;
  triggerProps?: React.ComponentProps<typeof PopoverTrigger>;
  content?: React.ReactNode;
  contentProps?: React.ComponentProps<typeof PopoverContent>;
};
