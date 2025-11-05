import { Label } from '@/components/atoms';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export type RadioGroupProps = {
	direction?: 'horizontal' | 'vertical';
	options: ({
		value: string;
		label: string | React.ReactNode;
		labelProps?: React.ComponentProps<typeof Label>;
	} & Omit<React.ComponentProps<typeof RadioGroupItem>, 'value' | 'label'>)[];
} & React.ComponentProps<typeof RadioGroup>;
