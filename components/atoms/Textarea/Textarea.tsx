"use client";

import { Textarea as TextareaComponent } from "@/components/ui/textarea";

export const Textarea = ({
  children,
  ...props
}: React.ComponentProps<typeof TextareaComponent>) => {
  return (
    <TextareaComponent placeholder="placeholder" {...props}>
      {children}
    </TextareaComponent>
  );
};
