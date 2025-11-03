import {
  Popover as PopoverComponent,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverProps } from "./Popover.type";

export const Popover = ({ trigger, content, ...props }: PopoverProps) => {
  return (
    <PopoverComponent {...props}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </PopoverComponent>
  );
};
