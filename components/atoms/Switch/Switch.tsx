import { Switch as SwitchComponent } from "@/components/ui/switch";
import { SwitchProps } from "@radix-ui/react-switch";

export const Switch = ({ children, ...props }: SwitchProps) => {
  return <SwitchComponent {...props}>{children}</SwitchComponent>;
};
