import { Alert as AlertComponent, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertProps } from './Alert.type';

export const Alert = ({ icon, title, description, ...props }: AlertProps) => {
	return (
		<AlertComponent {...props}>
			{icon && icon}
			{title && <AlertTitle>{title}</AlertTitle>}
			{description && <AlertDescription>{description}</AlertDescription>}
		</AlertComponent>
	);
};
