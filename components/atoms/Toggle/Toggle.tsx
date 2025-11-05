'use client';

import { Toggle as ToggleComponent } from '@/components/ui/toggle';
// import { ToggleProps } from "@radix-ui/react-toggle";

export const Toggle = ({ children, ...props }: React.ComponentProps<typeof ToggleComponent>) => {
	return (
		<ToggleComponent
			aria-label="Toggle"
			size="sm"
			variant="default"
			className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
			{...props}
		>
			{children}
		</ToggleComponent>
	);
};
