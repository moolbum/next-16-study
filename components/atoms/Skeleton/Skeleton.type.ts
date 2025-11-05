import { Skeleton } from '@/components/ui/skeleton';

export type SkeletonProps = {
	type: 'card' | 'profile';
} & React.ComponentProps<typeof Skeleton>;
