"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComboboxProps } from "./Combobox.type";
import { PLACEHOLDERS, STRINGS } from "@/constants";

export const Combobox = ({
  options,
  value,
  onValueChange,
  placeholder = PLACEHOLDERS.COMBOBOX,
  searchPlaceholder = PLACEHOLDERS.SEARCH,
  emptyMessage = STRINGS.NO_OPTION_FOUND,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  closeOnSelect = true,
  buttonClassName,
  contentClassName,
  children,
  ...props
}: ComboboxProps) => {
  // 내부 상태 관리 (제어되지 않는 경우)
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(
    undefined
  );
  const triggerRef = useRef<HTMLButtonElement>(null);

  // 제어/비제어 모드 처리
  const open = controlledOpen ?? internalOpen;
  const onOpenChange = controlledOnOpenChange ?? setInternalOpen;
  const currentValue = value ?? internalValue;

  // trigger의 너비 측정
  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  // 값 변경 핸들러
  const handleValueChange = (newValue: string) => {
    const finalValue = newValue === currentValue ? "" : newValue;

    if (value === undefined) {
      setInternalValue(finalValue);
    }
    onValueChange?.(finalValue);

    if (closeOnSelect) {
      onOpenChange(false);
    }
  };

  // 선택된 옵션의 라벨 찾기
  const selectedLabel = options.find(
    (option) => option.value === currentValue
  )?.label;

  // children이 제공되면 완전한 커스터마이징 모드
  if (children) {
    return (
      <Popover open={open} onOpenChange={onOpenChange} {...props}>
        {children}
      </Popover>
    );
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange} {...props}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", buttonClassName)}
        >
          {selectedLabel || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn("p-0", contentClassName)}
        style={{
          width: triggerWidth ? `${triggerWidth}px` : undefined,
        }}
      >
        <Command>
          <CommandInput
            placeholder={searchPlaceholder}
            className="h-9 w-full"
          />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleValueChange}
                  disabled={option.disabled}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentValue === option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
