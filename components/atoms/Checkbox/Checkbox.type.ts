import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
	children?: React.ReactNode;
	className?: string;
};
