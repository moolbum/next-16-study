import React from 'react';

import { Command as CommandComponent } from '@/components/ui/command';
import { Popover as PopoverComponent } from '@/components/ui/popover';

export type ComboboxOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

export type ComboboxProps = {
	/** 선택 가능한 옵션 배열 */
	options: ComboboxOption[];
	/** 선택된 값 */
	value?: string;
	/** 값 변경 핸들러 */
	onValueChange?: (value: string) => void;
	/** 버튼에 표시할 플레이스홀더 텍스트 */
	placeholder?: string;
	/** 버튼 비활성화 여부 */
	disabled?: boolean;
	/** CommandInput의 placeholder 텍스트 */
	searchPlaceholder?: string;
	/** 검색 결과가 없을 때 표시할 메시지 */
	emptyMessage?: string;
	/** Popover의 open 상태 (제어 컴포넌트로 사용할 때) */
	open?: boolean;
	/** Popover의 open 상태 변경 핸들러 */
	onOpenChange?: (open: boolean) => void;
	/** 옵션 선택 시 자동으로 Popover를 닫을지 여부 */
	closeOnSelect?: boolean;
	/** 완전한 커스터마이징을 위한 children */
	children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof PopoverComponent>, 'children' | 'open' | 'onOpenChange'> &
	Omit<React.ComponentProps<typeof CommandComponent>, 'children'> & {
		/** 버튼의 className */
		buttonClassName?: string;
		/** PopoverContent의 className */
		contentClassName?: string;
	};
