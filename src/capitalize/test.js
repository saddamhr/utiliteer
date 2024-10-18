import { describe, it, expect } from 'vitest';
import { capitalize } from './index';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
