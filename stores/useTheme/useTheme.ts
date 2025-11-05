import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

/**
 * @description DOM에 테마 클래스를 추가하거나 제거합니다.
 * @param theme - 테마 타입
 */
const applyThemeToDOM = (theme: Theme) => {
	if (typeof window !== 'undefined') {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}
};

export const useTheme = create<ThemeState>()(
	persist(
		(set) => ({
			theme: 'light',
			/**
			 * @description 테마를 설정합니다.
			 * @param theme - 테마 타입
			 */
			setTheme: (theme: Theme) => {
				set({ theme });
				applyThemeToDOM(theme);
			},
			/**
			 * @description 테마를 토글합니다.
			 */
			toggleTheme: () => {
				set((state) => {
					const newTheme = state.theme === 'light' ? 'dark' : 'light';
					applyThemeToDOM(newTheme);
					return { theme: newTheme };
				});
			},
		}),
		{
			name: 'theme-storage',
			/**
			 * @description 스토리지에서 테마를 불러옵니다.
			 * @param state - 스토리지 상태
			 */
			onRehydrateStorage: () => (state) => {
				if (state?.theme) {
					applyThemeToDOM(state.theme);
				}
			},
		},
	),
);
