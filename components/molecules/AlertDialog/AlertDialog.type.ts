import React from 'react';

import { AlertDialog as AlertDialogComponent } from '@/components/ui/alert-dialog';

export type AlertDialogProps = React.ComponentProps<typeof AlertDialogComponent> & {
	title?: string;
	description?: string;
	trigger?: React.ReactNode;
	action?: React.ReactNode;
	cancel?: React.ReactNode;
};
