import { Label } from '@/components/atoms';
import { Checkbox } from '@/components/atoms/Checkbox/Checkbox';

export type CheckboxGroupProps = {
	value?: string[];
	onValueChange?: (value: string[]) => void;
	direction?: 'horizontal' | 'vertical';
	options: ({
		value: string;
		label: string | React.ReactNode;
		labelProps?: React.ComponentProps<typeof Label>;
	} & Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'label'>)[];
} & Omit<React.ComponentProps<'div'>, 'value' | 'onValueChange'>;
