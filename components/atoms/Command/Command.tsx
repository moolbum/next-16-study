'use client';

import React from 'react';

import {
	Command as CommandComponent,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command';
import { CommandProps } from './Command.type';

export const Command = ({
	children,
	placeholder = 'Type a command or search...',
	emptyMessage = 'No results found.',
	groups,
	items,
	...props
}: CommandProps) => {
	// children이 제공되면 완전한 커스터마이징 모드
	if (children) {
		return <CommandComponent {...props}>{children}</CommandComponent>;
	}

	// groups 또는 items를 사용하여 렌더링
	const groupsToRender = groups || (items ? [{ items }] : []);

	return (
		<CommandComponent {...props}>
			<CommandInput placeholder={placeholder} />
			<CommandList>
				<CommandEmpty>{emptyMessage}</CommandEmpty>
				{groupsToRender.map((group, groupIndex) => {
					const { heading, items, ...groupProps } = group;
					return (
						<React.Fragment key={groupIndex}>
							<CommandGroup heading={heading} {...groupProps}>
								{items.map((item, itemIndex) => {
									const { label, value, shortcut, icon, onSelect, ...itemProps } = item;
									return (
										<CommandItem
											key={value || itemIndex}
											value={value || label}
											onSelect={onSelect}
											{...itemProps}
										>
											{icon}
											<span>{label}</span>
											{shortcut && <CommandShortcut>{shortcut}</CommandShortcut>}
										</CommandItem>
									);
								})}
							</CommandGroup>
							{groupIndex < groupsToRender.length - 1 && <CommandSeparator />}
						</React.Fragment>
					);
				})}
			</CommandList>
		</CommandComponent>
	);
};
