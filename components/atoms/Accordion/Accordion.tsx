"use client";

import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionProps } from "./Accordion.type";

export const Accordion = ({
  items,
  className = "w-full",
  ...props
}: AccordionProps) => {
  return (
    <AccordionComponent className={className} {...props}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionComponent>
  );
};
