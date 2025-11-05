import {
	Command as CommandComponent,
	CommandItem,
	CommandGroup,
	CommandInput,
} from '@/components/ui/command';
import React from 'react';

// CommandItem의 기존 타입을 활용하면서 자동 렌더링을 위한 확장
export type CommandItemType = Omit<React.ComponentProps<typeof CommandItem>, 'children'> & {
	label: string;
	value?: React.ComponentProps<typeof CommandItem>['value'];
	shortcut?: string;
	icon?: React.ReactNode;
	onSelect?: React.ComponentProps<typeof CommandItem>['onSelect'];
};

// CommandGroup의 기존 타입을 활용
export type CommandGroupType = Omit<
	React.ComponentProps<typeof CommandGroup>,
	'children' | 'heading'
> & {
	heading?: React.ComponentProps<typeof CommandGroup>['heading'];
	items: CommandItemType[];
};

export type CommandProps = {
	/** Command 컴포넌트의 children을 직접 제어하고 싶을 때 사용 */
	children?: React.ReactNode;
	/** CommandInput의 placeholder 텍스트 */
	placeholder?: React.ComponentProps<typeof CommandInput>['placeholder'];
	/** 검색 결과가 없을 때 표시할 메시지 */
	emptyMessage?: string;
	/** Command 그룹 배열 (자동 렌더링 모드) */
	groups?: CommandGroupType[];
	/** Command 아이템 배열 (단일 그룹 자동 렌더링 모드) */
	items?: CommandItemType[];
} & React.ComponentProps<typeof CommandComponent>;
