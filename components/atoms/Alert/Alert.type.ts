import { Alert as AlertComponent } from '@/components/ui/alert';

export type AlertProps = {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	title?: string;
	description?: string;
} & React.ComponentProps<typeof AlertComponent>;
