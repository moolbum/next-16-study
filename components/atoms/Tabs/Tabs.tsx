'use client';

import { Tabs as TabsComponent, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsProps } from './Tabs.type';

export const Tabs = ({ children, tabs, className: tabsListClassName, ...props }: TabsProps) => {
	// children이 있으면 그대로 렌더링 (완전한 커스터마이징)
	if (children) {
		return <TabsComponent {...props}>{children}</TabsComponent>;
	}

	// tabs 배열이 없으면 에러 또는 빈 상태 처리
	if (!tabs || tabs.length === 0) {
		return null;
	}

	return (
		<TabsComponent {...props}>
			<TabsList className={tabsListClassName}>
				{tabs.map((tab) => {
					const { value, label, icon, ...rest } = tab;
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { content, contentClassName, ...triggerProps } = rest;
					return (
						<TabsTrigger key={value} value={value} {...triggerProps}>
							{icon && icon}
							{label}
						</TabsTrigger>
					);
				})}
			</TabsList>
			{tabs.map((tab) => {
				const { value, content, contentClassName } = tab;
				return (
					<TabsContent key={value} value={value} className={contentClassName}>
						{content}
					</TabsContent>
				);
			})}
		</TabsComponent>
	);
};
