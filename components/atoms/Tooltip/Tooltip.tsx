import {
	Tooltip as TooltipComponent,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import { TooltipProps } from './Tooltip.type';

export const Tooltip = ({ trigger, children, ...props }: TooltipProps) => {
	return (
		<TooltipComponent {...props}>
			<TooltipTrigger asChild>{trigger}</TooltipTrigger>
			<TooltipContent>{children}</TooltipContent>
		</TooltipComponent>
	);
};
