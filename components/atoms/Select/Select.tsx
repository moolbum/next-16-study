'use client';

import { cn } from '@/lib/utils';
import {
	Select as SelectComponent,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SelectOption, SelectOptionGroup, SelectProps } from './Select.type';

// 옵션 그룹인지 확인하는 함수
const isOptionGroup = (option: SelectOption | SelectOptionGroup): option is SelectOptionGroup => {
	return 'options' in option;
};

// 옵션 배열을 렌더링하는 함수
const renderOptions = (options: SelectOption[] | SelectOptionGroup[]): React.ReactNode => {
	// 첫 번째 아이템으로 그룹 여부 판단
	if (options.length > 0 && isOptionGroup(options[0])) {
		// 그룹 형태인 경우
		return (options as SelectOptionGroup[]).map((group, groupIndex) => (
			<SelectGroup key={groupIndex}>
				{group.label && <SelectLabel>{group.label}</SelectLabel>}
				{group.options.map((option) => (
					<SelectItem key={option.value} value={option.value} disabled={option.disabled}>
						{option.label}
					</SelectItem>
				))}
			</SelectGroup>
		));
	} else {
		// 단순 배열 형태인 경우
		return (options as SelectOption[]).map((option) => (
			<SelectItem key={option.value} value={option.value} disabled={option.disabled}>
				{option.label}
			</SelectItem>
		));
	}
};

export const Select = ({
	options,
	placeholder = 'Select an option',
	triggerClassName,
	contentClassName,
	size = 'default',
	children,
	...props
}: SelectProps) => {
	return (
		<SelectComponent {...props}>
			<SelectTrigger className={cn('w-full', triggerClassName)} size={size}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className={contentClassName}>
				{options ? renderOptions(options) : children}
			</SelectContent>
		</SelectComponent>
	);
};
