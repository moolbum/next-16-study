'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/stores/useTheme/useTheme';
import { Skeleton } from '@/components/atoms';

export const DefaultHeader = () => {
	const { theme, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className="flex items-center justify-end gap-2 w-full h-16 px-4 bg-background border-b">
			{mounted ? (
				theme === 'light' ? (
					<Sun onClick={toggleTheme} className="size-8 cursor-pointer" />
				) : (
					<Moon onClick={toggleTheme} className="size-8 cursor-pointer" />
				)
			) : (
				<Skeleton className="size-8" />
			)}
		</header>
	);
};
