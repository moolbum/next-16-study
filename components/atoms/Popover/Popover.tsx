import {
	Popover as PopoverComponent,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { PopoverProps } from './Popover.type';

export const Popover = ({
	trigger,
	triggerProps,
	content,
	contentProps,
	...props
}: PopoverProps) => {
	return (
		<PopoverComponent {...props}>
			<PopoverTrigger asChild {...triggerProps}>
				{trigger}
			</PopoverTrigger>
			<PopoverContent {...contentProps}>{content}</PopoverContent>
		</PopoverComponent>
	);
};
