import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
	]),
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'react-hooks/set-state-in-effect': 'off',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						// 그룹 1: 그 외 (react, next, 외부 라이브러리)
						[
							'^react',
							'^react-dom',
							'^next',
							'^@/stores',
							'^@/hooks',
							'^@/lib',
							'^@/constants',
							'^',
						],
						// 그룹 2: components와 절대경로
						['^@/components', '^\\.\\./', '^\\./'],
					],
				},
			],
			'simple-import-sort/exports': 'warn',
		},
	},
]);

export default eslintConfig;
