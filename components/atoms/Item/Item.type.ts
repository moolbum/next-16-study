import { Item as ItemComponent } from '@/components/ui/item';
import React from 'react';

export type ItemProps = React.ComponentProps<typeof ItemComponent> & {
	children?: React.ReactNode;
	media?: React.ReactNode;
	mediaVariant?: 'default' | 'icon' | 'image';
	title?: string;
	description?: string;
	actions?: React.ReactNode;
	header?: React.ReactNode;
	footer?: React.ReactNode;
};
