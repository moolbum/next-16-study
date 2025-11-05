'use client';

import {
	Card as CardComponent,
	CardAction as CardActionComponent,
	CardContent as CardContentComponent,
	CardDescription as CardDescriptionComponent,
	CardFooter as CardFooterComponent,
	CardHeader as CardHeaderComponent,
	CardTitle as CardTitleComponent,
} from '@/components/ui/card';
import { CardProps } from './Card.type';

export const Card = ({ children, title, description, action, footer, ...props }: CardProps) => {
	return (
		<CardComponent {...props}>
			{/* Header 영역  */}
			{(title || description || action) && (
				<CardHeaderComponent>
					{title && <CardTitleComponent>{title}</CardTitleComponent>}
					{description && <CardDescriptionComponent>{description}</CardDescriptionComponent>}
					{action && <CardActionComponent>{action}</CardActionComponent>}
				</CardHeaderComponent>
			)}

			{/* Content 영역 */}
			<CardContentComponent>{children}</CardContentComponent>

			{/* Footer 영역 - 기존 조건부 렌더링 */}
			{footer && <CardFooterComponent>{footer}</CardFooterComponent>}
		</CardComponent>
	);
};
