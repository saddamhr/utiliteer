import { describe, it, expect } from 'vitest';
import { mergeDeep } from './index';

describe('mergeDeep', () => {
  it('should merge two objects deeply', () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };

    const result = mergeDeep(target, source);

    expect(result).toEqual({
      a: 1,
      b: { x: 1, y: 3, z: 4 },
      c: 5,
    });
  });

  it('should not affect the source object', () => {
    const target = { a: 1 };
    const source = { b: { c: 2 } };

    mergeDeep(target, source);

    expect(source).toEqual({ b: { c: 2 } });
  });

  it('should handle non-object values gracefully', () => {
    const target = { a: 1 };
    const source = { b: 2 };

    const result = mergeDeep(target, source);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should create new nested objects if they do not exist in the target', () => {
    const target = {};
    const source = { a: { b: { c: 1 } } };

    const result = mergeDeep(target, source);

    expect(result).toEqual({ a: { b: { c: 1 } } });
  });
});
