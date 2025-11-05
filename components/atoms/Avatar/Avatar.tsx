import { Avatar as AvatarComponent, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarProps } from './Avatar.type';

export const Avatar = ({ ...props }: AvatarProps) => {
	return (
		<AvatarComponent {...props}>
			<AvatarImage src={props.src || 'https://github.com/shadcn.png'} />
			<AvatarFallback>{props.fallback || 'User'}</AvatarFallback>
		</AvatarComponent>
	);
};
