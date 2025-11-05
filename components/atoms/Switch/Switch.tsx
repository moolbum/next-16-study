import { Switch as SwitchComponent } from '@/components/ui/switch';
import { SwitchProps } from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

export const Switch = ({ children, className, ...props }: SwitchProps) => {
	return (
		<SwitchComponent className={cn('w-8!', className)} {...props}>
			{children}
		</SwitchComponent>
	);
};
