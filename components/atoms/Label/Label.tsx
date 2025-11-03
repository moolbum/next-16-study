import { Label as LabelComponent } from "@/components/ui/label";

export const Label = ({
  children,
  ...props
}: React.ComponentProps<typeof LabelComponent>) => {
  return <LabelComponent {...props}>{children}</LabelComponent>;
};
