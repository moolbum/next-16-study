import React from 'react';

// 통합된 Card 컴포넌트 타입
export type CardProps = React.ComponentProps<'div'> & {
	children?: React.ReactNode;
	className?: string;
	title?: string;
	description?: string;
	action?: React.ReactNode;
	footer?: React.ReactNode;
};
