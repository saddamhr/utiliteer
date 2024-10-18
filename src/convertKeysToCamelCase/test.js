import { describe, it, expect } from 'vitest';
import { convertKeysToCamelCase } from './index'; // Adjust the path accordingly

describe('convertKeysToCamelCase', () => {
  it('should convert snake_case keys to camelCase', () => {
    const input = { first_name: 'John', last_name: 'Doe' };
    const expected = { firstName: 'John', lastName: 'Doe' };
    expect(convertKeysToCamelCase(input)).toEqual(expected);
  });

  it('should handle an empty object', () => {
    const input = {};
    const expected = {};
    expect(convertKeysToCamelCase(input)).toEqual(expected);
  });

  it('should handle objects with multiple keys', () => {
    const input = { user_name: 'johndoe', user_email: 'john@example.com' };
    const expected = { userName: 'johndoe', userEmail: 'john@example.com' };
    expect(convertKeysToCamelCase(input)).toEqual(expected);
  });

  it('should handle nested objects correctly', () => {
    const input = {
      first_name: 'John',
      last_name: 'Doe',
      address: {
        street_name: 'Main St',
        city_name: 'Anytown',
      },
    };
    const expected = {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetName: 'Main St',
        cityName: 'Anytown',
      },
    };
    const result = convertKeysToCamelCase(input);
    expect(result).toEqual(expected);
  });
});
