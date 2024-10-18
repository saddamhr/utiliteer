import { describe, it, expect } from 'vitest';
import { compact } from './index';

describe('compact', () => {
  it('should remove all falsy values from the array', () => {
    const original = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const result = compact(original);

    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all values are falsy', () => {
    const original = [0, false, '', null, undefined, NaN];
    const result = compact(original);

    expect(result).toEqual([]);
  });

  it('should return the same array if there are no falsy values', () => {
    const original = [1, 2, 3];
    const result = compact(original);

    expect(result).toEqual(original);
  });
});
