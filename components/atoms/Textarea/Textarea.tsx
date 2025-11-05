'use client';

import { Textarea as TextareaComponent } from '@/components/ui/textarea';
import { TextareaProps } from './Textarea.type';

export const Textarea = ({ children, ...props }: TextareaProps) => {
	return (
		<TextareaComponent placeholder="placeholder" {...props}>
			{children}
		</TextareaComponent>
	);
};
