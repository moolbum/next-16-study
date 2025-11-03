import React from "react";
import { Accordion as AccordionComponent } from "@/components/ui/accordion";

export type AccordionItemType = {
  value: string;
  trigger: string | React.ReactNode;
  content: React.ReactNode;
};

export type AccordionProps = React.ComponentProps<typeof AccordionComponent> & {
  items: AccordionItemType[];
};
