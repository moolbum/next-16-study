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
						/**
						 * 1. react, react-dom, next
						 * 2. 절대경로, 외부 라이브러리
						 * 3. components
						 * 4. stores, hooks, lib, constants, components
						 * 5. 상위 디렉토리
						 * 6. 현재 디렉토리
						 */
						[
							'^react',
							'^react-dom',
							'^next',
							'^',
							'^@/stores',
							'^@/hooks',
							'^@/lib',
							'^@/constants',
							'^@/components',
							'^\\.\\./',
							'^\\./',
						],
					],
				},
			],
			'simple-import-sort/exports': 'warn',
		},
	},
]);

export default eslintConfig;
