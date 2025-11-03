import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import React from "react";

// DropdownMenuItem의 기존 타입을 활용하면서 자동 렌더링을 위한 확장
export type DropdownMenuItemType = Omit<
  React.ComponentProps<typeof DropdownMenuItem>,
  "children" | "inset"
> & {
  label: string;
  value?: string;
  shortcut?: string;
  icon?: React.ReactNode;
  separator?: boolean;
  onClick?: React.ComponentProps<typeof DropdownMenuItem>["onSelect"];
};

// DropdownMenuLabel의 기존 타입을 활용
export type DropdownMenuGroupType = {
  label?: React.ComponentProps<typeof DropdownMenuLabel>["children"];
  items: DropdownMenuItemType[];
  separator?: boolean;
};

export type DropdownMenuProps = {
  /** DropdownMenu의 children을 직접 제어하고 싶을 때 사용 */
  children?: React.ReactNode;
  /** 트리거 버튼의 레이블 (children이 없을 때만 사용) */
  triggerLabel?: string;
  /** 트리거 버튼의 커스텀 엘리먼트 */
  trigger?: React.ReactNode;
  /** DropdownMenu 아이템 배열 (단일 그룹 자동 렌더링 모드) */
  items?: DropdownMenuItemType[];
  /** DropdownMenu 그룹 배열 (다중 그룹 자동 렌더링 모드) */
  groups?: DropdownMenuGroupType[];
  /** 콘텐츠의 너비 */
  contentWidth?: string | number;
  /** 모달 모드 (false로 설정하면 Dialog와 함께 사용 가능) */
  modal?: boolean;
  /** 콘텐츠의 정렬 위치 */
  align?: React.ComponentProps<typeof DropdownMenuContent>["align"];
} & Omit<
  React.ComponentProps<typeof DropdownMenuComponent>,
  "children" | "modal"
> &
  Omit<
    React.ComponentProps<typeof DropdownMenuContent>,
    "className" | "children" | "align"
  >;
