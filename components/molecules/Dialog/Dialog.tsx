'use client';
import {
	Dialog as DialogComponent,
	DialogContent as DialogContentComponent,
	DialogDescription as DialogDescriptionComponent,
	DialogFooter as DialogFooterComponent,
	DialogHeader as DialogHeaderComponent,
	DialogTitle as DialogTitleComponent,
	DialogTrigger as DialogTriggerComponent,
} from '@/components/ui/dialog';
import { DialogProps } from './Dialog.type';

export const Dialog = ({
	children,
	title,
	description,
	trigger,
	footer,
	open,
	onOpenChange,
	...props
}: DialogProps) => {
	return (
		<DialogComponent open={open} onOpenChange={onOpenChange}>
			{/* Trigger 버튼 */}
			{trigger && <DialogTriggerComponent asChild>{trigger}</DialogTriggerComponent>}

			{/* Dialog Content */}
			<DialogContentComponent {...props}>
				{/* Header 영역 */}
				{(title || description) && (
					<DialogHeaderComponent>
						{title && <DialogTitleComponent>{title}</DialogTitleComponent>}
						{description && <DialogDescriptionComponent>{description}</DialogDescriptionComponent>}
					</DialogHeaderComponent>
				)}

				{/* Content 영역 */}
				{children}

				{/* Footer 영역 */}
				{footer && <DialogFooterComponent>{footer}</DialogFooterComponent>}
			</DialogContentComponent>
		</DialogComponent>
	);
};
