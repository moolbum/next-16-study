import React from 'react';
import {
	Tabs as TabsComponent,
	TabsContent as TabsContentComponent,
	TabsList as TabsListComponent,
	TabsTrigger as TabsTriggerComponent,
} from '@/components/ui/tabs';

export type TabItem = {
	value: string;
	label: string;
	content: React.ReactNode;
	icon?: React.ReactNode;
	contentClassName?: React.ComponentProps<typeof TabsContentComponent>['className'];
	disabled?: React.ComponentProps<typeof TabsTriggerComponent>['disabled'];
	className?: React.ComponentProps<typeof TabsTriggerComponent>['className'];
} & Omit<
	React.ComponentProps<typeof TabsTriggerComponent>,
	'value' | 'children' | 'disabled' | 'className' | 'content'
>;

export type TabsProps = React.ComponentProps<typeof TabsComponent> & {
	children?: React.ReactNode;
	tabs?: TabItem[];
} & Pick<React.ComponentProps<typeof TabsListComponent>, 'className'>;
