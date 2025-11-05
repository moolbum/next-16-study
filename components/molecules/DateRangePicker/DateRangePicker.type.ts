import React from "react";
import { DateRange } from "react-day-picker";
import { Popover, Button, Calendar } from "@/components/atoms";
import { PopoverContent as PopoverContentComponent } from "@/components/ui/popover";

export type DateRangePickerProps = {
  /** 선택된 날짜 범위 */
  date?: DateRange | undefined;
  /** 날짜 범위 변경 핸들러 (함수 또는 React setState 함수) */
  onSelect?: (date: DateRange | undefined) => void;
  /** 버튼에 표시할 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 날짜 범위 포맷팅 함수 (기본값: toLocaleDateString) */
  formatDate?: (date: DateRange | undefined) => string;
  /** Popover의 open 상태 (제어 컴포넌트로 사용할 때) */
  open?: boolean;
  /** Popover의 open 상태 변경 핸들러 */
  onOpenChange?: (open: boolean) => void;
  /** 날짜 범위 선택 시 자동으로 Popover를 닫을지 여부 */
  closeOnSelect?: boolean;
  /** 버튼 아이콘 (기본값: ChevronDownIcon) */
  icon?: React.ReactNode;
  /** 완전한 커스터마이징을 위한 children */
  children?: React.ReactNode;
} & Omit<
  React.ComponentProps<typeof Popover>,
  "children" | "open" | "onOpenChange" | "trigger" | "content" | "onSelect"
> &
  Omit<
    React.ComponentProps<typeof PopoverContentComponent>,
    "className" | "children" | "onSelect"
  > &
  Omit<
    React.ComponentProps<typeof Calendar>,
    "selected" | "onSelect" | "mode"
  > &
  Omit<
    React.ComponentProps<typeof Button>,
    "children" | "onClick" | "id" | "className" | "onSelect"
  > & {
    /** 버튼의 className */
    buttonClassName?: string;
    /** 라벨의 className */
    labelClassName?: string;
  };
