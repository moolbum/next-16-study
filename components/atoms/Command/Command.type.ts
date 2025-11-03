import { Command as CommandComponent } from "@/components/ui/command";

export type CommandItemType = {
  label: string;
  value?: string;
  disabled?: boolean;
  shortcut?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
};

export type CommandGroupType = {
  heading?: string;
  items: CommandItemType[];
};

export type CommandProps = {
  /** Command 컴포넌트의 children을 직접 제어하고 싶을 때 사용 */
  children?: React.ReactNode;
  /** CommandInput의 placeholder 텍스트 */
  placeholder?: string;
  /** 검색 결과가 없을 때 표시할 메시지 */
  emptyMessage?: string;
  /** Command 그룹 배열 (자동 렌더링 모드) */
  groups?: CommandGroupType[];
  /** Command 아이템 배열 (단일 그룹 자동 렌더링 모드) */
  items?: CommandItemType[];
} & React.ComponentProps<typeof CommandComponent>;
