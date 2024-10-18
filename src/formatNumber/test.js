import { describe, it, expect } from 'vitest';
import { formatNumber } from './index';

describe('formatNumber', () => {
  it('should format a number with default locale and no decimals', () => {
    const formatted = formatNumber(1000);
    expect(formatted).toBe('1,000');
  });

  it('should format a number with specified decimal places', () => {
    const formatted = formatNumber(1234.5678, { decimals: 2 });
    expect(formatted).toBe('1,234.57');
  });

  it('should format a number without grouping separators', () => {
    const formatted = formatNumber(1000, { useGrouping: false });
    expect(formatted).toBe('1000');
  });

  it('should format a number in a different locale (de-DE)', () => {
    const formatted = formatNumber(1234567.89, {
      locale: 'de-DE',
      decimals: 2,
    });
    expect(formatted).toBe('1.234.567,89'); // German format uses periods for thousands and commas for decimals
  });

  it('should format a number in Bangladesh locale (bn-BD)', () => {
    const formatted = formatNumber(1234567.89, {
      locale: 'bn-BD',
      decimals: 2,
    });
    expect(formatted).toBe('১২,৩৪,৫৬৭.৮৯'); // Follows Indian numbering system with commas
  });

  it('should throw a TypeError if the input is not a number', () => {
    expect(() => formatNumber('1234')).toThrow(TypeError);
  });

  it('should format a number in Indian locale (en-IN)', () => {
    const formatted = formatNumber(1234567.89, {
      locale: 'en-IN',
      decimals: 2,
    });
    expect(formatted).toBe('12,34,567.89'); // Follows Indian numbering system with commas and Arabic numerals
  });
});
