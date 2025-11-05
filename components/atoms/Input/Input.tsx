'use client';

import { cn } from '@/lib/utils';

import { Input as InputComponent } from '@/components/ui/input';
import { InputProps } from './Input.type';

export const Input = ({ placeholder = 'placeholder', disabled, ...props }: InputProps) => {
	return (
		<div className={cn(disabled && 'cursor-not-allowed', 'w-full')}>
			<InputComponent placeholder={placeholder} disabled={disabled} {...props} />
		</div>
	);
};
