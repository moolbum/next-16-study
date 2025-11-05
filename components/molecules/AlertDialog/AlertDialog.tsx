'use client';

import {
	AlertDialog as AlertDialogComponent,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AlertDialogProps } from './AlertDialog.type';

export const AlertDialog = ({
	title,
	description,
	trigger,
	action,
	cancel,
	open,
	onOpenChange,
	...props
}: AlertDialogProps) => {
	return (
		<AlertDialogComponent open={open} onOpenChange={onOpenChange} {...props}>
			{/* Trigger 버튼 */}
			{trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}

			{/* AlertDialog Content */}
			<AlertDialogContent>
				{/* Header 영역 */}
				{(title || description) && (
					<AlertDialogHeader>
						{title && <AlertDialogTitle>{title}</AlertDialogTitle>}
						{description && <AlertDialogDescription>{description}</AlertDialogDescription>}
					</AlertDialogHeader>
				)}

				{/* Footer 영역 */}
				{(action || cancel) && (
					<AlertDialogFooter>
						{cancel && <AlertDialogCancel asChild>{cancel}</AlertDialogCancel>}
						{action && <AlertDialogAction asChild>{action}</AlertDialogAction>}
					</AlertDialogFooter>
				)}
			</AlertDialogContent>
		</AlertDialogComponent>
	);
};
