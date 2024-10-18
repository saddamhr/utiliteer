import { describe, it, expect } from 'vitest';
import { cloneDeep } from './index';

describe('cloneDeep', () => {
  it('should create a deep clone of an object', () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b);
  });

  it('should handle arrays correctly', () => {
    const original = [1, [2, 3], { a: 4 }];
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[1]).not.toBe(original[1]);
    expect(copy[2]).not.toBe(original[2]);
  });
});
