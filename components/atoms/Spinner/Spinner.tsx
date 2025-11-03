import { Spinner as SpinnerComponent } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

export const Spinner = ({
  ...props
}: React.ComponentProps<typeof SpinnerComponent>) => {
  return (
    <SpinnerComponent className={cn("size-8", props.className)} {...props} />
  );
};
