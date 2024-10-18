import { describe, it, expect } from 'vitest';
import { isEmptyObject } from './index';

describe('isEmptyObject', () => {
  it('should return true for an empty object', () => {
    const obj = {};
    expect(isEmptyObject(obj)).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    const obj = { a: 1 };
    expect(isEmptyObject(obj)).toBe(false);
  });

  it('should return true for a deeply empty object with deep option enabled', () => {
    const obj = { a: {} };
    expect(isEmptyObject(obj, { deep: true })).toBe(true);
  });

  it('should return false for a deeply nested object with non-empty values and deep option enabled', () => {
    const obj = { a: { b: 1 } };
    expect(isEmptyObject(obj, { deep: true })).toBe(false);
  });

  it('should return true for an object with null values and deep option enabled', () => {
    const obj = { a: null };
    expect(isEmptyObject(obj, { deep: true })).toBe(true);
  });

  it('should return false for a shallow check on a non-empty nested object', () => {
    const obj = { a: {} };
    expect(isEmptyObject(obj)).toBe(false); // Deep option is not enabled, so it's false
  });

  it('should throw a TypeError for non-object inputs', () => {
    expect(() => isEmptyObject(null)).toThrow(TypeError);
    expect(() => isEmptyObject(42)).toThrow(TypeError);
    expect(() => isEmptyObject('string')).toThrow(TypeError);
  });
});
