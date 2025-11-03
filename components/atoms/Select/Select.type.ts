import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

// 옵션 아이템 타입
export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

// 옵션 그룹 타입
export type SelectOptionGroup = {
  label?: string;
  options: SelectOption[];
};

// Select 컴포넌트 Props 타입
export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  // 옵션 배열 (간편 사용)
  options?: SelectOption[] | SelectOptionGroup[];
  // 플레이스홀더
  placeholder?: string;
  // 트리거 너비 (클래스명)
  triggerClassName?: string;
  // 콘텐츠 너비/위치 조정
  contentClassName?: string;
  // children으로 직접 SelectItem을 넣을 수도 있음
  children?: React.ReactNode;
  // 트리거 크기
  size?: "sm" | "default";
};
