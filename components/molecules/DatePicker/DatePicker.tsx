'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, Calendar } from '@/components/atoms';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DatePickerProps } from './DatePicker.type';

export const DatePicker = ({
	date,
	onSelect,
	placeholder = 'Select date',
	formatDate = (date) => {
		return date ? date.toLocaleDateString() : placeholder;
	},
	open: controlledOpen,
	onOpenChange: controlledOnOpenChange,
	closeOnSelect = true,
	icon = <ChevronDownIcon />,
	children,
	// Popover props
	modal,
	// PopoverContent props
	align = 'start',
	alignOffset,
	side,
	sideOffset,
	// Calendar props
	captionLayout = 'dropdown',
	// Button props
	buttonClassName,
	variant = 'outline',
	size,
	disabled,
	...props
}: DatePickerProps) => {
	// 내부 상태 관리 (제어되지 않는 경우)
	const [internalOpen, setInternalOpen] = useState(false);
	// 제어/비제어 모드 처리
	const open = controlledOpen ?? internalOpen;
	const onOpenChange = controlledOnOpenChange ?? setInternalOpen;

	// 날짜 선택 핸들러
	// Calendar의 onSelect는 여러 타입을 받을 수 있으므로, Date만 필터링
	const handleSelect = (selected: unknown) => {
		// selected가 Date인 경우만 onSelect 호출
		const date = selected instanceof Date ? selected : undefined;
		onSelect?.(date);
		if (closeOnSelect && date) {
			onOpenChange(false);
		}
	};

	// children이 제공되면 완전한 커스터마이징 모드
	if (children) {
		return (
			<Popover open={open} onOpenChange={onOpenChange} modal={modal} {...props}>
				{children}
			</Popover>
		);
	}

	// Calendar props 추출
	const { className: calendarClassName, ...calendarProps } = props as React.ComponentProps<
		typeof Calendar
	>;

	return (
		<div className={cn('flex flex-col gap-3 w-full', disabled && 'cursor-not-allowed')}>
			<Popover open={open} onOpenChange={onOpenChange} modal={modal} {...props}>
				<PopoverTrigger asChild>
					<Button
						variant={variant}
						size={size}
						disabled={disabled}
						className={cn('justify-between font-normal', buttonClassName)}
					>
						{formatDate(date)}
						{icon}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-auto overflow-hidden p-0"
					align={align}
					alignOffset={alignOffset}
					side={side}
					sideOffset={sideOffset}
				>
					<Calendar
						mode="single"
						{...({
							selected: date,
							captionLayout,
							onSelect: handleSelect,
							className: calendarClassName,
							...calendarProps,
						} as React.ComponentProps<typeof Calendar>)}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};
