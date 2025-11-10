import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn (className utility)', () => {
	it('여러 클래스를 병합해야 함', () => {
		expect(cn('foo', 'bar')).toBe('foo bar');
	});

	it('조건부 클래스를 처리해야 함', () => {
		expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
		expect(cn('foo', true && 'bar', 'baz')).toBe('foo bar baz');
	});

	it('Tailwind 클래스 충돌을 해결해야 함', () => {
		// tailwind-merge가 동일한 유틸리티 클래스의 충돌을 해결
		expect(cn('p-2', 'p-4')).toBe('p-4');
		expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
	});

	it('객체 형태의 조건부 클래스를 처리해야 함', () => {
		expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
	});

	it('배열 형태의 클래스를 처리해야 함', () => {
		expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
	});
});
