import { cn } from '@/lib/utils';
import { Skeleton as SkeletonComponent } from '@/components/ui/skeleton';
import { SkeletonProps } from './Skeleton.type';

export const Skeleton = ({ type, className, ...props }: SkeletonProps) => {
	switch (type) {
		case 'card':
			return (
				<div className={cn('flex flex-col space-y-3', className)} {...props}>
					<SkeletonComponent className="h-[125px] w-full rounded-xl" />
					<div className="space-y-2">
						<SkeletonComponent className="h-4 w-[calc(100%-80px)]" />
						<SkeletonComponent className="h-4 w-[calc(100%-120px)]" />
					</div>
				</div>
			);
		case 'profile':
			return (
				<div className={cn('flex items-center space-x-4', className)} {...props}>
					<SkeletonComponent className="h-12 w-12 rounded-full" />
					<div className="space-y-2">
						<SkeletonComponent className="h-4 w-[250px]" />
						<SkeletonComponent className="h-4 w-[200px]" />
					</div>
				</div>
			);

		default:
			return <SkeletonComponent className={cn('rounded-md', className)} {...props} />;
	}
};
